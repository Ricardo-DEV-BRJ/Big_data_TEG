const createError = require('http-errors')
const v = require('../utils/validaciones')
const model = require('../models/tareasModel')

class tareasController {

  // fecha opcional (AAAA-MM-DD): si llega, solo se consulta ese día.
  tareasRealizadas() {
    return new Promise((resolve, reject) => {
      model.tareasRealizadas()
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        });
    })
  }

}

module.exports = new tareasController();
