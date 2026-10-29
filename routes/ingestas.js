const express = require('express');
const createError = require('http-errors');
const subidaCsv = require('../middlewares/subidaCsv');
const ingestaController = require('../controllers/ingestaController');
const auditoria = require('../models/auditoriaModel');
const { estadoDeError } = require('../utils/http');
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');
const { CARGA_POR_ROL } = require('../config/roles');

const router = express.Router();

// Cada rol solo carga los datasets de su área (ver CARGA_POR_ROL). Se valida después
// de recibir el formulario porque el dataset llega en el multipart.
function datasetPermitido(req) {
  const permitidos = CARGA_POR_ROL[req.usuario.rol];
  const dataset = String(req.body.dataset || '').trim().toLowerCase();
  if (permitidos && !permitidos.includes(dataset)) {
    throw createError(403, `El rol ${req.usuario.rol} solo puede cargar: ${permitidos.join(', ')}`);
  }
}

/**
 * POST /api/ingestas  (multipart/form-data)  — administrador, administracion, almacen
 *   dataset   nombre del dataset = carpeta en el bucket (obligatorio)
 *   fecha     día del reporte AAAA-MM-DD = subcarpeta (por defecto hoy)
 *   archivos  uno o varios .csv
 * 201 todo cargado · 207 errores parciales · 422 fallaron todos · 403 dataset no permitido para el rol
 */
router.post('/',
  verToken, noCambioForzado, soloRoles(...Object.keys(CARGA_POR_ROL)),
  subidaCsv.array('archivos'),
  (req, res) => {
    let promesa
    try {
      datasetPermitido(req);
      promesa = ingestaController.crear({ dataset: req.body.dataset, fecha: req.body.fecha }, req.files || []);
    } catch (err) {
      promesa = Promise.reject(err);
      ingestaController.descartar(req.files || []);
    }
    promesa
      .then((resultado) => {
        const estado = !resultado.errores.length ? 201 : resultado.ingestas.length ? 207 : 422;
        auditoria.registrar(req, {
          accion: 'ingesta', entidad: 'dataset', entidad_id: resultado.dataset, resultado: estado === 422 ? 'error' : 'ok',
          nuevo: {
            fecha: resultado.fecha,
            archivos: resultado.ingestas.map((i) => ({ archivo: i.archivo_origen, filas: i.filas })),
            errores: resultado.errores
          }
        });
        res.status(estado).json(resultado);
      })
      .catch((err) => {
        auditoria.registrar(req, { accion: 'ingesta', entidad: 'dataset', entidad_id: req.body.dataset || null, resultado: 'error', nuevo: { error: err.message } });
        res.status(estadoDeError(err)).json({ error: err.message });
      });
  });

module.exports = router;
