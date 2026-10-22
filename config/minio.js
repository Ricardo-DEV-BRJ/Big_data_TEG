/**
 * Conexión al almacén de objetos (data lake).
 */
const Minio = require('minio');
const config = require('./index');

const cliente = new Minio.Client({
  endPoint: config.minio.endPoint,
  port: config.minio.port,
  useSSL: config.minio.useSSL,
  accessKey: config.minio.accessKey,
  secretKey: config.minio.secretKey
});

module.exports = { cliente, bucket: config.minio.bucket };
