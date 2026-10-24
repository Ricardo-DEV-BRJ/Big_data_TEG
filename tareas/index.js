/**
 * Tareas programadas (node-cron). Se inician una sola vez al arrancar el
 * servidor (bin/www) y se repiten mientras el proceso siga encendido.
 *   respaldo-diario   copia tablas de MariaDB al data lake (RESPALDO_CRON)
 *   metricas-diarias  recalcula las tablas de métricas del front (METRICAS_CRON)
 */
const cron = require('node-cron');
const config = require('../config');
const respaldo = require('./respaldo');
const calculoMetricas = require('../models/calculoMetricasModel');

// Un error en la tarea se registra, pero no tumba el servidor ni detiene el cron.
async function ejecutarRespaldo() {
  try {
    await respaldo();
  } catch (err) {
    console.error('[respaldo] falló:', err);
  }
}

async function ejecutarMetricas() {
  try {
    const r = await calculoMetricas.recalcular();
    console.log(`[metricas] recalculadas en ${r.segundos} s: ${r.filas_ventas} ventas, corte ${r.fecha_corte}`);
  } catch (err) {
    console.error('[metricas] falló:', err.message);
  }
}

function programar(nombre, variable, { horario, zona }, tareaFn) {
  if (!cron.validate(horario)) throw new Error(variable + ' inválido: ' + horario);
  const tarea = cron.schedule(horario, tareaFn, {
    name: nombre,
    timezone: zona,
    noOverlap: true   // si la ejecución anterior no ha terminado, se salta esta
  });
  console.log(`[cron] ${nombre} programado "${horario}"${zona ? ' (' + zona + ')' : ''}, próxima ejecución: ${tarea.getNextRun().toLocaleString()}`);
  return tarea;
}

function iniciar() {
  return [
    programar('respaldo-diario', 'RESPALDO_CRON', config.respaldo, ejecutarRespaldo),
    programar('metricas-diarias', 'METRICAS_CRON', config.metricas, ejecutarMetricas)
  ];
}

module.exports = { iniciar };
