const createError = require('http-errors')
const v = require('../utils/validaciones')
const model = require('../models/metricasModel')

// Filtros de texto que se comparan por igualdad (ver IGUALDAD en metricasModel).
const TEXTOS = ['sucursal', 'tipo', 'categoria', 'marca', 'segmento', 'proveedor', 'buscar']

/**
 * Valida los parámetros de la consulta (req.query) y devuelve los filtros que entiende el modelo.
 *   desde, hasta  AAAA-MM-DD (opcionales)
 *   mes           AAAA-MM: equivale a desde = primer día y hasta = último día de ese mes
 *   limite        1..1000 (por defecto 20)
 *   orden         una de las claves permitidas por cada consulta
 */
function filtros(query = {}, ordenes = []) {
  const f = {
    desde: v.fechaOpcional(query.desde),
    hasta: v.fechaOpcional(query.hasta),
    limite: v.entero(query.limite, 20, 1000)
  }
  if (query.mes) {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(query.mes)) throw createError(400, 'Mes inválido (formato AAAA-MM): ' + query.mes)
    const [a, m] = query.mes.split('-').map(Number)
    f.mes = query.mes + '-01'
    f.desde = f.mes
    f.hasta = query.mes + '-' + String(new Date(Date.UTC(a, m, 0)).getUTCDate()).padStart(2, '0')
  }
  if (f.desde && f.hasta && f.desde > f.hasta) throw createError(400, 'La fecha "desde" es posterior a "hasta"')
  for (const campo of TEXTOS) {
    const texto = String(query[campo] || '').trim()
    if (texto.length > 150) throw createError(400, `El filtro "${campo}" es demasiado largo`)
    if (texto) f[campo] = texto
  }
  if (query.orden) {
    if (!ordenes.includes(query.orden)) throw createError(400, `Orden inválido: ${query.orden}. Valores permitidos: ${ordenes.join(', ')}`)
    f.orden = query.orden
  }
  return f
}

// Valida y ejecuta la consulta del modelo; los errores de validación se rechazan con 400.
function ejecutar(consulta) {
  return new Promise((resolve, reject) => {
    let promesa
    try {
      promesa = consulta()
    } catch (err) {
      return reject(err)
    }
    Promise.resolve(promesa)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

class metricasController {

  productosTop() { return ejecutar(() => model.productosTop()) }
  recalcular() { return ejecutar(() => model.recalcular()) }
  estado() { return ejecutar(() => model.estado()) }
  opciones() { return ejecutar(() => model.opciones()) }

  // Ventas e ingresos
  resumen(q) { return ejecutar(() => model.resumen(filtros(q))) }
  ventasDiarias(q) { return ejecutar(() => model.ventasDiarias(filtros(q))) }
  ventasSemanales(q) { return ejecutar(() => model.ventasSemanales(filtros(q))) }
  ventasMensuales(q) { return ejecutar(() => model.ventasMensuales(filtros(q))) }
  ventasDiaSemana(q) { return ejecutar(() => model.ventasDiaSemana(filtros(q))) }
  ventasQuincenas(q) { return ejecutar(() => model.ventasQuincenas(filtros(q))) }
  ventasHoras(q) { return ejecutar(() => model.ventasHoras(filtros(q))) }
  proyeccion(q) { return ejecutar(() => model.proyeccion(filtros(q))) }
  fiscal(q) { return ejecutar(() => model.fiscal(filtros(q))) }

  // Productos
  productos(q) { return ejecutar(() => model.productos(filtros(q, ['ingreso', 'unidades', 'margen', 'devoluciones', 'pendiente']))) }
  productoMensual(sku) {
    return ejecutar(() => {
      const codigo = String(sku || '').trim()
      if (!codigo || codigo.length > 20) throw createError(400, 'SKU inválido')
      return model.productoMensual(codigo)
    })
  }
  productosAbc(q) { return ejecutar(() => model.productosAbc(filtros(q))) }
  productosSinVentas(q) { return ejecutar(() => model.productosSinVentas(filtros(q))) }
  rangosPrecio(q) { return ejecutar(() => model.rangosPrecio(filtros(q))) }
  categorias(q) { return ejecutar(() => model.categorias(filtros(q))) }
  categoriasMensual(q) { return ejecutar(() => model.categoriasMensual(filtros(q))) }
  marcas(q) { return ejecutar(() => model.marcas(filtros(q))) }
  marcasMensual(q) { return ejecutar(() => model.marcasMensual(filtros(q))) }
  devoluciones(q) { return ejecutar(() => model.devoluciones(filtros(q))) }

  // Clientes
  clientes(q) { return ejecutar(() => model.clientes(filtros(q, ['ingreso', 'margen', 'frecuencia', 'pendiente', 'vencido', 'recencia', 'clv']))) }
  clientesConcentracion(q) { return ejecutar(() => model.clientesConcentracion(filtros(q))) }
  clientesRfm(q) { return ejecutar(() => model.clientesRfm(filtros(q))) }
  clientesMorosos(q) { return ejecutar(() => model.clientesMorosos(filtros(q))) }
  clientesNuevosRecurrentes(q) { return ejecutar(() => model.clientesNuevosRecurrentes(filtros(q))) }
  cohortes(q) { return ejecutar(() => model.cohortes(filtros(q))) }
  segmentos(q) { return ejecutar(() => model.segmentos(filtros(q))) }

  // Cobranza
  cobranzaAntiguedad(q) { return ejecutar(() => model.cobranzaAntiguedad(filtros(q))) }
  cobranzaDso(q) { return ejecutar(() => model.cobranzaDso(filtros(q))) }
  cobranzaFlujo(q) { return ejecutar(() => model.cobranzaFlujo(filtros(q))) }

  // Vendedores, sucursales y metas
  vendedores(q) { return ejecutar(() => model.vendedores(filtros(q))) }
  sucursales(q) { return ejecutar(() => model.sucursales(filtros(q))) }
  metas(q) { return ejecutar(() => model.metas(filtros(q))) }

  // Pagos y monedas
  pagos(q) { return ejecutar(() => model.pagos(filtros(q))) }
  monedas(q) { return ejecutar(() => model.monedas(filtros(q))) }
  tasaCambio(q) { return ejecutar(() => model.tasaCambio(filtros(q))) }
  descuentos(q) { return ejecutar(() => model.descuentos(filtros(q))) }

  // Inventario y proveedores
  inventario(q) { return ejecutar(() => model.inventario(filtros(q, ['venta_perdida', 'quiebre', 'rotacion', 'rotacion_baja', 'cobertura', 'valor']))) }
  inventarioQuiebres(q) { return ejecutar(() => model.inventarioQuiebres(filtros(q))) }
  inventarioResumen(q) { return ejecutar(() => model.inventarioResumen(filtros(q))) }
  inventarioMensual(q) { return ejecutar(() => model.inventarioMensual(filtros(q))) }
  proveedores() { return ejecutar(() => model.proveedores()) }

  calidad() { return ejecutar(() => model.calidad()) }

}

module.exports = new metricasController();
