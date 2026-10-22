// Código HTTP para un error rechazado por un controlador. Los errores de
// validación traen su propio status (400/404); el resto son 500 y se registran.
function estadoDeError(err) {
  const estado = err.status || 500;
  if (estado >= 500) console.error(err);
  return estado;
}

module.exports = { estadoDeError };
