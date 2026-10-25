/**
 * Datos fijos del negocio que usa el generador de reportes (scripts/generar-ventas.js):
 * sucursales con su ubicación, vendedores, métodos de pago, plazos de crédito y proveedores.
 * Los pesos indican qué tanto se usa cada opción; no tienen que sumar 1.
 */

const sucursales = [
  { sucursal: 'Caracas Centro', ciudad: 'Caracas', estado_geo: 'Distrito Capital', peso: 30 },
  { sucursal: 'Valencia Norte', ciudad: 'Valencia', estado_geo: 'Carabobo', peso: 20 },
  { sucursal: 'Maracaibo', ciudad: 'Maracaibo', estado_geo: 'Zulia', peso: 18 },
  { sucursal: 'Barquisimeto', ciudad: 'Barquisimeto', estado_geo: 'Lara', peso: 14 },
  { sucursal: 'Maracay', ciudad: 'Maracay', estado_geo: 'Aragua', peso: 10 },
  { sucursal: 'San Cristóbal', ciudad: 'San Cristóbal', estado_geo: 'Táchira', peso: 8 }
];

// Vendedores por sucursal; el peso refleja su desempeño (cuántas ventas cierra).
const vendedores = {
  'Caracas Centro': [['María Fernández', 9], ['José Rodríguez', 7], ['Luisa Medina', 5], ['Carlos Pérez', 3]],
  'Valencia Norte': [['Ana Torres', 8], ['Pedro Salazar', 6], ['Gabriela Ruiz', 4]],
  'Maracaibo': [['Daniel Urdaneta', 8], ['Carmen Villalobos', 7], ['Jesús Finol', 3]],
  'Barquisimeto': [['Rosa Mendoza', 7], ['Andrés Colmenárez', 5]],
  'Maracay': [['Patricia Lugo', 6], ['Miguel Ochoa', 4]],
  'San Cristóbal': [['Fernando Contreras', 6], ['Diana Chacón', 4]]
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

// Preferencia de método de pago según el tipo de cliente (prefijo de la identificación).
const pagosPorTipo = {
  V: [['Pago Móvil', 30], ['Punto de Venta', 25], ['Efectivo USD', 20], ['Zelle', 10], ['Transferencia', 10], ['Efectivo Bs', 5]],
  E: [['Efectivo USD', 40], ['Zelle', 30], ['Punto de Venta', 20], ['Pago Móvil', 10]],
  J: [['Transferencia', 60], ['Zelle', 20], ['Pago Móvil', 10], ['Efectivo USD', 10]],
  G: [['Transferencia', 90], ['Pago Móvil', 10]]
};

// Ventas a crédito por tipo de cliente: probabilidad, plazos posibles (días) y
// atraso típico del pago respecto al vencimiento (días, puede ser negativo = paga antes).
const credito = {
  V: { probabilidad: 0.05, plazos: [15], atraso: [-5, 10] },
  E: { probabilidad: 0.02, plazos: [15], atraso: [-5, 10] },
  J: { probabilidad: 0.7, plazos: [15, 30], atraso: [-5, 20] },
  G: { probabilidad: 0.9, plazos: [45], atraso: [5, 60] }
};

// Días que tarda cada proveedor en entregar y qué tan seguido se retrasa.
const proveedores = {
  'Importadora Orinoco': { entrega: 12, probRetraso: 0.25 },
  'Tecno Suministros del Lago': { entrega: 8, probRetraso: 0.15 },
  'Distribuidora Caribe': { entrega: 6, probRetraso: 0.1 },
  'Comercial Ávila': { entrega: 5, probRetraso: 0.05 },
  'Distribuidora Los Andes': { entrega: 9, probRetraso: 0.4 }
};

module.exports = { sucursales, vendedores, metodosPago, pagosPorTipo, credito, proveedores };
