const createError = require('http-errors');
const v = require('../utils/validaciones');
const ingestaModel = require('../models/ingestaModel');
const datalakeModel = require('../models/datalakeModel');

// Si la validación falla, los CSV ya subidos a staging/ se borran.
function descartarSubidos(archivos) {
  for (const f of archivos) {
    datalakeModel.eliminarObjeto(f.clave).catch((err) => console.error('No se pudo borrar', f.clave, err.message));
  }
}

/**
 * Convierte cada CSV a Parquet y lo guarda en el bucket en parquet/<dataset>/fecha_carga=<fecha>/.
 * @param {{dataset: string, fecha?: string}} datos
 * @param {Array<{clave: string, size: number, originalname: string}>} archivos  CSV ya en staging/ de MinIO
 * @returns {Promise<{dataset, fecha, ingestas, errores}>}
 */
function crear(datos, archivos) {
  return new Promise((resolve, reject) => {
    let dataset, fecha;
    try {
      dataset = v.normalizarDataset(datos.dataset);
      fecha = v.validarFecha(datos.fecha || v.hoy());
      if (!archivos.length) throw createError(400, 'No se recibió ningún archivo .csv en el campo "archivos"');
    } catch (err) {
      descartarSubidos(archivos);
      return reject(err);
    }

    const resultado = { dataset, fecha, ingestas: [], errores: [] };

    // Un archivo a la vez: cada conversión ya usa todos los núcleos de DuckDB.
    archivos.reduce((cadena, f) => cadena.then(() =>
      ingestaModel.crear(f, { dataset, fecha, archivoOrigen: f.originalname })
        .then((ingesta) => resultado.ingestas.push(ingesta))
        .catch((err) => resultado.errores.push({ archivo: f.originalname, mensaje: err.message }))
    ), Promise.resolve())
      .then(() => resolve(resultado))
      .catch((err) => reject(err));
  });
}

module.exports = { crear, descartar: descartarSubidos };
