/**
 * MODELO DE EJEMPLO — cómo ejecutar el motor de búsqueda (DuckDB) sobre los
 * Parquet guardados en MinIO. Copiar este archivo como base para cada modelo
 * de consultas (p. ej. ventasModel.js) y escribir ahí las sentencias.
 *
 * Reglas:
 *  - Las sentencias son fijas: el front nunca envía SQL.
 *  - Los valores van como parámetros con nombre ($dataset, $fecha...), nunca
 *    concatenados al texto del SQL.
 *  - read_parquet(...) con hive_partitioning = true agrega la columna
 *    fecha_carga (DATE) a partir de la carpeta; filtrar por ella hace que
 *    DuckDB lea solo las carpetas de esos días.
 *  - union_by_name = true tolera archivos del mismo dataset con columnas en
 *    distinto orden o columnas nuevas (las que falten llegan como null).
 *  - Cada Parquet trae además la columna _archivo_origen (nombre del CSV).
 *  - Las fechas llegan como 'AAAA-MM-DD' y los enteros como número.
 *  - Los parámetros (dataset, fechas) deben llegar ya validados desde el
 *    controlador con utils/validaciones.js.
 */
const duckdb = require('../config/duckdb');
const datalake = require('./datalakeModel');

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

/**
 * Primeras filas de un dataset entre dos fechas (inclusive).
 * Como el rango filtra por fecha_carga, solo se leen las carpetas de esos días.
 */
function filasEntreFechas(dataset, desde, hasta, limite = 100) {
  return duckdb.consultar(
    `SELECT *
       FROM read_parquet($ruta, hive_partitioning = true, union_by_name = true)
      WHERE fecha_carga BETWEEN $desde::DATE AND $hasta::DATE
      LIMIT $limite`,
    { ruta: datalake.patronDataset(dataset), desde, hasta, limite }
  );
}

/**
 * Consulta de negocio sobre un solo día (lee únicamente esa carpeta).
 * Ejemplo pensado para un CSV de ventas con columnas ciudad y total; adaptar
 * nombres de columnas al reporte real.
 */
function totalPorCiudad(dataset, fecha) {
  return duckdb.consultar(
    `SELECT ciudad,
            count(*)             AS operaciones,
            round(sum(total), 2) AS total
       FROM read_parquet($ruta, union_by_name = true)
      GROUP BY ciudad
      ORDER BY total DESC`,
    { ruta: datalake.patronDataset(dataset, fecha) }
  );
}

module.exports = { filasPorDia, filasEntreFechas, totalPorCiudad };
