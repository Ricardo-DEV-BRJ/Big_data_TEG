/**
 * Respaldo diario: copia tablas de MariaDB al data lake como Parquet, en
 *   parquet/respaldo_<tabla>/fecha_carga=AAAA-MM-DD/
 * Para respaldar otra tabla basta con agregarla a TABLAS.
 */
const db = require('../config/mariadb');
const parquet = require('../models/parquetModel');

// Tablas que se respaldan y columnas (encabezado) que se copian de cada una.
const TABLAS = [
  {
    tabla: 'ingestas',
    columnas: ['id', 'dataset', 'fecha', 'archivo_origen', 'clave_parquet', 'filas',
      'bytes_csv', 'bytes_parquet', 'segundos', 'origen', 'creado_en']
  }
];

// Consulta las columnas de una tabla y las guarda como Parquet en MinIO.
async function respaldarTabla({ tabla, columnas }) {
  // ?? escapa nombres de tabla y columnas (un arreglo se convierte en `a`, `b`, ...).
  const registros = await db.query('SELECT ?? FROM ??', [columnas, tabla]);
  return parquet.guardar({ dataset: 'respaldo_' + tabla, columnas, registros, nombre: tabla });
}

// Si una tabla falla se registra el error y se sigue con las demás.
async function respaldo() {
  console.log(`[respaldo] iniciado: ${new Date().toLocaleString()}`);
  for (const t of TABLAS) {
    try {
      const r = await respaldarTabla(t);
      console.log(r.clave
        ? `[respaldo] ${t.tabla}: ${r.filas} filas -> ${r.clave} (${r.bytes} bytes)`
        : `[respaldo] ${t.tabla}: sin registros, no se generó archivo`);
    } catch (err) {
      console.error(`[respaldo] ${t.tabla} falló:`, err.message);
    }
  }
  console.log('[respaldo] terminado');
}

module.exports = respaldo;
