/**
 * Convención de rutas del data lake en MinIO:
 *   s3://<bucket>/parquet/<dataset>/fecha_carga=AAAA-MM-DD/<archivo>.parquet
 *   s3://<bucket>/staging/<id>.csv   (CSV recibido, solo mientras se convierte)
 * La partición "fecha_carga=" (estilo Hive; no se llama "fecha" para no chocar
 * con columnas propias de los CSV) permite a DuckDB leer solo los días que
 * filtra una sentencia.
 */
const crypto = require('crypto');
const { cliente, bucket } = require('../config/minio');

function prefijoParticion(dataset, fecha) {
  return `parquet/${dataset}/fecha_carga=${fecha}/`;
}

function urlS3(clave) {
  return `s3://${bucket}/${clave}`;
}

// Patrón de lectura para read_parquet: todos los días de un dataset o uno solo.
function patronDataset(dataset, fecha) {
  return urlS3(`parquet/${dataset}/${fecha ? 'fecha_carga=' + fecha : '*'}/*.parquet`);
}

let bucketListo = null;
function asegurarBucket() {
  if (!bucketListo) {
    bucketListo = cliente.bucketExists(bucket)
      .then((existe) => (existe ? null : cliente.makeBucket(bucket)))
      .catch((err) => { bucketListo = null; throw err; });
  }
  return bucketListo;
}

async function tamanoObjeto(clave) {
  return (await cliente.statObject(bucket, clave)).size;
}

// Los CSV recibidos esperan en staging/ mientras DuckDB los convierte; luego se borran.
function claveStaging() {
  return `staging/${crypto.randomUUID()}.csv`;
}

// Sube un stream sin tamaño conocido (multipart) y devuelve los bytes escritos.
async function subirStream(clave, stream) {
  await asegurarBucket();
  try {
    await cliente.putObject(bucket, clave, stream);
  } catch (err) {
    // Un archivo de 0 bytes no tiene partes que subir: se guarda vacío para que
    // falle solo su conversión y no la petición entera.
    if (!/at least one part/i.test(err.message)) throw err;
    await cliente.putObject(bucket, clave, Buffer.alloc(0));
  }
  return tamanoObjeto(clave);
}

function eliminarObjeto(clave) {
  return cliente.removeObject(bucket, clave);
}

module.exports = {
  prefijoParticion,
  urlS3,
  patronDataset,
  asegurarBucket,
  tamanoObjeto,
  claveStaging,
  subirStream,
  eliminarObjeto
};
