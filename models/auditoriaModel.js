/**
 * Bitácora de auditoría (Tabla 18 y apartado 6.4.3): quién hizo qué, cuándo, desde
 * dónde y con qué valores antes y después. Registrar nunca interrumpe la operación
 * que se audita: si falla la escritura, solo se informa en consola.
 */
const db = require('../config/mariadb');

const MAX_JSON = 60000;

function aJson(valor) {
  if (valor === undefined || valor === null) return null;
  const texto = JSON.stringify(valor);
  return texto.length > MAX_JSON ? texto.slice(0, MAX_JSON) : texto;
}

function ipDe(req) {
  return (req && (req.ip || (req.socket && req.socket.remoteAddress))) || null;
}

/**
 * @param {object} req      petición (toma usuario e IP); puede ser null en tareas internas
 * @param {object} entrada  { accion, entidad, entidad_id, anterior, nuevo, resultado, email }
 */
async function registrar(req, { accion, entidad = null, entidad_id = null, anterior = null, nuevo = null, resultado = 'ok', email = null }) {
  const u = (req && req.usuario) || {};
  try {
    await db.query(
      `INSERT INTO auditoria (usuario_id, email, rol, accion, entidad, entidad_id, valor_anterior, valor_nuevo, ip, resultado)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [u.id || null, u.email || email, u.rol || null, accion, entidad,
        entidad_id === null ? null : String(entidad_id), aJson(anterior), aJson(nuevo), ipDe(req), resultado]
    );
  } catch (err) {
    console.error('[auditoria] no se pudo registrar', accion, err.message);
  }
}

async function listar({ desde, hasta, accion, email, pagina = 1, porPagina = 50 }) {
  const condiciones = [];
  const params = [];
  if (desde) { condiciones.push('fecha >= ?'); params.push(desde); }
  if (hasta) { condiciones.push('fecha < DATE_ADD(?, INTERVAL 1 DAY)'); params.push(hasta); }
  if (accion) { condiciones.push('accion = ?'); params.push(accion); }
  if (email) { condiciones.push('email LIKE ?'); params.push(`%${email}%`); }
  const where = condiciones.length ? 'WHERE ' + condiciones.join(' AND ') : '';
  const [filas, [total], acciones] = await Promise.all([
    db.query(`SELECT * FROM auditoria ${where} ORDER BY id DESC LIMIT ? OFFSET ?`, [...params, porPagina, (pagina - 1) * porPagina]),
    db.query(`SELECT COUNT(*) AS total FROM auditoria ${where}`, params),
    db.query('SELECT DISTINCT accion FROM auditoria ORDER BY accion')
  ]);
  return { filas, total: total.total, acciones: acciones.map((a) => a.accion) };
}

module.exports = { registrar, listar };
