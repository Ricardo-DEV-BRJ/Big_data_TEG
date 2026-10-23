const express = require('express');

const router = express.Router();

router.use('/ingestas', require('./ingestas'));
router.use('/productos', require('./productos'));
router.use('/tareas', require('./tareas'));
router.use('/metricas', require('./metricas'));

// Aquí se montan las rutas de consultas, p. ej.:
// router.use('/ventas', require('./ventas'));

module.exports = router;
