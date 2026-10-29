/**
 * Restaura tablas de MariaDB desde la copia local del respaldo (RESPALDO_DIR/AAAA-MM-DD).
 * Reemplaza el contenido de cada tabla en una transacción.
 * Uso: node --env-file=.env scripts/restaurar-respaldo.js <AAAA-MM-DD> [tabla ...]
 *      sin tablas restaura todas las del respaldo.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const readline = require('readline');
const config = require('../config');
const db = require('../config/mariadb');

const [fecha, ...pedidas] = process.argv.slice(2);
if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha || '')) {
  console.error('Uso: node --env-file=.env scripts/restaurar-respaldo.js <AAAA-MM-DD> [tabla ...]');
  process.exit(1);
}
const carpeta = path.join(config.respaldo.directorio, fecha);

async function leer(archivo) {
  const filas = [];
  const lector = readline.createInterface({ input: fs.createReadStream(archivo).pipe(zlib.createGunzip()) });
  for await (const linea of lector) if (linea.trim()) filas.push(JSON.parse(linea));
  return filas;
}

// mysql2 devuelve TIMESTAMP como Date; en el JSON quedan en ISO y MariaDB no acepta la "Z".
function valor(v) {
  return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(v) ? v.slice(0, 19).replace('T', ' ') : v;
}

(async () => {
  const disponibles = fs.readdirSync(carpeta).filter((a) => a.endsWith('.jsonl.gz')).map((a) => a.replace('.jsonl.gz', ''));
  const tablas = pedidas.length ? pedidas : disponibles;
  for (const tabla of tablas) {
    if (!disponibles.includes(tabla)) { console.error(`${tabla}: no está en el respaldo ${fecha}`); continue; }
    const filas = await leer(path.join(carpeta, tabla + '.jsonl.gz'));
    await db.transaccion(async (c) => {
      await c.query('DELETE FROM ??', [tabla]);
      if (!filas.length) return;
      const columnas = Object.keys(filas[0]);
      for (let i = 0; i < filas.length; i += 2000) {
        const lote = filas.slice(i, i + 2000).map((f) => columnas.map((col) => valor(f[col])));
        await c.query('INSERT INTO ?? (??) VALUES ?', [tabla, columnas, lote]);
      }
    });
    console.log(`${tabla}: ${filas.length} filas restauradas`);
  }
  await db.cerrar();
})().catch((err) => { console.error(err); process.exit(1); });
