# Prototipo Big Data — API

Backend (Express) que recibe reportes CSV de alto volumen, los convierte a Parquet y los guarda en
MinIO separados por dataset y por día, para consultarlos con DuckDB. El frontend va aparte (CORS habilitado).

```
CSV ──► POST /api/ingestas ──(streaming)──► MinIO  s3://datalake/staging/<id>.csv
                                                    │
                          DuckDB (read_csv → COPY … FORMAT parquet, zstd)
                                                    ▼
        MinIO  s3://datalake/parquet/<dataset>/fecha_carga=AAAA-MM-DD/<archivo>_<marca>_<id>.parquet
                (y se borra staging/<id>.csv)
```

- **El backend no guarda nada en disco**: el CSV pasa en streaming directo a MinIO (`staging/`), DuckDB lo
  convierte leyendo y escribiendo en el bucket, y el CSV de `staging/` se borra al terminar (también si falla).
  Todo se consulta desde MinIO y MariaDB.
- Node nunca tiene el archivo completo en memoria (1 M filas / 45 MB → subida 0,4 s + conversión 1,5 s en
  pruebas locales).
- La carpeta del día se llama `fecha_carga=…` (estilo Hive, no `fecha` para no chocar con columnas de los
  reportes). Cada Parquet trae además la columna `_archivo_origen` con el nombre del CSV.
- Cada carga queda registrada en MariaDB (tabla `ingestas`).

## Patrón MVC (sin vistas)

```
petición ─► route ─► controller ─► model ─► (MinIO / DuckDB / MariaDB)
respuesta ◄─ route ◄─ controller ◄─ model
           res.status().json() al front
```

| Capa | Carpeta | Responsabilidad |
|---|---|---|
| Rutas | `routes/` | Reciben `req`/`res`, extraen parámetros, llaman al controlador y responden con `res.status(...).json(...)` en el `.then` y en el `.catch` |
| Controladores | `controllers/` | No conocen `req`/`res`. Validan (`utils/validaciones.js`) y llaman al modelo dentro de un `new Promise` con `then`/`catch` |
| Modelos | `models/` | Acceso a datos: MinIO, sentencias DuckDB y MariaDB |
| Configuración | `config/` | Conexiones: cliente MinIO, instancia DuckDB, pool MariaDB |
| Middlewares | `middlewares/` | Subida de CSV en streaming a MinIO (multer) y 404/errores no controlados en JSON |

## Puesta en marcha

Requisitos: Node 20+, Docker.

```bash
npm install
docker compose up -d mariadb        # MinIO ya corre como contenedor minio-server
# en otra máquina sin MinIO:  docker compose --profile minio up -d
npm run dev                          # API en http://localhost:3000
```

Configuración en `.env` (plantilla en `.env.example`). La tabla `ingestas` se crea sola al primer uso.
La primera vez DuckDB descarga la extensión `httpfs` (requiere internet).

## Subir archivos

`POST /api/ingestas` — `multipart/form-data`

| Campo | Descripción |
|---|---|
| `dataset` | Nombre del dataset = carpeta en el bucket (obligatorio; se normaliza: `Facturación Año` → `facturacion_ano`) |
| `fecha` | Día del reporte `AAAA-MM-DD` = subcarpeta (opcional, por defecto hoy) |
| `archivos` | Uno o varios `.csv` |

Respuesta: `201` todo cargado, `207` algunos fallaron (p. ej. un CSV vacío), `422` fallaron todos,
`400` datos inválidos.

```bash
curl -F dataset=ventas -F fecha=2026-10-21 -F archivos=@reporte1.csv -F archivos=@reporte2.csv \
  http://localhost:3000/api/ingestas
```

## Consultas con el motor de búsqueda (DuckDB)

El front no envía SQL. Cada consulta es una sentencia fija en un modelo, expuesta por su propia ruta.
`models/ejemploModel.js` es la plantilla:

```js
// models/ventasModel.js
const duckdb = require('../config/duckdb');
const datalake = require('./datalakeModel');

function totalPorCiudad(fecha) {
  return duckdb.consultar(
    `SELECT ciudad, round(sum(total), 2) AS total
       FROM read_parquet($ruta, union_by_name = true)
      GROUP BY ciudad ORDER BY total DESC`,
    { ruta: datalake.patronDataset('ventas', fecha) }   // solo lee la carpeta de ese día
  );
}
```

```js
// controllers/ventasController.js
function totalPorCiudad(fecha) {
  return new Promise((resolve, reject) => {
    ventasModel.totalPorCiudad(v.validarFecha(fecha))
      .then((filas) => resolve(filas))
      .catch((err) => reject(err));
  });
}

// routes/ventas.js   (montar en routes/index.js: router.use('/ventas', require('./ventas')))
router.get('/:fecha/total-por-ciudad', (req, res) => {
  ventasController.totalPorCiudad(req.params.fecha)
    .then((filas) => res.status(200).json(filas))
    .catch((err) => res.status(estadoDeError(err)).json({ error: err.message }));
});
```

Claves para escribir sentencias:

- `duckdb.consultar(sql, parametros)` devuelve un arreglo de objetos. Los valores van como parámetros con
  nombre (`$fecha`) y nunca concatenados al SQL.
- `datalake.patronDataset(dataset)` lee todos los días; `datalake.patronDataset(dataset, fecha)` solo uno.
- Con `hive_partitioning = true` aparece la columna `fecha_carga` (DATE); filtrar por ella
  (`WHERE fecha_carga BETWEEN $desde::DATE AND $hasta::DATE`) hace que DuckDB lea solo esas carpetas.
- `union_by_name = true` tolera archivos del mismo dataset con columnas en otro orden o nuevas.
- `filename = true` agrega la ruta del Parquet de cada fila.
- Las fechas llegan como `'AAAA-MM-DD'`, los enteros y decimales como número.
- Si el dataset o el día no tienen archivos, DuckDB lanza `IO Error: No files found…`.

## Métricas para el front

```
CSV ──► /api/ingestas ──► Parquet (ventas, inventario, compras, metas)
                                   │  DuckDB: models/calculoMetricasModel.js
                                   ▼  (POST /api/metricas/recalcular o tarea METRICAS_CRON)
                        MariaDB: tablas de tablas.sql ──► GET /api/metricas/... ──► front
```

El front no recorre millones de filas: las métricas se calculan una vez con DuckDB y se guardan
agregadas en MariaDB (todas las tablas se reemplazan en una sola transacción). Las tablas se crean
solas al arrancar (`config/mariadb.js` ejecuta `tablas.sql`). Cada recálculo queda en
`metricas_ejecuciones`.

### Datasets de origen

| Dataset (`DATASET_*`) | Una fila por | Columnas |
|---|---|---|
| `ventas` | venta | `id, fecha, fecha_hora, cliente, identificacion, fecha_alta_cliente, sku, producto, categoria, marca, proveedor, precio, costo_unitario, cantidad, descuento_pct, descuento, base_imponible, iva, total, moneda, tasa_cambio, metodo_pago, comision_bancaria, vendedor, sucursal, ciudad, estado_geo, condicion_pago, fecha_vencimiento, estado, monto_pagado, fecha_pago, tasa_cambio_pago` |
| `inventario` | día, sucursal y producto | `fecha, sucursal, sku, producto, categoria, stock_inicial, entradas, salidas, devoluciones, stock_final, costo_unitario, valor_inventario` |
| `compras` | orden de compra | `nro_orden, fecha_orden, fecha_esperada, fecha_recepcion, proveedor, sucursal, sku, producto, cantidad, costo_unitario, total` |
| `metas` | mes y vendedor | `mes, sucursal, vendedor, meta_ventas` |

- Montos en USD; `moneda` (`USD`/`VES`) dice cómo pagó el cliente y `tasa_cambio` es Bs por USD del día.
- `estado`: `Pagado`, `Pendiente`, `Parcial`, `Anulado` o `Devuelto`. Las anuladas y devueltas no cuentan
  como venta (se informan aparte). `condicion_pago`: `Contado` o `Crédito`.
- El tipo de cliente sale del prefijo de `identificacion`: V persona natural, J empresa, E extranjero,
  G gobierno.
- Las filas sin `sku` (formato anterior del reporte) se ignoran y se cuentan en `/calidad`. Si a un dataset
  le faltan archivos, sus métricas quedan vacías y `/calidad` lo indica con `sin_archivos`.

Datos de prueba:

```bash
npm run csv -- tmp/datos 1000000 2025-10-01 2026-09-30   # ventas.csv, inventario.csv, compras.csv, metas.csv
for d in ventas inventario compras metas; do
  curl -F dataset=$d -F archivos=@tmp/datos/$d.csv http://localhost:3000/api/ingestas
done
curl -X POST http://localhost:3000/api/metricas/recalcular
```

El generador (`scripts/generar-ventas.js`) simula el período día por día con semilla fija: Pareto en
productos y clientes, picos en quincenas, sábados y diciembre, crédito y atrasos según el tipo de cliente,
devaluación diaria, ventas perdidas por falta de existencia, reposición con proveedores que se retrasan y
tres productos que no se venden. Los datos del negocio están en `data_list/negocio.js` y el catálogo
(sku, costo, categoría, marca, proveedor) en `data_list/productos.js`.

### Endpoints (`GET /api/metricas/...`)

Filtros opcionales por query string: `desde`, `hasta` (AAAA-MM-DD), `mes` (AAAA-MM), `sucursal`, `tipo`
(tipo de cliente), `categoria`, `marca`, `proveedor`, `segmento` (RFM), `buscar`, `limite` (1–1000, por
defecto 20) y `orden`. En las tablas mensuales el rango toma los meses que toca. Ejemplo:
`/api/metricas/resumen?desde=2026-01-01&hasta=2026-03-31&sucursal=Maracaibo`.

| Ruta | Qué devuelve |
|---|---|
| `POST /recalcular` | Recalcula todo (409 si ya hay uno en curso) |
| `/estado` | Últimos recálculos y fecha de corte |
| `/opciones` | Valores para los selectores: sucursales, categorías, marcas, vendedores, rango de fechas… |
| `/` | Top 20 de productos por unidades (Dashboard actual) |
| `/resumen` | KPI: venta bruta/neta, IVA, total, margen, ticket promedio, unidades por venta, precio promedio ponderado, cobrado, por cobrar, tasa de cobro, devoluciones, anulaciones, comisiones, % en USD, clientes únicos |
| `/ventas/diarias` | Serie diaria con acumulado del mes y crecimiento contra el día anterior |
| `/ventas/semanales`, `/ventas/mensuales` | Series con crecimiento contra la semana o el mes anterior |
| `/ventas/dia-semana` | Venta promedio por día de la semana |
| `/ventas/quincenas` | Días de cobro frente al resto del mes; primera frente a segunda quincena |
| `/ventas/horas` | Mapa de calor día de semana × hora |
| `/ventas/proyeccion` | Acumulado del mes, proyección de cierre, meta y cumplimiento (`mes`, por defecto el último) |
| `/fiscal` | Base imponible e IVA por mes |
| `/productos` | Ranking (`orden`: ingreso, unidades, margen, devoluciones, pendiente) con margen y participación |
| `/productos/abc` | Pareto / clasificación ABC |
| `/productos/sin-ventas` | Productos del inventario sin ventas (en el período o en el rango pedido) |
| `/productos/rangos-precio` | Ventas y margen por rango de precio (Bajo, Medio, Premium) |
| `/productos/:sku/mensual` | Tendencia mensual de un producto |
| `/categorias`, `/marcas` (y `/mensual`) | Ventas, margen, participación, devoluciones y crecimiento |
| `/devoluciones` | Devoluciones y anulaciones por categoría y producto |
| `/clientes` | Ficha por cliente: RFM, CLV, ticket, cartera, vencido (`orden`: ingreso, margen, frecuencia, pendiente, vencido, recencia, clv) |
| `/clientes/concentracion` | % del ingreso del top 10/20/50/100 y cuántos clientes hacen el 80 % |
| `/clientes/rfm` | Clientes y ventas por segmento RFM |
| `/clientes/morosos` | Clientes que no han pagado nada de lo que deben |
| `/clientes/nuevos-recurrentes` | Activos por mes, nuevos frente a recurrentes |
| `/clientes/cohortes` | Retención por cohorte de alta |
| `/segmentos` | Persona natural / Empresa / Extranjero / Gobierno: ticket, margen, morosidad, % crédito, días de cobro |
| `/cobranza/antiguedad` | Cuentas por cobrar por tramo de vencimiento, tipo de cliente y sucursal |
| `/cobranza/dso` | Días promedio de cobro, pagos con atraso y morosidad por mes |
| `/cobranza/flujo-proyectado` | Cobros esperados por semana según el vencimiento |
| `/vendedores` | Ranking, margen, descuentos, cobranza, comisión (`COMISION_VENDEDOR`) y cumplimiento de meta |
| `/sucursales` | Ventas por sucursal con ciudad, estado y cumplimiento de meta |
| `/metas` | Meta frente a venta real por mes y vendedor |
| `/pagos` | Mezcla de métodos de pago, comisiones bancarias y pérdida cambiaria |
| `/monedas`, `/tasa-cambio` | USD frente a Bs por mes, tasa y devaluación mensual |
| `/descuentos` | Ventas por % de descuento: costo de las promociones y efecto en cantidad y margen |
| `/inventario` | Rotación, días de cobertura, quiebres y venta perdida por sucursal y producto (`orden`: venta_perdida, quiebre, rotacion, rotacion_baja, cobertura, valor) |
| `/inventario/resumen`, `/inventario/mensual`, `/inventario/quiebres` | Inventario por sucursal, por mes y productos con quiebre |
| `/proveedores` | Compras, días de entrega, % de entregas tardías y margen de sus productos |
| `/calidad` | Reglas de calidad de datos por dataset |

Definiciones: `venta_neta` = base imponible sin IVA de las ventas válidas; `margen` = venta neta − costo;
`pendiente` = saldo de ventas `Pendiente` o `Parcial`; la venta perdida = días sin existencia × venta
diaria de los días con existencia; CLV = margen mensual × r / (1 + 1 % − r), con r la retención mensual.
La pérdida cambiaria supone que las ventas en Bs se fijan en Bs a la tasa del día de la venta.

## Estructura

```
app.js                          Express: CORS, monta /api, errores en JSON
routes/index.js                 Monta los routers (ingestas y los de consultas)
routes/ingestas.js              POST /api/ingestas
controllers/ingestaController.js
models/ingestaModel.js          CSV de staging/ → Parquet en MinIO + registro en MariaDB
models/datalakeModel.js         Convención de rutas del bucket, subida en streaming y borrado
models/ejemploModel.js          Plantilla de consultas con DuckDB
models/calculoMetricasModel.js  Parquet → métricas agregadas en MariaDB (DuckDB)
models/metricasModel.js         Consultas de métricas para el front (MariaDB)
routes/metricas.js              GET /api/metricas/... y POST /api/metricas/recalcular
tablas.sql                      Esquema de las tablas de métricas (se crea al arrancar)
tareas/                         Tareas programadas: respaldo diario y recálculo de métricas
data_list/                      Catálogo, clientes y datos del negocio para el generador
config/                         index (variables .env), minio, duckdb, mariadb
middlewares/                    subidaCsv (multer → MinIO en streaming), errores
utils/                          validaciones, http (status de error)
scripts/                        generar-ventas (reportes del negocio), generar-csv-prueba
```

DuckDB se usa con `@duckdb/node-api` (el paquete `duckdb` está deprecado y fallaba bajo concurrencia).
Cada sentencia abre su propia conexión sobre una única instancia.

## Utilidades

- `npm run csv -- tmp/datos 1000000 2025-10-01 2026-09-30 2026` genera los cuatro reportes del negocio
  (carpeta, ventas a simular, desde, hasta, semilla). Ver *Métricas para el front*.
- `npm run csv-prueba -- C:/ruta/ventas.csv 2000000` genera un CSV sintético para pruebas de volumen
  (sin ruta crea `tmp/ventas_prueba.csv`). No forma parte del backend.

## Pendientes conocidos

- Sin autenticación: antes de exponer la API fuera de la red local hay que añadirla.
- La carga por API es síncrona: con archivos de varios GB la petición tarda lo que tarda la conversión.
