/**
 * Consulta las tasas del día en DolarApi Venezuela (https://ve.dolarapi.com) para
 * sugerirlas en el registro manual de tasas. Solo sugiere: el usuario revisa, puede
 * editar y es quien registra (y queda en la bitácora).
 *   dólar oficial   -> tasa_bcv
 *   dólar paralelo  -> tasa_usdt (DolarApi lo calcula con el mercado P2P de USDT)
 *   euro oficial    -> tasa_eur
 */
const createError = require('http-errors');
const config = require('../config');

async function pedir(ruta) {
  let res;
  try {
    res = await fetch(`${config.dolarApi.url}${ruta}`, { signal: AbortSignal.timeout(config.dolarApi.timeoutMs) });
  } catch (err) {
    throw createError(502, `No se pudo consultar DolarApi: ${err.name === 'TimeoutError' ? 'tiempo de espera agotado' : err.message}`);
  }
  if (!res.ok) throw createError(502, `DolarApi respondió ${res.status}`);
  const datos = await res.json();
  if (!Array.isArray(datos)) throw createError(502, 'Respuesta inesperada de DolarApi');
  return datos;
}

function buscar(lista, fuente) {
  const t = lista.find((x) => x && x.fuente === fuente);
  const valor = t && Number(t.promedio ?? t.venta ?? t.compra);
  return Number.isFinite(valor) && valor > 0
    ? { valor: Math.round(valor * 10000) / 10000, actualizado: t.fechaActualizacion || null }
    : null;
}

// Fecha y hora actuales en la zona del negocio (DESFASE_NEGOCIO, p. ej. -04:00).
function ahoraLocal() {
  const [, signo, h, m] = /^([+-])(\d{2}):(\d{2})$/.exec(config.metricas.desfaseNegocio) || [null, '-', '04', '00'];
  const desfase = (signo === '-' ? -1 : 1) * (Number(h) * 60 + Number(m)) * 60000;
  const local = new Date(Date.now() + desfase).toISOString();
  return { fecha: local.slice(0, 10), hora: local.slice(11, 16) };
}

async function tasasDelDia() {
  const [dolares, euros] = await Promise.all([pedir('/dolares'), pedir('/euros')]);
  const bcv = buscar(dolares, 'oficial');
  if (!bcv) throw createError(502, 'DolarApi no devolvió el dólar oficial');
  const usdt = buscar(dolares, 'paralelo');
  const eur = buscar(euros, 'oficial');
  return {
    ...ahoraLocal(),
    tasa_bcv: bcv.valor,
    tasa_usdt: usdt ? usdt.valor : null,
    tasa_eur: eur ? eur.valor : null,
    fuente: 'DolarApi (BCV oficial / paralelo)',
    actualizado: { bcv: bcv.actualizado, usdt: usdt && usdt.actualizado, eur: eur && eur.actualizado }
  };
}

module.exports = { tasasDelDia };
