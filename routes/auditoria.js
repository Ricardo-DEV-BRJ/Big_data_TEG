/**
 * GET /api/auditoria — bitácora de auditoría (Gerencia y Soporte TI).
 *   desde, hasta  AAAA-MM-DD   accion   email (contiene)   page (1..)   itemsPerPage (1..100, por defecto 50)
 */
const express = require('express');
const createError = require('http-errors');
const v = require('../utils/validaciones');
const auditoria = require('../models/auditoriaModel');
const { estadoDeError } = require('../utils/http');
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');
const { GRUPOS } = require('../config/roles');

const router = express.Router();
router.use(verToken, noCambioForzado, soloRoles(...GRUPOS.direccion));

router.get('/', (req, res) => {
  Promise.resolve()
    .then(() => {
      const q = req.query;
      const pagina = Number(q.page || 1);
      const porPagina = Number(q.itemsPerPage || 50);
      if (!Number.isInteger(pagina) || pagina < 1 || !Number.isInteger(porPagina) || porPagina < 1 || porPagina > 100) {
        throw createError(400, 'La paginación debe ser válida (itemsPerPage máximo: 100)');
      }
      const texto = (x) => (typeof x === 'string' && x.trim() ? x.trim().slice(0, 150) : null);
      return auditoria.listar({
        desde: v.fechaOpcional(q.desde),
        hasta: v.fechaOpcional(q.hasta),
        accion: texto(q.accion),
        email: texto(q.email),
        pagina,
        porPagina
      });
    })
    .then((r) => res.json(r))
    .catch((err) => res.status(estadoDeError(err)).json({ error: err.message }));
});

module.exports = router;
