/**
 * Genera un CSV sintético grande para probar el pipeline.
 * Uso: node scripts/generar-csv-prueba.js <salida.csv> [filas=1000000]
 */
var fs = require('fs');
var path = require('path');
var ventas = require('../data_list/datosDeVentas.js')
var productos = require('../data_list/productos.js')

var estado = [
  "Pendiente",
  "Pagado"
]

var salida = process.argv[2] || 'tmp/ventas.csv';
var total = parseInt(process.argv[3] || '1000000', 10);


fs.mkdirSync(path.dirname(path.resolve(salida)), { recursive: true });
var out = fs.createWriteStream(salida);
out.write('id,fecha,cliente,identificacion,producto,precio,cantidad,total,estado\n');

var i = 0;
function escribir() {
  var ok = true;
  while (i < total && ok) {
    i++;
    var estadoVenta = Math.floor(Math.random() * 2)
    var indexProducto = Math.floor(Math.random() * productos.length);
    var indexVenta = Math.floor(Math.random() * ventas.length);
    var cantidad = Math.floor(Math.random() * 20);
    var dia = String(1 + (i % 28)).padStart(2, '0');
    ok = out.write(i + ',2026-10-' + dia + ',' + ventas[indexVenta].cliente.replace(',', '') + ',' + ventas[indexVenta].identificacion + ',' + productos[indexProducto].name + ',' + productos[indexProducto].price + ',' +
      cantidad + ',' + parseFloat(cantidad * productos[indexProducto].price).toFixed(2) + ',' + estado[estadoVenta] + '\n');
  }
  if (i < total) out.once('drain', escribir);
  else out.end(function() { console.log('Generado ' + salida + ' con ' + total + ' filas'); });
}
escribir();
