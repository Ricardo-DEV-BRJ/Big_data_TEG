/**
 * Subida de CSV sin tocar el disco del backend: multer pasa cada archivo en
 * streaming directo a MinIO (staging/<id>.csv). Node nunca tiene el archivo
 * completo en memoria; el cliente de MinIO lo envía por partes.
 * Si la petición falla a medias, multer llama a _removeFile y se borra lo subido.
 */
const multer = require('multer');
const datalake = require('../models/datalakeModel');

const almacenMinio = {
  _handleFile(req, file, cb) {
    const clave = datalake.claveStaging();
    datalake.subirStream(clave, file.stream)
      .then((bytes) => cb(null, { clave, size: bytes }))
      .catch((err) => cb(err));
  },
  _removeFile(req, file, cb) {
    datalake.eliminarObjeto(file.clave)
      .then(() => cb(null))
      .catch((err) => cb(err));
  }
};

module.exports = multer({
  storage: almacenMinio,
  fileFilter: (req, file, cb) => cb(null, /\.csv$/i.test(file.originalname))
});
