/**
 * Genera los reportes sintéticos de la agrocomercializadora (sede única en Trujillo)
 * y los carga directamente en el data lake como Parquet, sin escribir nada en el
 * disco local. Simula día por día un período (ventas, inventario, compras a
 * proveedores) y envía cada reporte a su dataset:
 *
 *   ventas      una fila por venta
 *   inventario  existencia diaria por producto, con zona de almacén, perecedero y vida útil
 *   compras     órdenes de compra a proveedores
 *   metas       meta mensual de ventas netas por vendedor
 *   tasas       tasas diarias en Bs por USD (BCV), USDT (mercado P2P) y EUR (BCV)
 *
 * Cada reporte se escribe como CSV en streaming a staging/ de MinIO y pasa por la
 * misma conversión que POST /api/ingestas (models/ingestaModel.js): queda en
 * parquet/<dataset>/fecha_carga=<fecha_carga>/ y registrado en la tabla ingestas,
 * así la revisión de cada 15 min recalcula las métricas. Los nombres de los
 * datasets salen de DATASET_VENTAS, DATASET_INVENTARIO, etc.
 *
 * Los datos no son uniformes: pocos productos y clientes concentran la mayoría de
 * las ventas (Pareto); la demanda de cada categoría sigue el calendario agrícola
 * (siembra, fertilización, cosecha); los comercios y parte de los productores compran
 * a crédito; si no hay existencia la venta se pierde, y una pequeña fracción de las
 * ventas se registra dos veces (posibles duplicados que debe detectar el pipeline).
 *
 * El catálogo (clientes con su fecha de alta, peso de cada cliente y producto) usa
 * una semilla fija y un período base fijo, y la tasa, los precios y los costos
 * dependen de la fecha: así la extracción diaria (tareas/extraccion.js), que genera
 * un solo día, es coherente con la carga inicial y con los demás días.
 * Con la misma semilla se generan siempre los mismos datos.
 *
 * Uso: node --env-file=.env scripts/generar-ventas.js [ventas=60000] [desde=2025-10-01] [hasta=2026-09-30] [semilla=2026] [fecha_carga=hoy]
 *      (npm run csv -- ...)
 * Como módulo: require('./scripts/generar-ventas').generar({ total, desde, hasta, ... })
 */
var PassThrough = require('stream').PassThrough;
var clientesBase = require('../data_list/datosDeVentas.js');
var productos = require('../data_list/productos.js');
var negocio = require('../data_list/negocio.js');
var config = require('../config');
var db = require('../config/mariadb');
var datalake = require('../models/datalakeModel');
var ingesta = require('../models/ingestaModel');
var v = require('../utils/validaciones');

var IVA = 0.16;
var DIA_MS = 86400000;

// Período base del negocio simulado: referencia de la tasa (180 Bs/USD el primer día),
// de la tendencia de precios y costos, y de las fechas de alta de los clientes.
var BASE_INICIO = '2025-10-01';
var BASE_FIN = '2026-09-30';
var SEMILLA_CATALOGO = 2026;

// ---------------------------------------------------------------------------
// Utilidades: azar con semilla, sorteos con pesos, fechas y CSV
// ---------------------------------------------------------------------------

function crearAzar(s) {
  return function () {
    s = (s + 0x6D2B79F5) | 0;
    var t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Búsqueda binaria en un arreglo de pesos acumulados (solo los primeros n elementos).
function buscar(acumulado, n, r) {
  var u = r * acumulado[n - 1];
  var bajo = 0;
  var alto = n - 1;
  while (bajo < alto) {
    var medio = (bajo + alto) >> 1;
    if (acumulado[medio] > u) alto = medio;
    else bajo = medio + 1;
  }
  return bajo;
}

function r2(n) {
  return Math.round(n * 100) / 100;
}

function aDia(texto) {
  return Math.round(Date.parse(texto + 'T00:00:00Z') / DIA_MS);
}

function textoFecha(dia) {
  return new Date(dia * DIA_MS).toISOString().slice(0, 10);
}

// Valor CSV: entre comillas dobles si contiene separador, comillas o salto de línea.
function campo(valor) {
  if (valor === null || valor === undefined) return '';
  var s = String(valor);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function sumarMinutos(fechaHora, minutos) {
  return new Date(Date.parse(fechaHora.replace(' ', 'T') + 'Z') + minutos * 60000).toISOString().slice(0, 19).replace('T', ' ');
}

// Meses transcurridos desde el inicio del período base (puede ser negativo).
function mesesDesdeBase(f) {
  var b = new Date(aDia(BASE_INICIO) * DIA_MS);
  return (f.getUTCFullYear() - b.getUTCFullYear()) * 12 + f.getUTCMonth() - b.getUTCMonth();
}

var COLUMNAS_VENTAS = ['id', 'fecha', 'fecha_hora', 'cliente', 'identificacion', 'fecha_alta_cliente', 'sku', 'producto',
  'categoria', 'marca', 'proveedor', 'precio', 'costo_unitario', 'cantidad', 'descuento_pct', 'descuento',
  'base_imponible', 'iva', 'total', 'moneda', 'tasa_cambio', 'metodo_pago', 'comision_bancaria', 'vendedor',
  'sucursal', 'ciudad', 'estado_geo', 'condicion_pago', 'fecha_vencimiento', 'estado', 'monto_pagado',
  'fecha_pago', 'tasa_cambio_pago'];
var COLUMNAS_INVENTARIO = ['fecha', 'sucursal', 'zona_almacen', 'sku', 'producto', 'categoria', 'perecedero',
  'vida_util_dias', 'stock_inicial', 'entradas', 'salidas', 'devoluciones', 'stock_final', 'costo_unitario',
  'valor_inventario'];
var COLUMNAS_COMPRAS = ['nro_orden', 'fecha_orden', 'fecha_esperada', 'fecha_recepcion', 'proveedor', 'sucursal',
  'sku', 'producto', 'cantidad', 'costo_unitario', 'total'];
var COLUMNAS_METAS = ['mes', 'sucursal', 'vendedor', 'meta_ventas'];
var COLUMNAS_TASAS = ['fecha', 'hora', 'tasa_bcv', 'tasa_usdt', 'tasa_eur', 'fuente'];

var FACTOR_SEMANA = [0.3, 1.1, 1.0, 1.0, 1.0, 1.1, 1.3];   // domingo..sábado
var FACTOR_MES = negocio.ESTACION_BASE;   // enero..diciembre
var PROB_DEVOLUCION = { 'Rubros perecederos': 0.04, 'Veterinarios': 0.03, 'Semillas': 0.025 };
// Fracción de ventas que se registra dos veces en el sistema administrativo (minutos después, otro id).
var PROB_DUPLICADO = 0.004;
var MAX_ESTACION = 2.0;

/**
 * Genera el período y lo carga en el data lake.
 * @param {object} op
 * @param {number} op.total          ventas aproximadas del período
 * @param {string} op.desde          AAAA-MM-DD
 * @param {string} op.hasta          AAAA-MM-DD
 * @param {number} [op.semilla=2026] semilla de las transacciones
 * @param {string} [op.fechaCarga]   partición fecha_carga (por defecto, hoy)
 * @param {number} [op.idInicial=0]  las ventas se numeran desde idInicial + 1
 * @param {string} [op.prefijoOrden='OC-']  prefijo de los números de orden de compra
 * @param {string} [op.origen='generador']  valor de ingestas.origen
 * @param {function} [op.log=console.log]
 * @returns {Promise<object>} resumen con las filas de cada reporte y las cargas registradas
 */
async function generar(op) {
  var total = op.total;
  var desde = op.desde;
  var hasta = op.hasta;
  var semilla = op.semilla === undefined ? 2026 : op.semilla;
  var fechaCarga = op.fechaCarga || v.hoy();
  var idInicial = op.idInicial || 0;
  var prefijoOrden = op.prefijoOrden || 'OC-';
  var origen = op.origen || 'generador';
  var log = op.log || console.log;
  var DATASETS = config.metricas.datasets;

  if (!(total > 0) || !(semilla >= 0)) throw new Error('Parámetros inválidos: total y semilla deben ser números positivos');
  [desde, hasta, fechaCarga].forEach(v.validarFecha);

  var azar = crearAzar(semilla);
  // Catálogo estable entre ejecuciones (mismos clientes y productos "estrella" cada día).
  var azarCatalogo = crearAzar(SEMILLA_CATALOGO);

  function entre(min, max, rng) {
    return min + Math.floor((rng || azar)() * (max - min + 1));
  }

  function sorteo(pares) {
    var acumulado = [];
    var suma = 0;
    pares.forEach(function (p) { suma += p[1]; acumulado.push(suma); });
    return function (r) { return pares[buscar(acumulado, pares.length, r === undefined ? azar() : r)][0]; };
  }

  // Reporte que se escribe como CSV en streaming a staging/ de MinIO (sin tocar el disco)
  // y, al cerrarlo, se convierte a Parquet en su dataset con el mismo proceso de la API.
  function crearSalida(nombre, columnas) {
    var stream = new PassThrough();
    var claveStaging = datalake.claveStaging('csv');
    var error = null;
    var subida = datalake.subirStream(claveStaging, stream);
    // Si la subida falla, se libera a quien espera 'drain' y la siguiente escritura lanza el error.
    subida.catch(function (err) { error = err; stream.emit('drain'); });
    stream.write(columnas.join(',') + '\n');
    return {
      nombre: nombre,
      filas: 0,
      // Respeta la contrapresión: espera a que MinIO consuma el búfer si está lleno.
      escribir: function (valores) {
        if (error) throw error;
        this.filas++;
        if (stream.write(valores.map(campo).join(',') + '\n')) return null;
        return new Promise(function (resolve) { stream.once('drain', resolve); });
      },
      cerrar: async function () {
        stream.end();
        var bytes = await subida;
        var carga = await ingesta.crear(
          { clave: claveStaging, size: bytes },
          { dataset: DATASETS[nombre], fecha: fechaCarga, archivoOrigen: nombre + '.csv' },
          origen
        );
        log('  ' + DATASETS[nombre] + ': ' + carga.filas + ' filas -> ' + carga.clave_parquet +
          ' (CSV ' + (bytes / 1048576).toFixed(1) + ' MB, Parquet ' + (carga.bytes_parquet / 1048576).toFixed(1) + ' MB, ' + carga.segundos + ' s)');
        return carga;
      }
    };
  }

  // -------------------------------------------------------------------------
  // Calendario: peso de cada día (día de semana, quincena, mes, tendencia) y tasa de cambio
  // -------------------------------------------------------------------------

  var primerDia = aDia(desde);
  var ultimoDia = aDia(hasta);
  if (!(ultimoDia >= primerDia)) throw new Error('Rango de fechas inválido: ' + desde + ' a ' + hasta);

  var PESO_HORA = sorteo([[7, 6], [8, 10], [9, 10], [10, 9], [11, 8], [12, 5], [13, 4], [14, 5], [15, 6], [16, 5], [17, 3]]);

  var calendario = [];
  // Devaluación diaria de ~0,12 % desde el inicio del período base (180 Bs/USD).
  var tasa = 180 * Math.pow(1.0012, primerDia - aDia(BASE_INICIO));
  for (var d = primerDia; d <= ultimoDia; d++) {
    var f = new Date(d * DIA_MS);
    var diaMes = f.getUTCDate();
    var finDeMes = new Date(Date.UTC(f.getUTCFullYear(), f.getUTCMonth() + 1, 0)).getUTCDate();
    var quincena = diaMes === 1 || diaMes === 15 || diaMes === 16 || diaMes === 30 || diaMes === finDeMes ? 1.15 : 1;
    var meses = mesesDesdeBase(f);
    if (d > primerDia) tasa = tasa * (1 + 0.0012 + (azar() - 0.5) * 0.002);
    calendario.push({
      dia: d,
      fecha: textoFecha(d),
      mes: textoFecha(d).slice(0, 7) + '-01',
      meses: meses,
      mesIndice: f.getUTCMonth(),
      temporada: FACTOR_MES[f.getUTCMonth()] >= 1.1,
      peso: FACTOR_SEMANA[f.getUTCDay()] * quincena * FACTOR_MES[f.getUTCMonth()] * (1 + 0.015 * meses),
      tasa: r2(tasa)
    });
  }
  var sumaPesos = calendario.reduce(function (a, c) { return a + c.peso; }, 0);

  function tasaDel(dia) {
    // Un pago posterior al período generado usa la tasa proyectada de ese día.
    if (dia > ultimoDia) return r2(calendario[calendario.length - 1].tasa * Math.pow(1.0012, dia - ultimoDia));
    return calendario[dia - primerDia].tasa;
  }

  // -------------------------------------------------------------------------
  // Clientes, productos, sucursales y vendedores
  // -------------------------------------------------------------------------

  var sucursales = negocio.sucursales;
  var sorteoSucursal = sorteo(sucursales.map(function (s, i) { return [i, s.peso]; }));
  var sorteoVendedor = sucursales.map(function (s) { return sorteo(negocio.vendedores[s.sucursal]); });
  var sorteoPago = {};
  Object.keys(negocio.pagosPorTipo).forEach(function (t) { sorteoPago[t] = sorteo(negocio.pagosPorTipo[t]); });

  // Pesos tipo Zipf sobre un orden aleatorio: pocos elementos concentran la mayoría.
  function pesosPareto(n, exponente) {
    var orden = [];
    for (var i = 0; i < n; i++) orden.push(i);
    for (var j = n - 1; j > 0; j--) {
      var k = Math.floor(azarCatalogo() * (j + 1));
      var t = orden[j]; orden[j] = orden[k]; orden[k] = t;
    }
    var pesos = new Array(n);
    orden.forEach(function (pos, rango) { pesos[pos] = Math.pow(rango + 1, -exponente); });
    return pesos;
  }

  // Clientes únicos por identificación (la lista base repite algunos).
  var vistos = {};
  var clientes = [];
  clientesBase.forEach(function (c) {
    if (vistos[c.identificacion]) return;
    vistos[c.identificacion] = true;
    clientes.push({ cliente: c.cliente, identificacion: c.identificacion, tipo: c.identificacion.charAt(0).toUpperCase() });
  });
  var pesosClientes = pesosPareto(clientes.length, 0.8);
  var inicioAltas = aDia('2023-01-01');
  var baseInicio = aDia(BASE_INICIO);
  var baseFin = aDia(BASE_FIN);
  clientes.forEach(function (c, i) {
    if (!negocio.pagosPorTipo[c.tipo]) c.tipo = 'V';
    c.peso = pesosClientes[i] * (c.tipo === 'J' || c.tipo === 'G' ? 3 : 1);
    // 65 % ya eran clientes antes del período base; el resto se registra durante él.
    c.alta = azarCatalogo() < 0.65 ? entre(inicioAltas, baseInicio - 1, azarCatalogo) : entre(baseInicio, baseFin - 30, azarCatalogo);
    c.sucursal = sorteoSucursal(azarCatalogo());
    c.moroso = azarCatalogo() < 0.04;
  });
  // Ordenados por fecha de alta: cada día solo se sortea entre los ya registrados.
  clientes.sort(function (a, b) { return a.alta - b.alta; });
  var acumuladoClientes = [];
  clientes.reduce(function (suma, c) { suma += c.peso; acumuladoClientes.push(suma); return suma; }, 0);

  var pesosProductos = pesosPareto(productos.length, 1.0);
  // Los 3 productos menos atractivos no se venden: quedan como inventario estancado.
  pesosProductos.map(function (p, i) { return [p, i]; })
    .sort(function (a, b) { return a[0] - b[0]; })
    .slice(0, 3)
    .forEach(function (par) { pesosProductos[par[1]] = 0; });
  var acumuladoProductos = [];
  productos.reduce(function (suma, p, i) {
    suma += pesosProductos[i] / Math.sqrt(p.price + 20);
    acumuladoProductos.push(suma);
    return suma;
  }, 0);

  // Sorteo de producto ajustado por temporada: se acepta con probabilidad proporcional
  // al factor de su categoría en el mes (muestreo por rechazo, máx. 8 intentos).
  function elegirProducto(mesIndice) {
    var p = 0;
    for (var intento = 0; intento < 8; intento++) {
      p = buscar(acumuladoProductos, productos.length, azar());
      var factores = negocio.estacionalidad[productos[p].categoria];
      if (!factores || azar() * MAX_ESTACION < factores[mesIndice]) return p;
    }
    return p;
  }

  function cantidadPara(tipo, r) {
    if (tipo === 'J' || tipo === 'G') return Math.min(40, 1 + Math.floor(-Math.log(1 - r) * 5));
    return Math.min(10, 1 + Math.floor(-Math.log(1 - r) * 1.2));
  }

  // -------------------------------------------------------------------------
  // Inventario inicial y punto de reorden según la demanda esperada
  // -------------------------------------------------------------------------

  var ventasPorDia = total / calendario.length;
  var demanda = sucursales.map(function () { return new Array(productos.length).fill(0); });
  (function estimarDemanda() {
    var azarMuestra = crearAzar(semilla + 1);
    var muestras = 50000;
    for (var i = 0; i < muestras; i++) {
      var c = clientes[buscar(acumuladoClientes, clientes.length, azarMuestra())];
      var s = azarMuestra() < 0.85 ? c.sucursal : sorteoSucursal(azarMuestra());
      var p = buscar(acumuladoProductos, productos.length, azarMuestra());
      demanda[s][p] += cantidadPara(c.tipo, azarMuestra());
    }
    demanda.forEach(function (fila) {
      fila.forEach(function (u, p) { fila[p] = Math.max(0.05, u / muestras * ventasPorDia); });
    });
  })();

  var existencia = demanda.map(function (fila) { return fila.map(function (u) { return Math.ceil(u * 40) + 2; }); });
  var enCamino = demanda.map(function (fila) { return fila.map(function () { return 0; }); });
  var llegadas = {};   // día -> órdenes que se reciben ese día
  var compras = [];

  function ordenar(dia, s, p) {
    var prod = productos[p];
    var prov = negocio.proveedores[prod.proveedor];
    // Los perecederos se piden para pocos días (no más de su vida útil).
    var cobertura = Math.min(35, prod.vida_util_dias || 35);
    var cantidad = Math.max(5, Math.ceil(demanda[s][p] * cobertura));
    var esperada = dia + prov.entrega + entre(-1, 2);
    var recepcion = esperada + (azar() < prov.probRetraso ? entre(2, 12) : 0);
    var meses = calendario[dia - primerDia].meses;
    var orden = {
      nro_orden: prefijoOrden + String(compras.length + 1).padStart(6, '0'),
      fecha_orden: dia,
      fecha_esperada: esperada,
      fecha_recepcion: recepcion <= ultimoDia ? recepcion : null,   // null: aún en tránsito
      proveedor: prod.proveedor,
      s: s,
      p: p,
      cantidad: cantidad,
      costo_unitario: r2(prod.cost * (1 + 0.004 * meses) * (0.97 + azar() * 0.06))
    };
    compras.push(orden);
    enCamino[s][p] += cantidad;
    if (orden.fecha_recepcion !== null) (llegadas[recepcion] = llegadas[recepcion] || []).push(orden);
  }

  // -------------------------------------------------------------------------
  // Simulación día por día
  // -------------------------------------------------------------------------

  var DESCUENTO_PROMO = sorteo([[5, 4], [10, 3], [15, 2], [20, 1]]);
  var salidas, devoluciones;
  var ventaPorVendedor = {};

  function venderUna(c, dia, id) {
    var s = azar() < 0.85 ? c.sucursal : sorteoSucursal();
    var p = elegirProducto(dia.mesIndice);
    var cantidad = cantidadPara(c.tipo, azar());
    // Sin existencia suficiente la venta se pierde (no queda registro).
    if (existencia[s][p] < cantidad) return null;

    var prod = productos[p];
    var suc = sucursales[s];
    var mayorista = c.tipo === 'J' || c.tipo === 'G';
    var descuentoPct = 0;
    if (mayorista && cantidad >= 10 && azar() < 0.6) descuentoPct = cantidad >= 25 ? 15 : 10;
    else if (azar() < (dia.temporada ? 0.15 : 0.08)) descuentoPct = DESCUENTO_PROMO();

    var bruto = prod.price * cantidad;
    var descuento = r2(bruto * descuentoPct / 100);
    var base = r2(bruto - descuento);
    var iva = r2(base * IVA);
    var totalVenta = r2(base + iva);
    var metodo = sorteoPago[c.tipo]();
    var pago = negocio.metodosPago[metodo];

    var reglaCredito = negocio.credito[c.tipo];
    var aCredito = azar() < reglaCredito.probabilidad;
    var plazo = aCredito ? reglaCredito.plazos[entre(0, reglaCredito.plazos.length - 1)] : 0;

    var estado, montoPagado = 0, diaPago = null;
    var r = azar();
    if (r < 0.015) {
      estado = 'Anulado';
    } else if (r < 0.015 + (PROB_DEVOLUCION[prod.categoria] || 0.02)) {
      estado = 'Devuelto';
      montoPagado = totalVenta;
      diaPago = dia.dia;
    } else if (!aCredito) {
      estado = 'Pagado';
      montoPagado = totalVenta;
      diaPago = dia.dia;
    } else {
      var atraso = entre(reglaCredito.atraso[0], reglaCredito.atraso[1]) + (c.moroso ? entre(30, 120) : 0);
      var nuncaPaga = azar() < (c.moroso ? 0.15 : 0.015);
      var previsto = dia.dia + Math.max(0, plazo + atraso);
      if (!nuncaPaga && previsto <= ultimoDia) {
        estado = 'Pagado';
        montoPagado = totalVenta;
        diaPago = previsto;
      } else if (azar() < 0.35) {
        estado = 'Parcial';
        montoPagado = r2(totalVenta * (0.3 + azar() * 0.4));
        diaPago = dia.dia + entre(0, Math.min(plazo, ultimoDia - dia.dia));
      } else {
        estado = 'Pendiente';
      }
    }

    if (estado !== 'Anulado') {
      existencia[s][p] -= cantidad;
      salidas[s][p] += cantidad;
      if (estado === 'Devuelto') {
        existencia[s][p] += cantidad;
        devoluciones[s][p] += cantidad;
      }
    }

    var vendedor = sorteoVendedor[s]();
    if (estado !== 'Anulado' && estado !== 'Devuelto') {
      var clave = dia.mes + '|' + suc.sucursal + '|' + vendedor;
      ventaPorVendedor[clave] = (ventaPorVendedor[clave] || 0) + base;
    }

    var hora = PESO_HORA();
    return [
      id, dia.fecha,
      dia.fecha + ' ' + String(hora).padStart(2, '0') + ':' + String(entre(0, 59)).padStart(2, '0') + ':' + String(entre(0, 59)).padStart(2, '0'),
      c.cliente, c.identificacion, textoFecha(c.alta), prod.sku, prod.name, prod.categoria, prod.marca, prod.proveedor,
      prod.price, r2(prod.cost * (1 + 0.004 * dia.meses)), cantidad, descuentoPct, descuento, base, iva, totalVenta,
      pago.moneda, dia.tasa, metodo, r2(totalVenta * pago.comision / 100), vendedor, suc.sucursal, suc.ciudad, suc.estado_geo,
      aCredito ? 'Crédito' : 'Contado', textoFecha(dia.dia + plazo), estado, r2(montoPagado),
      diaPago === null ? null : textoFecha(diaPago), diaPago === null ? null : tasaDel(diaPago)
    ];
  }

  // Falla al inicio (y no a mitad de la simulación) si MinIO o MariaDB no responden.
  await datalake.asegurarBucket();
  await db.query('SELECT 1');
  log('Generando ' + desde + ' a ' + hasta + ' (semilla ' + semilla + ') y cargando en fecha_carga=' + fechaCarga + ':');

  var ventas = crearSalida('ventas', COLUMNAS_VENTAS);
  var inventario = crearSalida('inventario', COLUMNAS_INVENTARIO);
  var cargas = [];
  var id = idInicial;
  var perdidas = 0;
  var duplicadas = 0;
  var registrados = 0;

  for (var i = 0; i < calendario.length; i++) {
    var dia = calendario[i];
    var inicial = existencia.map(function (fila) { return fila.slice(); });
    var entradas = sucursales.map(function () { return new Array(productos.length).fill(0); });
    salidas = sucursales.map(function () { return new Array(productos.length).fill(0); });
    devoluciones = sucursales.map(function () { return new Array(productos.length).fill(0); });

    (llegadas[dia.dia] || []).forEach(function (o) {
      existencia[o.s][o.p] += o.cantidad;
      enCamino[o.s][o.p] -= o.cantidad;
      entradas[o.s][o.p] += o.cantidad;
    });

    while (registrados < clientes.length && clientes[registrados].alta <= dia.dia) registrados++;
    var cuantas = Math.round(total * dia.peso / sumaPesos);
    for (var n = 0; n < cuantas && registrados > 0; n++) {
      var c = clientes[buscar(acumuladoClientes, registrados, azar())];
      var fila = venderUna(c, dia, id + 1);
      if (!fila) { perdidas++; continue; }
      id++;
      var espera = ventas.escribir(fila);
      if (espera) await espera;
      if (fila[29] !== 'Anulado' && azar() < PROB_DUPLICADO) {
        id++;
        duplicadas++;
        var copia = fila.slice();
        copia[0] = id;
        copia[2] = sumarMinutos(fila[2], entre(1, 8));
        var esperaD = ventas.escribir(copia);
        if (esperaD) await esperaD;
      }
    }

    for (var s = 0; s < sucursales.length; s++) {
      for (var p = 0; p < productos.length; p++) {
        var prod = productos[p];
        var costo = r2(prod.cost * (1 + 0.004 * dia.meses));
        var esperaInv = inventario.escribir([
          dia.fecha, sucursales[s].sucursal, prod.zona_almacen, prod.sku, prod.name, prod.categoria,
          prod.perecedero ? 'true' : 'false', prod.vida_util_dias, inicial[s][p], entradas[s][p],
          salidas[s][p], devoluciones[s][p], existencia[s][p], costo, r2(existencia[s][p] * costo)
        ]);
        if (esperaInv) await esperaInv;
        var reorden = Math.ceil(demanda[s][p] * (negocio.proveedores[prod.proveedor].entrega + 10));
        if (existencia[s][p] + enCamino[s][p] <= reorden) ordenar(dia.dia, s, p);
      }
    }
  }
  cargas.push(await ventas.cerrar());
  cargas.push(await inventario.cerrar());

  var salidaCompras = crearSalida('compras', COLUMNAS_COMPRAS);
  for (var k = 0; k < compras.length; k++) {
    var o = compras[k];
    var esperaC = salidaCompras.escribir([
      o.nro_orden, textoFecha(o.fecha_orden), textoFecha(o.fecha_esperada),
      o.fecha_recepcion === null ? null : textoFecha(o.fecha_recepcion), o.proveedor, sucursales[o.s].sucursal,
      productos[o.p].sku, productos[o.p].name, o.cantidad, o.costo_unitario, r2(o.cantidad * o.costo_unitario)
    ]);
    if (esperaC) await esperaC;
  }
  cargas.push(await salidaCompras.cerrar());

  // Meta de cada vendedor: lo que vendió en el período ±, redondeada a centenas (cumplimiento
  // ~85-110 %). Las metas de un mismo mes cargadas en varios archivos se suman en el cálculo.
  var metas = crearSalida('metas', COLUMNAS_METAS);
  var claves = Object.keys(ventaPorVendedor).sort();
  for (var m = 0; m < claves.length; m++) {
    var partes = claves[m].split('|');
    var esperaM = metas.escribir([partes[0], partes[1], partes[2], Math.round(ventaPorVendedor[claves[m]] * (0.9 + azar() * 0.25) / 100) * 100]);
    if (esperaM) await esperaM;
  }
  cargas.push(await metas.cerrar());

  // Tasas del día (09:00): la BCV es la misma de las ventas; el USDT cotiza con una brecha
  // que oscila entre 5 % y 30 %, y el euro sigue un EUR/USD cercano a 1,08.
  var tasas = crearSalida('tasas', COLUMNAS_TASAS);
  var brecha = 0.12;
  var eurUsd = 1.08;
  for (var t = 0; t < calendario.length; t++) {
    brecha = Math.min(0.3, Math.max(0.05, brecha + (azar() - 0.5) * 0.02));
    eurUsd = Math.min(1.15, Math.max(1.02, eurUsd + (azar() - 0.5) * 0.006));
    var bcv = calendario[t].tasa;
    var esperaT = tasas.escribir([calendario[t].fecha, '09:00', bcv, r2(bcv * (1 + brecha)), r2(bcv * eurUsd), 'BCV / P2P']);
    if (esperaT) await esperaT;
  }
  cargas.push(await tasas.cerrar());

  var resumen = {
    ventas: ventas.filas, perdidas: perdidas, duplicadas: duplicadas, inventario: inventario.filas,
    compras: salidaCompras.filas, metas: metas.filas, tasas: tasas.filas, cargas: cargas
  };
  log('Listo: ' + resumen.ventas + ' ventas (' + perdidas + ' perdidas por falta de existencia, ' + duplicadas +
    ' registradas dos veces), ' + resumen.inventario + ' filas de inventario, ' + resumen.compras + ' órdenes de compra, ' +
    resumen.metas + ' metas y ' + resumen.tasas + ' tasas.');
  return resumen;
}

module.exports = { generar: generar };

// ---------------------------------------------------------------------------
// Línea de comandos: npm run csv -- [ventas] [desde] [hasta] [semilla] [fecha_carga]
// ---------------------------------------------------------------------------

if (require.main === module) {
  var USO = 'Uso: npm run csv -- [ventas=60000] [desde=' + BASE_INICIO + '] [hasta=' + BASE_FIN + '] [semilla=2026] [fecha_carga=hoy]';
  generar({
    total: parseInt(process.argv[2] || '60000', 10),
    desde: process.argv[3] || BASE_INICIO,
    hasta: process.argv[4] || BASE_FIN,
    semilla: parseInt(process.argv[5] || '2026', 10),
    fechaCarga: process.argv[6] || v.hoy()
  })
    .then(function () {
      console.log('Recalcule con POST /api/metricas/recalcular o espere la revisión de 15 min.');
      return db.cerrar();
    })
    .then(function () { process.exit(0); })
    .catch(function (err) {
      console.error('Falló la generación:', err.message + (/inválid/i.test(err.message) ? '. ' + USO : ''));
      process.exit(1);
    });
}
