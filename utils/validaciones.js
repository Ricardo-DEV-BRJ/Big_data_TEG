const createError = require('http-errors');

function normalizarDataset(nombre) {
  let limpio = String(nombre || '').toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9_]+/g, '_').replace(/^_+|_+$/g, '');
  if (!limpio) throw createError(400, 'Nombre de dataset inválido');
  if (/^[0-9]/.test(limpio)) limpio = 'ds_' + limpio;
  return limpio;
}

function hoy() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function validarFecha(fecha) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha || '') || isNaN(Date.parse(fecha))) {
    throw createError(400, 'Fecha inválida (formato AAAA-MM-DD): ' + fecha);
  }
  return fecha;
}

function fechaOpcional(fecha) {
  return fecha ? validarFecha(fecha) : null;
}

function entero(valor, porDefecto, maximo) {
  const n = parseInt(valor, 10);
  return Math.min(Number.isFinite(n) && n > 0 ? n : porDefecto, maximo);
}

module.exports = { normalizarDataset, validarFecha, fechaOpcional, hoy, entero };
