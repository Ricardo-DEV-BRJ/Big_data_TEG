/**
 * Datos fijos del negocio que usa el generador de reportes (scripts/generar-ventas.js):
 * la sede única de la agrocomercializadora en Trujillo, sus vendedores, métodos de pago,
 * plazos de crédito, proveedores y la estacionalidad agrícola de cada categoría.
 * Los pesos indican qué tanto se usa cada opción; no tienen que sumar 1.
 */

const sucursales = [
  { sucursal: 'Sede Trujillo', ciudad: 'Trujillo', estado_geo: 'Trujillo', peso: 1 }
];

// Vendedores (parte de los seis colaboradores de la empresa); el peso refleja cuántas ventas cierra.
const vendedores = {
  'Sede Trujillo': [['María Araujo', 6], ['José Valera', 5], ['Luisa Barrios', 3]]
};

// moneda: en qué moneda paga el cliente. comision: % del total que cobra el banco o la pasarela.
const metodosPago = {
  'Efectivo USD': { moneda: 'USD', comision: 0 },
  'Zelle': { moneda: 'USD', comision: 0 },
  'Efectivo Bs': { moneda: 'VES', comision: 0 },
  'Pago Móvil': { moneda: 'VES', comision: 0.3 },
  'Transferencia': { moneda: 'VES', comision: 0.2 },
  'Punto de Venta': { moneda: 'VES', comision: 2.0 }
};

// Tipo de cliente según el prefijo de la identificación: V/E son productores (personas
// naturales que siembran o crían) y J/G son comercios (bodegas, agropecuarias, abastos).
const tipoCliente = { V: 'Productor', E: 'Productor', J: 'Comercio', G: 'Comercio' };

// Preferencia de método de pago según el prefijo de la identificación.
const pagosPorTipo = {
  V: [['Efectivo USD', 30], ['Pago Móvil', 30], ['Punto de Venta', 15], ['Efectivo Bs', 15], ['Zelle', 5], ['Transferencia', 5]],
  E: [['Efectivo USD', 40], ['Pago Móvil', 30], ['Zelle', 15], ['Punto de Venta', 15]],
  J: [['Transferencia', 50], ['Zelle', 20], ['Pago Móvil', 20], ['Efectivo USD', 10]],
  G: [['Transferencia', 70], ['Pago Móvil', 30]]
};

// Ventas a crédito: los productores compran a crédito para pagar con la cosecha (plazo
// largo y atraso frecuente); los comercios pagan a 15 o 30 días.
const credito = {
  V: { probabilidad: 0.15, plazos: [30, 60], atraso: [-5, 25] },
  E: { probabilidad: 0.1, plazos: [30], atraso: [-5, 20] },
  J: { probabilidad: 0.55, plazos: [15, 30], atraso: [-5, 15] },
  G: { probabilidad: 0.55, plazos: [15, 30], atraso: [-5, 15] }
};

// Días que tarda cada proveedor en entregar y qué tan seguido se retrasa.
const proveedores = {
  'Agroinsumos Andinos': { entrega: 7, probRetraso: 0.25 },
  'Semillas del Llano': { entrega: 10, probRetraso: 0.2 },
  'Alimentos Balanceados Monay': { entrega: 3, probRetraso: 0.1 },
  'Distribuidora Agropecuaria Boconó': { entrega: 5, probRetraso: 0.15 },
  'Productores Asociados de Trujillo': { entrega: 1, probRetraso: 0.05 }
};

// Factor de demanda por mes (enero..diciembre) según el calendario agrícola andino:
// siembra con la entrada de lluvias (abril-mayo), fertilización (junio-julio), segundo
// ciclo (septiembre-octubre) y cosecha (noviembre-enero).
const ESTACION_BASE = [0.8, 0.85, 1.0, 1.15, 1.2, 1.1, 1.05, 0.95, 1.05, 1.1, 0.95, 0.85];
const estacionalidad = {
  'Semillas': [0.5, 0.6, 1.2, 2.0, 1.8, 0.9, 0.6, 0.6, 1.4, 1.5, 0.6, 0.4],
  'Fertilizantes': [0.6, 0.6, 0.9, 1.3, 1.5, 1.7, 1.5, 1.0, 1.1, 1.3, 0.8, 0.5],
  'Agroquímicos': [0.6, 0.6, 0.8, 1.1, 1.4, 1.5, 1.4, 1.2, 1.1, 1.2, 0.9, 0.6],
  'Rubros perecederos': [1.4, 1.1, 0.9, 0.8, 0.8, 0.9, 1.0, 1.1, 1.0, 0.9, 1.3, 1.6],
  'Alimento animal': [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.05, 1.1],
  'Veterinarios': [0.9, 0.9, 1.0, 1.2, 1.1, 1.0, 0.9, 0.9, 1.2, 1.1, 0.9, 0.9],
  'Herramientas y riego': [1.2, 1.3, 1.3, 1.1, 0.9, 0.8, 0.8, 0.9, 1.0, 1.0, 0.9, 0.9]
};

module.exports = { sucursales, vendedores, metodosPago, tipoCliente, pagosPorTipo, credito, proveedores, ESTACION_BASE, estacionalidad };
