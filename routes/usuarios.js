/**
 * Rutas de autenticación y gestión de usuarios.
 * Montado en /api/auth
 *
 * Rutas públicas  (sin token):
 *   POST /api/auth/login
 *
 * Rutas protegidas (requieren token válido):
 *   POST   /api/auth/change-password   – cualquier usuario autenticado (incluso con must_change_password)
 *
 * Rutas protegidas + sin cambio pendiente:
 *   GET    /api/auth/usuarios           – solo administrador
 *   POST   /api/auth/usuarios           – solo administrador (registrar nuevo usuario)
 *   DELETE /api/auth/usuarios/:id       – solo administrador
 */
const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/usuarioController');
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');

// ── Públicas ──────────────────────────────────────────────────────────────────
router.post('/login', ctrl.login);

// ── Cambio de contraseña (accesible aunque must_change_password === true) ─────
router.post('/change-password', verToken, ctrl.cambiarPassword);

// ── Gestión de usuarios (solo administrador, contraseña ya cambiada) ──────────
router.get   ('/usuarios',     verToken, noCambioForzado, soloRoles('administrador'), ctrl.listar);
router.post  ('/usuarios',     verToken, noCambioForzado, soloRoles('administrador'), ctrl.registrar);
router.delete('/usuarios/:id', verToken, noCambioForzado, soloRoles('administrador'), ctrl.desactivar);

module.exports = router;