const express = require('express');
const subidaCsv = require('../middlewares/subidaCsv');
const ingestaController = require('../controllers/ingestaController');
const { estadoDeError } = require('../utils/http');

const router = express.Router();

/**
 * POST /api/ingestas  (multipart/form-data)
 *   dataset   nombre del dataset = carpeta en el bucket (obligatorio)
 *   fecha     día del reporte AAAA-MM-DD = subcarpeta (por defecto hoy)
 *   archivos  uno o varios .csv
 * 201 todo cargado · 207 errores parciales · 422 fallaron todos
 */
router.post('/', subidaCsv.array('archivos'), (req, res) => {
  ingestaController.crear({ dataset: req.body.dataset, fecha: req.body.fecha }, req.files || [])
    .then((resultado) => {
      const estado = !resultado.errores.length ? 201 : resultado.ingestas.length ? 207 : 422;
      res.status(estado).json(resultado);
    })
    .catch((err) => res.status(estadoDeError(err)).json({ error: err.message }));
});

module.exports = router;
