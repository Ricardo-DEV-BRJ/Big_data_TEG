# Prototipo Big Data — Reportes de ventas y métricas de negocio

Sistema para recibir reportes CSV de alto volumen (millones de filas), guardarlos en un data lake en
formato Parquet y convertirlos en métricas de negocio listas para un dashboard.

El proyecto tiene dos repositorios:

| Repositorio | Qué es | Tecnología |
|---|---|---|
| **Big_data_TEG** (este) | API: ingesta de CSV, data lake, cálculo de métricas, tareas programadas | Node 20+, Express, DuckDB, MinIO, MariaDB |
| **Big_data_front** | Dashboard web que consume la API | Vue 3, Vite, Vuetify, Chart.js |

---

## 1. Cómo funciona, de punta a punta

```
                       ┌──────────────────────── Big_data_TEG (API, Express :3000) ────────────────────────┐
  Reporte CSV          │                                                                                   │
  (ventas, inventario, │  1. INGESTA            POST /api/ingestas                                         │
   compras, metas) ────┼──►  multer en streaming ──► MinIO  staging/<id>.csv                                │
                       │                                   │                                               │
                       │                     DuckDB: read_csv → COPY … FORMAT parquet (zstd)               │
                       │                                   ▼                                               │
                       │  2. DATA LAKE          MinIO  parquet/<dataset>/fecha_carga=AAAA-MM-DD/*.parquet   │
                       │                        (se borra el CSV de staging/; la carga queda en `ingestas`)│
                       │                                   │                                               │
                       │  3. CÁLCULO            DuckDB lee todos los Parquet y agrega                      │
                       │     (POST /api/metricas/recalcular o tarea diaria METRICAS_CRON)                  │
                       │                                   ▼                                               │
                       │  4. MÉTRICAS           MariaDB: tablas de tablas.sql (una transacción)            │
                       │                                   │                                               │
                       │  5. CONSULTA           GET /api/metricas/...  (SQL fijo, solo lectura)            │
                       └───────────────────────────────────┼───────────────────────────────────────────────┘
                                                           ▼
                                   Big_data_front (Vue + Vuetify :8080) → gráficos y tablas
```

1. **Ingesta.** El front (o `curl`) sube uno o varios CSV indicando el *dataset* (carpeta) y el día.
   El archivo pasa en streaming a MinIO, sin tocar el disco ni la memoria del backend.
2. **Data lake.** DuckDB lee el CSV desde MinIO y escribe un Parquet comprimido en la partición del día.
   Cada carga queda registrada en la tabla `ingestas` de MariaDB.
3. **Cálculo.** Una vez al día (o cuando se pide), DuckDB recorre los Parquet de `ventas`, `inventario`,
   `compras` y `metas` y calcula unas 20 tablas agregadas: ventas por día, productos, clientes,
   cobranza, inventario, etc.
4. **Métricas.** Las tablas agregadas se guardan en MariaDB. Todas se reemplazan juntas en una sola
   transacción: el front nunca ve datos a medio actualizar.
5. **Consulta.** El front pide `GET /api/metricas/...` con filtros (fechas, sucursal, categoría…). Esas
   consultas leen tablas pequeñas de MariaDB y responden en milisegundos, aunque detrás haya millones
   de ventas.

### Por qué esta arquitectura

| Pieza | Papel | Motivo |
|---|---|---|
| **MinIO** | Almacén de objetos (S3) del data lake | Guarda archivos de cualquier tamaño, barato y escalable |
| **Parquet** | Formato de los datos | Columnar y comprimido: 1 M de filas ocupan una fracción del CSV y se leen muy rápido |
| **DuckDB** | Motor de consultas analíticas | Lee y escribe Parquet directo en MinIO, usa todos los núcleos, sin servidor aparte |
| **MariaDB** | Base de datos de servicio | Guarda el registro de cargas y las métricas ya calculadas que lee el front |
| **node-cron** | Tareas programadas | Respaldo diario y recálculo diario de métricas |

---

## 2. Puesta en marcha

Requisitos: Node 20+, Docker (para MinIO) y un servidor MariaDB o MySQL 8.

### Backend

```bash
cd Big_data_TEG
npm install
cp .env.example .env                 # completar credenciales
docker compose up -d                 # levanta MinIO (contenedor minio-server, puertos 9000 y 9001)
npm run dev                          # inicia minio-server y la API en http://localhost:3000 (nodemon)
# producción: npm start
```

- `docker-compose.yml` solo trae MinIO. MariaDB debe estar instalada aparte (local o en otro servidor)
  con la base de datos de `DB_DATABASE` ya creada.
- Las tablas de MariaDB se crean solas la primera vez que la API usa la base: `ingestas` (definida en
  `config/mariadb.js`) y las de métricas (`tablas.sql`).
- La primera vez, DuckDB descarga la extensión `httpfs` para hablar con MinIO (requiere internet).
- La consola web de MinIO queda en http://localhost:9001.

### Front

```bash
cd Big_data_front
npm install
cp .env.example .env                 # VITE_API_URL = http://localhost:3000/api/
npm run dev                          # http://localhost:8080
```

`CORS_PORT` del backend debe coincidir con el origen del front (por defecto `http://localhost:8080`).

### Primer uso con datos de prueba

```bash
cd Big_data_TEG
npm run csv -- tmp/datos 1000000 2025-10-01 2026-09-30     # ~10 s: ventas, inventario, compras y metas
for d in ventas inventario compras metas; do
  curl -F dataset=$d -F archivos=@tmp/datos/$d.csv http://localhost:3000/api/ingestas
done
curl -X POST http://localhost:3000/api/metricas/recalcular   # ~3 s con 1 M de ventas
curl http://localhost:3000/api/metricas/resumen
```

Luego abrir http://localhost:8080/Dashboard.

---

## 3. Configuración (`.env`)

| Variable | Por defecto | Uso |
|---|---|---|
| `PORT` | `3000` | Puerto de la API |
| `CORS_PORT` | — | Origen permitido del front (p. ej. `http://localhost:8080`) |
| `MINIO_ENDPOINT`, `MINIO_PORT`, `MINIO_USE_SSL` | `localhost`, `9000`, `false` | Conexión a MinIO |
| `MINIO_ACCESS_KEY`, `MINIO_SECRET_KEY` | — | Credenciales de MinIO (también las usa `docker-compose.yml`) |
| `MINIO_BUCKET` | `datalake` | Bucket del data lake (se crea solo) |
| `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE` | `localhost`, `3306` | Conexión a MariaDB / MySQL |
| `RESPALDO_CRON` | `0 2 * * *` | Hora del respaldo diario (formato cron) |
| `RESPALDO_ZONA` | hora del servidor | Zona horaria IANA de las tareas (p. ej. `America/Caracas`) |
| `METRICAS_CRON` | `30 2 * * *` | Hora del recálculo diario de métricas |
| `DATASET_VENTAS`, `DATASET_INVENTARIO`, `DATASET_COMPRAS`, `DATASET_METAS` | `ventas`, `inventario`, `compras`, `metas` | Carpetas del bucket de donde salen las métricas |
| `COMISION_VENDEDOR` | `3` | % de comisión del vendedor sobre lo cobrado sin IVA |

---

## 4. Organización del código (MVC sin vistas)

```
petición ─► route ─► controller ─► model ─► (MinIO / DuckDB / MariaDB)
respuesta ◄─ route ◄─ controller ◄─ model
           res.status().json() al front
```

| Capa | Carpeta | Responsabilidad |
|---|---|---|
| Rutas | `routes/` | Reciben `req`/`res`, extraen parámetros, llaman al controlador y responden con `res.status(...).json(...)` |
| Controladores | `controllers/` | No conocen `req`/`res`. Validan (`utils/validaciones.js`) y llaman al modelo dentro de una promesa |
| Modelos | `models/` | Acceso a datos: MinIO, sentencias DuckDB y MariaDB |
| Configuración | `config/` | Variables de entorno y conexiones: cliente MinIO, instancia DuckDB, pool MariaDB |
| Middlewares | `middlewares/` | Subida de CSV en streaming a MinIO (multer); 404 y errores en JSON |
| Tareas | `tareas/` | Tareas programadas con node-cron |

```
app.js                          Express: CORS, JSON, monta /api, errores en JSON
bin/www                         Arranque del servidor HTTP y de las tareas programadas
routes/index.js                 Monta /ingestas, /productos, /tareas y /metricas
routes/ingestas.js              POST /api/ingestas
routes/metricas.js              GET /api/metricas/... y POST /api/metricas/recalcular
routes/productos.js             Consultas directas a Parquet (ejemplos)
routes/tareas.js                Historial del respaldo
controllers/                    Validación de parámetros de cada ruta
models/ingestaModel.js          CSV de staging/ → Parquet en MinIO + registro en `ingestas`
models/datalakeModel.js         Rutas del bucket, subida en streaming y borrado
models/parquetModel.js          Guarda registros en memoria como Parquet (lo usa el respaldo)
models/calculoMetricasModel.js  Parquet → tablas de métricas en MariaDB (DuckDB)
models/metricasModel.js         Consultas de métricas para el front (MariaDB)
models/productosModel.js        Consultas DuckDB de ejemplo sobre productos y ventas
models/ejemploModel.js          Plantilla para escribir nuevas consultas DuckDB
config/                         index (variables .env), minio, duckdb, mariadb
middlewares/                    subidaCsv (multer → MinIO), errores (404 / 500)
tareas/                         index (programación), respaldo
utils/                          validaciones, http (código de error)
tablas.sql                      Esquema de las tablas de métricas
data_list/                      Catálogo de productos, clientes y datos del negocio para el generador
scripts/                        generar-ventas (reportes del negocio), generar-csv-prueba (volumen)
```

---

## 5. Ingesta: subir reportes

`POST /api/ingestas` — `multipart/form-data`

| Campo | Descripción |
|---|---|
| `dataset` | Nombre del dataset = carpeta del bucket (obligatorio; se normaliza: `Facturación Año` → `facturacion_ano`) |
| `fecha` | Día del reporte `AAAA-MM-DD` = subcarpeta (opcional, por defecto hoy) |
| `archivos` | Uno o varios `.csv` (los que no terminan en `.csv` se ignoran) |

Respuesta: `201` todo cargado, `207` algunos fallaron (p. ej. un CSV vacío), `422` fallaron todos,
`400` datos inválidos. Cada elemento de `ingestas` trae filas, tamaño del CSV y del Parquet y segundos.

```bash
curl -F dataset=ventas -F fecha=2026-10-21 -F archivos=@reporte1.csv -F archivos=@reporte2.csv \
  http://localhost:3000/api/ingestas
```

Qué pasa por dentro (`middlewares/subidaCsv.js` y `models/ingestaModel.js`):

1. multer envía cada archivo en streaming a `staging/<uuid>.csv` en MinIO.
2. Se detecta el separador (`,` `;` tabulador o `|`) a partir del encabezado.
3. DuckDB convierte el CSV a Parquet (zstd) en `parquet/<dataset>/fecha_carga=<fecha>/`. Los tipos se
   deducen con una muestra de 200 000 filas; si un valor posterior no encaja, se repite con el archivo
   completo.
4. Si hay filas con un número de columnas distinto al encabezado, el error indica las líneas y su
   contenido (los valores con el separador deben ir entre comillas dobles).
5. Se registra la carga en `ingestas` y se borra el CSV de `staging/`, también si la conversión falla.

Rendimiento medido en local: 1 M de filas / 45 MB → subida en 0,4 s y conversión en 1,5 s.

### Estructura del data lake

```
s3://datalake/
├── staging/<uuid>.csv                                  (temporal, mientras se convierte)
└── parquet/
    ├── ventas/fecha_carga=2026-10-24/ventas_20261024T101500_a1b2c3d4.parquet
    ├── inventario/fecha_carga=…/
    ├── compras/fecha_carga=…/
    ├── metas/fecha_carga=…/
    └── respaldo_ingestas/fecha_carga=…/                (respaldo diario de MariaDB)
```

- La carpeta se llama `fecha_carga=…` (estilo Hive) para no chocar con la columna `fecha` de los
  reportes; filtrar por ella hace que DuckDB lea solo esos días.
- Cada Parquet trae la columna `_archivo_origen` con el nombre del CSV.
- Subir el mismo archivo dos veces duplica las filas: `/api/metricas/calidad` lo detecta (`id_duplicado`).

---

## 6. Reportes de origen (datasets)

| Dataset | Una fila por | Columnas |
|---|---|---|
| `ventas` | venta | `id, fecha, fecha_hora, cliente, identificacion, fecha_alta_cliente, sku, producto, categoria, marca, proveedor, precio, costo_unitario, cantidad, descuento_pct, descuento, base_imponible, iva, total, moneda, tasa_cambio, metodo_pago, comision_bancaria, vendedor, sucursal, ciudad, estado_geo, condicion_pago, fecha_vencimiento, estado, monto_pagado, fecha_pago, tasa_cambio_pago` |
| `inventario` | día, sucursal y producto | `fecha, sucursal, sku, producto, categoria, stock_inicial, entradas, salidas, devoluciones, stock_final, costo_unitario, valor_inventario` |
| `compras` | orden de compra | `nro_orden, fecha_orden, fecha_esperada, fecha_recepcion, proveedor, sucursal, sku, producto, cantidad, costo_unitario, total` |
| `metas` | mes y vendedor | `mes, sucursal, vendedor, meta_ventas` |

Reglas del reporte de ventas:

- Montos en USD. `moneda` (`USD` o `VES`) indica cómo pagó el cliente y `tasa_cambio` son los Bs por
  USD del día de la venta; `tasa_cambio_pago`, los del día del pago.
- `base_imponible = precio × cantidad − descuento`, `iva = 16 %` de la base, `total = base + iva`.
- `estado`: `Pagado`, `Pendiente`, `Parcial`, `Anulado` o `Devuelto`. Las anuladas y devueltas no
  cuentan como venta; se informan aparte.
- `condicion_pago`: `Contado` o `Crédito`. En crédito, `fecha_vencimiento` es la fecha límite de pago.
- El tipo de cliente sale del prefijo de `identificacion`: `V` persona natural, `J` empresa,
  `E` extranjero, `G` gobierno.
- Una columna que falte en un archivo llega vacía. Las filas sin `sku` (formato anterior del reporte)
  se excluyen de las métricas y se cuentan en `/calidad`.

### Generador de datos de prueba

```bash
npm run csv -- [carpeta=tmp/datos] [ventas=1000000] [desde=2025-10-01] [hasta=2026-09-30] [semilla=2026]
```

`scripts/generar-ventas.js` simula el negocio día por día y escribe los cuatro CSV. Con la misma
semilla genera siempre los mismos datos. Para que las métricas cuenten una historia:

- **Pareto**: pocos productos y clientes concentran la mayoría de las ventas.
- **Estacionalidad**: más ventas los sábados, en días de quincena (1, 15, 16, 30 y fin de mes) y en
  diciembre; menos los domingos y en enero; crecimiento de 1,5 % mensual.
- **Clientes**: 65 % existía antes del período y el resto se da de alta durante él (solo compra desde su
  alta). Cada uno tiene una sucursal habitual; el 4 % es moroso.
- **Crédito**: empresas (70 %) y gobierno (90 %) compran a crédito a 15, 30 o 45 días y pagan con
  atraso; algunas facturas no se pagan nunca y otras quedan parciales.
- **Pagos**: método según el tipo de cliente (Pago Móvil, Punto de Venta, Zelle, efectivo,
  transferencia), con su moneda y comisión bancaria. La tasa se devalúa ~0,12 % diario.
- **Descuentos**: por volumen para mayoristas y promociones (más en diciembre).
- **Devoluciones y anulaciones**: 1,5 % anuladas; 2–4 % devueltas según la categoría.
- **Inventario**: existencia por sucursal y producto; si no alcanza, la venta se pierde. Se repone con
  órdenes de compra a proveedores con distinto tiempo de entrega y probabilidad de retraso.
- **Metas**: meta mensual por vendedor alrededor de lo que realmente vendió (cumplimiento ~85–110 %).
- Tres productos nunca se venden (inventario estancado).

Los datos fijos están en `data_list/`: `productos.js` (100 productos con sku, precio, costo, categoría,
marca y proveedor), `datosDeVentas.js` (clientes) y `negocio.js` (sucursales, vendedores, métodos de
pago, reglas de crédito y proveedores).

`npm run csv-prueba -- ruta.csv 2000000` genera un CSV simple solo para pruebas de volumen.

---

## 7. Cálculo de métricas

`models/calculoMetricasModel.js`, al recalcular:

1. Copia cada dataset a una tabla temporal de DuckDB con columnas y tipos fijos. Si un dataset no tiene
   archivos, la tabla queda vacía y las métricas que dependen de él también.
2. Arma la vista de ventas válidas (con `sku`, `fecha` y `cantidad > 0`) y columnas derivadas: `mes`,
   `tipo_cliente`, `valida` (no anulada ni devuelta), `costo`, `saldo` (lo que falta por cobrar) y
   `cobrado`.
3. La **fecha de corte** es la última fecha de venta; la antigüedad de la deuda y la recencia se miden
   contra ella.
4. Ejecuta una sentencia fija por tabla y aplica las reglas de calidad de datos.
5. Reemplaza todas las tablas de MariaDB en una sola transacción y registra la ejecución en
   `metricas_ejecuciones` (inicio, fin, segundos, estado, fecha de corte, filas por tabla o error).

Se ejecuta con `POST /api/metricas/recalcular` o con la tarea diaria `METRICAS_CRON`. Si ya hay un
recálculo en curso, responde `409`.

### Tablas de MariaDB (`tablas.sql`)

Guardan medidas que se pueden sumar; los porcentajes y promedios se calculan al consultar, así cualquier
filtro da resultados correctos.

| Tabla | Grano | Para qué |
|---|---|---|
| `ventas_diarias` | fecha × sucursal | Resumen, series, día de semana, quincenas, proyección, IVA |
| `ventas_horas` | sucursal × día de semana × hora | Mapa de calor de horas pico |
| `productos_mensual` | mes × producto | Ranking, categorías, marcas, devoluciones, tendencia |
| `productos_metricas` | producto (todo el período) | ABC, rangos de precio, productos sin ventas |
| `clientes_metricas` | cliente | RFM, CLV, cartera, concentración, morosos |
| `clientes_mes` | mes × cliente | Clientes únicos, nuevos vs recurrentes, cohortes |
| `segmentos_mensual` | mes × tipo de cliente | Morosidad, crédito y días de cobro por segmento |
| `cuentas_por_cobrar` | sucursal × tipo × tramo | Antigüedad de la deuda a la fecha de corte |
| `flujo_proyectado` | semana × sucursal | Cobros esperados según el vencimiento |
| `vendedores_mensual` | mes × sucursal × vendedor | Desempeño y comisiones |
| `sucursales` | sucursal | Ciudad y estado (mapa) |
| `metas` | mes × sucursal × vendedor | Metas cargadas |
| `pagos_mensual` | mes × método de pago | Mezcla de pagos, comisiones, pérdida cambiaria |
| `tasa_cambio_diaria` | fecha | Evolución de la tasa |
| `descuentos_mensual` | mes × tipo × % de descuento | Efecto de las promociones |
| `inventario_metricas` | sucursal × producto | Rotación, cobertura, quiebres, venta perdida |
| `inventario_mensual` | mes × sucursal | Valor del inventario y quiebres por mes |
| `proveedores_metricas` | proveedor | Compras, tiempos de entrega, margen |
| `calidad_datos` | dataset × regla | Problemas detectados en los reportes |
| `productos_top` | producto | Top 20 por unidades (Dashboard actual) |
| `metricas_ejecuciones` | recálculo | Historial y estado de cada recálculo |

### Definiciones

| Término | Cálculo |
|---|---|
| Venta bruta | `precio × cantidad` de las ventas válidas |
| Venta neta | Base imponible (sin IVA) de las ventas válidas |
| Total | Venta neta + IVA |
| Margen | Venta neta − `costo_unitario × cantidad` |
| Cobrado | `monto_pagado` de ventas `Pagado` o `Parcial` |
| Pendiente / por cobrar | `total − monto_pagado` de ventas `Pendiente` o `Parcial` |
| Vencido | Pendiente cuya `fecha_vencimiento` ya pasó a la fecha de corte |
| Ticket promedio | Total ÷ transacciones |
| Días de cobro | Promedio de días entre venta y pago de las ventas a crédito pagadas |
| Clase ABC | A: productos que hacen el 80 % de la venta neta; B: el siguiente 15 %; C: el resto |
| RFM | Recencia, frecuencia y monto en puntajes de 1 a 5 → segmentos Campeones, Leales, Nuevos o prometedores, En riesgo, Perdidos o inactivos, Necesitan atención |
| CLV | Margen mensual × r ÷ (1 + 1 % − r), con r la retención mensual observada (máximo 0,97) |
| Rotación | Costo vendido ÷ valor promedio del inventario |
| Días de cobertura | Existencia actual ÷ venta diaria promedio |
| Venta perdida | Días sin existencia × venta diaria de los días con existencia |
| Pérdida cambiaria | En ventas en Bs pagadas después: cobrado × (1 − tasa de la venta ÷ tasa del pago) |
| Comisión de vendedor | `COMISION_VENDEDOR` % de lo cobrado sin IVA |
| Proyección de cierre | Venta neta del mes ÷ días transcurridos × días del mes |

---

## 8. API de métricas

Todas son `GET /api/metricas/...` salvo el recálculo. Responden JSON; los errores, `{ "error": "…" }`
con `400` (parámetro inválido), `404` (ruta inexistente), `409` (recálculo en curso) o `500`.

**Filtros opcionales** (query string): `desde`, `hasta` (AAAA-MM-DD), `mes` (AAAA-MM, equivale a todo
ese mes), `sucursal`, `tipo` (`Persona natural`, `Empresa`, `Extranjero`, `Gobierno`), `categoria`,
`marca`, `proveedor`, `segmento` (RFM), `buscar` (cliente o identificación), `limite` (1–1000, por
defecto 20) y `orden`. En las tablas mensuales el rango toma los meses que toca.

```
GET /api/metricas/resumen?desde=2026-01-01&hasta=2026-03-31&sucursal=Maracaibo
GET /api/metricas/productos?orden=margen&categoria=Cocina&limite=10
GET /api/metricas/clientes?orden=pendiente&tipo=Empresa
```

| Ruta | Qué devuelve |
|---|---|
| `POST /recalcular` | Recalcula todo; devuelve fecha de corte, filas por tabla y segundos |
| `/estado` | Últimos 10 recálculos y el último exitoso |
| `/opciones` | Valores para los selectores: rango de fechas, sucursales, categorías, marcas, proveedores, vendedores, tipos de cliente, segmentos RFM, métodos de pago |
| `/` | Top 20 de productos por unidades (`{ data, mensaje }`, lo usa el Dashboard actual) |
| **Ventas** | |
| `/resumen` | KPI del período: venta bruta y neta, descuentos, IVA, total, costo, margen, ticket promedio, unidades por venta, precio promedio ponderado, cobrado, por cobrar, tasa de cobro, ventas a crédito, anulaciones, devoluciones, comisiones bancarias, ventas en USD y Bs, clientes únicos, fecha de corte |
| `/ventas/diarias` | Serie diaria con acumulado del mes y crecimiento contra el día anterior |
| `/ventas/semanales` | Serie semanal (lunes) con crecimiento contra la semana anterior |
| `/ventas/mensuales` | Serie mensual con crecimiento contra el mes anterior |
| `/ventas/dia-semana` | Venta y transacciones promedio por día de la semana (1 lunes … 7 domingo) |
| `/ventas/quincenas` | Días de cobro frente al resto del mes; primera frente a segunda quincena |
| `/ventas/horas` | Mapa de calor día de semana × hora |
| `/ventas/proyeccion` | Acumulado del mes, proyección de cierre, meta, cumplimiento y crecimiento contra el mes anterior (`mes`, por defecto el último con datos) |
| `/fiscal` | Base imponible, IVA y facturas por mes |
| **Productos** | |
| `/productos` | Ranking con margen, participación, pendiente y devoluciones (`orden`: ingreso, unidades, margen, devoluciones, pendiente) |
| `/productos/abc` | Resumen por clase A/B/C y lista de productos con su acumulado |
| `/productos/sin-ventas` | Productos del inventario sin ventas (en todo el período o en el rango pedido) |
| `/productos/rangos-precio` | Ventas y margen por rango de precio (Bajo, Medio, Premium) |
| `/productos/:sku/mensual` | Tendencia mensual de un producto |
| `/categorias`, `/marcas` | Ventas, margen, participación y devoluciones |
| `/categorias/mensual`, `/marcas/mensual` | Lo mismo por mes, con crecimiento |
| `/devoluciones` | Resumen de devoluciones y anulaciones, por categoría y productos más devueltos |
| **Clientes** | |
| `/clientes` | Ficha por cliente: compras, ticket, margen, cartera, vencido, RFM, CLV (`orden`: ingreso, margen, frecuencia, pendiente, vencido, recencia, clv) |
| `/clientes/concentracion` | % del ingreso del top 10/20/50/100 y cuántos clientes hacen el 80 % |
| `/clientes/rfm` | Clientes, ventas, recencia, frecuencia y CLV promedio por segmento RFM |
| `/clientes/morosos` | Clientes que no han pagado nada de lo que deben |
| `/clientes/nuevos-recurrentes` | Activos por mes separados en nuevos y recurrentes, con su venta |
| `/clientes/cohortes` | Retención por mes de alta |
| `/segmentos` | Por tipo de cliente: clientes, ticket, margen, participación, morosidad, % a crédito, días de cobro, % pagado con atraso |
| **Cobranza** | |
| `/cobranza/antiguedad` | Por cobrar por tramo (Por vencer, 1-30, 31-60, 61-90, Más de 90), por tipo y por sucursal |
| `/cobranza/dso` | Días promedio de cobro, % con atraso y morosidad por mes |
| `/cobranza/flujo-proyectado` | Cobros esperados por semana con acumulado |
| **Equipo comercial** | |
| `/vendedores` | Ranking con margen, descuentos, cobranza, devoluciones, comisión, meta y cumplimiento |
| `/sucursales` | KPI por sucursal con ciudad, estado, participación, meta y cumplimiento |
| `/metas` | Meta frente a venta real por mes y vendedor |
| **Pagos y monedas** | |
| `/pagos` | Por método: participación, ticket, comisión bancaria y pérdida cambiaria |
| `/monedas` | USD frente a Bs por mes y tasa mensual (inicio, cierre, promedio, devaluación) |
| `/tasa-cambio` | Tasa diaria |
| `/descuentos` | Por % de descuento: transacciones, unidades por venta, venta neta, costo de la promoción y margen |
| **Inventario y proveedores** | |
| `/inventario` | Por sucursal y producto: existencia, valor, rotación, cobertura, quiebres y venta perdida (`orden`: venta_perdida, quiebre, rotacion, rotacion_baja, cobertura, valor) |
| `/inventario/resumen` | Lo mismo agregado por sucursal |
| `/inventario/mensual` | Valor del inventario, entradas, salidas y quiebres por mes |
| `/inventario/quiebres` | Productos que se quedaron sin existencia, ordenados por venta perdida |
| `/proveedores` | Órdenes, montos, días de entrega, % de entregas tardías y margen de sus productos |
| **Calidad** | |
| `/calidad` | Cada regla por dataset con filas afectadas y % (formato anterior, totales que no cuadran, duplicados, pagos sin fecha, stock inconsistente, datasets sin archivos…) |

Las consultas son sentencias SQL fijas en `models/metricasModel.js`: el front nunca envía SQL, los
valores van como parámetros y `orden` solo acepta valores de una lista.

### Otras rutas

| Ruta | Qué hace |
|---|---|
| `POST /api/ingestas` | Sube CSV al data lake (sección 5) |
| `POST /api/productos` `{dataset, fecha?}` | Ejemplo: promedio de precio y nombres más repetidos de un dataset (columnas `Price`, `Name`) |
| `POST /api/productos/ventas` `{dataset, fecha?}` | Productos más vendidos leyendo directo los Parquet |
| `POST /api/productos/ventas-cliente` `{dataset, nom}` | Ventas de un cliente por nombre |
| `GET /api/productos/productos-top` | Recalcula solo `productos_top` |
| `GET /api/tareas` | Contenido de los respaldos de `ingestas` |

### Autenticación y roles

Las rutas privadas requieren `Authorization: Bearer <token>`. La única ruta pública es
`POST /api/auth/login`; las cuentas creadas por administración quedan con
`must_change_password = true` y solo pueden usar `POST /api/auth/change-password` hasta
definir una contraseña nueva. Luego pueden acceder a las rutas permitidas por su rol.

| Rol | Vistas y permisos |
|---|---|
| `vendedor` | Ventas, productos y clientes |
| `gerente` | Reportes y módulos de gestión: resumen, ventas, productos, clientes, cobranza, equipo comercial, pagos, inventario, proveedores y calidad |
| `administrador` | Todo el sistema, incluida la gestión de usuarios y el recálculo de métricas |

La gestión de usuarios (`GET/POST /api/auth/usuarios` y `DELETE /api/auth/usuarios/:id`)
es exclusiva de administradores. Para crear una cuenta, enviar `email`, `password` (mínimo
8 caracteres, contraseña temporal) y `rol`. El panel está disponible en `/panel/usuarios`.
Configura `JWT_SECRET` con un valor aleatorio y privado en el entorno del servidor.

---

## 9. Tareas programadas (`tareas/`)

Se inician al arrancar el servidor (`bin/www`) y se repiten mientras el proceso siga encendido. Un fallo
se registra en consola sin tumbar el servidor; si una ejecución no ha terminado, se salta la siguiente.

| Tarea | Horario | Qué hace |
|---|---|---|
| `respaldo-diario` | `RESPALDO_CRON` (02:00) | Copia la tabla `ingestas` de MariaDB al data lake como Parquet en `parquet/respaldo_ingestas/` |
| `metricas-diarias` | `METRICAS_CRON` (02:30) | Recalcula todas las tablas de métricas |

Para respaldar otra tabla basta con agregarla a `TABLAS` en `tareas/respaldo.js`.

---

## 10. Front (Big_data_front)

Vue 3 + Vite + Vuetify 4 + Chart.js, en TypeScript.

| Archivo | Qué hace |
|---|---|
| `src/config/api.ts` | `apiCall(endpoint, data, method)`: axios contra `VITE_API_URL`, autenticado con token Bearer |
| `src/router/index.ts` | Login, cambio de contraseña obligatorio, rutas de panel y control de acceso por rol |
| `src/modulos/usuarios/UsuariosModulo.vue` | Alta, listado y desactivación de usuarios (solo administrador) |
| `src/components/BotonTema.vue` | Cambia entre tema claro y oscuro |
| `src/theme/temaJM.ts`, `src/plugins/vuetify.ts` | Temas `light_JM` y `dark_JM` |

Para mostrar una métrica nueva basta con llamar su ruta, por ejemplo
`apiCall('metricas/resumen?mes=2026-09')` o `apiCall('metricas/clientes/rfm')`. `/opciones` da los
valores para llenar los filtros.

---

## 11. Escribir consultas nuevas

Para un indicador que ya se puede sacar de las tablas de métricas, se agrega un método a
`models/metricasModel.js`, otro al controlador y una ruta en `routes/metricas.js`.

Si necesita datos que no están agregados, se agrega una entrada a `METRICAS` en
`models/calculoMetricasModel.js` (sentencia DuckDB sobre `calc_ventas`, `calc_inventario`,
`calc_compras` o `calc_metas`) y su tabla en `tablas.sql`. Los alias del `SELECT` deben coincidir con
las columnas de la tabla.

Para consultar los Parquet directamente, `models/ejemploModel.js` es la plantilla:

```js
const duckdb = require('../config/duckdb');
const datalake = require('./datalakeModel');

function totalPorSucursal(fecha) {
  return duckdb.consultar(
    `SELECT sucursal, round(sum(total), 2) AS total
       FROM read_parquet($ruta, union_by_name = true)
      GROUP BY sucursal ORDER BY total DESC`,
    { ruta: datalake.patronDataset('ventas', fecha) }   // con fecha solo lee la carpeta de ese día
  );
}
```

- `duckdb.consultar(sql, parametros)` devuelve un arreglo de objetos; los valores van como parámetros
  con nombre (`$fecha`), nunca concatenados al SQL.
- `datalake.patronDataset(dataset)` lee todos los días; `datalake.patronDataset(dataset, fecha)` solo uno.
- Con `hive_partitioning = true` aparece la columna `fecha_carga`; filtrar por ella hace que DuckDB lea
  solo esas carpetas.
- `union_by_name = true` tolera archivos del mismo dataset con columnas en otro orden o nuevas.
- Las fechas llegan como `'AAAA-MM-DD'` y los números como número.
- Si el dataset o el día no tienen archivos, DuckDB lanza `IO Error: No files found…`.

DuckDB se usa con `@duckdb/node-api` (el paquete `duckdb` está deprecado y fallaba bajo concurrencia);
cada sentencia abre su propia conexión sobre una única instancia en memoria.

---

## 12. Problemas frecuentes

| Síntoma | Causa y solución |
|---|---|
| `Failed to download extension "httpfs"` | DuckDB no tiene internet para bajar la extensión la primera vez |
| `No files found` al consultar | El dataset o el día no tiene Parquet; revisar el nombre (se normaliza) |
| Error de columnas al subir un CSV | Hay valores con el separador sin comillas; el mensaje indica las líneas |
| Métricas vacías tras subir datos | Falta `POST /api/metricas/recalcular` (o esperar la tarea diaria); revisar `/estado` |
| Métricas con huecos o raras | Revisar `/calidad`: formato anterior (sin `sku`), duplicados, datasets sin archivos |
| Filas duplicadas | Se subió el mismo reporte dos veces; borrar el Parquet sobrante en MinIO y recalcular |
| El front no conecta | `VITE_API_URL` del front y `CORS_PORT` del backend deben coincidir con las URL reales |

## 13. Pendientes conocidos

- Sin autenticación: antes de exponer la API fuera de la red local hay que añadirla.
- La carga por API es síncrona: con archivos de varios GB la petición tarda lo que tarda la conversión.
- No hay control de cargas duplicadas: subir dos veces el mismo CSV duplica sus filas.
- El Dashboard del front solo muestra el top de productos; el resto de métricas aún no tiene pantalla.
