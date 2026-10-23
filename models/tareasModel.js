const duckdb = require('../config/duckdb');
const datalake = require('./datalakeModel');


class tareasModel {
  // Con fecha solo se lee la carpeta fecha_carga=<fecha>; sin fecha, todos los días.
  tareasRealizadas() {
    return new Promise((resolve, reject) => {
      const sql = `
      SELECT *
      FROM read_parquet($ruta, hive_partitioning = true, union_by_name = true, filename = true)
      `
      duckdb.consultar(sql, { ruta: datalake.patronDataset("respaldo_ingestas", null) })
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
  }

}

module.exports = new tareasModel();