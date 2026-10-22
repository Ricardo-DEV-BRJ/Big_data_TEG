const createError = require('http-errors')
const v = require('../utils/validaciones')
const model = require('../models/productosModel')

class productosController {

  // fecha opcional (AAAA-MM-DD): si llega, solo se consulta ese día.
  promedio(dataset, fecha) {
    return new Promise((resolve, reject) => {
      let carpeta, dia
      try {
        if (!String(dataset || '').trim()) throw createError(400, 'No se selecciono carpeta')
        carpeta = v.normalizarDataset(dataset)   // 400 si el nombre es inválido
        dia = v.fechaOpcional(fecha)              // 400 si la fecha no es AAAA-MM-DD
      } catch (err) {
        return reject(err)
      }
      model.promedio(carpeta, dia)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        });
    })
  }
  
  ventas(dataset, fecha) {
    return new Promise((resolve, reject) => {
      let carpeta, dia
      try {
        if (!String(dataset || '').trim()) throw createError(400, 'No se selecciono carpeta')
        carpeta = v.normalizarDataset(dataset)   // 400 si el nombre es inválido
        dia = v.fechaOpcional(fecha)              // 400 si la fecha no es AAAA-MM-DD
      } catch (err) {
        return reject(err)
      }
      model.ventas(carpeta, dia)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        });
    })
  }
}

module.exports = new productosController();
