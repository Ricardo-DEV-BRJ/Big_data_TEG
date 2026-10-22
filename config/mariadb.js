/**
 * Conexión a la base de datos de servicio (MariaDB / MySQL). Por ahora solo guarda
 * el registro de cada CSV subido (tabla ingestas), que evita cargas duplicadas.
 */
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

const ESQUEMA = [
  `CREATE TABLE IF NOT EXISTS ingestas (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dataset VARCHAR(128) NOT NULL,
    fecha DATE NOT NULL,
    archivo_origen VARCHAR(512) NOT NULL,
    clave_parquet VARCHAR(1024) NOT NULL,
    filas BIGINT NOT NULL,
    bytes_csv BIGINT,
    bytes_parquet BIGINT,
    segundos DECIMAL(10,2),
    origen VARCHAR(16) NOT NULL DEFAULT 'api',
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX ingestas_dataset_fecha (dataset, fecha)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`
];

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

function cerrar() {
  return pool.end();
}

module.exports = { query, cerrar };
