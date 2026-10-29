/**
 * Respaldo diario de la base de servicio con esquema 3-2-1 (apartado 6.4.3):
 *   copia 1  data lake (MinIO): parquet/respaldo_<tabla>/fecha_carga=AAAA-MM-DD/
 *   copia 2  otro medio: RESPALDO_DIR/AAAA-MM-DD/<tabla>.jsonl.gz + manifiesto.json
 *            (un disco externo, NAS o carpeta sincronizada); se conservan RESPALDO_RETENCION_DIAS
 *   copia 3  fuera del sitio: sincronizar RESPALDO_DIR con la nube (p. ej. rclone o la
 *            carpeta de un servicio de almacenamiento); no la hace esta tarea.
 * Se respaldan todas las tablas de la base (las de métricas se pueden recalcular desde el
 * data lake, pero se copian para restaurar sin esperar el recálculo).
 * Restaurar: node scripts/restaurar-respaldo.js <AAAA-MM-DD> [tabla...]
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { pipeline } = require('stream/promises');
const { Readable } = require('stream');
const db = require('../config/mariadb');
const config = require('../config');
const parquet = require('../models/parquetModel');
const auditoria = require('../models/auditoriaModel');
const v = require('../utils/validaciones');

async function tablas() {
  const filas = await db.query('SHOW FULL TABLES WHERE Table_type = ?', ['BASE TABLE']);
  return filas.map((f) => Object.values(f)[0]).sort();
}

function* lineas(registros) {
  for (const r of registros) yield JSON.stringify(r) + '\n';
}

async function copiaLocal(carpeta, tabla, registros) {
  const archivo = path.join(carpeta, tabla + '.jsonl.gz');
  await pipeline(Readable.from(lineas(registros)), zlib.createGzip(), fs.createWriteStream(archivo));
  return fs.statSync(archivo).size;
}

// Borra las carpetas AAAA-MM-DD más antiguas que la retención.
function aplicarRetencion(directorio, dias) {
  const limite = new Date(Date.now() - dias * 86400000).toISOString().slice(0, 10);
  for (const nombre of fs.readdirSync(directorio)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(nombre) && nombre < limite) {
      fs.rmSync(path.join(directorio, nombre), { recursive: true, force: true });
      console.log(`[respaldo] retención: eliminado ${nombre}`);
    }
  }
}

// Si una tabla falla se registra el error y se sigue con las demás.
async function respaldo() {
  const fecha = v.hoy();
  const { directorio, retencionDias } = config.respaldo;
  const carpeta = path.join(directorio, fecha);
  fs.mkdirSync(carpeta, { recursive: true });
  console.log(`[respaldo] iniciado: ${new Date().toLocaleString()} -> MinIO y ${carpeta}`);

  const manifiesto = { fecha, inicio: new Date().toISOString(), tablas: {} };
  for (const tabla of await tablas()) {
    const r = { filas: 0, minio: null, local_bytes: 0, error: null };
    try {
      const registros = await db.query('SELECT * FROM ??', [tabla]);
      const columnas = (await db.query('SHOW COLUMNS FROM ??', [tabla])).map((c) => c.Field);
      r.filas = registros.length;
      r.local_bytes = await copiaLocal(carpeta, tabla, registros);
      try {
        r.minio = (await parquet.guardar({ dataset: 'respaldo_' + tabla, columnas, registros, nombre: tabla, fecha })).clave;
      } catch (err) {
        r.error = 'MinIO: ' + err.message;
      }
      console.log(`[respaldo] ${tabla}: ${r.filas} filas${r.minio ? ' -> ' + r.minio : ''}${r.error ? ' (' + r.error + ')' : ''}`);
    } catch (err) {
      r.error = err.message;
      console.error(`[respaldo] ${tabla} falló:`, err.message);
    }
    manifiesto.tablas[tabla] = r;
  }
  manifiesto.fin = new Date().toISOString();
  fs.writeFileSync(path.join(carpeta, 'manifiesto.json'), JSON.stringify(manifiesto, null, 2));
  aplicarRetencion(directorio, retencionDias);

  const errores = Object.entries(manifiesto.tablas).filter(([, r]) => r.error).map(([t, r]) => `${t}: ${r.error}`);
  await auditoria.registrar(null, {
    accion: 'respaldo', entidad: 'base_de_datos', entidad_id: fecha, resultado: errores.length ? 'error' : 'ok',
    nuevo: { carpeta, tablas: Object.keys(manifiesto.tablas).length, errores }
  });
  console.log(`[respaldo] terminado${errores.length ? ' con ' + errores.length + ' errores' : ''}`);
  return manifiesto;
}

module.exports = respaldo;
