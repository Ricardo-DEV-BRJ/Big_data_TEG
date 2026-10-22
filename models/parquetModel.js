/**
 * Guarda registros que ya están en memoria (p. ej. el resultado de una consulta
 * a MariaDB) como un Parquet en la partición del día del data lake:
 *   s3://<bucket>/parquet/<dataset>/fecha_carga=AAAA-MM-DD/<nombre>_<marca>.parquet
 * Los registros se suben a staging/ como JSON por líneas y DuckDB los convierte
 * a Parquet directamente en el bucket, deduciendo los tipos (números, texto,
 * fechas). Así quedan consultables con read_parquet como cualquier otro dataset.
 */
const { Readable } = require('stream');
const duckdb = require('../config/duckdb');
const datalake = require('./datalakeModel');
const v = require('../utils/validaciones');

function identificador(nombre) {
  return '"' + String(nombre).replace(/"/g, '""') + '"';
}

function validarColumnas(columnas) {
  if (!Array.isArray(columnas) || !columnas.length) throw new Error('Se necesita al menos una columna');
  const vistas = new Set();
  for (const c of columnas) {
    if (typeof c !== 'string' || !c.trim()) throw new Error('Nombre de columna inválido: ' + c);
    if (vistas.has(c)) throw new Error('Columna repetida: ' + c);
    vistas.add(c);
  }
}

// Una línea JSON por registro con exactamente las columnas del encabezado; las
// que falten en un registro quedan en null. Cada registro puede ser un objeto
// ({columna: valor}) o un arreglo con los valores en el orden de las columnas.
function* lineasJson(columnas, registros) {
  for (const registro of registros) {
    const fila = {};
    columnas.forEach((c, i) => {
      const valor = Array.isArray(registro) ? registro[i] : registro[c];
      fila[c] = valor === undefined ? null : valor;
    });
    yield Buffer.from(JSON.stringify(fila) + '\n');
  }
}

/**
 * @param {object}   datos
 * @param {string}   datos.dataset    carpeta del data lake (parquet/<dataset>/)
 * @param {string[]} datos.columnas   encabezado: nombres y orden de las columnas del Parquet
 * @param {Array<object|Array>} datos.registros  filas a guardar
 * @param {string}   [datos.fecha]    partición AAAA-MM-DD; por defecto, hoy
 * @param {string}   [datos.nombre]   base del nombre del archivo; por defecto, el dataset
 * @returns {Promise<{clave: string|null, filas: number, bytes: number}>}  clave null si no había registros
 */
async function guardar({ dataset, columnas, registros, fecha = v.hoy(), nombre = dataset }) {
  validarColumnas(columnas);
  if (!Array.isArray(registros)) throw new Error('registros debe ser un arreglo');
  if (!registros.length) return { clave: null, filas: 0, bytes: 0 };

  const clave = datalake.prefijoParticion(dataset, fecha) + datalake.nombreParquet(nombre);
  const staging = datalake.claveStaging('ndjson');
  try {
    await datalake.subirStream(staging, Readable.from(lineasJson(columnas, registros)));
    const [resultado] = await duckdb.consultar(
      `COPY (SELECT ${columnas.map(identificador).join(', ')} ` +
      // sample_size = -1: los tipos se deducen con todos los registros, no con una muestra.
      `FROM read_json(${duckdb.literal(datalake.urlS3(staging))}, format = 'newline_delimited', sample_size = -1)) ` +
      `TO ${duckdb.literal(datalake.urlS3(clave))} (FORMAT parquet, COMPRESSION zstd, ROW_GROUP_SIZE 122880)`
    );
    return {
      clave,
      filas: resultado ? Number(resultado.Count) : 0,
      bytes: await datalake.tamanoObjeto(clave)
    };
  } finally {
    await datalake.eliminarObjeto(staging).catch((err) => console.error('No se pudo borrar', staging, err.message));
  }
}

module.exports = { guardar };
