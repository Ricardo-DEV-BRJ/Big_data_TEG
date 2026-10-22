const createError = require('http-errors');

function noEncontrado(req, res, next) {
  next(createError(404, `Ruta no encontrada: ${req.method} ${req.originalUrl}`));
}

// Todas las respuestas de error van en JSON: { error, stack? }
// eslint-disable-next-line no-unused-vars
function manejador(err, req, res, next) {
  const estado = err.status || 500;
  if (estado >= 500) console.error(err);
  res.status(estado).json({
    error: err.message,
    stack: req.app.get('env') === 'development' && estado >= 500 ? err.stack : undefined
  });
}

module.exports = { noEncontrado, manejador };
