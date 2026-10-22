/**
 * Tareas programadas (node-cron). Se inician una sola vez al arrancar el
 * servidor (bin/www) y se repiten mientras el proceso siga encendido.
 */
const cron = require('node-cron');
const config = require('../config');
const respaldo = require('./respaldo');

// Un error en la tarea se registra, pero no tumba el servidor ni detiene el cron.
async function ejecutarRespaldo() {
  try {
    await respaldo();
  } catch (err) {
    console.error('[respaldo] falló:', err);
  }
}

function iniciar() {
  const { horario, zona } = config.respaldo;
  if (!cron.validate(horario)) throw new Error('RESPALDO_CRON inválido: ' + horario);

  const tarea = cron.schedule(horario, ejecutarRespaldo, {
    name: 'respaldo-diario',
    timezone: zona,
    noOverlap: true   // si el respaldo anterior no ha terminado, se salta esta ejecución
  });
  console.log(`[cron] respaldo programado "${horario}"${zona ? ' (' + zona + ')' : ''}, próxima ejecución: ${tarea.getNextRun().toLocaleString()}`);
  return tarea;
}

module.exports = { iniciar };
