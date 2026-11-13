/**
 * Conexión a la base de datos de servicio (MariaDB / MySQL). Guarda el registro de
 * cada CSV subido (tabla ingestas) y las métricas ya calculadas que lee el front
 * (tablas definidas en tablas.sql).
 */
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const config = require('./index');

const pool = mysql.createPool({
  ...config.db,
  connectionLimit: 10,
  // DATE como texto 'AAAA-MM-DD' para evitar desplazamientos por zona horaria.
  dateStrings: ['DATE'],
  // BIGINT/DECIMAL como número (los conteos de filas caben de sobra en 2^53).
  supportBigNumbers: true,
  decimalNumbers: true,
  // TIMESTAMP en UTC en ambos lados, sin depender de la zona del servidor.
  timezone: 'Z'
});
pool.pool.on('connection', (conexion) => {
  conexion.query("SET time_zone = '+00:00'");
});

// Todo el esquema (usuarios, ingestas, métricas, auditoría...) vive en tablas.sql.
const ESQUEMA = sentenciasDe(path.join(__dirname, '..', 'tablas.sql'));

// Sentencias de un archivo .sql separadas por ";" (sin los comentarios "--").
function sentenciasDe(archivo) {
  return fs.readFileSync(archivo, 'utf8')
    .replace(/--.*$/gm, '')
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
}

let listo = null;
function iniciar() {
  if (!listo) {
    listo = (async () => {
      for (const sql of ESQUEMA) await pool.query(sql);
    })().catch((err) => { listo = null; throw err; });
  }
  return listo;
}

// Devuelve solo las filas (o el resultado de un INSERT/UPDATE).
async function query(sql, params) {
  await iniciar();
  const [filas] = await pool.query(sql, params);
  return filas;
}

// Ejecuta fn(conexion) dentro de una transacción: si fn falla, no se aplica nada.
async function transaccion(fn) {
  await iniciar();
  const conexion = await pool.getConnection();
  try {
    await conexion.beginTransaction();
    const resultado = await fn({
      query: async (sql, params) => (await conexion.query(sql, params))[0]
    });
    await conexion.commit();
    return resultado;
  } catch (err) {
    await conexion.rollback().catch(() => {});
    throw err;
  } finally {
    conexion.release();
  }
}

function cerrar() {
  return pool.end();
}

module.exports = { query, transaccion, cerrar };
