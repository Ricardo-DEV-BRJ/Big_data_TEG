const express = require('express');

const router = express.Router();

router.use('/auth',     require('./usuarios'));
router.use('/ingestas', require('./ingestas'));
router.use('/productos', require('./productos'));
router.use('/tareas',   require('./tareas'));
router.use('/metricas', require('./metricas'));
router.use('/tasas',    require('./tasas'));
router.use('/auditoria', require('./auditoria'));

// Aquí se montan las rutas de consultas, p. ej.:\n// router.use('/ventas', require('./ventas'));

module.exports = router;

