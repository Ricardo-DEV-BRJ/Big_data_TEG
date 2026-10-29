/**
 * Consultas de métricas para el front. Solo lee las tablas de MariaDB que llena
 * models/calculoMetricasModel.js (ver tablas.sql); nunca recorre los Parquet.
 *
 * Los filtros llegan ya validados desde el controlador:
 *   desde, hasta   AAAA-MM-DD. En tablas mensuales se toman los meses que tocan el rango.
 *   sucursal, tipo (tipo_cliente), categoria, marca, segmento, proveedor   igualdad exacta
 *   limite, orden  orden es una clave de una lista fija (nunca SQL del cliente)
 * Los porcentajes y promedios se calculan aquí a partir de las medidas sumables.
 */
const db = require('../config/mariadb')
const config = require('../config')
const calculo = require('./calculoMetricasModel')
const tasas = require('./tasasModel')

// Columna de cada filtro de igualdad.
const IGUALDAD = {
  sucursal: 'sucursal',
  tipo: 'tipo_cliente',
  categoria: 'categoria',
  marca: 'marca',
  segmento: 'segmento_rfm',
  proveedor: 'proveedor'
}

/**
 * Arma el WHERE con los filtros presentes.
 * @param {object} f         filtros validados
 * @param {object} opciones  fecha: columna DATE diaria | mes: columna DATE mensual |
 *                           campos: filtros de igualdad que aplican a la tabla | prefijo: alias de la tabla
 */
function donde(f, { fecha, mes, campos = [], prefijo = '' } = {}, extra = []) {
  const condiciones = [...extra]
  const params = []
  const col = (c) => prefijo + c
  if (fecha && f.desde) { condiciones.push(`${col(fecha)} >= ?`); params.push(f.desde) }
  if (fecha && f.hasta) { condiciones.push(`${col(fecha)} <= ?`); params.push(f.hasta) }
  if (mes && f.desde) { condiciones.push(`${col(mes)} >= DATE_FORMAT(?, '%Y-%m-01')`); params.push(f.desde) }
  if (mes && f.hasta) { condiciones.push(`${col(mes)} <= ?`); params.push(f.hasta) }
  for (const campo of campos) {
    if (f[campo]) { condiciones.push(`${col(IGUALDAD[campo])} = ?`); params.push(f[campo]) }
  }
  return { sql: condiciones.length ? 'WHERE ' + condiciones.join(' AND ') : '', params }
}

// Medidas de ventas_diarias / vendedores sumadas y sus indicadores derivados.
const KPI_VENTAS = `
  SUM(transacciones)                                                   AS transacciones,
  SUM(unidades)                                                        AS unidades,
  SUM(venta_bruta)                                                     AS venta_bruta,
  SUM(descuento)                                                       AS descuento,
  SUM(venta_neta)                                                      AS venta_neta,
  SUM(iva)                                                             AS iva,
  SUM(total)                                                           AS total,
  SUM(costo)                                                           AS costo,
  SUM(margen)                                                          AS margen,
  ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2)             AS margen_pct,
  ROUND(SUM(total) / NULLIF(SUM(transacciones), 0), 2)                 AS ticket_promedio,
  ROUND(SUM(unidades) / NULLIF(SUM(transacciones), 0), 2)              AS unidades_por_venta,
  ROUND(SUM(venta_neta) / NULLIF(SUM(unidades), 0), 2)                 AS precio_promedio_ponderado,
  ROUND(100 * SUM(descuento) / NULLIF(SUM(venta_bruta), 0), 2)         AS descuento_pct`

class metricasModel {

  // --- General -------------------------------------------------------------

  async productosTop() {
    const sql = 'SELECT * FROM productos_top ORDER BY cantidad DESC'
    const result = await db.query(sql)
    return { data: result, mensaje: 'Consultado con exito' }
  }

  recalcular() {
    return calculo.recalcular()
  }

  async estado() {
    const ejecuciones = await db.query('SELECT * FROM metricas_ejecuciones ORDER BY id DESC LIMIT 10')
    const [ultima] = await db.query("SELECT * FROM metricas_ejecuciones WHERE estado = 'ok' ORDER BY id DESC LIMIT 1")
    return { ultima_exitosa: ultima || null, ejecuciones }
  }

  // Valores para los selectores del front.
  async opciones() {
    const [rango] = await db.query('SELECT MIN(fecha) AS desde, MAX(fecha) AS hasta FROM ventas_diarias')
    const columna = (sql) => db.query(sql).then((filas) => filas.map((f) => Object.values(f)[0]))
    return {
      rango_fechas: rango,
      sucursales: await db.query('SELECT sucursal, ciudad, estado_geo FROM sucursales ORDER BY sucursal'),
      categorias: await columna('SELECT DISTINCT categoria FROM productos_metricas WHERE categoria IS NOT NULL ORDER BY 1'),
      marcas: await columna('SELECT DISTINCT marca FROM productos_metricas WHERE marca IS NOT NULL ORDER BY 1'),
      proveedores: await columna('SELECT proveedor FROM proveedores_metricas ORDER BY 1'),
      vendedores: await db.query('SELECT DISTINCT sucursal, vendedor FROM vendedores_mensual ORDER BY sucursal, vendedor'),
      tipos_cliente: await columna('SELECT DISTINCT tipo_cliente FROM segmentos_mensual ORDER BY 1'),
      segmentos_rfm: await columna('SELECT DISTINCT segmento_rfm FROM clientes_metricas WHERE segmento_rfm IS NOT NULL ORDER BY 1'),
      metodos_pago: await columna('SELECT DISTINCT metodo_pago FROM pagos_mensual ORDER BY 1'),
      // Tasa vigente para el selector de moneda del front (los montos de la API están en USD).
      tasa_vigente: (await tasas.vigente()).tasa
    }
  }

  // --- Ventas e ingresos ---------------------------------------------------

  async resumen(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    const [kpi] = await db.query(`
      SELECT MIN(fecha) AS desde, MAX(fecha) AS hasta, COUNT(DISTINCT fecha) AS dias, ${KPI_VENTAS},
             SUM(cobrado)                                                     AS cobrado,
             SUM(pendiente)                                                   AS por_cobrar,
             ROUND(100 * SUM(cobrado) / NULLIF(SUM(cobrado) + SUM(pendiente), 0), 2) AS tasa_cobro_pct,
             SUM(ventas_credito)                                              AS ventas_credito,
             SUM(anuladas)                                                    AS anuladas,
             SUM(monto_anulado)                                               AS monto_anulado,
             SUM(devoluciones)                                                AS devoluciones,
             SUM(monto_devuelto)                                              AS monto_devuelto,
             ROUND(100 * SUM(devoluciones) / NULLIF(SUM(transacciones) + SUM(devoluciones), 0), 2) AS tasa_devolucion_pct,
             SUM(comision_bancaria)                                           AS comision_bancaria,
             SUM(total_usd)                                                   AS total_usd,
             SUM(total_ves)                                                   AS total_ves,
             ROUND(100 * SUM(total_usd) / NULLIF(SUM(total), 0), 2)           AS pct_usd,
             ROUND(SUM(venta_neta) / NULLIF(COUNT(DISTINCT fecha), 0), 2)     AS venta_neta_diaria
        FROM ventas_diarias ${w.sql}`, w.params)
    // Los clientes únicos se cuentan por mes (clientes_mes no distingue sucursal).
    const wc = donde(f, { mes: 'mes' })
    const [clientes] = await db.query(
      `SELECT COUNT(DISTINCT identificacion) AS clientes_unicos FROM clientes_mes ${wc.sql}`, wc.params)
    const [corte] = await db.query("SELECT fecha_corte, fin AS calculado_en FROM metricas_ejecuciones WHERE estado = 'ok' ORDER BY id DESC LIMIT 1")
    return { ...kpi, clientes_unicos: clientes.clientes_unicos, ...(corte || {}) }
  }

  ventasDiarias(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    return db.query(`
      SELECT fecha, MAX(dia_semana) AS dia_semana, ${KPI_VENTAS},
             SUM(cobrado) AS cobrado, SUM(pendiente) AS pendiente,
             SUM(SUM(venta_neta)) OVER (PARTITION BY DATE_FORMAT(fecha, '%Y-%m') ORDER BY fecha) AS acumulado_mes,
             ROUND(100 * (SUM(venta_neta) / NULLIF(LAG(SUM(venta_neta)) OVER (ORDER BY fecha), 0) - 1), 2) AS crecimiento_pct
        FROM ventas_diarias ${w.sql}
       GROUP BY fecha
       ORDER BY fecha`, w.params)
  }

  // Semana = lunes de cada semana; crecimiento contra la semana anterior.
  ventasSemanales(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    return db.query(`
      SELECT t.*, ROUND(100 * (venta_neta / NULLIF(LAG(venta_neta) OVER (ORDER BY semana), 0) - 1), 2) AS crecimiento_pct
        FROM (SELECT DATE_SUB(fecha, INTERVAL WEEKDAY(fecha) DAY) AS semana, COUNT(DISTINCT fecha) AS dias, ${KPI_VENTAS}
                FROM ventas_diarias ${w.sql}
               GROUP BY semana) t
       ORDER BY semana`, w.params)
  }

  ventasMensuales(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    return db.query(`
      SELECT t.*, ROUND(100 * (venta_neta / NULLIF(LAG(venta_neta) OVER (ORDER BY mes), 0) - 1), 2) AS crecimiento_pct
        FROM (SELECT DATE_FORMAT(fecha, '%Y-%m-01') AS mes, COUNT(DISTINCT fecha) AS dias, ${KPI_VENTAS},
                     SUM(cobrado) AS cobrado, SUM(pendiente) AS pendiente,
                     SUM(devoluciones) AS devoluciones, SUM(anuladas) AS anuladas
                FROM ventas_diarias ${w.sql}
               GROUP BY mes) t
       ORDER BY mes`, w.params)
  }

  // Promedio por día de la semana (1 lunes .. 7 domingo).
  ventasDiaSemana(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    return db.query(`
      SELECT dia_semana, COUNT(DISTINCT fecha) AS dias, SUM(transacciones) AS transacciones, SUM(venta_neta) AS venta_neta,
             ROUND(SUM(venta_neta) / NULLIF(COUNT(DISTINCT fecha), 0), 2) AS venta_neta_promedio_dia,
             ROUND(SUM(transacciones) / NULLIF(COUNT(DISTINCT fecha), 0), 1) AS transacciones_promedio_dia,
             ROUND(SUM(total) / NULLIF(SUM(transacciones), 0), 2) AS ticket_promedio
        FROM ventas_diarias ${w.sql}
       GROUP BY dia_semana
       ORDER BY dia_semana`, w.params)
  }

  // Días de cobro (1, 15, 16, 30 y último del mes) frente al resto, y primera vs segunda quincena.
  async ventasQuincenas(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    const promedio = `COUNT(DISTINCT fecha) AS dias, SUM(venta_neta) AS venta_neta,
             ROUND(SUM(venta_neta) / NULLIF(COUNT(DISTINCT fecha), 0), 2) AS venta_neta_promedio_dia,
             ROUND(SUM(transacciones) / NULLIF(COUNT(DISTINCT fecha), 0), 1) AS transacciones_promedio_dia`
    const diasDeCobro = await db.query(`
      SELECT IF(DAY(fecha) IN (1, 15, 16, 30) OR fecha = LAST_DAY(fecha), 'Día de cobro', 'Resto del mes') AS grupo, ${promedio}
        FROM ventas_diarias ${w.sql} GROUP BY grupo ORDER BY grupo`, w.params)
    const quincenas = await db.query(`
      SELECT IF(DAY(fecha) <= 15, 'Primera quincena', 'Segunda quincena') AS quincena, ${promedio}
        FROM ventas_diarias ${w.sql} GROUP BY quincena ORDER BY quincena`, w.params)
    return { dias_de_cobro: diasDeCobro, quincenas }
  }

  // Mapa de calor día de semana x hora (todo el período).
  ventasHoras(f) {
    const w = donde(f, { campos: ['sucursal'] })
    return db.query(`
      SELECT dia_semana, hora, SUM(transacciones) AS transacciones, SUM(unidades) AS unidades, SUM(venta_neta) AS venta_neta
        FROM ventas_horas ${w.sql}
       GROUP BY dia_semana, hora
       ORDER BY dia_semana, hora`, w.params)
  }

  // Acumulado del mes, proyección de cierre (promedio diario * días del mes) y comparación con la meta.
  async proyeccion(f) {
    let mes = f.mes
    if (!mes) {
      const [ultimo] = await db.query("SELECT DATE_FORMAT(MAX(fecha), '%Y-%m-01') AS mes FROM ventas_diarias")
      mes = ultimo && ultimo.mes
      if (!mes) return null
    }
    const w = donde(f, { campos: ['sucursal'] }, ['fecha BETWEEN ? AND LAST_DAY(?)'])
    const [real] = await db.query(`
      SELECT MAX(fecha) AS hasta, DAY(LAST_DAY(?)) AS dias_mes, DAY(MAX(fecha)) AS dias_transcurridos,
             SUM(venta_neta) AS venta_neta_acumulada, SUM(margen) AS margen_acumulado
        FROM ventas_diarias ${w.sql}`, [mes, mes, mes, ...w.params])
    const wm = donde(f, { campos: ['sucursal'] }, ['mes = ?'])
    const [meta] = await db.query(`SELECT SUM(meta_ventas) AS meta FROM metas ${wm.sql}`, [mes, ...wm.params])
    const wa = donde(f, { campos: ['sucursal'] }, ['fecha BETWEEN DATE_SUB(?, INTERVAL 1 MONTH) AND LAST_DAY(DATE_SUB(?, INTERVAL 1 MONTH))'])
    const [anterior] = await db.query(`SELECT SUM(venta_neta) AS venta_neta FROM ventas_diarias ${wa.sql}`, [mes, mes, ...wa.params])
    const promedio = real.dias_transcurridos ? real.venta_neta_acumulada / real.dias_transcurridos : null
    const proyectada = promedio === null ? null : Math.round(promedio * real.dias_mes * 100) / 100
    const pct = (a, b) => (a !== null && b ? Math.round(10000 * a / b) / 100 : null)
    return {
      mes,
      ...real,
      venta_neta_promedio_dia: promedio === null ? null : Math.round(promedio * 100) / 100,
      venta_neta_proyectada: proyectada,
      meta: meta.meta,
      cumplimiento_actual_pct: pct(real.venta_neta_acumulada, meta.meta),
      cumplimiento_proyectado_pct: pct(proyectada, meta.meta),
      venta_neta_mes_anterior: anterior.venta_neta,
      crecimiento_proyectado_pct: anterior.venta_neta ? Math.round(10000 * (proyectada / anterior.venta_neta - 1)) / 100 : null
    }
  }

  // IVA: base imponible e impuesto por mes.
  fiscal(f) {
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    return db.query(`
      SELECT DATE_FORMAT(fecha, '%Y-%m-01') AS mes, SUM(venta_neta) AS base_imponible, SUM(iva) AS iva, SUM(total) AS total,
             ROUND(100 * SUM(iva) / NULLIF(SUM(venta_neta), 0), 2) AS iva_pct, SUM(transacciones) AS facturas
        FROM ventas_diarias ${w.sql}
       GROUP BY mes ORDER BY mes`, w.params)
  }

  // --- Productos -----------------------------------------------------------

  productos(f) {
    const orden = { ingreso: 'venta_neta', unidades: 'unidades', margen: 'margen', devoluciones: 'devoluciones', pendiente: 'pendiente' }[f.orden || 'ingreso']
    const w = donde(f, { mes: 'mes', campos: ['categoria', 'marca', 'proveedor'] })
    return db.query(`
      SELECT sku, MAX(producto) AS producto, MAX(categoria) AS categoria, MAX(marca) AS marca, MAX(proveedor) AS proveedor,
             SUM(transacciones) AS transacciones, SUM(unidades) AS unidades, SUM(venta_bruta) AS venta_bruta,
             SUM(descuento) AS descuento, SUM(venta_neta) AS venta_neta, SUM(costo) AS costo, SUM(margen) AS margen,
             ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2) AS margen_pct,
             ROUND(100 * SUM(venta_neta) / NULLIF(SUM(SUM(venta_neta)) OVER (), 0), 3) AS participacion_pct,
             SUM(pendiente) AS pendiente, SUM(devoluciones) AS devoluciones, SUM(monto_devuelto) AS monto_devuelto,
             ROUND(100 * SUM(devoluciones) / NULLIF(SUM(transacciones) + SUM(devoluciones), 0), 2) AS tasa_devolucion_pct
        FROM productos_mensual ${w.sql}
       GROUP BY sku
       ORDER BY ${orden} DESC
       LIMIT ?`, [...w.params, f.limite])
  }

  productoMensual(sku) {
    return db.query(`
      SELECT mes, transacciones, unidades, venta_bruta, descuento, venta_neta, costo, margen,
             ROUND(100 * margen / NULLIF(venta_neta, 0), 2) AS margen_pct, pendiente, devoluciones, monto_devuelto,
             ROUND(100 * (venta_neta / NULLIF(LAG(venta_neta) OVER (ORDER BY mes), 0) - 1), 2) AS crecimiento_pct
        FROM productos_mensual WHERE sku = ? ORDER BY mes`, [sku])
  }

  // Pareto / ABC de todo el período.
  async productosAbc(f) {
    const w = donde(f, { campos: ['categoria', 'marca', 'proveedor'] }, ['con_ventas = 1'])
    const resumen = await db.query(`
      SELECT clase_abc, COUNT(*) AS productos, SUM(unidades) AS unidades, SUM(venta_neta) AS venta_neta, SUM(margen) AS margen,
             ROUND(SUM(participacion_pct), 2) AS participacion_pct,
             ROUND(100 * COUNT(*) / NULLIF(SUM(COUNT(*)) OVER (), 0), 2) AS pct_productos
        FROM productos_metricas ${w.sql}
       GROUP BY clase_abc ORDER BY clase_abc`, w.params)
    const productos = await db.query(`
      SELECT sku, producto, categoria, marca, venta_neta, participacion_pct, acumulado_pct, clase_abc, ranking_ingreso
        FROM productos_metricas ${w.sql}
       ORDER BY ranking_ingreso, sku`, w.params)
    return { resumen, productos }
  }

  // Productos del catálogo (inventario) sin ventas en todo el período o en el rango pedido.
  productosSinVentas(f) {
    if (!f.desde && !f.hasta) {
      return db.query(`SELECT sku, producto, categoria, marca, proveedor, precio, costo_unitario
                         FROM productos_metricas WHERE con_ventas = 0 ORDER BY sku`)
    }
    const w = donde(f, { mes: 'mes' }, ['unidades > 0'])
    return db.query(`
      SELECT sku, producto, categoria, marca, proveedor, precio, costo_unitario
        FROM productos_metricas
       WHERE sku NOT IN (SELECT sku FROM productos_mensual ${w.sql})
       ORDER BY sku`, w.params)
  }

  rangosPrecio(f) {
    const w = donde(f, { campos: ['categoria', 'marca', 'proveedor'] }, ['rango_precio IS NOT NULL'])
    return db.query(`
      SELECT rango_precio, COUNT(*) AS productos, MIN(precio) AS precio_minimo, MAX(precio) AS precio_maximo,
             SUM(transacciones) AS transacciones, SUM(unidades) AS unidades, SUM(venta_neta) AS venta_neta, SUM(margen) AS margen,
             ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2) AS margen_pct,
             ROUND(100 * SUM(venta_neta) / NULLIF(SUM(SUM(venta_neta)) OVER (), 0), 2) AS participacion_pct
        FROM productos_metricas ${w.sql}
       GROUP BY rango_precio
       ORDER BY FIELD(rango_precio, 'Bajo', 'Medio', 'Premium')`, w.params)
  }

  // Agrupa productos_mensual por categoría o marca, en total o por mes.
  agrupado(columna, f, porMes) {
    const w = donde(f, { mes: 'mes', campos: ['categoria', 'marca', 'proveedor'] })
    const grupo = porMes ? `mes, ${columna}` : columna
    return db.query(`
      SELECT ${porMes ? 'mes, ' : ''}${columna}, COUNT(DISTINCT sku) AS productos,
             SUM(transacciones) AS transacciones, SUM(unidades) AS unidades, SUM(venta_neta) AS venta_neta,
             SUM(descuento) AS descuento, SUM(margen) AS margen,
             ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2) AS margen_pct,
             ROUND(100 * SUM(venta_neta) / NULLIF(SUM(SUM(venta_neta)) OVER (${porMes ? 'PARTITION BY mes' : ''}), 0), 2) AS participacion_pct,
             SUM(devoluciones) AS devoluciones,
             ROUND(100 * SUM(devoluciones) / NULLIF(SUM(transacciones) + SUM(devoluciones), 0), 2) AS tasa_devolucion_pct
             ${porMes ? `, ROUND(100 * (SUM(venta_neta) / NULLIF(LAG(SUM(venta_neta)) OVER (PARTITION BY ${columna} ORDER BY mes), 0) - 1), 2) AS crecimiento_pct` : ''}
        FROM productos_mensual ${w.sql}
       GROUP BY ${grupo}
       ORDER BY ${porMes ? 'mes, ' : ''}venta_neta DESC`, w.params)
  }

  categorias(f) { return this.agrupado('categoria', f, false) }
  categoriasMensual(f) { return this.agrupado('categoria', f, true) }
  marcas(f) { return this.agrupado('marca', f, false) }
  marcasMensual(f) { return this.agrupado('marca', f, true) }

  async devoluciones(f) {
    const wd = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    const [resumen] = await db.query(`
      SELECT SUM(devoluciones) AS devoluciones, SUM(monto_devuelto) AS monto_devuelto,
             SUM(anuladas) AS anuladas, SUM(monto_anulado) AS monto_anulado,
             ROUND(100 * SUM(devoluciones) / NULLIF(SUM(transacciones) + SUM(devoluciones), 0), 2) AS tasa_devolucion_pct,
             ROUND(100 * SUM(anuladas) / NULLIF(SUM(transacciones) + SUM(devoluciones) + SUM(anuladas), 0), 2) AS tasa_anulacion_pct
        FROM ventas_diarias ${wd.sql}`, wd.params)
    const w = donde(f, { mes: 'mes', campos: ['categoria', 'marca', 'proveedor'] })
    const tasa = 'ROUND(100 * SUM(devoluciones) / NULLIF(SUM(transacciones) + SUM(devoluciones), 0), 2) AS tasa_devolucion_pct'
    const categorias = await db.query(`
      SELECT categoria, SUM(devoluciones) AS devoluciones, SUM(unidades_devueltas) AS unidades_devueltas,
             SUM(monto_devuelto) AS monto_devuelto, ${tasa}
        FROM productos_mensual ${w.sql} GROUP BY categoria ORDER BY tasa_devolucion_pct DESC`, w.params)
    const productos = await db.query(`
      SELECT sku, MAX(producto) AS producto, MAX(categoria) AS categoria, SUM(devoluciones) AS devoluciones,
             SUM(unidades_devueltas) AS unidades_devueltas, SUM(monto_devuelto) AS monto_devuelto, ${tasa}
        FROM productos_mensual ${w.sql} GROUP BY sku ORDER BY monto_devuelto DESC LIMIT ?`, [...w.params, f.limite])
    return { resumen, categorias, productos }
  }

  // --- Clientes ------------------------------------------------------------

  clientes(f) {
    const orden = {
      ingreso: 'venta_neta DESC', margen: 'margen DESC', frecuencia: 'transacciones DESC', pendiente: 'pendiente DESC',
      vencido: 'monto_vencido DESC', recencia: 'recencia_dias DESC', clv: 'clv_estimado DESC'
    }[f.orden || 'ingreso']
    const extra = []
    const params = []
    if (f.buscar) { extra.push('(cliente LIKE ? OR identificacion LIKE ?)'); params.push(`%${f.buscar}%`, `%${f.buscar}%`) }
    const w = donde(f, { campos: ['tipo', 'segmento'] }, extra)
    return db.query(`SELECT * FROM clientes_metricas ${w.sql} ORDER BY ${orden}, identificacion LIMIT ?`,
      [...params, ...w.params, f.limite])
  }

  // Qué % del ingreso dejan los mayores clientes (riesgo de dependencia).
  async clientesConcentracion(f) {
    const w = donde(f, { campos: ['tipo'] })
    const [fila] = await db.query(`
      SELECT COUNT(*) AS clientes, SUM(venta_neta) AS venta_neta,
             ROUND(SUM(IF(ranking <= 10, participacion_pct, 0)), 2) AS top10_pct,
             ROUND(SUM(IF(ranking <= 20, participacion_pct, 0)), 2) AS top20_pct,
             ROUND(SUM(IF(ranking <= 50, participacion_pct, 0)), 2) AS top50_pct,
             ROUND(SUM(IF(ranking <= 100, participacion_pct, 0)), 2) AS top100_pct,
             SUM(IF(acumulado_pct - participacion_pct < 80, 1, 0)) AS clientes_80_pct
        FROM clientes_metricas ${w.sql}`, w.params)
    fila.pct_clientes_80 = fila.clientes ? Math.round(10000 * fila.clientes_80_pct / fila.clientes) / 100 : null
    return fila
  }

  clientesRfm(f) {
    const w = donde(f, { campos: ['tipo'] })
    return db.query(`
      SELECT segmento_rfm, COUNT(*) AS clientes, SUM(venta_neta) AS venta_neta, SUM(margen) AS margen,
             ROUND(100 * SUM(venta_neta) / NULLIF(SUM(SUM(venta_neta)) OVER (), 0), 2) AS participacion_pct,
             ROUND(AVG(recencia_dias), 1) AS recencia_promedio, ROUND(AVG(transacciones), 1) AS frecuencia_promedio,
             ROUND(AVG(venta_neta), 2) AS venta_neta_promedio, ROUND(AVG(clv_estimado), 2) AS clv_promedio
        FROM clientes_metricas ${w.sql}
       GROUP BY segmento_rfm ORDER BY venta_neta DESC`, w.params)
  }

  // Clientes que no han pagado nada de lo que deben (100 % pendiente).
  clientesMorosos(f) {
    const w = donde(f, { campos: ['tipo'] }, ['pendiente > 0', 'pct_pendiente >= 99.99'])
    return db.query(`
      SELECT identificacion, cliente, tipo_cliente, sucursal_habitual, transacciones, total, pendiente, monto_vencido, ultima_compra
        FROM clientes_metricas ${w.sql} ORDER BY pendiente DESC LIMIT ?`, [...w.params, f.limite])
  }

  // Clientes activos por mes, separados en nuevos (alta ese mes) y recurrentes.
  clientesNuevosRecurrentes(f) {
    const w = donde(f, { mes: 'mes', campos: ['tipo'], prefijo: 'm.' })
    return db.query(`
      SELECT m.mes, COUNT(*) AS activos,
             SUM(DATE_FORMAT(c.fecha_alta, '%Y-%m-01') = m.mes) AS nuevos,
             SUM(DATE_FORMAT(c.fecha_alta, '%Y-%m-01') <> m.mes OR c.fecha_alta IS NULL) AS recurrentes,
             SUM(IF(DATE_FORMAT(c.fecha_alta, '%Y-%m-01') = m.mes, m.venta_neta, 0)) AS venta_neta_nuevos,
             SUM(IF(DATE_FORMAT(c.fecha_alta, '%Y-%m-01') = m.mes, 0, m.venta_neta)) AS venta_neta_recurrentes
        FROM clientes_mes m JOIN clientes_metricas c ON c.identificacion = m.identificacion
       ${w.sql}
       GROUP BY m.mes ORDER BY m.mes`, w.params)
  }

  // Retención por cohorte (mes de alta) dentro del período con datos.
  cohortes(f) {
    const w = donde(f, { campos: ['tipo'] })
    const filtroTipo = w.sql ? 'AND c.tipo_cliente = ?' : ''
    return db.query(`
      WITH base AS (
        SELECT c.identificacion, DATE_FORMAT(c.fecha_alta, '%Y-%m-01') AS cohorte
          FROM clientes_metricas c
         WHERE c.fecha_alta >= (SELECT MIN(mes) FROM clientes_mes) ${filtroTipo}
      ), tamano AS (
        SELECT cohorte, COUNT(*) AS clientes_cohorte FROM base GROUP BY cohorte
      )
      SELECT b.cohorte, m.mes, TIMESTAMPDIFF(MONTH, b.cohorte, m.mes) AS meses_desde_alta,
             COUNT(*) AS activos, t.clientes_cohorte,
             ROUND(100 * COUNT(*) / t.clientes_cohorte, 2) AS retencion_pct,
             SUM(m.venta_neta) AS venta_neta
        FROM base b
        JOIN clientes_mes m ON m.identificacion = b.identificacion AND m.mes >= b.cohorte
        JOIN tamano t ON t.cohorte = b.cohorte
       GROUP BY b.cohorte, m.mes, t.clientes_cohorte
       ORDER BY b.cohorte, m.mes`, w.params)
  }

  // Persona natural / Empresa / Extranjero / Gobierno: volumen, margen, morosidad y días de cobro.
  async segmentos(f) {
    const w = donde(f, { mes: 'mes', campos: ['tipo'] })
    const filas = await db.query(`
      SELECT tipo_cliente, SUM(transacciones) AS transacciones, SUM(unidades) AS unidades, SUM(total) AS total,
             SUM(venta_neta) AS venta_neta, SUM(margen) AS margen, SUM(descuento) AS descuento,
             ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2) AS margen_pct,
             ROUND(SUM(total) / NULLIF(SUM(transacciones), 0), 2) AS ticket_promedio,
             ROUND(100 * SUM(venta_neta) / NULLIF(SUM(SUM(venta_neta)) OVER (), 0), 2) AS participacion_pct,
             SUM(cobrado) AS cobrado, SUM(pendiente) AS pendiente, SUM(monto_vencido) AS monto_vencido,
             ROUND(100 * SUM(pendiente) / NULLIF(SUM(cobrado) + SUM(pendiente), 0), 2) AS morosidad_pct,
             ROUND(100 * SUM(ventas_credito) / NULLIF(SUM(transacciones), 0), 2) AS pct_ventas_credito,
             ROUND(SUM(dias_cobro_total) / NULLIF(SUM(facturas_cobradas), 0), 1) AS dias_cobro_promedio,
             ROUND(100 * SUM(pagadas_con_atraso) / NULLIF(SUM(facturas_cobradas), 0), 2) AS pct_pagadas_con_atraso
        FROM segmentos_mensual ${w.sql}
       GROUP BY tipo_cliente ORDER BY venta_neta DESC`, w.params)
    const clientes = await db.query(`
      SELECT tipo_cliente, COUNT(DISTINCT identificacion) AS clientes FROM clientes_mes ${w.sql} GROUP BY tipo_cliente`, w.params)
    const porTipo = Object.fromEntries(clientes.map((c) => [c.tipo_cliente, c.clientes]))
    return filas.map((s) => ({
      ...s,
      clientes: porTipo[s.tipo_cliente] || 0,
      venta_neta_por_cliente: porTipo[s.tipo_cliente] ? Math.round(100 * s.venta_neta / porTipo[s.tipo_cliente]) / 100 : null
    }))
  }

  // --- Cobranza ------------------------------------------------------------

  async cobranzaAntiguedad(f) {
    const w = donde(f, { campos: ['sucursal', 'tipo'] })
    const tramos = await db.query(`
      SELECT tramo, orden_tramo, SUM(facturas) AS facturas, SUM(monto) AS monto,
             ROUND(100 * SUM(monto) / NULLIF(SUM(SUM(monto)) OVER (), 0), 2) AS pct
        FROM cuentas_por_cobrar ${w.sql}
       GROUP BY tramo, orden_tramo ORDER BY orden_tramo`, w.params)
    const porTipo = await db.query(`
      SELECT tipo_cliente, tramo, orden_tramo, SUM(facturas) AS facturas, SUM(monto) AS monto
        FROM cuentas_por_cobrar ${w.sql}
       GROUP BY tipo_cliente, tramo, orden_tramo ORDER BY tipo_cliente, orden_tramo`, w.params)
    const porSucursal = await db.query(`
      SELECT sucursal, SUM(facturas) AS facturas, SUM(monto) AS monto,
             SUM(IF(orden_tramo > 1, monto, 0)) AS monto_vencido
        FROM cuentas_por_cobrar ${w.sql}
       GROUP BY sucursal ORDER BY monto DESC`, w.params)
    return { tramos, por_tipo: porTipo, por_sucursal: porSucursal }
  }

  // Días promedio de cobro de las ventas a crédito y morosidad por mes.
  cobranzaDso(f) {
    const w = donde(f, { mes: 'mes', campos: ['tipo'] })
    return db.query(`
      SELECT mes, SUM(ventas_credito) AS ventas_credito, SUM(monto_credito) AS monto_credito,
             SUM(facturas_cobradas) AS facturas_cobradas,
             ROUND(SUM(dias_cobro_total) / NULLIF(SUM(facturas_cobradas), 0), 1) AS dias_cobro_promedio,
             ROUND(100 * SUM(pagadas_con_atraso) / NULLIF(SUM(facturas_cobradas), 0), 2) AS pct_pagadas_con_atraso,
             SUM(pendiente) AS pendiente, SUM(monto_vencido) AS monto_vencido,
             ROUND(100 * SUM(pendiente) / NULLIF(SUM(cobrado) + SUM(pendiente), 0), 2) AS morosidad_pct
        FROM segmentos_mensual ${w.sql}
       GROUP BY mes ORDER BY mes`, w.params)
  }

  cobranzaFlujo(f) {
    const w = donde(f, { campos: ['sucursal'] })
    return db.query(`
      SELECT semana, SUM(facturas) AS facturas, SUM(monto) AS monto,
             SUM(SUM(monto)) OVER (ORDER BY semana) AS acumulado
        FROM flujo_proyectado ${w.sql}
       GROUP BY semana ORDER BY semana`, w.params)
  }

  // --- Vendedores, sucursales y metas --------------------------------------

  vendedores(f) {
    const w = donde(f, { mes: 'mes', campos: ['sucursal'], prefijo: 'v.' })
    return db.query(`
      SELECT v.sucursal, v.vendedor, SUM(v.transacciones) AS transacciones, SUM(v.unidades) AS unidades,
             SUM(v.venta_neta) AS venta_neta, SUM(v.margen) AS margen, SUM(v.descuento) AS descuento,
             ROUND(100 * SUM(v.margen) / NULLIF(SUM(v.venta_neta), 0), 2) AS margen_pct,
             ROUND(100 * SUM(v.descuento) / NULLIF(SUM(v.venta_neta) + SUM(v.descuento), 0), 2) AS descuento_pct,
             ROUND(SUM(v.venta_neta) / NULLIF(SUM(v.transacciones), 0), 2) AS venta_neta_por_transaccion,
             SUM(v.cobrado) AS cobrado, SUM(v.pendiente) AS pendiente,
             ROUND(100 * SUM(v.cobrado) / NULLIF(SUM(v.cobrado) + SUM(v.pendiente), 0), 2) AS tasa_cobro_pct,
             SUM(v.devoluciones) AS devoluciones, SUM(v.comision) AS comision,
             SUM(m.meta_ventas) AS meta, ROUND(100 * SUM(v.venta_neta) / NULLIF(SUM(m.meta_ventas), 0), 2) AS cumplimiento_pct,
             RANK() OVER (ORDER BY SUM(v.venta_neta) DESC) AS ranking
        FROM vendedores_mensual v
        LEFT JOIN metas m ON m.mes = v.mes AND m.sucursal = v.sucursal AND m.vendedor = v.vendedor
       ${w.sql}
       GROUP BY v.sucursal, v.vendedor
       ORDER BY venta_neta DESC`, w.params)
  }

  async sucursales(f) {
    const w = donde(f, { fecha: 'fecha', prefijo: 'd.' })
    const filas = await db.query(`
      SELECT d.sucursal, s.ciudad, s.estado_geo, ${KPI_VENTAS},
             SUM(cobrado) AS cobrado, SUM(pendiente) AS pendiente,
             ROUND(100 * SUM(venta_neta) / NULLIF(SUM(SUM(venta_neta)) OVER (), 0), 2) AS participacion_pct
        FROM ventas_diarias d LEFT JOIN sucursales s ON s.sucursal = d.sucursal
       ${w.sql}
       GROUP BY d.sucursal, s.ciudad, s.estado_geo
       ORDER BY venta_neta DESC`, w.params)
    const wm = donde(f, { mes: 'mes' })
    const metas = await db.query(`SELECT sucursal, SUM(meta_ventas) AS meta FROM metas ${wm.sql} GROUP BY sucursal`, wm.params)
    const porSucursal = Object.fromEntries(metas.map((m) => [m.sucursal, m.meta]))
    return filas.map((s) => ({
      ...s,
      meta: porSucursal[s.sucursal] || null,
      cumplimiento_pct: porSucursal[s.sucursal] ? Math.round(10000 * s.venta_neta / porSucursal[s.sucursal]) / 100 : null
    }))
  }

  // Meta vs real por mes y vendedor.
  metas(f) {
    const w = donde(f, { mes: 'mes', campos: ['sucursal'], prefijo: 'm.' })
    return db.query(`
      SELECT m.mes, m.sucursal, m.vendedor, m.meta_ventas AS meta, COALESCE(v.venta_neta, 0) AS venta_neta,
             ROUND(100 * COALESCE(v.venta_neta, 0) / NULLIF(m.meta_ventas, 0), 2) AS cumplimiento_pct,
             COALESCE(v.venta_neta, 0) - m.meta_ventas AS diferencia
        FROM metas m
        LEFT JOIN vendedores_mensual v ON v.mes = m.mes AND v.sucursal = m.sucursal AND v.vendedor = m.vendedor
       ${w.sql}
       ORDER BY m.mes, m.sucursal, cumplimiento_pct DESC`, w.params)
  }

  // --- Pagos y monedas -----------------------------------------------------

  pagos(f) {
    const w = donde(f, { mes: 'mes' })
    return db.query(`
      SELECT metodo_pago, MAX(moneda) AS moneda, SUM(transacciones) AS transacciones, SUM(total) AS total,
             ROUND(100 * SUM(total) / NULLIF(SUM(SUM(total)) OVER (), 0), 2) AS participacion_pct,
             ROUND(SUM(total) / NULLIF(SUM(transacciones), 0), 2) AS ticket_promedio,
             SUM(comision_bancaria) AS comision_bancaria,
             ROUND(100 * SUM(comision_bancaria) / NULLIF(SUM(total), 0), 3) AS comision_pct,
             SUM(perdida_cambiaria) AS perdida_cambiaria
        FROM pagos_mensual ${w.sql}
       GROUP BY metodo_pago ORDER BY total DESC`, w.params)
  }

  async monedas(f) {
    const w = donde(f, { mes: 'mes' })
    const porMes = await db.query(`
      SELECT mes, moneda, SUM(transacciones) AS transacciones, SUM(total) AS total, SUM(total_bs) AS total_bs,
             ROUND(100 * SUM(total) / NULLIF(SUM(SUM(total)) OVER (PARTITION BY mes), 0), 2) AS participacion_pct,
             SUM(perdida_cambiaria) AS perdida_cambiaria
        FROM pagos_mensual ${w.sql}
       GROUP BY mes, moneda ORDER BY mes, moneda`, w.params)
    const wt = donde(f, { fecha: 'fecha' })
    const tasa = await db.query(`
      SELECT DATE_FORMAT(fecha, '%Y-%m-01') AS mes, MIN(tasa) AS tasa_minima, MAX(tasa) AS tasa_maxima, ROUND(AVG(tasa), 4) AS tasa_promedio,
             SUBSTRING_INDEX(GROUP_CONCAT(tasa ORDER BY fecha), ',', 1) + 0 AS tasa_inicio,
             SUBSTRING_INDEX(GROUP_CONCAT(tasa ORDER BY fecha DESC), ',', 1) + 0 AS tasa_cierre
        FROM tasa_cambio_diaria ${wt.sql}
       GROUP BY mes ORDER BY mes`, wt.params)
    tasa.forEach((t) => { t.devaluacion_pct = t.tasa_inicio ? Math.round(10000 * (t.tasa_cierre / t.tasa_inicio - 1)) / 100 : null })
    return { por_mes: porMes, tasa }
  }

  tasaCambio(f) {
    const w = donde(f, { fecha: 'fecha' })
    return db.query(`SELECT fecha, tasa FROM tasa_cambio_diaria ${w.sql} ORDER BY fecha`, w.params)
  }

  // Ventas por % de descuento: costo de las promociones y su efecto en cantidad y margen.
  descuentos(f) {
    const w = donde(f, { mes: 'mes', campos: ['tipo'] })
    return db.query(`
      SELECT descuento_pct, SUM(transacciones) AS transacciones, SUM(unidades) AS unidades,
             SUM(venta_bruta) AS venta_bruta, SUM(descuento) AS descuento, SUM(venta_neta) AS venta_neta, SUM(margen) AS margen,
             ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2) AS margen_pct,
             ROUND(SUM(unidades) / NULLIF(SUM(transacciones), 0), 2) AS unidades_por_venta,
             ROUND(SUM(venta_neta) / NULLIF(SUM(transacciones), 0), 2) AS venta_neta_por_transaccion,
             ROUND(100 * SUM(transacciones) / NULLIF(SUM(SUM(transacciones)) OVER (), 0), 2) AS pct_transacciones
        FROM descuentos_mensual ${w.sql}
       GROUP BY descuento_pct ORDER BY descuento_pct`, w.params)
  }

  // --- Inventario y proveedores --------------------------------------------

  inventario(f) {
    const orden = {
      venta_perdida: 'venta_perdida_usd DESC', quiebre: 'dias_quiebre DESC', rotacion: 'rotacion DESC',
      rotacion_baja: 'rotacion ASC', cobertura: 'dias_cobertura DESC', valor: 'valor_inventario_actual DESC'
    }[f.orden || 'venta_perdida']
    const w = donde(f, { campos: ['sucursal', 'categoria'] })
    return db.query(`SELECT * FROM inventario_metricas ${w.sql} ORDER BY ${orden}, sucursal, sku LIMIT ?`, [...w.params, f.limite])
  }

  inventarioQuiebres(f) {
    const w = donde(f, { campos: ['sucursal', 'categoria'] }, ['dias_quiebre > 0'])
    return db.query(`
      SELECT sucursal, sku, producto, categoria, dias_quiebre, dias_registrados, stock_actual, dias_cobertura,
             venta_diaria_promedio, venta_perdida_unidades, venta_perdida_usd
        FROM inventario_metricas ${w.sql} ORDER BY venta_perdida_usd DESC LIMIT ?`, [...w.params, f.limite])
  }

  inventarioResumen(f) {
    const w = donde(f, { campos: ['sucursal', 'categoria'] })
    return db.query(`
      SELECT sucursal, COUNT(*) AS productos, SUM(stock_actual) AS unidades_en_stock,
             SUM(valor_inventario_actual) AS valor_inventario_actual, SUM(valor_inventario_promedio) AS valor_inventario_promedio,
             SUM(costo_vendido) AS costo_vendido,
             ROUND(SUM(costo_vendido) / NULLIF(SUM(valor_inventario_promedio), 0), 2) AS rotacion,
             ROUND(MAX(dias_registrados) / NULLIF(SUM(costo_vendido) / NULLIF(SUM(valor_inventario_promedio), 0), 0), 1) AS dias_inventario,
             SUM(dias_quiebre) AS dias_quiebre, SUM(dias_quiebre > 0) AS productos_con_quiebre,
             SUM(venta_perdida_usd) AS venta_perdida_usd
        FROM inventario_metricas ${w.sql}
       GROUP BY sucursal ORDER BY valor_inventario_actual DESC`, w.params)
  }

  inventarioMensual(f) {
    const w = donde(f, { mes: 'mes', campos: ['sucursal'] })
    return db.query(`
      SELECT mes, SUM(valor_inventario_promedio) AS valor_inventario_promedio, SUM(valor_inventario_cierre) AS valor_inventario_cierre,
             SUM(entradas) AS entradas, SUM(salidas) AS salidas, SUM(dias_quiebre) AS dias_quiebre,
             SUM(productos_con_quiebre) AS productos_con_quiebre
        FROM inventario_mensual ${w.sql}
       GROUP BY mes ORDER BY mes`, w.params)
  }

  proveedores() {
    return db.query('SELECT * FROM proveedores_metricas ORDER BY monto_comprado DESC')
  }

  // Clasificación A/M/B por rotación, inventario de seguridad y punto de reorden.
  async inventarioReposicion(f) {
    const extra = []
    const params = []
    if (f.clase) { extra.push('clase_rotacion = ?'); params.push(f.clase) }
    if (f.estado) { extra.push('estado_stock = ?'); params.push(f.estado) }
    const w = donde(f, { campos: ['sucursal', 'categoria'] }, extra)
    const productos = await db.query(`
      SELECT * FROM inventario_reposicion ${w.sql}
       ORDER BY FIELD(estado_stock, 'Agotado', 'Bajo stock mínimo', 'Reordenar', 'Normal'), clase_rotacion, indice_rotacion DESC
       LIMIT ?`, [...params, ...w.params, f.limite])
    const wr = donde(f, { campos: ['sucursal', 'categoria'] })
    const clases = await db.query(`
      SELECT clase_rotacion, COUNT(*) AS productos, SUM(unidades_vendidas) AS unidades_vendidas,
             ROUND(AVG(indice_rotacion), 2) AS indice_promedio, MIN(indice_rotacion) AS indice_minimo,
             MAX(indice_rotacion) AS indice_maximo, SUM(estado_stock <> 'Normal') AS con_alerta
        FROM inventario_reposicion ${wr.sql}
       GROUP BY clase_rotacion ORDER BY FIELD(clase_rotacion, 'A', 'M', 'B')`, wr.params)
    const matriz = await db.query(`
      SELECT categoria, clase_rotacion, COUNT(*) AS productos
        FROM inventario_reposicion ${wr.sql}
       GROUP BY categoria, clase_rotacion ORDER BY categoria`, wr.params)
    const estados = await db.query(`
      SELECT estado_stock, COUNT(*) AS productos FROM inventario_reposicion ${wr.sql}
       GROUP BY estado_stock ORDER BY FIELD(estado_stock, 'Agotado', 'Bajo stock mínimo', 'Reordenar', 'Normal')`, wr.params)
    return { clases, matriz, estados, productos }
  }

  // Unidades reales vs previsión por mes (suma de los productos filtrados) y error por producto.
  async prevision(f) {
    const extra = []
    const params = []
    if (f.sku) { extra.push('sku = ?'); params.push(f.sku) }
    const w = donde(f, { campos: ['categoria'] }, extra)
    const serie = await db.query(`
      SELECT mes, SUM(unidades_reales) AS unidades_reales, SUM(promedio_movil) AS promedio_movil,
             SUM(suavizamiento) AS suavizamiento, MAX(unidades_reales IS NULL) AS pronostico
        FROM prevision_demanda ${w.sql}
       GROUP BY mes ORDER BY mes`, [...params, ...w.params])
    // MAPE del total en los meses donde ambos modelos tienen valor.
    const error = (col) => {
      const puntos = serie.filter((s) => !s.pronostico && s.unidades_reales > 0 && s.promedio_movil !== null && s.suavizamiento !== null)
      if (!puntos.length) return null
      return Math.round(10000 * puntos.reduce((t, s) => t + Math.abs(s.unidades_reales - s[col]) / s.unidades_reales, 0) / puntos.length) / 100
    }
    const productos = await db.query(`
      SELECT * FROM prevision_metricas ${w.sql} ORDER BY prevision_siguiente DESC LIMIT ?`, [...params, ...w.params, f.limite])
    return {
      serie,
      mape_promedio_movil: error('promedio_movil'),
      mape_suavizamiento: error('suavizamiento'),
      productos
    }
  }

  // Duplicados exactos (excluidos) y posibles duplicados (para revisión).
  async duplicados(f) {
    const [conteo] = await db.query(`
      SELECT SUM(IF(regla = 'id_duplicado', filas_afectadas, 0)) AS duplicados_exactos,
             SUM(IF(regla = 'posible_duplicado', filas_afectadas, 0)) AS posibles_duplicados,
             MAX(total_filas) AS total_filas
        FROM calidad_datos WHERE dataset = ? AND regla IN ('id_duplicado', 'posible_duplicado')`, [config.metricas.datasets.ventas])
    const w = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    const ventas = await db.query(`
      SELECT * FROM ventas_posibles_duplicados ${w.sql} ORDER BY fecha_hora DESC LIMIT ?`, [...w.params, f.limite])
    const [monto] = await db.query(`
      SELECT COUNT(*) AS ventas, COALESCE(SUM(total), 0) AS monto FROM ventas_posibles_duplicados ${w.sql}`, w.params)
    return { ...conteo, posibles_en_periodo: monto.ventas, monto_posibles: monto.monto, ventas }
  }

  // Tablero ejecutivo (Figura 18): indicadores del día y del período y alertas activas.
  async ejecutivo(f) {
    const ws = donde(f, { campos: ['sucursal'] })
    const [ultimo] = await db.query(`SELECT MAX(fecha) AS fecha FROM ventas_diarias ${ws.sql}`, ws.params)
    const dia = async (fecha) => {
      if (!fecha) return null
      const w = donde(f, { campos: ['sucursal'] }, ['fecha = ?'])
      const [fila] = await db.query(`
        SELECT ? AS fecha, SUM(transacciones) AS transacciones, SUM(venta_neta) AS venta_neta, SUM(margen) AS margen
          FROM ventas_diarias ${w.sql}`, [fecha, fecha, ...w.params])
      return fila
    }
    const hoy = await dia(ultimo.fecha)
    const [anterior] = ultimo.fecha
      ? await db.query(`SELECT MAX(fecha) AS fecha FROM ventas_diarias ${donde(f, { campos: ['sucursal'] }, ['fecha < ?']).sql}`,
        [ultimo.fecha, ...ws.params])
      : [{}]
    const ayer = await dia(anterior.fecha)

    const wp = donde(f, { fecha: 'fecha', campos: ['sucursal'] })
    const [periodo] = await db.query(`
      SELECT SUM(venta_neta) AS venta_neta, SUM(margen) AS margen,
             ROUND(100 * SUM(margen) / NULLIF(SUM(venta_neta), 0), 2) AS margen_pct
        FROM ventas_diarias ${wp.sql}`, wp.params)

    const wi = donde(f, { campos: ['sucursal'] })
    const [stock] = await db.query(`
      SELECT COUNT(*) AS productos,
             SUM(estado_stock IN ('Agotado', 'Bajo stock mínimo')) AS bajo_minimo,
             SUM(estado_stock = 'Agotado') AS agotados,
             SUM(estado_stock = 'Reordenar') AS por_reordenar
        FROM inventario_reposicion ${wi.sql}`, wi.params)

    // Riesgo de vencimiento: perecedero cuya existencia tardaría más que su vida útil en venderse.
    const vencimiento = await db.query(`
      SELECT sku, producto, categoria, stock_actual, vida_util_dias,
             ROUND(stock_actual / NULLIF(demanda_diaria, 0), 1) AS dias_para_vender
        FROM inventario_reposicion
        ${donde(f, { campos: ['sucursal'] }, ['perecedero = 1', 'stock_actual > 0',
          '(demanda_diaria = 0 OR stock_actual / demanda_diaria > vida_util_dias)']).sql}
       ORDER BY dias_para_vender DESC`, wi.params)
    const reposicion = await db.query(`
      SELECT sku, producto, categoria, clase_rotacion, estado_stock, stock_actual, stock_seguridad, punto_reorden
        FROM inventario_reposicion ${donde(f, { campos: ['sucursal'] }, ["estado_stock <> 'Normal'"]).sql}
       ORDER BY FIELD(estado_stock, 'Agotado', 'Bajo stock mínimo', 'Reordenar'), clase_rotacion`, wi.params)

    const duplicados = await this.duplicados({ ...f, limite: 1 })
    const tasa = await tasas.vigente()
    const margenNegativo = await tasas.margenNegativo(5)
    const alertas = [
      ...(tasa.vencida ? [{
        tipo: 'Tasa', nivel: 'alta',
        titulo: tasa.tasa ? `Tasa de cambio sin actualizar hace ${Math.round(tasa.tasa.horas_sin_actualizar)} horas` : 'No hay tasa de cambio registrada',
        detalle: tasa.tasa
          ? `Última: BCV ${tasa.tasa.tasa_bcv} Bs/USD del ${tasa.tasa.fecha} ${tasa.tasa.hora} (${tasa.tasa.origen}) · límite ${tasa.horas_limite} h`
          : 'Registre la tasa del día en Pagos y monedas'
      }] : []),
      ...margenNegativo.map((m) => ({
        tipo: 'Margen', nivel: 'alta', titulo: `Margen negativo: ${m.producto}`,
        detalle: `${m.ventas} ventas con pérdida de ${Math.abs(m.margen)} USD · precio ${m.precio_actual} vs costo ${m.costo_actual} · descuento máx. ${m.descuento_maximo} %`
      })),
      ...reposicion.map((r) => ({
        tipo: 'Inventario', nivel: r.estado_stock === 'Reordenar' ? 'media' : 'alta',
        titulo: `${r.estado_stock}: ${r.producto}`,
        detalle: `Existencia ${r.stock_actual} · seguridad ${r.stock_seguridad ?? '—'} · reorden ${r.punto_reorden ?? '—'} · clase ${r.clase_rotacion}`
      })),
      ...vencimiento.map((v) => ({
        tipo: 'Vencimiento', nivel: 'media', titulo: `Riesgo de vencimiento: ${v.producto}`,
        detalle: v.dias_para_vender === null
          ? `${v.stock_actual} unidades sin ventas · vida útil ${v.vida_util_dias} días`
          : `${v.stock_actual} unidades tardarían ${v.dias_para_vender} días en venderse · vida útil ${v.vida_util_dias} días`
      })),
      ...(duplicados.posibles_duplicados > 0 ? [{
        tipo: 'Duplicados', nivel: 'media', titulo: `${duplicados.posibles_duplicados} posibles ventas duplicadas`,
        detalle: 'Revise el módulo Calidad de datos antes de cerrar caja'
      }] : [])
    ]

    return {
      fecha: ultimo.fecha,
      ventas_dia: hoy,
      ventas_dia_anterior: ayer,
      margen: periodo,
      stock,
      duplicados: { exactos: duplicados.duplicados_exactos, posibles: duplicados.posibles_duplicados },
      tasa,
      alertas
    }
  }

  // --- Calidad de datos ----------------------------------------------------

  calidad() {
    return db.query(`
      SELECT dataset, regla, descripcion, filas_afectadas, total_filas,
             ROUND(100 * filas_afectadas / NULLIF(total_filas, 0), 3) AS pct
        FROM calidad_datos ORDER BY dataset, filas_afectadas DESC, regla`)
  }

}

module.exports = new metricasModel();
