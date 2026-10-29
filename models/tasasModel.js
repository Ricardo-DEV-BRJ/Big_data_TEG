/**
 * Tasas de cambio (apartado 6.4.4.4): Bs por USD (BCV), por USDT y por EUR, con fecha,
 * hora y fuente. Combina el reporte de tasas del data lake (dim_tasa, lo llena el
 * recálculo) con las tasas que registra Administración a mano (tasas_registro).
 */
const db = require('../config/mariadb');
const config = require('../config');

const UNION = `
  SELECT fecha, TIME_FORMAT(hora, '%H:%i') AS hora, tasa_bcv, tasa_usdt, tasa_eur, fuente, 'Registro manual' AS origen
    FROM tasas_registro
  UNION ALL
  SELECT fecha, COALESCE(hora, '00:00') AS hora, tasa_bcv, tasa_usdt, tasa_eur, fuente, 'Reporte de tasas' AS origen
    FROM dim_tasa`;

class tasasModel {

  // Última tasa registrada y cuántas horas lleva sin actualizarse.
  async vigente() {
    const [ultima] = await db.query(`
      SELECT t.*,
             ROUND(TIMESTAMPDIFF(MINUTE, CONVERT_TZ(TIMESTAMP(t.fecha, t.hora), ?, '+00:00'), UTC_TIMESTAMP()) / 60, 1) AS horas_sin_actualizar
        FROM (${UNION}) t
       ORDER BY t.fecha DESC, t.hora DESC, t.origen = 'Registro manual' DESC
       LIMIT 1`, [config.metricas.desfaseNegocio])
    if (!ultima) return { tasa: null, vencida: true, horas_limite: config.metricas.horasTasaVigente }
    return {
      tasa: ultima,
      vencida: ultima.horas_sin_actualizar === null || ultima.horas_sin_actualizar > config.metricas.horasTasaVigente,
      horas_limite: config.metricas.horasTasaVigente,
      brecha_usdt_pct: ultima.tasa_usdt && ultima.tasa_bcv ? Math.round(10000 * (ultima.tasa_usdt / ultima.tasa_bcv - 1)) / 100 : null
    }
  }

  // Una fila por día (si hay varias, la última hora) dentro del rango.
  historial(f) {
    const condiciones = []
    const params = []
    if (f.desde) { condiciones.push('fecha >= ?'); params.push(f.desde) }
    if (f.hasta) { condiciones.push('fecha <= ?'); params.push(f.hasta) }
    return db.query(`
      SELECT fecha, hora, tasa_bcv, tasa_usdt, tasa_eur, fuente, origen
        FROM (SELECT t.*, ROW_NUMBER() OVER (PARTITION BY fecha ORDER BY hora DESC, origen = 'Registro manual' DESC) AS n
                FROM (${UNION}) t) x
       WHERE n = 1 ${condiciones.length ? 'AND ' + condiciones.join(' AND ') : ''}
       ORDER BY fecha`, params)
  }

  registradas(limite) {
    return db.query('SELECT * FROM tasas_registro ORDER BY fecha DESC, hora DESC LIMIT ?', [limite])
  }

  async registrar({ fecha, hora, tasa_bcv, tasa_usdt, tasa_eur, fuente }, usuarioId) {
    const r = await db.query(
      `INSERT INTO tasas_registro (fecha, hora, tasa_bcv, tasa_usdt, tasa_eur, fuente, registrado_por)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [fecha, hora, tasa_bcv, tasa_usdt, tasa_eur, fuente, usuarioId])
    const [fila] = await db.query('SELECT * FROM tasas_registro WHERE id = ?', [r.insertId])
    return fila
  }

  margenNegativo(limite) {
    return db.query('SELECT * FROM alertas_margen ORDER BY margen ASC LIMIT ?', [limite])
  }

}

module.exports = new tasasModel();
