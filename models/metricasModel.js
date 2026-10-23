const db = require('../config/mariadb')

class metricasModel {

  async productosTop() {
    const sql = 'SELECT * FROM productos_top'
    const result = await db.query(sql)
    return { data: result, mensaje: 'Consultado con exito' }
  }

}

module.exports = new metricasModel();