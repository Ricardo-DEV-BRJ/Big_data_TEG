const express = require('express');
const { estadoDeError } = require('../utils/http');
const controller = require('../controllers/metricasController')
const auditoria = require('../models/auditoriaModel');
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');
const { LISTA, GRUPOS } = require('../config/roles');

const router = express.Router();
router.use(verToken, noCambioForzado);
// Acceso por área según la Tabla 18 (ver config/roles.js).
const todos = soloRoles(...LISTA);
const comercial = soloRoles(...GRUPOS.comercial);
const finanzas = soloRoles(...GRUPOS.finanzas);
const operaciones = soloRoles(...GRUPOS.operaciones);
const direccion = soloRoles(...GRUPOS.direccion);
const sistema = soloRoles(...GRUPOS.sistema);

/**
 * Métricas para el front (GET, leen las tablas de MariaDB ya calculadas).
 * Filtros comunes por query string, todos opcionales:
 *   desde, hasta  AAAA-MM-DD     mes  AAAA-MM     sucursal     limite (1..1000, por defecto 20)
 *   tipo (Productor | Comercio)   categoria   marca   proveedor   sku
 *   segmento (RFM)   buscar (cliente o identificación)   orden (según la consulta)
 *   clase (A | M | B) y estado (Agotado | Bajo stock mínimo | Reordenar | Normal) en /inventario/reposicion
 * Ejemplo: GET /api/metricas/resumen?desde=2026-01-01&hasta=2026-03-31&sucursal=Sede%20Trujillo
 */
function responder(res, promesa, estado = 200) {
  promesa
    .then((result) => {
      res.status(estado).json(result)
    }).catch((err) => {
      res.status(estadoDeError(err)).json({ error: err.message })
    });
}

// Productos más vendidos (lo usa el Dashboard actual).
router.get('/', todos, (req, res) => responder(res, controller.productosTop()));

// Recalcula todas las tablas desde el data lake (también corre a diario con METRICAS_CRON).
router.post('/recalcular', sistema, (req, res) => {
  const promesa = controller.recalcular();
  promesa
    .then((r) => auditoria.registrar(req, { accion: 'recalculo', entidad: 'metricas', entidad_id: r.id, nuevo: { fecha_corte: r.fecha_corte, filas_ventas: r.filas_ventas, segundos: r.segundos } }))
    .catch((err) => auditoria.registrar(req, { accion: 'recalculo', entidad: 'metricas', resultado: 'error', nuevo: { error: err.message } }));
  responder(res, promesa, 201);
});
router.get('/estado', finanzas, (req, res) => responder(res, controller.estado()));
router.get('/opciones', todos, (req, res) => responder(res, controller.opciones()));

// Ventas e ingresos
router.get('/resumen', comercial, (req, res) => responder(res, controller.resumen(req.query)));
router.get('/ventas/diarias', comercial, (req, res) => responder(res, controller.ventasDiarias(req.query)));
router.get('/ventas/semanales', comercial, (req, res) => responder(res, controller.ventasSemanales(req.query)));
router.get('/ventas/mensuales', comercial, (req, res) => responder(res, controller.ventasMensuales(req.query)));
router.get('/ventas/dia-semana', comercial, (req, res) => responder(res, controller.ventasDiaSemana(req.query)));
router.get('/ventas/quincenas', comercial, (req, res) => responder(res, controller.ventasQuincenas(req.query)));
router.get('/ventas/horas', comercial, (req, res) => responder(res, controller.ventasHoras(req.query)));
router.get('/ventas/proyeccion', comercial, (req, res) => responder(res, controller.proyeccion(req.query)));
router.get('/fiscal', comercial, (req, res) => responder(res, controller.fiscal(req.query)));

// Productos
router.get('/productos', comercial, (req, res) => responder(res, controller.productos(req.query)));
router.get('/productos/abc', comercial, (req, res) => responder(res, controller.productosAbc(req.query)));
router.get('/productos/sin-ventas', comercial, (req, res) => responder(res, controller.productosSinVentas(req.query)));
router.get('/productos/rangos-precio', comercial, (req, res) => responder(res, controller.rangosPrecio(req.query)));
router.get('/productos/:sku/mensual', comercial, (req, res) => responder(res, controller.productoMensual(req.params.sku)));
router.get('/categorias', comercial, (req, res) => responder(res, controller.categorias(req.query)));
router.get('/categorias/mensual', comercial, (req, res) => responder(res, controller.categoriasMensual(req.query)));
router.get('/marcas', comercial, (req, res) => responder(res, controller.marcas(req.query)));
router.get('/marcas/mensual', comercial, (req, res) => responder(res, controller.marcasMensual(req.query)));
router.get('/devoluciones', comercial, (req, res) => responder(res, controller.devoluciones(req.query)));

// Clientes
router.get('/clientes', comercial, (req, res) => responder(res, controller.clientes(req.query)));
router.get('/clientes/concentracion', comercial, (req, res) => responder(res, controller.clientesConcentracion(req.query)));
router.get('/clientes/rfm', comercial, (req, res) => responder(res, controller.clientesRfm(req.query)));
router.get('/clientes/morosos', comercial, (req, res) => responder(res, controller.clientesMorosos(req.query)));
router.get('/clientes/nuevos-recurrentes', comercial, (req, res) => responder(res, controller.clientesNuevosRecurrentes(req.query)));
router.get('/clientes/cohortes', comercial, (req, res) => responder(res, controller.cohortes(req.query)));
router.get('/segmentos', comercial, (req, res) => responder(res, controller.segmentos(req.query)));

// Cobranza
router.get('/cobranza/antiguedad', finanzas, (req, res) => responder(res, controller.cobranzaAntiguedad(req.query)));
router.get('/cobranza/dso', finanzas, (req, res) => responder(res, controller.cobranzaDso(req.query)));
router.get('/cobranza/flujo-proyectado', finanzas, (req, res) => responder(res, controller.cobranzaFlujo(req.query)));

// Vendedores, sucursales y metas
router.get('/vendedores', finanzas, (req, res) => responder(res, controller.vendedores(req.query)));
router.get('/sucursales', finanzas, (req, res) => responder(res, controller.sucursales(req.query)));
router.get('/metas', finanzas, (req, res) => responder(res, controller.metas(req.query)));

// Pagos, monedas y descuentos
router.get('/pagos', finanzas, (req, res) => responder(res, controller.pagos(req.query)));
router.get('/monedas', finanzas, (req, res) => responder(res, controller.monedas(req.query)));
router.get('/tasa-cambio', finanzas, (req, res) => responder(res, controller.tasaCambio(req.query)));
router.get('/descuentos', finanzas, (req, res) => responder(res, controller.descuentos(req.query)));

// Inventario y proveedores
router.get('/inventario', operaciones, (req, res) => responder(res, controller.inventario(req.query)));
router.get('/inventario/resumen', operaciones, (req, res) => responder(res, controller.inventarioResumen(req.query)));
router.get('/inventario/mensual', operaciones, (req, res) => responder(res, controller.inventarioMensual(req.query)));
router.get('/inventario/quiebres', operaciones, (req, res) => responder(res, controller.inventarioQuiebres(req.query)));
router.get('/inventario/reposicion', operaciones, (req, res) => responder(res, controller.inventarioReposicion(req.query)));
router.get('/proveedores', operaciones, (req, res) => responder(res, controller.proveedores()));

// Previsión de la demanda (promedio móvil y suavizamiento exponencial con MAPE)
router.get('/prevision', operaciones, (req, res) => responder(res, controller.prevision(req.query)));
// Duplicados exactos excluidos y posibles duplicados para revisión
router.get('/duplicados', finanzas, (req, res) => responder(res, controller.duplicados(req.query)));
// Tablero ejecutivo (Figura 18): KPI del día y del período y alertas activas
router.get('/ejecutivo', direccion, (req, res) => responder(res, controller.ejecutivo(req.query)));

// Calidad de datos
router.get('/calidad', finanzas, (req, res) => responder(res, controller.calidad()));

module.exports = router;
