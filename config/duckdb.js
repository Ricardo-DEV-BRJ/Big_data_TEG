/**
 * Motor de búsqueda. Una sola instancia de DuckDB en memoria que lee y escribe
 * Parquet directamente en MinIO mediante la extensión httpfs (protocolo S3).
 * Solo ejecuta sentencias definidas en los modelos, nunca SQL del cliente.
 * Cada sentencia usa su propia conexión, así las peticiones concurrentes no se
 * pisan; el secreto S3 vive en la instancia y todas las conexiones lo ven.
 */
const { DuckDBInstance } = require('@duckdb/node-api');
const config = require('./index');

let instancia = null;

// Tipos que DuckDB serializa como texto para no perder precisión; se pasan a
// número cuando caben sin pérdida (conteos, ids, porcentajes).
const NUMERICOS_COMO_TEXTO = /^(BIGINT|UBIGINT|HUGEINT|UHUGEINT|DECIMAL)/;

function aFilas(lector) {
  const tipos = lector.columnTypes().map((t) => t.toString());
  const convertir = lector.columnNames().filter((_, i) => NUMERICOS_COMO_TEXTO.test(tipos[i]));
  // Formato JSON: DATE como 'AAAA-MM-DD', TIMESTAMP en ISO, sin BigInt.
  return lector.getRowObjectsJson().map((fila) => {
    for (const col of convertir) {
      const n = Number(fila[col]);
      if (fila[col] !== null && Number.isFinite(n) && (Number.isSafeInteger(n) || !Number.isInteger(n))) fila[col] = n;
    }
    return fila;
  });
}

async function ejecutar(sql, parametros) {
  const conexion = await instancia.connect();
  try {
    return aFilas(await conexion.runAndReadAll(sql, parametros));
  } finally {
    conexion.closeSync();
  }
}

// Escapa un literal de texto para incrustarlo en SQL (rutas, nombres de archivo).
function literal(texto) {
  return "'" + String(texto).replace(/'/g, "''") + "'";
}

let listo = null;
function iniciar() {
  if (!listo) {
    const m = config.minio;
    listo = (async () => {
      instancia = await DuckDBInstance.create(':memory:');
      await ejecutar('INSTALL httpfs');
      await ejecutar('LOAD httpfs');
      await ejecutar(
        `CREATE OR REPLACE SECRET minio (TYPE s3, KEY_ID ${literal(m.accessKey)}, SECRET ${literal(m.secretKey)}, ` +
        `ENDPOINT ${literal(m.endPoint + ':' + m.port)}, USE_SSL ${m.useSSL}, URL_STYLE 'path', REGION 'us-east-1')`
      );
    })().catch((err) => { listo = null; throw err; });
  }
  return listo;
}

/**
 * Ejecuta una sentencia y devuelve las filas como objetos.
 * @param {string} sql          con parámetros con nombre: WHERE ciudad = $ciudad
 * @param {object} [parametros] { ciudad: 'Quito' }  (los valores nunca se concatenan al SQL)
 */
async function consultar(sql, parametros) {
  await iniciar();
  return ejecutar(sql, parametros);
}

module.exports = { consultar, literal };
