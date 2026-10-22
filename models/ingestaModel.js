/**
 * Modelo de ingesta: CSV (en staging/ de MinIO) -> Parquet en MinIO + registro
 * de la carga en MariaDB. DuckDB lee el CSV desde el bucket en streaming y
 * escribe el Parquet directamente en el bucket: nada pasa por el disco del
 * backend ni se carga completo en la memoria de Node.
 */
const crypto = require('crypto');
const path = require('path');
const duckdb = require('../config/duckdb');
const db = require('../config/mariadb');
const datalake = require('./datalakeModel');

// Filas que DuckDB examina para deducir los tipos de columna. Si un valor
// posterior no encaja, se reintenta leyendo el archivo completo.
const MUESTRA_TIPOS = 200000;

function nombreParquet(archivoOrigen) {
  const base = path.basename(archivoOrigen, path.extname(archivoOrigen))
    .normalize('NFD').replace(/\p{M}/gu, '').replace(/[^A-Za-z0-9_-]+/g, '_') || 'archivo';
  const marca = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '');
  // El sufijo aleatorio evita que dos CSV con el mismo nombre subidos en el
  // mismo segundo se sobrescriban en MinIO.
  return `${base}_${marca}_${crypto.randomBytes(4).toString('hex')}.parquet`;
}

const SEPARADORES = [',', ';', '\t', '|'];

// El CSV leído línea a línea como texto, sin interpretar separadores ni comillas.
const LINEAS_CRUDAS = "read_csv($f, columns = {'linea': 'VARCHAR'}, delim = chr(1), quote = '', escape = '', " +
  'header = false, auto_detect = false)';

// El separador es el candidato que más se repite en el encabezado (fuera de comillas).
// Se fija explícitamente porque, si hay filas mal formadas, el detector automático
// de DuckDB puede elegir otro y dejar todo el CSV en una sola columna.
async function detectarSeparador(origen) {
  const [primera] = await duckdb.consultar(`SELECT linea FROM ${LINEAS_CRUDAS} LIMIT 1`, { f: origen });
  const encabezado = ((primera && primera.linea) || '').replace(/"[^"]*"/g, '');
  let separador = ',';
  let maximo = 0;
  for (const s of SEPARADORES) {
    const n = encabezado.split(s).length - 1;
    if (n > maximo) { maximo = n; separador = s; }
  }
  return separador;
}

// Filas cuyo número de campos no coincide con el del encabezado (p. ej. un valor
// con una coma sin comillas). Las líneas se numeran contando el encabezado como 1.
function filasMalFormadas(origen, separador) {
  const sinComillas = `regexp_replace(linea, '"[^"]*"', '', 'g')`;
  return duckdb.consultar(
    `WITH l AS (SELECT row_number() OVER () AS linea_n, linea FROM ${LINEAS_CRUDAS}),
          c AS (SELECT linea_n, linea, length(${sinComillas}) - length(replace(${sinComillas}, $sep, '')) + 1 AS campos FROM l)
     SELECT linea_n, campos, (SELECT campos FROM c WHERE linea_n = 1) AS esperados, left(linea, 120) AS contenido
       FROM c
      WHERE campos <> (SELECT campos FROM c WHERE linea_n = 1)
      ORDER BY linea_n
      LIMIT 5`,
    { f: origen, sep: separador }
  );
}

async function errorDeEstructura(origen, separador, errOriginal) {
  const malas = await filasMalFormadas(origen, separador);
  if (!malas.length) return errOriginal;
  const nombre = separador === '\t' ? 'tabulador' : `"${separador}"`;
  const detalle = malas.map((f) => `línea ${f.linea_n}: ${f.campos} columnas -> ${f.contenido}`).join(' | ');
  return new Error(
    `El CSV tiene filas con un número de columnas distinto al encabezado (${malas[0].esperados}). ${detalle}. ` +
    `Los valores que contienen ${nombre} deben ir entre comillas dobles.`
  );
}

function copiarAParquet(origen, destino, archivoOrigen, separador, muestra) {
  return duckdb.consultar(
    `COPY (SELECT *, ${duckdb.literal(archivoOrigen)} AS _archivo_origen FROM read_csv(${duckdb.literal(origen)}, ` +
    // Dialecto fijo (separador, comillas dobles, encabezado en la primera línea);
    // el detector automático solo deduce los tipos. Si no, ante filas mal formadas
    // puede saltarse líneas, tomar una fila de datos como encabezado o ignorar las comillas.
    `delim = ${duckdb.literal(separador)}, quote = '"', escape = '"', header = true, skip = 0, ` +
    `auto_detect = true, sample_size = ${muestra})) ` +
    `TO ${duckdb.literal(destino)} (FORMAT parquet, COMPRESSION zstd, ROW_GROUP_SIZE 122880)`
  );
}

/**
 * Convierte un CSV de staging/ a Parquet en la partición del día, lo registra
 * y borra el CSV de staging/ (también si la conversión falla).
 * @param {{clave: string, size: number}} csv  objeto subido por el middleware subidaCsv
 * @param {{dataset: string, fecha: string, archivoOrigen: string}} datos  ya validados
 */
async function crear(csv, { dataset, fecha, archivoOrigen }) {
  const clave = datalake.prefijoParticion(dataset, fecha) + nombreParquet(archivoOrigen);
  const origen = datalake.urlS3(csv.clave);
  const destino = datalake.urlS3(clave);
  const inicio = Date.now();

  try {
    if (!csv.size) throw new Error('El archivo está vacío');
    const separador = await detectarSeparador(origen);
    let resultado;
    try {
      try {
        resultado = await copiarAParquet(origen, destino, archivoOrigen, separador, MUESTRA_TIPOS);
      } catch (err) {
        // Un valor posterior a la muestra no encaja en el tipo deducido: se deduce con todo el archivo.
        if (!/Conversion|sniff|type/i.test(err.message)) throw err;
        resultado = await copiarAParquet(origen, destino, archivoOrigen, separador, -1);
      }
    } catch (err) {
      throw await errorDeEstructura(origen, separador, err);
    }

    const r = await db.query(
      'INSERT INTO ingestas (dataset, fecha, archivo_origen, clave_parquet, filas, bytes_csv, bytes_parquet, segundos, origen) ' +
      'VALUES (?,?,?,?,?,?,?,?,?)',
      [
        dataset, fecha, archivoOrigen, clave,
        resultado[0] ? Number(resultado[0].Count) : 0,
        csv.size,
        await datalake.tamanoObjeto(clave),
        ((Date.now() - inicio) / 1000).toFixed(2),
        'api'
      ]
    );
    return obtener(r.insertId);
  } finally {
    await datalake.eliminarObjeto(csv.clave).catch((err) => console.error('No se pudo borrar', csv.clave, err.message));
  }
}

async function obtener(id) {
  const filas = await db.query('SELECT * FROM ingestas WHERE id = ?', [id]);
  return filas[0] || null;
}

module.exports = { crear };
