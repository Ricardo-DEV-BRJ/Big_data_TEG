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

## Estructura

```
app.js                          Express: CORS, monta /api, errores en JSON
routes/index.js                 Monta los routers (ingestas y los de consultas)
routes/ingestas.js              POST /api/ingestas
controllers/ingestaController.js
models/ingestaModel.js          CSV de staging/ → Parquet en MinIO + registro en MariaDB
models/datalakeModel.js         Convención de rutas del bucket, subida en streaming y borrado
models/ejemploModel.js          Plantilla de consultas con DuckDB
config/                         index (variables .env), minio, duckdb, mariadb
middlewares/                    subidaCsv (multer → MinIO en streaming), errores
utils/                          validaciones, http (status de error)
scripts/                        generar-csv-prueba
```

DuckDB se usa con `@duckdb/node-api` (el paquete `duckdb` está deprecado y fallaba bajo concurrencia).
Cada sentencia abre su propia conexión sobre una única instancia.

## Utilidades

- `npm run csv-prueba -- C:/ruta/ventas.csv 2000000` genera un CSV sintético para pruebas de volumen
  (sin ruta crea `tmp/ventas_prueba.csv`). No forma parte del backend.

## Pendientes conocidos

- Sin autenticación: antes de exponer la API fuera de la red local hay que añadirla.
- La carga por API es síncrona: con archivos de varios GB la petición tarda lo que tarda la conversión.
