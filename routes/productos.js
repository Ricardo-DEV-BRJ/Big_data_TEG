const express = require('express');
const { estadoDeError } = require('../utils/http');
const controller = require('../controllers/productosController')

const router = express.Router();

/**
 * POST /api/productos  (JSON)
 *   dataset   carpeta en el bucket (obligatorio)
 *   fecha     AAAA-MM-DD (opcional): solo ese día; sin fecha, todos los días
 */
router.post('/', function (req, res) {
  controller.promedio(req.body.dataset, req.body.fecha)
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(estadoDeError(err)).json({ error: err.message })
  });
});

router.post('/ventas', function (req, res) {
  controller.ventas(req.body.dataset, req.body.fecha)
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(estadoDeError(err)).json({ error: err.message })
  });
});

router.post('/ventas-cliente', function (req, res) {
  controller.ventasCliente(req.body.dataset, req.body.nom)
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(estadoDeError(err)).json({ error: err.message })
  });
});

router.get('/productos-top', function (req, res) {
  controller.productosTop()
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(estadoDeError(err)).json({ error: err.message })
  });
});

module.exports = router;
