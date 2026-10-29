/**
 * Tasas de cambio (multimoneda, apartado 6.4.4.4).
 *   GET  /api/tasas                  tasa vigente, alerta de tasa vencida, historial diario y últimos registros manuales
 *                                    (desde, hasta AAAA-MM-DD para el historial)
 *   GET  /api/tasas/sugerida         tasas del día según DolarApi para autorrellenar el registro (no guarda nada)
 *   GET  /api/tasas/margen-negativo  productos con ventas de margen negativo (limite)
 *   POST /api/tasas                  registra una tasa { fecha, hora HH:MM, tasa_bcv, tasa_usdt?, tasa_eur?, fuente }
 *                                    — Administración y Soporte TI
 */
const express = require('express');
const controller = require('../controllers/tasasController');
const auditoria = require('../models/auditoriaModel');
const { estadoDeError } = require('../utils/http');
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');
const { GRUPOS } = require('../config/roles');

const router = express.Router();
router.use(verToken, noCambioForzado);

function responder(res, promesa, estado = 200) {
  promesa
    .then((r) => res.status(estado).json(r))
    .catch((err) => res.status(estadoDeError(err)).json({ error: err.message }));
}

router.get('/', soloRoles(...GRUPOS.finanzas), (req, res) => responder(res, controller.resumen(req.query)));
router.get('/sugerida', soloRoles('administracion', 'administrador'), (req, res) => responder(res, controller.sugerida()));
router.get('/margen-negativo', soloRoles(...GRUPOS.finanzas), (req, res) => responder(res, controller.margenNegativo(req.query)));
router.post('/', soloRoles('administracion', 'administrador'), (req, res) => {
  const promesa = controller.registrar(req.body, req.usuario);
  promesa
    .then((r) => auditoria.registrar(req, { accion: 'tasa_registrada', entidad: 'tasa', entidad_id: r.nueva.id, anterior: r.anterior, nuevo: r.nueva }))
    .catch(() => {});
  responder(res, promesa.then((r) => r.nueva), 201);
});

module.exports = router;
