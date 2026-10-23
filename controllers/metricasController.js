
const model = require('../models/metricasModel')

class metricasController {

  productosTop() {
    return new Promise((resolve, reject) => {
      model.productosTop()
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        });
    })
  }

}

module.exports = new metricasController();
