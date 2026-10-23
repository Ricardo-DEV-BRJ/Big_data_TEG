const duckdb = require('../config/duckdb');
const datalake = require('./datalakeModel');
const db = require('../config/mariadb')

class productosModel {
  // Con fecha solo se lee la carpeta fecha_carga=<fecha>; sin fecha, todos los días.
  promedio(dataset, fecha) {
    return new Promise((resolve, reject) => {
      const sql = `WITH datos_parquet AS (
      SELECT Price, Name
      FROM read_parquet($ruta, hive_partitioning = true, union_by_name = true, filename = true)
      )
    SELECT AVG(Price) AS promedio_precio, SUM(Price) AS total, COUNT(*) AS filas,
        (
          SELECT list(Name)
          FROM (
            SELECT Name
            FROM datos_parquet
                GROUP BY Name
                ORDER BY COUNT(*) DESC
                LIMIT 3 -- Ajusta la cantidad de nombres en el array aquí
            )
        ) AS nombres_mas_repetidos
      FROM datos_parquet`
      duckdb.consultar(sql, { ruta: datalake.patronDataset(dataset, fecha) })
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
  }

  // Productos más vendidos por unidades (SUM(cantidad)), de mayor a menor.
  // Con fecha solo se lee la carpeta de ese día; sin fecha, todos los días.
  ventas(dataset, fecha, limite = 20) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT producto,
               SUM(cantidad)          AS unidades_vendidas,
               COUNT(*)               AS numero_ventas,
         FROM read_parquet($ruta, union_by_name = true)
         GROUP BY producto
         ORDER BY unidades_vendidas DESC
         LIMIT $limite`

      duckdb.consultar(sql, { ruta: datalake.patronDataset(dataset, fecha), limite })
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
  }

  ventasCliente(dataset, nom = '', limite = 20) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT *
         FROM read_parquet($ruta, union_by_name = true)
         WHERE cliente ILIKE '%' || $nom || '%'
         LIMIT $limite`

      duckdb.consultar(sql, { ruta: datalake.patronDataset(dataset), nom, limite })
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
  }

  // Calcula los 10 productos más vendidos en DuckDB y los guarda en MariaDB.
  async productosTop() {
    const sqlSer = 'INSERT INTO productos_top (nombre, cantidad) VALUES ?'
    const sql = `
      SELECT producto, SUM(cantidad) AS cantidad
       FROM read_parquet($ruta, union_by_name = true)
       GROUP BY producto
       ORDER BY cantidad DESC
       LIMIT 20`
    await db.query('TRUNCATE TABLE productos_top')
    const productos = await duckdb.consultar(sql, { ruta: datalake.patronDataset('ventas') })
    if (productos.length === 0) return { mensaje: 'sin datos', status: 200 }
    const filas = productos.map((p) => [p.producto, p.cantidad])
    await db.query(sqlSer, [filas])
    return { mensaje: 'exitoso', status: 201 }
  }

}
/**
 * Filas cargadas por día de un dataset.
 * @returns {Promise<Array<{fecha_carga: string, filas: number, archivos: number}>>}
 */
function filasPorDia(dataset) {
  return duckdb.consultar(
    `SELECT fecha_carga,
            count(*)                 AS filas,
            count(DISTINCT filename) AS archivos
       FROM read_parquet($ruta, hive_partitioning = true, union_by_name = true, filename = true)
      GROUP BY fecha_carga
      ORDER BY fecha_carga DESC`,
    { ruta: datalake.patronDataset(dataset) }
  );
}

module.exports = new productosModel();