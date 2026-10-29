/**
 * Genera los reportes sintéticos de la agrocomercializadora (sede única en Trujillo)
 * para probar el pipeline y las métricas. Simula día por día un período completo
 * (ventas, inventario, compras a proveedores) y escribe cuatro CSV listos para subir
 * con POST /api/ingestas:
 *
 *   ventas.csv      una fila por venta (dataset "ventas")
 *   inventario.csv  existencia diaria por producto, con zona de almacén, perecedero y vida útil (dataset "inventario")
 *   compras.csv     órdenes de compra a proveedores (dataset "compras")
 *   metas.csv       meta mensual de ventas netas por vendedor (dataset "metas")
 *   tasas.csv       tasas diarias en Bs por USD (BCV), USDT (mercado P2P) y EUR (BCV) (dataset "tasas")
 *
 * Los datos no son uniformes: pocos productos y clientes concentran la mayoría de
 * las ventas (Pareto); la demanda de cada categoría sigue el calendario agrícola
 * (siembra, fertilización, cosecha); los comercios y parte de los productores compran
 * a crédito; si no hay existencia la venta se pierde, y una pequeña fracción de las
 * ventas se registra dos veces (posibles duplicados que debe detectar el pipeline).
 * Con la misma semilla se generan siempre los mismos datos.
 *
 * Uso: node scripts/generar-ventas.js [carpeta=tmp/datos] [filas=60000] [desde=2025-10-01] [hasta=2026-09-30] [semilla=2026]
 */
var fs = require('fs');
var path = require('path');
var clientesBase = require('../data_list/datosDeVentas.js');
var productos = require('../data_list/productos.js');
var negocio = require('../data_list/negocio.js');

var carpeta = process.argv[2] || 'tmp/datos';
var total = parseInt(process.argv[3] || '60000', 10);
var desde = process.argv[4] || '2025-10-01';
var hasta = process.argv[5] || '2026-09-30';
var semilla = parseInt(process.argv[6] || '2026', 10);

var IVA = 0.16;
var DIA_MS = 86400000;

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
var azar = crearAzar(semilla);

function entre(min, max) {
  return min + Math.floor(azar() * (max - min + 1));
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

function sorteo(pares) {
  var acumulado = [];
  var suma = 0;
  pares.forEach(function (p) { suma += p[1]; acumulado.push(suma); });
  return function (r) { return pares[buscar(acumulado, pares.length, r === undefined ? azar() : r)][0]; };
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
function campo(v) {
  if (v === null || v === undefined) return '';
  var s = String(v);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function crearSalida(nombre, columnas) {
  var stream = fs.createWriteStream(path.join(carpeta, nombre));
  stream.write(columnas.join(',') + '\n');
  return {
    filas: 0,
    // Respeta la contrapresión del stream: espera a que se vacíe si el búfer está lleno.
    escribir: function (valores) {
      this.filas++;
      if (stream.write(valores.map(campo).join(',') + '\n')) return null;
      return new Promise(function (resolve) { stream.once('drain', resolve); });
    },
    cerrar: function () {
      return new Promise(function (resolve) { stream.end(resolve); });
    }
  };
}

// ---------------------------------------------------------------------------
// Calendario: peso de cada día (día de semana, quincena, mes, tendencia) y tasa de cambio
// ---------------------------------------------------------------------------

var primerDia = aDia(desde);
var ultimoDia = aDia(hasta);
if (!(ultimoDia >= primerDia)) throw new Error('Rango de fechas inválido: ' + desde + ' a ' + hasta);

var FACTOR_SEMANA = [0.3, 1.1, 1.0, 1.0, 1.0, 1.1, 1.3];   // domingo..sábado
var FACTOR_MES = negocio.ESTACION_BASE;   // enero..diciembre
var PESO_HORA = sorteo([[7, 6], [8, 10], [9, 10], [10, 9], [11, 8], [12, 5], [13, 4], [14, 5], [15, 6], [16, 5], [17, 3]]);

var calendario = [];
var tasa = 180;
for (var d = primerDia; d <= ultimoDia; d++) {
  var f = new Date(d * DIA_MS);
  var diaMes = f.getUTCDate();
  var finDeMes = new Date(Date.UTC(f.getUTCFullYear(), f.getUTCMonth() + 1, 0)).getUTCDate();
  var quincena = diaMes === 1 || diaMes === 15 || diaMes === 16 || diaMes === 30 || diaMes === finDeMes ? 1.15 : 1;
  var meses = (f.getUTCFullYear() - new Date(primerDia * DIA_MS).getUTCFullYear()) * 12 +
    f.getUTCMonth() - new Date(primerDia * DIA_MS).getUTCMonth();
  // Devaluación diaria de ~0,12 % con ruido.
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
  return calendario[dia - primerDia].tasa;
}

// ---------------------------------------------------------------------------
// Clientes, productos, sucursales y vendedores
// ---------------------------------------------------------------------------

var sucursales = negocio.sucursales;
var porSucursal = {};
sucursales.forEach(function (s, i) { porSucursal[s.sucursal] = i; });
var sorteoSucursal = sorteo(sucursales.map(function (s, i) { return [i, s.peso]; }));
var sorteoVendedor = sucursales.map(function (s) { return sorteo(negocio.vendedores[s.sucursal]); });
var sorteoPago = {};
Object.keys(negocio.pagosPorTipo).forEach(function (t) { sorteoPago[t] = sorteo(negocio.pagosPorTipo[t]); });

// Pesos tipo Zipf sobre un orden aleatorio: pocos elementos concentran la mayoría.
function pesosPareto(n, exponente) {
  var orden = [];
  for (var i = 0; i < n; i++) orden.push(i);
  for (var j = n - 1; j > 0; j--) {
    var k = Math.floor(azar() * (j + 1));
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
clientes.forEach(function (c, i) {
  if (!negocio.pagosPorTipo[c.tipo]) c.tipo = 'V';
  c.peso = pesosClientes[i] * (c.tipo === 'J' || c.tipo === 'G' ? 3 : 1);
  // 65 % ya eran clientes antes del período; el resto se registra durante el período.
  c.alta = azar() < 0.65 ? entre(inicioAltas, primerDia - 1) : entre(primerDia, Math.max(primerDia, ultimoDia - 30));
  c.sucursal = sorteoSucursal();
  c.moroso = azar() < 0.04;
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
var MAX_ESTACION = 2.0;
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

// ---------------------------------------------------------------------------
// Inventario inicial y punto de reorden según la demanda esperada
// ---------------------------------------------------------------------------

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
    nro_orden: 'OC-' + String(compras.length + 1).padStart(6, '0'),
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

// ---------------------------------------------------------------------------
// Simulación día por día
// ---------------------------------------------------------------------------

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

var DESCUENTO_PROMO = sorteo([[5, 4], [10, 3], [15, 2], [20, 1]]);
var PROB_DEVOLUCION = { 'Rubros perecederos': 0.04, 'Veterinarios': 0.03, 'Semillas': 0.025 };
// Fracción de ventas que se registra dos veces en el sistema administrativo (minutos después, otro id).
var PROB_DUPLICADO = 0.004;

function sumarMinutos(fechaHora, minutos) {
  return new Date(Date.parse(fechaHora.replace(' ', 'T') + 'Z') + minutos * 60000).toISOString().slice(0, 19).replace('T', ' ');
}

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

var salidas, devoluciones;
var ventaPorVendedor = {};

async function generar() {
  fs.mkdirSync(path.resolve(carpeta), { recursive: true });
  var ventas = crearSalida('ventas.csv', COLUMNAS_VENTAS);
  var inventario = crearSalida('inventario.csv', COLUMNAS_INVENTARIO);
  var id = 0;
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
  await ventas.cerrar();
  await inventario.cerrar();

  var salidaCompras = crearSalida('compras.csv', COLUMNAS_COMPRAS);
  for (var k = 0; k < compras.length; k++) {
    var o = compras[k];
    var esperaC = salidaCompras.escribir([
      o.nro_orden, textoFecha(o.fecha_orden), textoFecha(o.fecha_esperada),
      o.fecha_recepcion === null ? null : textoFecha(o.fecha_recepcion), o.proveedor, sucursales[o.s].sucursal,
      productos[o.p].sku, productos[o.p].name, o.cantidad, o.costo_unitario, r2(o.cantidad * o.costo_unitario)
    ]);
    if (esperaC) await esperaC;
  }
  await salidaCompras.cerrar();

  // Meta de cada vendedor: lo que vendió ese mes ±, redondeado a centenas (cumplimiento ~85-110 %).
  var metas = crearSalida('metas.csv', COLUMNAS_METAS);
  var claves = Object.keys(ventaPorVendedor).sort();
  for (var m = 0; m < claves.length; m++) {
    var partes = claves[m].split('|');
    var esperaM = metas.escribir([partes[0], partes[1], partes[2], Math.round(ventaPorVendedor[claves[m]] * (0.9 + azar() * 0.25) / 100) * 100]);
    if (esperaM) await esperaM;
  }
  await metas.cerrar();

  // Tasas del día (09:00): la BCV es la misma de las ventas; el USDT cotiza con una brecha
  // que oscila entre 5 % y 30 %, y el euro sigue un EUR/USD cercano a 1,08.
  var COLUMNAS_TASAS = ['fecha', 'hora', 'tasa_bcv', 'tasa_usdt', 'tasa_eur', 'fuente'];
  var tasas = crearSalida('tasas.csv', COLUMNAS_TASAS);
  var brecha = 0.12;
  var eurUsd = 1.08;
  for (var t = 0; t < calendario.length; t++) {
    brecha = Math.min(0.3, Math.max(0.05, brecha + (azar() - 0.5) * 0.02));
    eurUsd = Math.min(1.15, Math.max(1.02, eurUsd + (azar() - 0.5) * 0.006));
    var bcv = calendario[t].tasa;
    var esperaT = tasas.escribir([calendario[t].fecha, '09:00', bcv, r2(bcv * (1 + brecha)), r2(bcv * eurUsd), 'BCV / P2P']);
    if (esperaT) await esperaT;
  }
  await tasas.cerrar();

  console.log('Generado en ' + carpeta + ': ventas.csv ' + ventas.filas + ' filas (' + perdidas +
    ' ventas perdidas por falta de existencia, ' + duplicadas + ' registradas dos veces), inventario.csv ' + inventario.filas + ', compras.csv ' +
    salidaCompras.filas + ', metas.csv ' + metas.filas + ', tasas.csv ' + tasas.filas);
}

generar().catch(function (err) {
  console.error(err);
  process.exit(1);
});
