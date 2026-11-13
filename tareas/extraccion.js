/**
 * Extracción diaria simulada: a medianoche (EXTRACCION_CRON) se "extraen" de la base de
 * datos del sistema administrativo las operaciones del día que acaba de terminar
 * (~EXTRACCION_FILAS ventas, su inventario, compras, metas y tasa) y se cargan como
 * Parquet en cada dataset, en la partición fecha_carga=<día extraído>. Usa el generador
 * de scripts/generar-ventas.js con el catálogo de siempre y:
 *   - semilla = AAAAMMDD del día: volver a extraer un día da los mismos datos;
 *   - id de venta = AAAAMMDD × 100 000 + n y orden de compra OC-AAAAMMDD-n: no chocan con
 *     la carga inicial ni con otros días (no se marcan como duplicados);
 *   - si el día ya se extrajo (ingestas con origen 'extraccion' en esa fecha), no hace nada:
 *     volver a cargarlo repetiría los mismos id.
 * Las cargas quedan en ingestas, así la revisión de 15 min recalcula las métricas.
 *
 * Manual: npm run extraccion -- [AAAA-MM-DD=ayer]
 */
const config = require('../config');
const db = require('../config/mariadb');
const v = require('../utils/validaciones');
const { generar } = require('../scripts/generar-ventas');

const ORIGEN = 'extraccion';

// Fecha AAAA-MM-DD de hoy en la zona de las tareas (o la del servidor).
function hoyEn(zona) {
  if (!zona) return v.hoy();
  return new Intl.DateTimeFormat('en-CA', { timeZone: zona, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

function diaAnterior(fecha) {
  return new Date(Date.parse(fecha + 'T00:00:00Z') - 86400000).toISOString().slice(0, 10);
}

/**
 * @param {string} [fecha]  día a extraer; por defecto, ayer
 * @returns {Promise<object|null>} resumen, o null si el día ya estaba extraído
 */
async function extraer(fecha) {
  const dia = v.validarFecha(fecha || diaAnterior(hoyEn(config.extraccion.zona)));
  const log = (texto) => console.log('[extraccion] ' + texto.trim());

  const [previa] = await db.query('SELECT count(*) AS n FROM ingestas WHERE origen = ? AND fecha = ?', [ORIGEN, dia]);
  if (Number(previa.n)) {
    log(`el ${dia} ya fue extraído (${previa.n} cargas); se omite`);
    return null;
  }

  const compacto = dia.replace(/-/g, '');
  return generar({
    total: config.extraccion.filas,
    desde: dia,
    hasta: dia,
    semilla: Number(compacto),
    fechaCarga: dia,
    idInicial: Number(compacto) * 100000,
    prefijoOrden: `OC-${compacto}-`,
    origen: ORIGEN,
    log
  });
}

module.exports = { extraer };

if (require.main === module) {
  extraer(process.argv[2])
    .then(() => db.cerrar())
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('[extraccion] falló:', err.message);
      process.exit(1);
    });
}
