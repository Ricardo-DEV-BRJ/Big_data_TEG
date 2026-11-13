/**
 * Inyecta registros duplicados en el data lake para comprobar las reglas de
 * duplicados del cálculo de métricas (models/calculoMetricasModel.js). Toma filas
 * reales de los Parquet ya cargados (npm run csv) y escribe copias en archivos
 * nuevos "duplicados_*.parquet" en la partición fecha_carga=<hoy> de cada dataset:
 *
 *   ventas      duplicados_ventas_id            misma venta con el mismo id (reporte subido dos veces)
 *                                               -> regla id_duplicado (se excluyen de las métricas)
 *               duplicados_ventas_posibles      otro id, mismo cliente, producto, cantidad y total,
 *                                               1-8 min después -> regla posible_duplicado
 *               duplicados_ventas_fuera_ventana igual que el anterior pero 20-59 min después:
 *                                               NO debe marcarse (control de falsos positivos)
 *   inventario  duplicados_inventario           mismo día, sucursal y producto -> regla fila_duplicada
 *   compras     duplicados_compras              mismo número de orden -> regla orden_duplicada
 *
 * Cada archivo queda registrado en la tabla ingestas con origen 'duplicados'.
 * Ojo: los duplicados de inventario y compras (y los posibles duplicados de ventas,
 * que tienen otro id) sí entran en las métricas, como pasaría con datos reales.
 * Para quitarlos: npm run csv-duplicados -- --limpiar
 *
 * Uso: node --env-file=.env scripts/generar-duplicados.js [ventas_id=50] [ventas_posibles=30]
 *        [ventas_fuera_ventana=20] [inventario=40] [compras=20] [--verificar] [--limpiar]
 *
 *   --verificar  recalcula las métricas antes y después de inyectar y compara lo que
 *                detectó cada regla con lo esperado (sale con código 1 si algo no cuadra)
 *   --limpiar    borra del data lake y de ingestas todo lo inyectado por este script
 */
const config = require('../config');
const db = require('../config/mariadb');
const duckdb = require('../config/duckdb');
const { cliente, bucket } = require('../config/minio');
const datalake = require('../models/datalakeModel');
const calculoMetricas = require('../models/calculoMetricasModel');
const v = require('../utils/validaciones');

const ORIGEN = 'duplicados';
const DATASETS = config.metricas.datasets;
const banderas = process.argv.slice(2).filter((a) => a.startsWith('--'));
const numeros = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const desconocidas = banderas.filter((b) => !['--verificar', '--limpiar'].includes(b));
if (desconocidas.length) {
  console.error('Opción desconocida: ' + desconocidas.join(' ') + '. Use --verificar o --limpiar.');
  process.exit(1);
}

function cantidad(i, porDefecto) {
  if (numeros[i] === undefined) return porDefecto;
  const n = parseInt(numeros[i], 10);
  if (!(n >= 0)) {
    console.error('Cantidad inválida: ' + numeros[i]);
    process.exit(1);
  }
  return n;
}

const CANTIDADES = {
  ventas_id: cantidad(0, 50),
  ventas_posibles: cantidad(1, 30),
  ventas_fuera_ventana: cantidad(2, 20),
  inventario: cantidad(3, 40),
  compras: cantidad(4, 20)
};
const FECHA = v.hoy();
// Semilla del orden de muestreo: cambia en cada ejecución para no repetir siempre las mismas filas.
const SEMILLA = Date.now() % 1000000;

function origenParquet(dataset) {
  return `read_parquet(${duckdb.literal(datalake.patronDataset(dataset))}, union_by_name = true, hive_partitioning = false)`;
}

async function columnasDe(dataset) {
  try {
    return new Set((await duckdb.consultar(`DESCRIBE SELECT * FROM ${origenParquet(dataset)}`)).map((c) => c.column_name));
  } catch (err) {
    if (/No files found/i.test(err.message)) return null;
    throw err;
  }
}

// Escribe el resultado de "select" como Parquet en la partición de hoy y lo registra en ingestas.
async function escribir(dataset, nombre, select) {
  const inicio = Date.now();
  const clave = datalake.prefijoParticion(dataset, FECHA) + datalake.nombreParquet(nombre);
  const [r] = await duckdb.consultar(
    `COPY (${select}) TO ${duckdb.literal(datalake.urlS3(clave))} (FORMAT parquet, COMPRESSION zstd, ROW_GROUP_SIZE 122880)`
  );
  const filas = r ? Number(r.Count) : 0;
  await db.query(
    'INSERT INTO ingestas (dataset, fecha, archivo_origen, clave_parquet, filas, bytes_csv, bytes_parquet, segundos, origen) ' +
    'VALUES (?,?,?,?,?,?,?,?,?)',
    [dataset, FECHA, nombre + '.parquet', clave, filas, null, await datalake.tamanoObjeto(clave),
      ((Date.now() - inicio) / 1000).toFixed(2), ORIGEN]
  );
  console.log(`  ${dataset}: ${filas} filas -> ${clave}`);
  return { clave, filas };
}

// Cláusula REPLACE de un SELECT *: las columnas que cambian y, si existe, _archivo_origen
// con el nombre del archivo de duplicados para que se sepa de dónde salió cada fila.
function reemplazar(columnas, nombre, cambios = []) {
  const todos = columnas.has('_archivo_origen') ? [...cambios, `${duckdb.literal(nombre + '.parquet')} AS _archivo_origen`] : cambios;
  return todos.length ? ` REPLACE (${todos.join(', ')})` : '';
}

async function inyectarVentas(esperado) {
  const ds = DATASETS.ventas;
  const columnas = await columnasDe(ds);
  if (!columnas) {
    console.log(`  ${ds}: sin archivos, se omite (ejecute primero npm run csv)`);
    return {};
  }
  await duckdb.consultar(`CREATE OR REPLACE TABLE dup_ventas AS SELECT * FROM ${origenParquet(ds)}`);
  const ids = {};

  if (CANTIDADES.ventas_id) {
    const r = await escribir(ds, 'duplicados_ventas_id',
      `SELECT *${reemplazar(columnas, 'duplicados_ventas_id')}
         FROM dup_ventas WHERE id IS NOT NULL
        ORDER BY hash(id, ${SEMILLA}) LIMIT ${CANTIDADES.ventas_id}`);
    esperado.push({ dataset: ds, regla: 'id_duplicado', incremento: r.filas });
  }

  // Ventas originales que no tienen otra igual (cliente, producto, cantidad, total) ese día,
  // para que el conteo esperado sea exacto. Las primeras van a "posibles" y las siguientes a
  // "fuera de ventana": nunca comparten original, así no quedan a menos de 15 min entre sí.
  const nPos = CANTIDADES.ventas_posibles;
  const nFuera = CANTIDADES.ventas_fuera_ventana;
  if (nPos || nFuera) {
    await duckdb.consultar(`
      CREATE OR REPLACE TABLE dup_candidatas AS
      SELECT * FROM (
        SELECT *, row_number() OVER (ORDER BY hash(id, ${SEMILLA} + 1)) AS _orden
          FROM dup_ventas
         WHERE id IS NOT NULL AND sku IS NOT NULL AND fecha IS NOT NULL AND cantidad > 0
           AND fecha_hora IS NOT NULL AND hour(CAST(fecha_hora AS TIMESTAMP)) <= 22
        QUALIFY count(*) OVER (PARTITION BY identificacion, sku, cantidad, total, fecha) = 1
      ) WHERE _orden <= ${nPos + nFuera}`);
    const base = '(SELECT max(id) FROM dup_ventas)';
    const minutos = (desde, rango) => `CAST(fecha_hora AS TIMESTAMP) + to_minutes(CAST(${desde} + _orden % ${rango} AS BIGINT))`;

    if (nPos) {
      const nombre = 'duplicados_ventas_posibles';
      const r = await escribir(ds, nombre,
        `SELECT * EXCLUDE (_orden)${reemplazar(columnas, nombre, [`${base} + _orden AS id`, `${minutos(1, 8)} AS fecha_hora`])}
           FROM dup_candidatas WHERE _orden <= ${nPos}`);
      esperado.push({ dataset: ds, regla: 'posible_duplicado', incremento: r.filas });
      ids.posibles = (await duckdb.consultar(`SELECT ${base} + _orden AS id FROM dup_candidatas WHERE _orden <= ${nPos}`)).map((f) => Number(f.id));
    }
    if (nFuera) {
      const nombre = 'duplicados_ventas_fuera_ventana';
      await escribir(ds, nombre,
        `SELECT * EXCLUDE (_orden)${reemplazar(columnas, nombre, [`${base} + _orden AS id`, `${minutos(20, 40)} AS fecha_hora`])}
           FROM dup_candidatas WHERE _orden > ${nPos}`);
      ids.fuera = (await duckdb.consultar(`SELECT ${base} + _orden AS id FROM dup_candidatas WHERE _orden > ${nPos}`)).map((f) => Number(f.id));
    }
    const disponibles = ids.posibles ? ids.posibles.length : 0;
    if (disponibles < nPos) console.log(`  aviso: solo había ${disponibles} ventas aptas para posibles duplicados`);
  }
  await duckdb.consultar('DROP TABLE IF EXISTS dup_ventas');
  await duckdb.consultar('DROP TABLE IF EXISTS dup_candidatas');
  return ids;
}

async function inyectarCopias(nombreDataset, n, regla, filtro) {
  const ds = DATASETS[nombreDataset];
  if (!n) return;
  const columnas = await columnasDe(ds);
  if (!columnas) {
    console.log(`  ${ds}: sin archivos, se omite (ejecute primero npm run csv)`);
    return;
  }
  const nombre = 'duplicados_' + nombreDataset;
  const r = await escribir(ds, nombre,
    `SELECT *${reemplazar(columnas, nombre)}
       FROM ${origenParquet(ds)} WHERE ${filtro}
      ORDER BY random() LIMIT ${n}`);
  return { dataset: ds, regla, incremento: r.filas };
}

async function leerCalidad() {
  const filas = await db.query('SELECT dataset, regla, filas_afectadas FROM calidad_datos');
  return Object.fromEntries(filas.map((f) => [f.dataset + '.' + f.regla, Number(f.filas_afectadas)]));
}

async function recalcular(momento) {
  process.stdout.write(`Recalculando métricas (${momento})... `);
  const r = await calculoMetricas.recalcular();
  console.log(`${r.segundos} s`);
}

async function verificar(antes, esperado, ids) {
  const despues = await leerCalidad();
  let fallos = 0;
  console.log('\nVerificación (calidad_datos):');
  for (const e of esperado) {
    const clave = e.dataset + '.' + e.regla;
    const detectado = (despues[clave] || 0) - (antes[clave] || 0);
    const ok = detectado === e.incremento;
    if (!ok) fallos++;
    console.log(`  ${ok ? 'OK   ' : 'FALLA'} ${clave.padEnd(32)} esperado +${e.incremento}, detectado +${detectado} ` +
      `(antes ${antes[clave] || 0}, después ${despues[clave] || 0})`);
  }
  const marcadas = async (lista) => (lista && lista.length
    ? (await db.query('SELECT id FROM ventas_posibles_duplicados WHERE id IN (?)', [lista])).length
    : 0);
  if (ids.posibles) {
    const n = await marcadas(ids.posibles);
    const ok = n === ids.posibles.length;
    if (!ok) fallos++;
    console.log(`  ${ok ? 'OK   ' : 'FALLA'} ${'ventas_posibles_duplicados'.padEnd(32)} ${n} de ${ids.posibles.length} posibles duplicados inyectados aparecen en la lista`);
  }
  if (ids.fuera) {
    const n = await marcadas(ids.fuera);
    const ok = n === 0;
    if (!ok) fallos++;
    console.log(`  ${ok ? 'OK   ' : 'FALLA'} ${'fuera de ventana (> 15 min)'.padEnd(32)} ${n} de ${ids.fuera.length} marcadas por error (se esperaba 0)`);
  }
  console.log(fallos ? `\n${fallos} comprobación(es) fallaron.` : '\nTodas las reglas de duplicados detectaron lo esperado.');
  return fallos;
}

async function inyectar(conVerificacion) {
  let antes = null;
  if (conVerificacion) {
    await recalcular('antes');
    antes = await leerCalidad();
  }
  console.log(`Inyectando duplicados en fecha_carga=${FECHA}:`);
  const esperado = [];
  const ids = await inyectarVentas(esperado);
  for (const e of [
    await inyectarCopias('inventario', CANTIDADES.inventario, 'fila_duplicada', 'fecha IS NOT NULL AND sku IS NOT NULL'),
    await inyectarCopias('compras', CANTIDADES.compras, 'orden_duplicada', 'nro_orden IS NOT NULL')
  ]) if (e) esperado.push(e);

  console.log('\nIncremento esperado en /api/metricas/calidad:');
  esperado.forEach((e) => console.log(`  ${e.dataset}.${e.regla}: +${e.incremento}`));
  if (ids.fuera) console.log(`  ${DATASETS.ventas}: ${ids.fuera.length} ventas a más de 15 min que NO deben marcarse como posible duplicado`);

  if (!conVerificacion) {
    console.log('\nRecalcule (POST /api/metricas/recalcular) y revise /api/metricas/calidad y /api/metricas/duplicados, ' +
      'o vuelva a ejecutar con --verificar. Para quitarlos: npm run csv-duplicados -- --limpiar');
    return 0;
  }
  await recalcular('después');
  return verificar(antes, esperado, ids);
}

async function limpiar() {
  const cargas = await db.query('SELECT id, clave_parquet FROM ingestas WHERE origen = ?', [ORIGEN]);
  for (const c of cargas) {
    await cliente.removeObject(bucket, c.clave_parquet);
    console.log('  borrado ' + c.clave_parquet);
  }
  await db.query('DELETE FROM ingestas WHERE origen = ?', [ORIGEN]);
  console.log(`${cargas.length} archivo(s) de duplicados eliminados. Recalcule con POST /api/metricas/recalcular.`);
  return 0;
}

(async () => {
  await datalake.asegurarBucket();
  await db.query('SELECT 1');
  return banderas.includes('--limpiar') ? limpiar() : inyectar(banderas.includes('--verificar'));
})()
  .then(async (fallos) => {
    await db.cerrar();
    process.exit(fallos ? 1 : 0);
  })
  .catch((err) => {
    console.error('Falló:', err.message);
    process.exit(1);
  });
