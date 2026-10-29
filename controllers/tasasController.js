const createError = require('http-errors')
const v = require('../utils/validaciones')
const model = require('../models/tasasModel')
const dolarApi = require('../models/dolarApiModel')

function positivo(valor, campo, obligatorio) {
  if (valor === undefined || valor === null || valor === '') {
    if (obligatorio) throw createError(400, `"${campo}" es obligatorio`)
    return null
  }
  const n = Number(valor)
  if (!Number.isFinite(n) || n <= 0 || n > 1e9) throw createError(400, `"${campo}" debe ser un número positivo`)
  return Math.round(n * 10000) / 10000
}

class tasasController {

  async resumen(q = {}) {
    const f = { desde: v.fechaOpcional(q.desde), hasta: v.fechaOpcional(q.hasta) }
    const [vigente, historial, registradas] = await Promise.all([
      model.vigente(), model.historial(f), model.registradas(20)
    ])
    return { ...vigente, historial, registradas }
  }

  sugerida() {
    return dolarApi.tasasDelDia()
  }

  margenNegativo(q = {}) {
    return model.margenNegativo(v.entero(q.limite, 20, 500))
  }

  async registrar(body = {}, usuario) {
    const fecha = v.validarFecha(body.fecha || v.hoy())
    const hora = String(body.hora || '').trim()
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(hora)) throw createError(400, 'Hora inválida (formato HH:MM)')
    const fuente = String(body.fuente || '').trim()
    if (!fuente || fuente.length > 100) throw createError(400, 'Indique la fuente de la tasa (máx. 100 caracteres)')
    const datos = {
      fecha, hora, fuente,
      tasa_bcv: positivo(body.tasa_bcv, 'tasa_bcv', true),
      tasa_usdt: positivo(body.tasa_usdt, 'tasa_usdt', false),
      tasa_eur: positivo(body.tasa_eur, 'tasa_eur', false)
    }
    const anterior = (await model.vigente()).tasa
    const nueva = await model.registrar(datos, usuario.id)
    return { anterior, nueva }
  }

}

module.exports = new tasasController()
