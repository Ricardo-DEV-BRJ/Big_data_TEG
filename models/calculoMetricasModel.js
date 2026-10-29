/**
 * Recálculo de métricas: lee los Parquet del data lake (ventas, inventario, compras,
 * metas) con DuckDB, calcula cada tabla de métricas y reemplaza su contenido en
 * MariaDB (tablas de tablas.sql) en una sola transacción. El front solo lee esas
 * tablas (models/metricasModel.js), así no recorre millones de filas en cada consulta.
 *
 * Pasos:
 *  1. Cada dataset se copia a una tabla temporal de DuckDB (calc_<dataset>) con las
 *     columnas y tipos de FUENTES. Si a un archivo le falta una columna (p. ej. un
 *     reporte con el formato anterior) llega como null; si el dataset no tiene
 *     archivos, la tabla queda vacía y las métricas que dependen de él también.
 *  2. calc_ventas es la vista de ventas utilizables (con sku, fecha y cantidad > 0),
 *     sin duplicados exactos (se conserva una fila por id), más columnas derivadas:
 *     mes, tipo_cliente, valida, costo, saldo y cobrado.
 *  3. Cada entrada de METRICAS es una sentencia fija cuyo resultado se guarda tal
 *     cual en su tabla (los alias del SELECT son las columnas de MariaDB).
 *  4. La previsión de la demanda (promedio móvil y suavizamiento exponencial simple,
 *     con su MAPE) se calcula en JS sobre las unidades mensuales por producto.
 */
const duckdb = require('../config/duckdb');
const db = require('../config/mariadb');
const config = require('../config');
const datalake = require('./datalakeModel');

const FUENTES = {
  ventas: {
    id: 'BIGINT', fecha: 'DATE', fecha_hora: 'TIMESTAMP', cliente: 'VARCHAR', identificacion: 'VARCHAR',
    fecha_alta_cliente: 'DATE', sku: 'VARCHAR', producto: 'VARCHAR', categoria: 'VARCHAR', marca: 'VARCHAR',
    proveedor: 'VARCHAR', precio: 'DOUBLE', costo_unitario: 'DOUBLE', cantidad: 'INTEGER', descuento_pct: 'DOUBLE',
    descuento: 'DOUBLE', base_imponible: 'DOUBLE', iva: 'DOUBLE', total: 'DOUBLE', moneda: 'VARCHAR',
    tasa_cambio: 'DOUBLE', metodo_pago: 'VARCHAR', comision_bancaria: 'DOUBLE', vendedor: 'VARCHAR',
    sucursal: 'VARCHAR', ciudad: 'VARCHAR', estado_geo: 'VARCHAR', condicion_pago: 'VARCHAR',
    fecha_vencimiento: 'DATE', estado: 'VARCHAR', monto_pagado: 'DOUBLE', fecha_pago: 'DATE', tasa_cambio_pago: 'DOUBLE'
  },
  inventario: {
    fecha: 'DATE', sucursal: 'VARCHAR', zona_almacen: 'VARCHAR', sku: 'VARCHAR', producto: 'VARCHAR', categoria: 'VARCHAR',
    perecedero: 'BOOLEAN', vida_util_dias: 'INTEGER', stock_inicial: 'INTEGER', entradas: 'INTEGER', salidas: 'INTEGER', devoluciones: 'INTEGER', stock_final: 'INTEGER',
    costo_unitario: 'DOUBLE', valor_inventario: 'DOUBLE'
  },
  compras: {
    nro_orden: 'VARCHAR', fecha_orden: 'DATE', fecha_esperada: 'DATE', fecha_recepcion: 'DATE', proveedor: 'VARCHAR',
    sucursal: 'VARCHAR', sku: 'VARCHAR', producto: 'VARCHAR', cantidad: 'INTEGER', costo_unitario: 'DOUBLE', total: 'DOUBLE'
  },
  metas: { mes: 'DATE', sucursal: 'VARCHAR', vendedor: 'VARCHAR', meta_ventas: 'DOUBLE' },
  tasas: { fecha: 'DATE', hora: 'VARCHAR', tasa_bcv: 'DOUBLE', tasa_usdt: 'DOUBLE', tasa_eur: 'DOUBLE', fuente: 'VARCHAR' }
};

// Temporada del calendario agrícola andino por mes (dimensión tiempo de la Figura 17).
const TEMPORADA = `CASE
           WHEN month(fecha) IN (4, 5) THEN 'Siembra (entrada de lluvias)'
           WHEN month(fecha) IN (6, 7, 8) THEN 'Fertilización y mantenimiento'
           WHEN month(fecha) IN (9, 10) THEN 'Segundo ciclo de siembra'
           WHEN month(fecha) IN (11, 12, 1) THEN 'Cosecha'
           ELSE 'Preparación de tierras' END`;

const CORTE = '(SELECT corte FROM calc_corte)';

// Un mismo id repetido (p. ej. el reporte subido dos veces) es la misma venta: se
// conserva solo la primera fila para que no se sume dos veces en las métricas.
const VISTA_VENTAS = `
  CREATE OR REPLACE VIEW calc_ventas AS
  SELECT *,
         CAST(date_trunc('month', fecha) AS DATE)                     AS mes,
         CASE upper(left(identificacion, 1))
           WHEN 'V' THEN 'Productor' WHEN 'E' THEN 'Productor'
           WHEN 'J' THEN 'Comercio' WHEN 'G' THEN 'Comercio' ELSE 'Otro' END AS tipo_cliente,
         coalesce(estado NOT IN ('Anulado', 'Devuelto'), true)       AS valida,
         coalesce(costo_unitario, 0) * cantidad                        AS costo,
         if(estado IN ('Pendiente', 'Parcial'), coalesce(total, 0) - coalesce(monto_pagado, 0), 0) AS saldo,
         if(estado IN ('Pagado', 'Parcial'), coalesce(monto_pagado, 0), 0) AS cobrado
    FROM calc_ventas_todo
   WHERE sku IS NOT NULL AND fecha IS NOT NULL AND cantidad > 0
  QUALIFY id IS NULL OR row_number() OVER (PARTITION BY id ORDER BY fecha_hora) = 1`;

// Posible duplicado: otra venta con distinto id pero mismo cliente, producto, cantidad
// y total, registrada el mismo día con pocos minutos de diferencia.
const MINUTOS_POSIBLE_DUPLICADO = 15;
const POSIBLES_DUPLICADOS = `
  SELECT b.id
    FROM calc_ventas a
    JOIN calc_ventas b
      ON b.identificacion = a.identificacion AND b.sku = a.sku AND b.cantidad = a.cantidad
     AND b.total = a.total AND b.fecha = a.fecha AND b.id > a.id
     AND b.fecha_hora BETWEEN a.fecha_hora AND a.fecha_hora + INTERVAL ${MINUTOS_POSIBLE_DUPLICADO} MINUTE`;

// Medidas comunes de las ventas (sobre calc_ventas). Las ventas anuladas y devueltas
// no cuentan como venta; se informan aparte.
const MEDIDAS = `
         sum(if(valida, 1, 0))                                         AS transacciones,
         sum(if(valida, cantidad, 0))                                  AS unidades,
         round(sum(if(valida, precio * cantidad, 0)), 2)               AS venta_bruta,
         round(sum(if(valida, coalesce(descuento, 0), 0)), 2)          AS descuento,
         round(sum(if(valida, base_imponible, 0)), 2)                  AS venta_neta,
         round(sum(if(valida, base_imponible - costo, 0)), 2)          AS margen`;

const METRICAS = [
  {
    tabla: 'ventas_diarias',
    sql: `
      SELECT fecha, sucursal, isodow(fecha) AS dia_semana, ${MEDIDAS},
             round(sum(if(valida, iva, 0)), 2)                                AS iva,
             round(sum(if(valida, total, 0)), 2)                              AS total,
             round(sum(if(valida, costo, 0)), 2)                              AS costo,
             round(sum(cobrado), 2)                                           AS cobrado,
             round(sum(saldo), 2)                                             AS pendiente,
             sum(if(valida AND condicion_pago = 'Crédito', 1, 0))             AS ventas_credito,
             sum(if(estado = 'Anulado', 1, 0))                                AS anuladas,
             round(sum(if(estado = 'Anulado', total, 0)), 2)                  AS monto_anulado,
             sum(if(estado = 'Devuelto', 1, 0))                               AS devoluciones,
             round(sum(if(estado = 'Devuelto', total, 0)), 2)                 AS monto_devuelto,
             round(sum(if(estado <> 'Anulado', coalesce(comision_bancaria, 0), 0)), 2) AS comision_bancaria,
             round(sum(if(valida AND moneda = 'USD', total, 0)), 2)           AS total_usd,
             round(sum(if(valida AND moneda = 'VES', total, 0)), 2)           AS total_ves,
             round(sum(if(valida AND moneda = 'VES', total * tasa_cambio, 0)), 2) AS total_bs
        FROM calc_ventas
       WHERE sucursal IS NOT NULL
       GROUP BY fecha, sucursal`
  },
  {
    tabla: 'ventas_horas',
    sql: `
      SELECT sucursal, isodow(fecha) AS dia_semana, hour(fecha_hora) AS hora,
             count(*) AS transacciones, sum(cantidad) AS unidades, round(sum(base_imponible), 2) AS venta_neta
        FROM calc_ventas
       WHERE valida AND sucursal IS NOT NULL AND fecha_hora IS NOT NULL
       GROUP BY ALL`
  },
  {
    tabla: 'productos_mensual',
    sql: `
      SELECT mes, sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
             any_value(marca) AS marca, any_value(proveedor) AS proveedor, ${MEDIDAS},
             round(sum(if(valida, costo, 0)), 2)                    AS costo,
             round(sum(saldo), 2)                                   AS pendiente,
             sum(if(estado = 'Devuelto', 1, 0))                     AS devoluciones,
             sum(if(estado = 'Devuelto', cantidad, 0))              AS unidades_devueltas,
             round(sum(if(estado = 'Devuelto', base_imponible, 0)), 2) AS monto_devuelto
        FROM calc_ventas
       GROUP BY mes, sku`
  },
  {
    // Incluye los productos del inventario que no tuvieron ventas.
    tabla: 'productos_metricas',
    sql: `
      WITH v AS (
        SELECT sku, any_value(producto) AS producto, any_value(categoria) AS categoria, any_value(marca) AS marca,
               any_value(proveedor) AS proveedor, arg_max(precio, fecha) AS precio,
               arg_max(costo_unitario, fecha) AS costo_unitario,
               sum(if(valida, 1, 0)) AS transacciones, sum(if(valida, cantidad, 0)) AS unidades,
               sum(if(valida, base_imponible, 0)) AS venta_neta, sum(if(valida, costo, 0)) AS costo,
               sum(saldo) AS pendiente, sum(if(estado <> 'Anulado', total, 0)) AS emitido,
               sum(if(estado = 'Devuelto', 1, 0)) AS devueltas, sum(if(estado <> 'Anulado', 1, 0)) AS emitidas
          FROM calc_ventas GROUP BY sku
      ), inv AS (
        SELECT sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
               arg_max(costo_unitario, fecha) AS costo_unitario
          FROM calc_inventario WHERE sku IS NOT NULL GROUP BY sku
      ), p AS (
        SELECT coalesce(v.sku, inv.sku) AS sku, coalesce(v.producto, inv.producto) AS producto,
               coalesce(v.categoria, inv.categoria) AS categoria, v.marca, v.proveedor, v.precio,
               coalesce(v.costo_unitario, inv.costo_unitario) AS costo_unitario,
               coalesce(v.transacciones, 0) AS transacciones, coalesce(v.unidades, 0) AS unidades,
               coalesce(v.venta_neta, 0) AS venta_neta, coalesce(v.costo, 0) AS costo,
               coalesce(v.pendiente, 0) AS pendiente, v.emitido, v.devueltas, v.emitidas,
               coalesce(v.transacciones, 0) > 0 AS con_ventas
          FROM v FULL OUTER JOIN inv ON v.sku = inv.sku
      ), r AS (
        SELECT *, venta_neta - costo AS margen,
               100 * venta_neta / nullif(sum(venta_neta) OVER (), 0) AS participacion,
               100 * sum(venta_neta) OVER (ORDER BY venta_neta DESC, sku ROWS UNBOUNDED PRECEDING)
                   / nullif(sum(venta_neta) OVER (), 0) AS acumulado,
               rank() OVER (ORDER BY venta_neta DESC) AS ranking_ingreso,
               rank() OVER (ORDER BY unidades DESC) AS ranking_unidades,
               rank() OVER (ORDER BY venta_neta - costo DESC) AS ranking_margen,
               if(precio IS NULL, NULL, ntile(3) OVER (PARTITION BY precio IS NULL ORDER BY precio)) AS tercil
          FROM p
      )
      SELECT sku, producto, categoria, marca, proveedor, round(precio, 2) AS precio,
             round(costo_unitario, 2) AS costo_unitario,
             CASE tercil WHEN 1 THEN 'Bajo' WHEN 2 THEN 'Medio' WHEN 3 THEN 'Premium' END AS rango_precio,
             transacciones, unidades, round(venta_neta, 2) AS venta_neta, round(costo, 2) AS costo,
             round(margen, 2) AS margen, round(100 * margen / nullif(venta_neta, 0), 2) AS margen_pct,
             round(participacion, 3) AS participacion_pct, round(acumulado, 3) AS acumulado_pct,
             CASE WHEN NOT con_ventas THEN 'C' WHEN acumulado - participacion < 80 THEN 'A'
                  WHEN acumulado - participacion < 95 THEN 'B' ELSE 'C' END AS clase_abc,
             ranking_ingreso, ranking_unidades, ranking_margen,
             round(100 * pendiente / nullif(emitido, 0), 2) AS pct_pendiente,
             round(100 * devueltas / nullif(emitidas, 0), 2) AS tasa_devolucion,
             con_ventas
        FROM r`
  },
  {
    // RFM por quintiles (1-5) y CLV = margen mensual * r / (1 + d - r), con r la retención
    // mensual observada (tope 0,97) y d = 1 % de descuento mensual.
    tabla: 'clientes_metricas',
    sql: `
      WITH base AS (
        SELECT identificacion, arg_max(cliente, fecha) AS cliente, any_value(tipo_cliente) AS tipo_cliente,
               min(fecha_alta_cliente) AS fecha_alta, mode(sucursal) AS sucursal_habitual,
               min(fecha) FILTER (WHERE valida) AS primera_compra, max(fecha) FILTER (WHERE valida) AS ultima_compra,
               sum(if(valida, 1, 0)) AS transacciones, count(DISTINCT mes) FILTER (WHERE valida) AS meses_activos,
               sum(if(valida, cantidad, 0)) AS unidades, sum(if(valida, total, 0)) AS total,
               sum(if(valida, base_imponible, 0)) AS venta_neta, sum(if(valida, base_imponible - costo, 0)) AS margen,
               count(DISTINCT sku) FILTER (WHERE valida) AS productos_distintos,
               count(DISTINCT categoria) FILTER (WHERE valida) AS categorias_distintas,
               sum(cobrado) AS cobrado, sum(saldo) AS pendiente,
               sum(if(saldo > 0 AND coalesce(fecha_vencimiento, fecha) < ${CORTE}, saldo, 0)) AS monto_vencido,
               avg(datediff('day', fecha, fecha_pago)) FILTER (WHERE condicion_pago = 'Crédito' AND estado = 'Pagado') AS dias_cobro,
               count(DISTINCT cliente) AS nombres_distintos
          FROM calc_ventas
         WHERE identificacion IS NOT NULL
         GROUP BY identificacion
        HAVING sum(if(valida, 1, 0)) > 0
      ), actividad AS (
        SELECT DISTINCT identificacion, mes FROM calc_ventas WHERE valida
      ), retencion AS (
        SELECT coalesce(least(0.97, count(b.identificacion) / nullif(count(*), 0)), 0) AS r
          FROM actividad a
          LEFT JOIN actividad b ON b.identificacion = a.identificacion AND b.mes = CAST(a.mes + INTERVAL 1 MONTH AS DATE)
         WHERE a.mes < (SELECT CAST(date_trunc('month', corte) AS DATE) FROM calc_corte)
      ), s AS (
        SELECT *,
               datediff('day', ultima_compra, ${CORTE}) AS recencia_dias,
               -- Quintiles con cume_dist: los empates reciben la misma puntuación.
               greatest(1, ceil(5 * cume_dist() OVER (ORDER BY ultima_compra))) AS r_score,
               greatest(1, ceil(5 * cume_dist() OVER (ORDER BY transacciones))) AS f_score,
               greatest(1, ceil(5 * cume_dist() OVER (ORDER BY venta_neta))) AS m_score,
               rank() OVER (ORDER BY venta_neta DESC) AS ranking,
               100 * venta_neta / nullif(sum(venta_neta) OVER (), 0) AS participacion,
               100 * sum(venta_neta) OVER (ORDER BY venta_neta DESC, identificacion ROWS UNBOUNDED PRECEDING)
                   / nullif(sum(venta_neta) OVER (), 0) AS acumulado,
               margen / (datediff('month', primera_compra, ${CORTE}) + 1) AS margen_mensual
          FROM base
      )
      SELECT identificacion, cliente, tipo_cliente, fecha_alta, sucursal_habitual, primera_compra, ultima_compra,
             recencia_dias, transacciones, meses_activos, unidades, round(total, 2) AS total,
             round(venta_neta, 2) AS venta_neta, round(margen, 2) AS margen,
             round(total / nullif(transacciones, 0), 2) AS ticket_promedio,
             productos_distintos, categorias_distintas, round(cobrado, 2) AS cobrado, round(pendiente, 2) AS pendiente,
             round(100 * pendiente / nullif(cobrado + pendiente, 0), 2) AS pct_pendiente,
             round(monto_vencido, 2) AS monto_vencido, round(dias_cobro, 2) AS dias_cobro_promedio,
             r_score, f_score, m_score,
             CASE WHEN r_score >= 4 AND f_score >= 4 AND m_score >= 4 THEN 'Campeones'
                  WHEN r_score >= 3 AND f_score >= 3 THEN 'Leales'
                  WHEN r_score >= 4 AND f_score <= 2 THEN 'Nuevos o prometedores'
                  WHEN r_score <= 2 AND f_score >= 4 THEN 'En riesgo'
                  WHEN r_score <= 2 AND f_score <= 2 THEN 'Perdidos o inactivos'
                  ELSE 'Necesitan atención' END AS segmento_rfm,
             ranking, round(participacion, 4) AS participacion_pct, round(acumulado, 3) AS acumulado_pct,
             round(margen_mensual * retencion.r / (1 + 0.01 - retencion.r), 2) AS clv_estimado,
             nombres_distintos
        FROM s, retencion`
  },
  {
    tabla: 'clientes_mes',
    sql: `
      SELECT mes, identificacion, any_value(tipo_cliente) AS tipo_cliente, count(*) AS transacciones,
             round(sum(base_imponible), 2) AS venta_neta, round(sum(base_imponible - costo), 2) AS margen
        FROM calc_ventas
       WHERE valida AND identificacion IS NOT NULL
       GROUP BY mes, identificacion`
  },
  {
    tabla: 'segmentos_mensual',
    sql: `
      SELECT mes, tipo_cliente, count(DISTINCT identificacion) FILTER (WHERE valida) AS clientes, ${MEDIDAS},
             round(sum(if(valida, total, 0)), 2)                                        AS total,
             round(sum(cobrado), 2)                                                     AS cobrado,
             round(sum(saldo), 2)                                                       AS pendiente,
             sum(if(valida AND condicion_pago = 'Crédito', 1, 0))                       AS ventas_credito,
             round(sum(if(valida AND condicion_pago = 'Crédito', total, 0)), 2)         AS monto_credito,
             sum(if(condicion_pago = 'Crédito' AND estado = 'Pagado', 1, 0))            AS facturas_cobradas,
             coalesce(sum(if(condicion_pago = 'Crédito' AND estado = 'Pagado', datediff('day', fecha, fecha_pago), 0)), 0) AS dias_cobro_total,
             sum(if(condicion_pago = 'Crédito' AND estado = 'Pagado' AND fecha_pago > fecha_vencimiento, 1, 0)) AS pagadas_con_atraso,
             round(sum(if(saldo > 0 AND coalesce(fecha_vencimiento, fecha) < ${CORTE}, saldo, 0)), 2) AS monto_vencido
        FROM calc_ventas
       GROUP BY mes, tipo_cliente`
  },
  {
    tabla: 'cuentas_por_cobrar',
    sql: `
      WITH p AS (
        SELECT sucursal, tipo_cliente, saldo, datediff('day', coalesce(fecha_vencimiento, fecha), ${CORTE}) AS dias
          FROM calc_ventas WHERE saldo > 0 AND sucursal IS NOT NULL
      )
      SELECT sucursal, tipo_cliente,
             CASE WHEN dias <= 0 THEN 'Por vencer' WHEN dias <= 30 THEN '1-30' WHEN dias <= 60 THEN '31-60'
                  WHEN dias <= 90 THEN '61-90' ELSE 'Más de 90' END AS tramo,
             CASE WHEN dias <= 0 THEN 1 WHEN dias <= 30 THEN 2 WHEN dias <= 60 THEN 3
                  WHEN dias <= 90 THEN 4 ELSE 5 END AS orden_tramo,
             count(*) AS facturas, round(sum(saldo), 2) AS monto
        FROM p
       GROUP BY ALL`
  },
  {
    tabla: 'flujo_proyectado',
    sql: `
      SELECT CAST(date_trunc('week', fecha_vencimiento) AS DATE) AS semana, sucursal,
             count(*) AS facturas, round(sum(saldo), 2) AS monto
        FROM calc_ventas
       WHERE saldo > 0 AND fecha_vencimiento >= ${CORTE} AND sucursal IS NOT NULL
       GROUP BY ALL`
  },
  {
    tabla: 'vendedores_mensual',
    sql: `
      SELECT mes, sucursal, vendedor,
             sum(if(valida, 1, 0)) AS transacciones, sum(if(valida, cantidad, 0)) AS unidades,
             count(DISTINCT identificacion) FILTER (WHERE valida) AS clientes,
             round(sum(if(valida, base_imponible, 0)), 2) AS venta_neta,
             round(sum(if(valida, base_imponible - costo, 0)), 2) AS margen,
             round(sum(if(valida, coalesce(descuento, 0), 0)), 2) AS descuento,
             round(sum(cobrado), 2) AS cobrado, round(sum(saldo), 2) AS pendiente,
             sum(if(estado = 'Devuelto', 1, 0)) AS devoluciones,
             round(sum(if(valida, cobrado * base_imponible / nullif(total, 0), 0)) * $comision / 100, 2) AS comision
        FROM calc_ventas
       WHERE vendedor IS NOT NULL AND sucursal IS NOT NULL
       GROUP BY mes, sucursal, vendedor`,
    parametros: () => ({ comision: config.metricas.comisionVendedor })
  },
  {
    tabla: 'sucursales',
    sql: `
      SELECT sucursal, any_value(ciudad) AS ciudad, any_value(estado_geo) AS estado_geo
        FROM calc_ventas WHERE sucursal IS NOT NULL GROUP BY sucursal`
  },
  {
    tabla: 'metas',
    sql: `
      SELECT CAST(date_trunc('month', mes) AS DATE) AS mes, sucursal, vendedor, round(sum(meta_ventas), 2) AS meta_ventas
        FROM calc_metas
       WHERE mes IS NOT NULL AND sucursal IS NOT NULL AND vendedor IS NOT NULL
       GROUP BY ALL`
  },
  {
    tabla: 'pagos_mensual',
    sql: `
      SELECT mes, metodo_pago, any_value(moneda) AS moneda,
             sum(if(valida, 1, 0)) AS transacciones,
             round(sum(if(valida, total, 0)), 2) AS total,
             round(sum(if(valida, total * coalesce(tasa_cambio, 0), 0)), 2) AS total_bs,
             round(sum(if(estado <> 'Anulado', coalesce(comision_bancaria, 0), 0)), 2) AS comision_bancaria,
             round(sum(if(valida AND moneda = 'VES' AND tasa_cambio_pago > tasa_cambio,
                          cobrado * (1 - tasa_cambio / tasa_cambio_pago), 0)), 2) AS perdida_cambiaria,
             round(avg(tasa_cambio), 4) AS tasa_promedio
        FROM calc_ventas
       WHERE metodo_pago IS NOT NULL
       GROUP BY mes, metodo_pago`
  },
  {
    tabla: 'tasa_cambio_diaria',
    sql: `
      SELECT fecha, round(avg(tasa_cambio), 4) AS tasa
        FROM calc_ventas WHERE tasa_cambio IS NOT NULL GROUP BY fecha`
  },
  {
    tabla: 'descuentos_mensual',
    sql: `
      SELECT mes, tipo_cliente, coalesce(descuento_pct, 0) AS descuento_pct, ${MEDIDAS}
        FROM calc_ventas
       WHERE valida
       GROUP BY ALL`
  },
  {
    // Venta perdida estimada = días sin existencia * venta diaria de los días con existencia.
    tabla: 'inventario_metricas',
    sql: `
      WITH i AS (
        SELECT sucursal, sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
               arg_max(stock_final, fecha) AS stock_actual, avg(stock_final) AS stock_promedio,
               arg_max(valor_inventario, fecha) AS valor_actual, avg(valor_inventario) AS valor_promedio,
               sum(salidas - devoluciones) AS unidades_vendidas,
               sum((salidas - devoluciones) * costo_unitario) AS costo_vendido,
               count(*) AS dias_registrados, sum(if(stock_final <= 0, 1, 0)) AS dias_quiebre,
               sum(if(stock_final > 0, salidas - devoluciones, 0)) / nullif(sum(if(stock_final > 0, 1, 0)), 0) AS venta_diaria
          FROM calc_inventario
         WHERE sku IS NOT NULL AND sucursal IS NOT NULL
         GROUP BY sucursal, sku
      ), precio AS (
        SELECT sucursal, sku, sum(base_imponible) / nullif(sum(cantidad), 0) AS precio_neto
          FROM calc_ventas WHERE valida GROUP BY ALL
      )
      SELECT i.sucursal, i.sku, i.producto, i.categoria, i.stock_actual, round(i.stock_promedio, 2) AS stock_promedio,
             round(i.valor_actual, 2) AS valor_inventario_actual, round(i.valor_promedio, 2) AS valor_inventario_promedio,
             i.unidades_vendidas, round(i.costo_vendido, 2) AS costo_vendido,
             round(i.costo_vendido / nullif(i.valor_promedio, 0), 2) AS rotacion,
             round(i.stock_actual / nullif(i.venta_diaria, 0), 1) AS dias_cobertura,
             i.dias_registrados, i.dias_quiebre, round(i.venta_diaria, 3) AS venta_diaria_promedio,
             round(i.dias_quiebre * coalesce(i.venta_diaria, 0), 1) AS venta_perdida_unidades,
             round(i.dias_quiebre * coalesce(i.venta_diaria, 0) * coalesce(p.precio_neto, 0), 2) AS venta_perdida_usd
        FROM i LEFT JOIN precio p ON p.sucursal = i.sucursal AND p.sku = i.sku`
  },
  {
    tabla: 'inventario_mensual',
    sql: `
      WITH d AS (
        SELECT CAST(date_trunc('month', fecha) AS DATE) AS mes, sucursal, fecha,
               sum(valor_inventario) AS valor, sum(entradas) AS entradas, sum(salidas - devoluciones) AS salidas,
               sum(if(stock_final <= 0, 1, 0)) AS quiebres
          FROM calc_inventario WHERE sucursal IS NOT NULL AND fecha IS NOT NULL GROUP BY ALL
      ), q AS (
        SELECT CAST(date_trunc('month', fecha) AS DATE) AS mes, sucursal,
               count(DISTINCT sku) FILTER (WHERE stock_final <= 0) AS productos_con_quiebre
          FROM calc_inventario WHERE sucursal IS NOT NULL AND fecha IS NOT NULL GROUP BY ALL
      )
      SELECT d.mes, d.sucursal, round(avg(d.valor), 2) AS valor_inventario_promedio,
             round(arg_max(d.valor, d.fecha), 2) AS valor_inventario_cierre,
             sum(d.entradas) AS entradas, sum(d.salidas) AS salidas, sum(d.quiebres) AS dias_quiebre,
             any_value(q.productos_con_quiebre) AS productos_con_quiebre
        FROM d JOIN q ON q.mes = d.mes AND q.sucursal = d.sucursal
       GROUP BY d.mes, d.sucursal`
  },
  {
    tabla: 'proveedores_metricas',
    sql: `
      WITH c AS (
        SELECT proveedor, count(*) AS ordenes, count(fecha_recepcion) AS recibidas,
               sum(cantidad) AS unidades, sum(total) AS monto,
               avg(datediff('day', fecha_orden, fecha_recepcion)) AS dias_entrega,
               sum(if(fecha_recepcion > fecha_esperada, 1, 0)) AS tarde,
               avg(datediff('day', fecha_esperada, fecha_recepcion)) FILTER (WHERE fecha_recepcion > fecha_esperada) AS retraso
          FROM calc_compras WHERE proveedor IS NOT NULL GROUP BY proveedor
      ), v AS (
        SELECT proveedor, count(DISTINCT sku) AS productos, sum(if(valida, base_imponible, 0)) AS venta_neta,
               sum(if(valida, base_imponible - costo, 0)) AS margen
          FROM calc_ventas WHERE proveedor IS NOT NULL GROUP BY proveedor
      )
      SELECT coalesce(c.proveedor, v.proveedor) AS proveedor, coalesce(v.productos, 0) AS productos,
             coalesce(c.ordenes, 0) AS ordenes, coalesce(c.recibidas, 0) AS ordenes_recibidas,
             coalesce(c.ordenes - c.recibidas, 0) AS ordenes_en_transito,
             coalesce(c.unidades, 0) AS unidades_compradas, round(coalesce(c.monto, 0), 2) AS monto_comprado,
             round(c.monto / nullif(c.unidades, 0), 2) AS costo_promedio_unitario,
             round(c.dias_entrega, 2) AS dias_entrega_promedio, coalesce(c.tarde, 0) AS entregas_tarde,
             round(100 * c.tarde / nullif(c.recibidas, 0), 2) AS pct_entregas_tarde,
             round(c.retraso, 2) AS dias_retraso_promedio,
             round(coalesce(v.venta_neta, 0), 2) AS venta_neta, round(coalesce(v.margen, 0), 2) AS margen,
             round(100 * v.margen / nullif(v.venta_neta, 0), 2) AS margen_pct
        FROM c FULL OUTER JOIN v ON v.proveedor = c.proveedor`
  },
  {
    // Fórmula (1): SS = Z * σd * √L      Fórmula (2): ROP = d̄ * L + SS
    // Fórmula (3): IR = unidades vendidas / inventario promedio, en terciles A (alta), M (media), B (baja).
    // d̄ y σd: media y desviación de la demanda diaria neta; L: días promedio entre orden y
    // recepción de las compras del producto (o de todas las compras si el producto no tiene).
    tabla: 'inventario_reposicion',
    sql: `
      WITH d AS (
        SELECT sucursal, sku, fecha, sum(salidas - devoluciones) AS demanda
          FROM calc_inventario WHERE sku IS NOT NULL AND sucursal IS NOT NULL AND fecha IS NOT NULL
         GROUP BY ALL
      ), est AS (
        SELECT sucursal, sku, avg(demanda) AS demanda_diaria, coalesce(stddev_samp(demanda), 0) AS desviacion,
               sum(demanda) AS unidades_vendidas
          FROM d GROUP BY ALL
      ), i AS (
        SELECT sucursal, sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
               any_value(zona_almacen) AS zona_almacen, bool_or(perecedero) AS perecedero,
               max(vida_util_dias) AS vida_util_dias, arg_max(stock_final, fecha) AS stock_actual,
               avg(stock_final) AS stock_promedio
          FROM calc_inventario WHERE sku IS NOT NULL AND sucursal IS NOT NULL
         GROUP BY ALL
      ), lt AS (
        SELECT sucursal, sku, avg(datediff('day', fecha_orden, fecha_recepcion)) AS lead_time
          FROM calc_compras WHERE fecha_recepcion IS NOT NULL AND sku IS NOT NULL GROUP BY ALL
      ), lt_global AS (
        SELECT avg(datediff('day', fecha_orden, fecha_recepcion)) AS lead_time
          FROM calc_compras WHERE fecha_recepcion IS NOT NULL
      ), b AS (
        SELECT i.*, est.demanda_diaria, est.desviacion, est.unidades_vendidas,
               greatest(1, coalesce(lt.lead_time, lt_global.lead_time)) AS lead_time,
               est.unidades_vendidas / nullif(i.stock_promedio, 0) AS indice_rotacion
          FROM i
          JOIN est ON est.sucursal = i.sucursal AND est.sku = i.sku
          LEFT JOIN lt ON lt.sucursal = i.sucursal AND lt.sku = i.sku
          CROSS JOIN lt_global
      ), c AS (
        SELECT *, ceil($z * desviacion * sqrt(lead_time)) AS stock_seguridad,
               ntile(3) OVER (PARTITION BY sucursal ORDER BY coalesce(indice_rotacion, 0) DESC, sku) AS tercil
          FROM b
      )
      SELECT sucursal, sku, producto, categoria, zona_almacen, perecedero, vida_util_dias, stock_actual,
             round(stock_promedio, 2) AS stock_promedio, unidades_vendidas,
             round(indice_rotacion, 2) AS indice_rotacion,
             CASE tercil WHEN 1 THEN 'A' WHEN 2 THEN 'M' ELSE 'B' END AS clase_rotacion,
             round(demanda_diaria, 3) AS demanda_diaria, round(desviacion, 3) AS desviacion_demanda,
             round(lead_time, 1) AS lead_time_dias, stock_seguridad,
             ceil(demanda_diaria * lead_time + stock_seguridad) AS punto_reorden,
             CASE WHEN stock_actual <= 0 THEN 'Agotado'
                  WHEN stock_actual < stock_seguridad THEN 'Bajo stock mínimo'
                  WHEN stock_actual <= ceil(demanda_diaria * lead_time + stock_seguridad) THEN 'Reordenar'
                  ELSE 'Normal' END AS estado_stock
        FROM c`,
    parametros: () => ({ z: config.metricas.nivelServicioZ })
  },
  {
    tabla: 'ventas_posibles_duplicados',
    sql: `
      WITH p AS (${POSIBLES_DUPLICADOS})
      SELECT v.id, v.fecha, v.fecha_hora, v.cliente, v.identificacion, v.sku, v.producto, v.cantidad,
             round(v.total, 2) AS total, v.vendedor, v.sucursal
        FROM calc_ventas v
       WHERE v.id IN (SELECT id FROM p)`
  },
  {
    // Ventas con margen negativo (base imponible menor que el costo) por producto (6.4.4.4).
    tabla: 'alertas_margen',
    sql: `
      SELECT sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
             count(*) AS ventas, sum(cantidad) AS unidades,
             round(sum(base_imponible), 2) AS venta_neta, round(sum(base_imponible - costo), 2) AS margen,
             max(fecha) AS ultima_fecha,
             round(arg_max(precio, fecha), 2) AS precio_actual, round(arg_max(costo_unitario, fecha), 2) AS costo_actual,
             round(max(coalesce(descuento_pct, 0)), 2) AS descuento_maximo
        FROM calc_ventas
       WHERE valida AND base_imponible < costo
       GROUP BY sku`
  },

  // --- Modelo dimensional (Figura 17): dimensiones y hechos con claves lógicas ----------
  {
    tabla: 'dim_tiempo',
    sql: `
      WITH r AS (
        SELECT least((SELECT min(fecha) FROM calc_ventas), coalesce((SELECT min(fecha) FROM calc_inventario), DATE '9999-12-31')) AS desde,
               greatest((SELECT max(fecha) FROM calc_ventas), coalesce((SELECT max(fecha) FROM calc_inventario), DATE '0001-01-01')) AS hasta
      ), d AS (
        SELECT CAST(unnest(generate_series(desde, hasta, INTERVAL 1 DAY)) AS DATE) AS fecha FROM r WHERE desde IS NOT NULL
      )
      SELECT fecha, year(fecha) AS anio, quarter(fecha) AS trimestre, month(fecha) AS mes,
             CAST(date_trunc('month', fecha) AS DATE) AS primer_dia_mes, day(fecha) AS dia,
             isodow(fecha) AS dia_semana, isodow(fecha) >= 6 AS fin_de_semana,
             ${TEMPORADA} AS temporada_agricola
        FROM d`
  },
  {
    tabla: 'dim_producto',
    sql: `
      WITH i AS (
        SELECT sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
               any_value(zona_almacen) AS zona_almacen, bool_or(perecedero) AS perecedero, max(vida_util_dias) AS vida_util_dias
          FROM calc_inventario WHERE sku IS NOT NULL GROUP BY sku
      ), v AS (
        SELECT sku, arg_max(producto, fecha) AS producto, any_value(categoria) AS categoria, any_value(marca) AS marca,
               any_value(proveedor) AS proveedor, arg_max(precio, fecha) AS precio, arg_max(costo_unitario, fecha) AS costo_unitario
          FROM calc_ventas GROUP BY sku
      )
      SELECT coalesce(v.sku, i.sku) AS sku, coalesce(v.producto, i.producto) AS producto,
             coalesce(v.categoria, i.categoria) AS categoria, v.marca, v.proveedor,
             i.zona_almacen, i.perecedero, i.vida_util_dias, round(v.precio, 2) AS precio, round(v.costo_unitario, 2) AS costo_unitario
        FROM v FULL OUTER JOIN i ON i.sku = v.sku`
  },
  {
    tabla: 'dim_cliente',
    sql: `
      SELECT identificacion, arg_max(cliente, fecha) AS cliente, any_value(tipo_cliente) AS tipo_cliente,
             min(fecha_alta_cliente) AS fecha_alta
        FROM calc_ventas WHERE identificacion IS NOT NULL GROUP BY identificacion`
  },
  {
    // Una tasa por día: la última registrada en el reporte de tasas; si ese día no hay
    // reporte, la BCV promedio de las ventas.
    tabla: 'dim_tasa',
    sql: `
      WITH t AS (
        SELECT fecha, max(hora) AS hora, arg_max(tasa_bcv, hora) AS tasa_bcv, arg_max(tasa_usdt, hora) AS tasa_usdt,
               arg_max(tasa_eur, hora) AS tasa_eur, arg_max(fuente, hora) AS fuente
          FROM calc_tasas WHERE fecha IS NOT NULL AND tasa_bcv > 0 GROUP BY fecha
      ), v AS (
        SELECT fecha, avg(tasa_cambio) AS tasa FROM calc_ventas WHERE tasa_cambio > 0 GROUP BY fecha
      )
      SELECT coalesce(t.fecha, v.fecha) AS fecha, t.hora, round(coalesce(t.tasa_bcv, v.tasa), 4) AS tasa_bcv,
             round(t.tasa_usdt, 4) AS tasa_usdt, round(t.tasa_eur, 4) AS tasa_eur,
             coalesce(t.fuente, 'Ventas (promedio BCV)') AS fuente
        FROM t FULL OUTER JOIN v ON v.fecha = t.fecha`
  },
  {
    tabla: 'dim_zona',
    sql: `
      SELECT zona_almacen,
             CASE zona_almacen WHEN 'Cuarto frío' THEN 'Refrigerada' WHEN 'Agroquímicos' THEN 'Controlada (químicos)'
                  WHEN 'Patio' THEN 'Exterior' ELSE 'Seca' END AS tipo,
             count(DISTINCT sku) AS productos
        FROM calc_inventario WHERE zona_almacen IS NOT NULL GROUP BY zona_almacen`
  },
  {
    tabla: 'hechos_ventas',
    sql: `
      SELECT v.id, v.fecha, v.sku, v.identificacion, p.zona_almacen, v.vendedor, v.metodo_pago, v.moneda,
             v.condicion_pago, v.estado, v.valida, v.cantidad, round(v.precio, 2) AS precio,
             round(coalesce(v.descuento, 0), 2) AS descuento, round(v.base_imponible, 2) AS base_imponible,
             round(v.iva, 2) AS iva, round(v.total, 2) AS total, round(v.costo, 2) AS costo,
             round(v.base_imponible - v.costo, 2) AS margen, v.tasa_cambio
        FROM calc_ventas v
        LEFT JOIN (SELECT sku, any_value(zona_almacen) AS zona_almacen FROM calc_inventario GROUP BY sku) p ON p.sku = v.sku
       WHERE v.id IS NOT NULL`
  },
  {
    tabla: 'hechos_inventario',
    sql: `
      SELECT fecha, sku, any_value(zona_almacen) AS zona_almacen, sum(stock_inicial) AS stock_inicial,
             sum(entradas) AS entradas, sum(salidas) AS salidas, sum(devoluciones) AS devoluciones,
             sum(stock_final) AS stock_final, round(avg(costo_unitario), 2) AS costo_unitario,
             round(sum(valor_inventario), 2) AS valor_inventario
        FROM calc_inventario
       WHERE fecha IS NOT NULL AND sku IS NOT NULL
       GROUP BY fecha, sku`
  },
  {
    tabla: 'productos_top',
    sql: `
      SELECT producto AS nombre, sum(cantidad) AS cantidad
        FROM calc_ventas WHERE valida
       GROUP BY producto ORDER BY cantidad DESC LIMIT 20`
  }
];

// Reglas de calidad: "condicion" cuenta las filas que la cumplen; "conteo" es una
// expresión propia (p. ej. duplicados) que se evalúa sobre la tabla del dataset.
const CALIDAD = {
  ventas: [
    { regla: 'formato_anterior', descripcion: 'Filas sin sku (formato anterior del reporte); no entran en las métricas', condicion: 'sku IS NULL' },
    { regla: 'fecha_invalida', descripcion: 'Fecha vacía o inválida', condicion: 'fecha IS NULL' },
    { regla: 'cantidad_no_positiva', descripcion: 'Cantidad vacía, cero o negativa', condicion: 'coalesce(cantidad, 0) <= 0' },
    { regla: 'precio_no_positivo', descripcion: 'Precio vacío, cero o negativo', condicion: 'coalesce(precio, 0) <= 0' },
    { regla: 'costo_mayor_precio', descripcion: 'El costo unitario supera el precio de venta', condicion: 'costo_unitario > precio' },
    { regla: 'base_inconsistente', descripcion: 'Base imponible distinta de precio * cantidad - descuento', condicion: 'abs(precio * cantidad - coalesce(descuento, 0) - base_imponible) > 0.05' },
    { regla: 'iva_inconsistente', descripcion: 'IVA distinto del 16 % de la base imponible', condicion: 'abs(iva - base_imponible * 0.16) > 0.05' },
    { regla: 'total_inconsistente', descripcion: 'Total distinto de base imponible + IVA', condicion: 'abs(base_imponible + iva - total) > 0.05' },
    { regla: 'estado_desconocido', descripcion: 'Estado distinto de Pagado, Pendiente, Parcial, Anulado o Devuelto', condicion: "estado IS NULL OR estado NOT IN ('Pagado', 'Pendiente', 'Parcial', 'Anulado', 'Devuelto')" },
    { regla: 'pago_sin_fecha', descripcion: 'Venta pagada (total o parcial) sin fecha de pago', condicion: "estado IN ('Pagado', 'Parcial', 'Devuelto') AND fecha_pago IS NULL" },
    { regla: 'pago_antes_de_venta', descripcion: 'Fecha de pago anterior a la fecha de venta', condicion: 'fecha_pago < fecha' },
    { regla: 'pago_mayor_total', descripcion: 'Monto pagado mayor que el total', condicion: 'monto_pagado > total + 0.05' },
    { regla: 'venta_antes_del_alta', descripcion: 'Venta anterior a la fecha de alta del cliente', condicion: 'fecha < fecha_alta_cliente' },
    { regla: 'id_duplicado', descripcion: 'Filas con un id repetido (p. ej. el mismo reporte subido dos veces); se excluyen de las métricas', conteo: 'count(id) - count(DISTINCT id)' },
    { regla: 'posible_duplicado', descripcion: `Ventas con otro id pero mismo cliente, producto, cantidad y total en menos de ${MINUTOS_POSIBLE_DUPLICADO} minutos`, conteo: `(SELECT count(DISTINCT id) FROM (${POSIBLES_DUPLICADOS}))` },
    { regla: 'identificacion_varios_nombres', descripcion: 'Identificaciones registradas con más de un nombre de cliente', conteo: '(SELECT count(*) FROM (SELECT identificacion FROM calc_ventas_todo WHERE identificacion IS NOT NULL GROUP BY 1 HAVING count(DISTINCT cliente) > 1))' }
  ],
  inventario: [
    { regla: 'stock_negativo', descripcion: 'Existencia final negativa', condicion: 'stock_final < 0' },
    { regla: 'stock_inconsistente', descripcion: 'Existencia final distinta de inicial + entradas - salidas + devoluciones', condicion: 'stock_inicial + entradas - salidas + devoluciones <> stock_final' },
    { regla: 'fila_duplicada', descripcion: 'Más de una fila para el mismo día, sucursal y producto', conteo: 'count(*) - (SELECT count(*) FROM (SELECT DISTINCT fecha, sucursal, sku FROM calc_inventario))' }
  ],
  compras: [
    { regla: 'cantidad_no_positiva', descripcion: 'Cantidad vacía, cero o negativa', condicion: 'coalesce(cantidad, 0) <= 0' },
    { regla: 'recepcion_antes_de_orden', descripcion: 'Fecha de recepción anterior a la fecha de la orden', condicion: 'fecha_recepcion < fecha_orden' },
    { regla: 'total_inconsistente', descripcion: 'Total distinto de cantidad * costo unitario', condicion: 'abs(cantidad * costo_unitario - total) > 0.05' },
    { regla: 'orden_duplicada', descripcion: 'Filas con un número de orden repetido', conteo: 'count(nro_orden) - count(DISTINCT nro_orden)' }
  ],
  tasas: [
    { regla: 'tasa_no_positiva', descripcion: 'Tasa BCV vacía, cero o negativa', condicion: 'coalesce(tasa_bcv, 0) <= 0' },
    { regla: 'usdt_menor_bcv', descripcion: 'Tasa USDT menor que la BCV (brecha negativa, posible error de captura)', condicion: 'tasa_usdt < tasa_bcv' },
    { regla: 'fecha_invalida', descripcion: 'Fecha vacía o inválida', condicion: 'fecha IS NULL' },
    { regla: 'dias_sin_tasa', descripcion: 'Días con ventas sin tasa en el reporte de tasas', conteo: '(SELECT count(DISTINCT fecha) FROM calc_ventas WHERE fecha NOT IN (SELECT fecha FROM calc_tasas WHERE fecha IS NOT NULL))' }
  ],
  metas: [
    { regla: 'meta_no_positiva', descripcion: 'Meta vacía, cero o negativa', condicion: 'coalesce(meta_ventas, 0) <= 0' },
    { regla: 'vendedor_sin_ventas', descripcion: 'Metas de vendedores sin ventas registradas en ese mes y sucursal', condicion: "NOT EXISTS (SELECT 1 FROM calc_ventas v WHERE v.vendedor = calc_metas.vendedor AND v.sucursal = calc_metas.sucursal AND v.mes = CAST(date_trunc('month', calc_metas.mes) AS DATE))" }
  ]
};

// --- Previsión de la demanda --------------------------------------------------
// Por producto y mes: promedio móvil de VENTANA meses y suavizamiento exponencial simple
// (F[t+1] = α·Y[t] + (1 − α)·F[t], con F[1] = Y[0]). El MAPE de ambos se mide en los
// mismos meses (desde el mes VENTANA) para compararlos; se recomienda el de menor MAPE.
// Holt-Winters requiere al menos doce meses de historia por estacionalidad y queda fuera.

const VENTANA = 3;

function sumarMes(mes, n) {
  const [a, m] = mes.split('-').map(Number);
  const f = new Date(Date.UTC(a, m - 1 + n, 1));
  return f.toISOString().slice(0, 10);
}

function mape(reales, previstos, desde) {
  let suma = 0;
  let n = 0;
  for (let t = desde; t < reales.length; t++) {
    if (reales[t] > 0 && previstos[t] !== null) { suma += Math.abs(reales[t] - previstos[t]) / reales[t]; n++ }
  }
  return n ? Math.round(10000 * suma / n) / 100 : null;
}

const r2 = (v) => (v === null ? null : Math.round(v * 100) / 100);

async function prevision(alfa) {
  // Solo meses completos: el mes del corte entra si el corte es su último día.
  const filas = await duckdb.consultar(`
    SELECT strftime(mes, '%Y-%m-%d') AS mes, sku, any_value(producto) AS producto, any_value(categoria) AS categoria,
           CAST(sum(cantidad) AS DOUBLE) AS unidades
      FROM calc_ventas
     WHERE valida AND mes < (SELECT CAST(date_trunc('month', corte + INTERVAL 1 DAY) AS DATE) FROM calc_corte)
     GROUP BY mes, sku
     ORDER BY sku, mes`);
  if (!filas.length) return { prevision_demanda: [], prevision_metricas: [] };

  const meses = [...new Set(filas.map((f) => f.mes))].sort();
  const todos = [];
  for (let m = meses[0]; m <= meses[meses.length - 1]; m = sumarMes(m, 1)) todos.push(m);
  const siguiente = sumarMes(todos[todos.length - 1], 1);

  const porSku = new Map();
  for (const f of filas) {
    if (!porSku.has(f.sku)) porSku.set(f.sku, { producto: f.producto, categoria: f.categoria, unidades: new Map() });
    porSku.get(f.sku).unidades.set(f.mes, f.unidades);
  }

  const demanda = [];
  const metricas = [];
  for (const [sku, p] of porSku) {
    const y = todos.map((m) => p.unidades.get(m) || 0);
    const pm = y.map((_, t) => (t >= VENTANA ? y.slice(t - VENTANA, t).reduce((a, b) => a + b, 0) / VENTANA : null));
    const ses = [null];
    let nivel = y[0];
    for (let t = 1; t <= y.length; t++) {
      ses.push(nivel);
      if (t < y.length) nivel = alfa * y[t] + (1 - alfa) * nivel;
    }
    const pmSiguiente = y.length >= VENTANA ? y.slice(-VENTANA).reduce((a, b) => a + b, 0) / VENTANA : null;
    const sesSiguiente = ses[y.length];

    todos.forEach((mes, t) => demanda.push({
      mes, sku, producto: p.producto, categoria: p.categoria, unidades_reales: y[t],
      promedio_movil: r2(pm[t]), suavizamiento: r2(ses[t])
    }));
    demanda.push({
      mes: siguiente, sku, producto: p.producto, categoria: p.categoria, unidades_reales: null,
      promedio_movil: r2(pmSiguiente), suavizamiento: r2(sesSiguiente)
    });

    const mapePm = mape(y, pm, VENTANA);
    const mapeSes = mape(y, ses.slice(0, y.length), VENTANA);
    const recomendado = mapePm === null && mapeSes === null ? null
      : mapeSes === null || (mapePm !== null && mapePm < mapeSes) ? 'Promedio móvil' : 'Suavizamiento exponencial';
    metricas.push({
      sku, producto: p.producto, categoria: p.categoria, meses: y.length,
      unidades_ultimo_mes: y[y.length - 1], mape_promedio_movil: mapePm, mape_suavizamiento: mapeSes,
      modelo_recomendado: recomendado, mes_siguiente: siguiente,
      prevision_siguiente: r2(recomendado === 'Promedio móvil' ? pmSiguiente : sesSiguiente)
    });
  }
  return { prevision_demanda: demanda, prevision_metricas: metricas };
}

function identificador(nombre) {
  return '"' + String(nombre).replace(/"/g, '""') + '"';
}

// Copia un dataset a calc_<nombre> con las columnas de FUENTES. Devuelve false si no tiene archivos.
async function cargarFuente(nombre) {
  const columnas = FUENTES[nombre];
  const tabla = 'calc_' + (nombre === 'ventas' ? 'ventas_todo' : nombre);
  const origen = `read_parquet(${duckdb.literal(datalake.patronDataset(config.metricas.datasets[nombre]))}, union_by_name = true)`;
  let existentes;
  try {
    existentes = new Set((await duckdb.consultar(`DESCRIBE SELECT * FROM ${origen}`)).map((c) => c.column_name));
  } catch (err) {
    if (!/No files found/i.test(err.message)) throw err;
    const definicion = Object.entries(columnas).map(([c, t]) => `${identificador(c)} ${t}`).join(', ');
    await duckdb.consultar(`CREATE OR REPLACE TABLE ${tabla} (${definicion})`);
    return false;
  }
  const select = Object.entries(columnas).map(([c, t]) =>
    existentes.has(c) ? `TRY_CAST(${identificador(c)} AS ${t}) AS ${identificador(c)}` : `CAST(NULL AS ${t}) AS ${identificador(c)}`
  ).join(', ');
  await duckdb.consultar(`CREATE OR REPLACE TABLE ${tabla} AS SELECT ${select} FROM ${origen}`);
  return true;
}

async function calidad(nombre, disponible) {
  const dataset = config.metricas.datasets[nombre];
  if (!disponible) {
    return [{ dataset, regla: 'sin_archivos', descripcion: 'El dataset no tiene archivos cargados', filas_afectadas: 0, total_filas: 0 }];
  }
  const tabla = 'calc_' + (nombre === 'ventas' ? 'ventas_todo' : nombre);
  const reglas = CALIDAD[nombre];
  // En ventas, las reglas por fila solo revisan las filas con el formato actual (las
  // del formato anterior ya se cuentan en formato_anterior).
  const condicion = (r) => (nombre === 'ventas' && r.regla !== 'formato_anterior' ? `sku IS NOT NULL AND (${r.condicion})` : r.condicion);
  const expresiones = reglas.map((r, i) =>
    (r.conteo ? r.conteo : `coalesce(sum(if(${condicion(r)}, 1, 0)), 0)`) + ` AS r${i}`
  );
  const [fila] = await duckdb.consultar(`SELECT count(*) AS total, ${expresiones.join(', ')} FROM ${tabla}`);
  return reglas.map((r, i) => ({
    dataset, regla: r.regla, descripcion: r.descripcion, filas_afectadas: Number(fila['r' + i]) || 0, total_filas: Number(fila.total)
  }));
}

// Reemplaza el contenido de una tabla de MariaDB por las filas calculadas.
async function reemplazar(conexion, tabla, filas) {
  await conexion.query('DELETE FROM ??', [tabla]);
  if (!filas.length) return;
  const columnas = Object.keys(filas[0]);
  for (let i = 0; i < filas.length; i += 2000) {
    const lote = filas.slice(i, i + 2000).map((f) => columnas.map((c) => f[c]));
    await conexion.query('INSERT INTO ?? (??) VALUES ?', [tabla, columnas, lote]);
  }
}

async function limpiar() {
  await duckdb.consultar('DROP VIEW IF EXISTS calc_ventas');
  for (const t of ['calc_ventas_todo', 'calc_inventario', 'calc_compras', 'calc_metas', 'calc_tasas', 'calc_corte']) {
    await duckdb.consultar(`DROP TABLE IF EXISTS ${t}`);
  }
}

async function calcular() {
  const disponibles = {};
  for (const nombre of Object.keys(FUENTES)) disponibles[nombre] = await cargarFuente(nombre);
  await duckdb.consultar(VISTA_VENTAS);
  await duckdb.consultar('CREATE OR REPLACE TABLE calc_corte AS SELECT max(fecha) AS corte FROM calc_ventas');
  const [{ corte, filas }] = await duckdb.consultar(
    'SELECT (SELECT corte FROM calc_corte) AS corte, (SELECT count(*) FROM calc_ventas) AS filas'
  );

  const resultados = {};
  for (const m of METRICAS) {
    resultados[m.tabla] = await duckdb.consultar(m.sql, m.parametros ? m.parametros() : undefined);
  }
  Object.assign(resultados, await prevision(config.metricas.alfaSuavizamiento));
  resultados.calidad_datos = [];
  for (const nombre of Object.keys(CALIDAD)) {
    resultados.calidad_datos.push(...await calidad(nombre, disponibles[nombre]));
  }

  await db.transaccion(async (conexion) => {
    for (const [tabla, filasTabla] of Object.entries(resultados)) await reemplazar(conexion, tabla, filasTabla);
  });

  return {
    fecha_corte: corte,
    filas_ventas: Number(filas),
    datasets: disponibles,
    tablas: Object.fromEntries(Object.entries(resultados).map(([t, f]) => [t, f.length]))
  };
}

let enCurso = null;

async function ejecutarRegistrado() {
  const inicio = Date.now();
  const { insertId } = await db.query("INSERT INTO metricas_ejecuciones (estado) VALUES ('en_curso')");
  try {
    const resultado = await calcular();
    const segundos = ((Date.now() - inicio) / 1000).toFixed(2);
    await db.query(
      "UPDATE metricas_ejecuciones SET fin = CURRENT_TIMESTAMP, segundos = ?, estado = 'ok', fecha_corte = ?, filas_ventas = ?, detalle = ? WHERE id = ?",
      [segundos, resultado.fecha_corte, resultado.filas_ventas, JSON.stringify({ datasets: resultado.datasets, tablas: resultado.tablas }), insertId]
    );
    return { id: insertId, ...resultado, segundos: Number(segundos) };
  } catch (err) {
    await db.query(
      "UPDATE metricas_ejecuciones SET fin = CURRENT_TIMESTAMP, segundos = ?, estado = 'error', detalle = ? WHERE id = ?",
      [((Date.now() - inicio) / 1000).toFixed(2), err.message, insertId]
    ).catch(() => {});
    throw err;
  } finally {
    await limpiar().catch((err) => console.error('[metricas] no se pudieron borrar las tablas temporales:', err.message));
  }
}

/**
 * Recalcula todas las tablas de métricas. Si ya hay un recálculo corriendo, falla con 409.
 * @returns {Promise<{id, fecha_corte, filas_ventas, datasets, tablas, segundos}>}
 */
function recalcular() {
  if (enCurso) {
    const err = new Error('Ya hay un recálculo de métricas en curso');
    err.status = 409;
    return Promise.reject(err);
  }
  // Se marca en curso antes de cualquier await para que dos llamadas seguidas no corran a la vez.
  enCurso = ejecutarRegistrado().finally(() => { enCurso = null; });
  return enCurso;
}

module.exports = { recalcular };
