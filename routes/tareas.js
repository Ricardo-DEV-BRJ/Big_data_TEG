const express = require('express');
const { estadoDeError } = require('../utils/http');
const controller = require('../controllers/tareasController')
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');

const router = express.Router();
router.use(verToken, noCambioForzado, soloRoles('gerente', 'administrador'));

/**
 * POST /api/productos  (JSON)
 *   dataset   carpeta en el bucket (obligatorio)
 *   fecha     AAAA-MM-DD (opcional): solo ese día; sin fecha, todos los días
 */
router.get('/', function (req, res) {
  controller.tareasRealizadas()
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(estadoDeError(err)).json({ error: err.message })
  });
});


module.exports = router;
