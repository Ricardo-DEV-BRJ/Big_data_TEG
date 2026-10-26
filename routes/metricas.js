const express = require('express');
const { estadoDeError } = require('../utils/http');
const controller = require('../controllers/metricasController')
const { verToken, noCambioForzado, soloRoles } = require('../middlewares/auth');

const router = express.Router();
router.use(verToken, noCambioForzado);
const vendedor = soloRoles('vendedor', 'gerente', 'administrador');
const gerente = soloRoles('gerente', 'administrador');
const administrador = soloRoles('administrador');

/**
 * Métricas para el front (GET, leen las tablas de MariaDB ya calculadas).
 * Filtros comunes por query string, todos opcionales:
 *   desde, hasta  AAAA-MM-DD     mes  AAAA-MM     sucursal     limite (1..1000, por defecto 20)
 *   tipo (Persona natural | Empresa | Extranjero | Gobierno)   categoria   marca   proveedor
 *   segmento (RFM)   buscar (cliente o identificación)   orden (según la consulta)
 * Ejemplo: GET /api/metricas/resumen?desde=2026-01-01&hasta=2026-03-31&sucursal=Maracaibo
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
router.get('/', vendedor, (req, res) => responder(res, controller.productosTop()));

// Recalcula todas las tablas desde el data lake (también corre a diario con METRICAS_CRON).
router.post('/recalcular', administrador, (req, res) => responder(res, controller.recalcular(), 201));
router.get('/estado', gerente, (req, res) => responder(res, controller.estado()));
router.get('/opciones', vendedor, (req, res) => responder(res, controller.opciones()));

// Ventas e ingresos
router.get('/resumen', gerente, (req, res) => responder(res, controller.resumen(req.query)));
router.get('/ventas/diarias', vendedor, (req, res) => responder(res, controller.ventasDiarias(req.query)));
router.get('/ventas/semanales', vendedor, (req, res) => responder(res, controller.ventasSemanales(req.query)));
router.get('/ventas/mensuales', vendedor, (req, res) => responder(res, controller.ventasMensuales(req.query)));
router.get('/ventas/dia-semana', vendedor, (req, res) => responder(res, controller.ventasDiaSemana(req.query)));
router.get('/ventas/quincenas', vendedor, (req, res) => responder(res, controller.ventasQuincenas(req.query)));
router.get('/ventas/horas', vendedor, (req, res) => responder(res, controller.ventasHoras(req.query)));
router.get('/ventas/proyeccion', vendedor, (req, res) => responder(res, controller.proyeccion(req.query)));
router.get('/fiscal', vendedor, (req, res) => responder(res, controller.fiscal(req.query)));

// Productos
router.get('/productos', vendedor, (req, res) => responder(res, controller.productos(req.query)));
router.get('/productos/abc', vendedor, (req, res) => responder(res, controller.productosAbc(req.query)));
router.get('/productos/sin-ventas', vendedor, (req, res) => responder(res, controller.productosSinVentas(req.query)));
router.get('/productos/rangos-precio', vendedor, (req, res) => responder(res, controller.rangosPrecio(req.query)));
router.get('/productos/:sku/mensual', vendedor, (req, res) => responder(res, controller.productoMensual(req.params.sku)));
router.get('/categorias', vendedor, (req, res) => responder(res, controller.categorias(req.query)));
router.get('/categorias/mensual', vendedor, (req, res) => responder(res, controller.categoriasMensual(req.query)));
router.get('/marcas', vendedor, (req, res) => responder(res, controller.marcas(req.query)));
router.get('/marcas/mensual', vendedor, (req, res) => responder(res, controller.marcasMensual(req.query)));
router.get('/devoluciones', vendedor, (req, res) => responder(res, controller.devoluciones(req.query)));

// Clientes
router.get('/clientes', vendedor, (req, res) => responder(res, controller.clientes(req.query)));
router.get('/clientes/concentracion', vendedor, (req, res) => responder(res, controller.clientesConcentracion(req.query)));
router.get('/clientes/rfm', vendedor, (req, res) => responder(res, controller.clientesRfm(req.query)));
router.get('/clientes/morosos', vendedor, (req, res) => responder(res, controller.clientesMorosos(req.query)));
router.get('/clientes/nuevos-recurrentes', vendedor, (req, res) => responder(res, controller.clientesNuevosRecurrentes(req.query)));
router.get('/clientes/cohortes', vendedor, (req, res) => responder(res, controller.cohortes(req.query)));
router.get('/segmentos', vendedor, (req, res) => responder(res, controller.segmentos(req.query)));

// Cobranza
router.get('/cobranza/antiguedad', gerente, (req, res) => responder(res, controller.cobranzaAntiguedad(req.query)));
router.get('/cobranza/dso', gerente, (req, res) => responder(res, controller.cobranzaDso(req.query)));
router.get('/cobranza/flujo-proyectado', gerente, (req, res) => responder(res, controller.cobranzaFlujo(req.query)));

// Vendedores, sucursales y metas
router.get('/vendedores', gerente, (req, res) => responder(res, controller.vendedores(req.query)));
router.get('/sucursales', gerente, (req, res) => responder(res, controller.sucursales(req.query)));
router.get('/metas', gerente, (req, res) => responder(res, controller.metas(req.query)));

// Pagos, monedas y descuentos
router.get('/pagos', gerente, (req, res) => responder(res, controller.pagos(req.query)));
router.get('/monedas', gerente, (req, res) => responder(res, controller.monedas(req.query)));
router.get('/tasa-cambio', gerente, (req, res) => responder(res, controller.tasaCambio(req.query)));
router.get('/descuentos', gerente, (req, res) => responder(res, controller.descuentos(req.query)));

// Inventario y proveedores
router.get('/inventario', gerente, (req, res) => responder(res, controller.inventario(req.query)));
router.get('/inventario/resumen', gerente, (req, res) => responder(res, controller.inventarioResumen(req.query)));
router.get('/inventario/mensual', gerente, (req, res) => responder(res, controller.inventarioMensual(req.query)));
router.get('/inventario/quiebres', gerente, (req, res) => responder(res, controller.inventarioQuiebres(req.query)));
router.get('/proveedores', gerente, (req, res) => responder(res, controller.proveedores()));

// Calidad de datos
router.get('/calidad', gerente, (req, res) => responder(res, controller.calidad()));

module.exports = router;
