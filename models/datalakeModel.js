/**
 * Convención de rutas del data lake en MinIO:
 *   s3://<bucket>/parquet/<dataset>/fecha_carga=AAAA-MM-DD/<archivo>.parquet
 *   s3://<bucket>/staging/<id>.csv   (CSV recibido, solo mientras se convierte)
 * La partición "fecha_carga=" (estilo Hive; no se llama "fecha" para no chocar
 * con columnas propias de los CSV) permite a DuckDB leer solo los días que
 * filtra una sentencia.
 */
const crypto = require('crypto');
const path = require('path');
const { cliente, bucket } = require('../config/minio');

function prefijoParticion(dataset, fecha) {
  return `parquet/${dataset}/fecha_carga=${fecha}/`;
}

function nombreParquet(origen) {
  const base = path.basename(origen, path.extname(origen))
    .normalize('NFD').replace(/\p{M}/gu, '').replace(/[^A-Za-z0-9_-]+/g, '_') || 'archivo';
  const marca = new Date().toISOString().replace(/[-:]/g, '').replace(/\..+/, '');
  // El sufijo aleatorio evita que dos archivos con el mismo nombre creados en el
  // mismo segundo se sobrescriban en MinIO.
  return `${base}_${marca}_${crypto.randomBytes(4).toString('hex')}.parquet`;
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

// Los archivos (CSV recibidos, JSON de respaldos) esperan en staging/ mientras
// DuckDB los convierte; luego se borran.
function claveStaging(extension = 'csv') {
  return `staging/${crypto.randomUUID()}.${extension}`;
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
  nombreParquet,
  urlS3,
  patronDataset,
  asegurarBucket,
  tamanoObjeto,
  claveStaging,
  subirStream,
  eliminarObjeto
};
