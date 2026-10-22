/**
 * Genera un CSV sintético grande para probar el pipeline.
 * Uso: node scripts/generar-csv-prueba.js <salida.csv> [filas=1000000]
 */
var fs = require('fs');
var path = require('path');

var salida = process.argv[2] || 'tmp/ventas_prueba.csv';
var total = parseInt(process.argv[3] || '1000000', 10);
var ciudades = ['Quito', 'Guayaquil', 'Cuenca', 'Ambato', 'Manta', 'Loja'];
var productos = ['A100', 'B200', 'C300', 'D400', 'E500'];

fs.mkdirSync(path.dirname(path.resolve(salida)), { recursive: true });
var out = fs.createWriteStream(salida);
out.write('id,fecha,ciudad,producto,cantidad,precio_unitario,total\n');

var i = 0;
function escribir() {
  var ok = true;
  while (i < total && ok) {
    i++;
    var cantidad = 1 + Math.floor(Math.random() * 20);
    var precio = (5 + Math.random() * 95).toFixed(2);
    var dia = String(1 + (i % 28)).padStart(2, '0');
    ok = out.write(i + ',2026-10-' + dia + ',' + ciudades[i % ciudades.length] + ',' + productos[i % productos.length] + ',' +
      cantidad + ',' + precio + ',' + (cantidad * precio).toFixed(2) + '\n');
  }
  if (i < total) out.once('drain', escribir);
  else out.end(function() { console.log('Generado ' + salida + ' con ' + total + ' filas'); });
}
escribir();
