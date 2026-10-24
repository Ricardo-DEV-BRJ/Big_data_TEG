-- Esquema de métricas para el front (MariaDB / MySQL).
-- config/mariadb.js ejecuta este archivo al arrancar (CREATE TABLE IF NOT EXISTS), así
-- que no hace falta correrlo a mano. Las tablas las llena models/calculoMetricasModel.js
-- (POST /api/metricas/recalcular o la tarea programada) a partir de los Parquet del
-- data lake; el front solo las lee con GET /api/metricas/...
-- Convenciones:
--   venta_neta     base imponible (sin IVA) de las ventas válidas (sin Anulado ni Devuelto)
--   total          monto con IVA
--   margen         venta_neta - costo (costo_unitario * cantidad)
--   pendiente      lo que falta por cobrar de ventas Pendiente o Parcial
--   mes            primer día del mes (AAAA-MM-01)
-- Cada tabla guarda medidas sumables; los porcentajes y promedios se calculan al consultar.

CREATE TABLE IF NOT EXISTS productos_top (
  nombre VARCHAR(200) NOT NULL,
  cantidad INT UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Registro de cada recálculo de métricas.
CREATE TABLE IF NOT EXISTS metricas_ejecuciones (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  inicio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fin TIMESTAMP NULL,
  segundos DECIMAL(10,2),
  estado VARCHAR(16) NOT NULL,
  fecha_corte DATE,
  filas_ventas BIGINT,
  detalle TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Ventas por día y sucursal: base del resumen, series de tiempo, día de semana,
-- quincenas, proyección de cierre, IVA y devoluciones.
CREATE TABLE IF NOT EXISTS ventas_diarias (
  fecha DATE NOT NULL,
  sucursal VARCHAR(100) NOT NULL,
  dia_semana TINYINT NOT NULL,           -- 1 lunes .. 7 domingo
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  venta_bruta DECIMAL(16,2) NOT NULL,     -- precio de lista * cantidad
  descuento DECIMAL(16,2) NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  iva DECIMAL(16,2) NOT NULL,
  total DECIMAL(16,2) NOT NULL,
  costo DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  cobrado DECIMAL(16,2) NOT NULL,
  pendiente DECIMAL(16,2) NOT NULL,
  ventas_credito INT NOT NULL,
  anuladas INT NOT NULL,
  monto_anulado DECIMAL(16,2) NOT NULL,
  devoluciones INT NOT NULL,
  monto_devuelto DECIMAL(16,2) NOT NULL,
  comision_bancaria DECIMAL(16,2) NOT NULL,
  total_usd DECIMAL(16,2) NOT NULL,       -- ventas cobradas en dólares
  total_ves DECIMAL(16,2) NOT NULL,       -- ventas cobradas en bolívares (su equivalente en USD)
  total_bs DECIMAL(20,2) NOT NULL,        -- ventas en bolívares expresadas en Bs a la tasa del día
  PRIMARY KEY (fecha, sucursal)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Mapa de calor día de semana x hora.
CREATE TABLE IF NOT EXISTS ventas_horas (
  sucursal VARCHAR(100) NOT NULL,
  dia_semana TINYINT NOT NULL,
  hora TINYINT NOT NULL,
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (sucursal, dia_semana, hora)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Ventas por producto y mes: tendencias, categorías, marcas, devoluciones.
CREATE TABLE IF NOT EXISTS productos_mensual (
  mes DATE NOT NULL,
  sku VARCHAR(20) NOT NULL,
  producto VARCHAR(200) NOT NULL,
  categoria VARCHAR(100),
  marca VARCHAR(100),
  proveedor VARCHAR(150),
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  venta_bruta DECIMAL(16,2) NOT NULL,
  descuento DECIMAL(16,2) NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  costo DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  pendiente DECIMAL(16,2) NOT NULL,
  devoluciones INT NOT NULL,
  unidades_devueltas INT NOT NULL,
  monto_devuelto DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (mes, sku),
  INDEX productos_mensual_categoria (categoria),
  INDEX productos_mensual_marca (marca)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Producto en todo el período: ranking, Pareto / ABC, rango de precio, productos sin ventas.
CREATE TABLE IF NOT EXISTS productos_metricas (
  sku VARCHAR(20) NOT NULL PRIMARY KEY,
  producto VARCHAR(200) NOT NULL,
  categoria VARCHAR(100),
  marca VARCHAR(100),
  proveedor VARCHAR(150),
  precio DECIMAL(12,2),
  costo_unitario DECIMAL(12,2),
  rango_precio VARCHAR(20),               -- Bajo / Medio / Premium
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  costo DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  margen_pct DECIMAL(7,2),
  participacion_pct DECIMAL(7,3),
  acumulado_pct DECIMAL(7,3),
  clase_abc CHAR(1),                      -- A: 80 % del ingreso, B: siguiente 15 %, C: resto
  ranking_ingreso INT,
  ranking_unidades INT,
  ranking_margen INT,
  pct_pendiente DECIMAL(7,2),             -- % del total vendido que sigue sin cobrarse
  tasa_devolucion DECIMAL(7,2),
  con_ventas TINYINT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cliente en todo el período: top, concentración, RFM, CLV, cartera, morosos.
CREATE TABLE IF NOT EXISTS clientes_metricas (
  identificacion VARCHAR(30) NOT NULL PRIMARY KEY,
  cliente VARCHAR(200) NOT NULL,
  tipo_cliente VARCHAR(30) NOT NULL,      -- Persona natural / Empresa / Extranjero / Gobierno
  fecha_alta DATE,
  sucursal_habitual VARCHAR(100),
  primera_compra DATE,
  ultima_compra DATE,
  recencia_dias INT,
  transacciones INT NOT NULL,
  meses_activos INT NOT NULL,
  unidades INT NOT NULL,
  total DECIMAL(16,2) NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  ticket_promedio DECIMAL(14,2),
  productos_distintos INT NOT NULL,
  categorias_distintas INT NOT NULL,
  cobrado DECIMAL(16,2) NOT NULL,
  pendiente DECIMAL(16,2) NOT NULL,
  pct_pendiente DECIMAL(7,2),
  monto_vencido DECIMAL(16,2) NOT NULL,
  dias_cobro_promedio DECIMAL(8,2),
  r_score TINYINT,
  f_score TINYINT,
  m_score TINYINT,
  segmento_rfm VARCHAR(40),
  ranking INT,
  participacion_pct DECIMAL(9,4),
  acumulado_pct DECIMAL(7,3),
  clv_estimado DECIMAL(16,2),
  nombres_distintos INT NOT NULL,
  INDEX clientes_metricas_tipo (tipo_cliente),
  INDEX clientes_metricas_segmento (segmento_rfm)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Actividad de cada cliente por mes: clientes únicos, nuevos vs recurrentes, cohortes.
CREATE TABLE IF NOT EXISTS clientes_mes (
  mes DATE NOT NULL,
  identificacion VARCHAR(30) NOT NULL,
  tipo_cliente VARCHAR(30) NOT NULL,
  transacciones INT NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (mes, identificacion),
  INDEX clientes_mes_identificacion (identificacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Segmento de cliente (prefijo V / J / E / G) por mes: ventas, margen, morosidad, DSO.
CREATE TABLE IF NOT EXISTS segmentos_mensual (
  mes DATE NOT NULL,
  tipo_cliente VARCHAR(30) NOT NULL,
  clientes INT NOT NULL,
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  total DECIMAL(16,2) NOT NULL,
  venta_bruta DECIMAL(16,2) NOT NULL,
  descuento DECIMAL(16,2) NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  cobrado DECIMAL(16,2) NOT NULL,
  pendiente DECIMAL(16,2) NOT NULL,
  ventas_credito INT NOT NULL,
  monto_credito DECIMAL(16,2) NOT NULL,
  facturas_cobradas INT NOT NULL,         -- ventas a crédito ya pagadas
  dias_cobro_total BIGINT NOT NULL,       -- suma de días entre venta y pago de esas facturas
  pagadas_con_atraso INT NOT NULL,
  monto_vencido DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (mes, tipo_cliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cuentas por cobrar a la fecha de corte, por antigüedad del vencimiento.
CREATE TABLE IF NOT EXISTS cuentas_por_cobrar (
  sucursal VARCHAR(100) NOT NULL,
  tipo_cliente VARCHAR(30) NOT NULL,
  tramo VARCHAR(20) NOT NULL,             -- Por vencer / 1-30 / 31-60 / 61-90 / Más de 90
  orden_tramo TINYINT NOT NULL,
  facturas INT NOT NULL,
  monto DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (sucursal, tipo_cliente, tramo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Cobros esperados por semana según la fecha de vencimiento de lo pendiente.
CREATE TABLE IF NOT EXISTS flujo_proyectado (
  semana DATE NOT NULL,                   -- lunes de la semana
  sucursal VARCHAR(100) NOT NULL,
  facturas INT NOT NULL,
  monto DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (semana, sucursal)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Desempeño de vendedores por mes (la meta está en la tabla metas).
CREATE TABLE IF NOT EXISTS vendedores_mensual (
  mes DATE NOT NULL,
  sucursal VARCHAR(100) NOT NULL,
  vendedor VARCHAR(150) NOT NULL,
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  clientes INT NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  descuento DECIMAL(16,2) NOT NULL,
  cobrado DECIMAL(16,2) NOT NULL,
  pendiente DECIMAL(16,2) NOT NULL,
  devoluciones INT NOT NULL,
  comision DECIMAL(16,2) NOT NULL,        -- COMISION_VENDEDOR % sobre lo cobrado sin IVA
  PRIMARY KEY (mes, sucursal, vendedor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Ubicación de cada sucursal (mapa de ventas).
CREATE TABLE IF NOT EXISTS sucursales (
  sucursal VARCHAR(100) NOT NULL PRIMARY KEY,
  ciudad VARCHAR(100),
  estado_geo VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Metas mensuales de ventas netas por vendedor (dataset metas).
CREATE TABLE IF NOT EXISTS metas (
  mes DATE NOT NULL,
  sucursal VARCHAR(100) NOT NULL,
  vendedor VARCHAR(150) NOT NULL,
  meta_ventas DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (mes, sucursal, vendedor)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Métodos de pago y monedas por mes: mezcla, comisiones bancarias y pérdida cambiaria.
CREATE TABLE IF NOT EXISTS pagos_mensual (
  mes DATE NOT NULL,
  metodo_pago VARCHAR(50) NOT NULL,
  moneda CHAR(3) NOT NULL,
  transacciones INT NOT NULL,
  total DECIMAL(16,2) NOT NULL,
  total_bs DECIMAL(20,2) NOT NULL,
  comision_bancaria DECIMAL(16,2) NOT NULL,
  -- Ventas en Bs cobradas después de la fecha de venta: lo que se pierde en USD por la
  -- subida de la tasa entre la venta y el pago (monto en Bs fijado al facturar).
  perdida_cambiaria DECIMAL(16,2) NOT NULL,
  tasa_promedio DECIMAL(14,4),
  PRIMARY KEY (mes, metodo_pago)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tasa_cambio_diaria (
  fecha DATE NOT NULL PRIMARY KEY,
  tasa DECIMAL(14,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Efecto de los descuentos por mes, segmento y % de descuento.
CREATE TABLE IF NOT EXISTS descuentos_mensual (
  mes DATE NOT NULL,
  tipo_cliente VARCHAR(30) NOT NULL,
  descuento_pct DECIMAL(5,2) NOT NULL,
  transacciones INT NOT NULL,
  unidades INT NOT NULL,
  venta_bruta DECIMAL(16,2) NOT NULL,
  descuento DECIMAL(16,2) NOT NULL,
  venta_neta DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  PRIMARY KEY (mes, tipo_cliente, descuento_pct)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Inventario por sucursal y producto en el período: rotación, cobertura, quiebres, venta perdida.
CREATE TABLE IF NOT EXISTS inventario_metricas (
  sucursal VARCHAR(100) NOT NULL,
  sku VARCHAR(20) NOT NULL,
  producto VARCHAR(200) NOT NULL,
  categoria VARCHAR(100),
  stock_actual INT NOT NULL,
  stock_promedio DECIMAL(14,2) NOT NULL,
  valor_inventario_actual DECIMAL(16,2) NOT NULL,
  valor_inventario_promedio DECIMAL(16,2) NOT NULL,
  unidades_vendidas INT NOT NULL,
  costo_vendido DECIMAL(16,2) NOT NULL,
  rotacion DECIMAL(10,2),                 -- costo vendido / valor promedio del inventario
  dias_cobertura DECIMAL(10,1),           -- días que alcanza la existencia actual
  dias_registrados INT NOT NULL,
  dias_quiebre INT NOT NULL,              -- días que terminaron sin existencia
  venta_diaria_promedio DECIMAL(12,3),    -- en los días con existencia
  venta_perdida_unidades DECIMAL(12,1),
  venta_perdida_usd DECIMAL(16,2),
  PRIMARY KEY (sucursal, sku)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS inventario_mensual (
  mes DATE NOT NULL,
  sucursal VARCHAR(100) NOT NULL,
  valor_inventario_promedio DECIMAL(16,2) NOT NULL,
  valor_inventario_cierre DECIMAL(16,2) NOT NULL,
  entradas INT NOT NULL,
  salidas INT NOT NULL,
  dias_quiebre INT NOT NULL,              -- suma de días-producto sin existencia
  productos_con_quiebre INT NOT NULL,
  PRIMARY KEY (mes, sucursal)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Proveedores: compras, tiempos de entrega, cumplimiento y margen de sus productos.
CREATE TABLE IF NOT EXISTS proveedores_metricas (
  proveedor VARCHAR(150) NOT NULL PRIMARY KEY,
  productos INT NOT NULL,
  ordenes INT NOT NULL,
  ordenes_recibidas INT NOT NULL,
  ordenes_en_transito INT NOT NULL,
  unidades_compradas BIGINT NOT NULL,
  monto_comprado DECIMAL(16,2) NOT NULL,
  costo_promedio_unitario DECIMAL(12,2),
  dias_entrega_promedio DECIMAL(8,2),
  entregas_tarde INT NOT NULL,
  pct_entregas_tarde DECIMAL(7,2),
  dias_retraso_promedio DECIMAL(8,2),     -- solo de las entregas tardías
  venta_neta DECIMAL(16,2) NOT NULL,
  margen DECIMAL(16,2) NOT NULL,
  margen_pct DECIMAL(7,2)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Reglas de calidad de datos aplicadas a cada dataset.
CREATE TABLE IF NOT EXISTS calidad_datos (
  dataset VARCHAR(50) NOT NULL,
  regla VARCHAR(60) NOT NULL,
  descripcion VARCHAR(255) NOT NULL,
  filas_afectadas BIGINT NOT NULL,
  total_filas BIGINT NOT NULL,
  PRIMARY KEY (dataset, regla)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
