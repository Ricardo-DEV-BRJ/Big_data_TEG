/**
 * Catálogo de la agrocomercializadora que usa el generador de reportes (scripts/generar-ventas.js).
 * price y cost en USD por unidad de venta (saco, litro, frasco...).
 *   perecedero      true si el rubro se daña o vence en semanas/meses (rotación crítica)
 *   vida_util_dias  días desde la recepción hasta el vencimiento (null: no vence)
 *   zona_almacen    zona física del depósito donde se guarda
 */
function p(sku, name, price, cost, categoria, marca, proveedor, perecedero, vida_util_dias, zona_almacen) {
  return { sku, name, price, cost, categoria, marca, proveedor, perecedero, vida_util_dias, zona_almacen };
}

const AGROINSUMOS = 'Agroinsumos Andinos';
const SEMILLAS = 'Semillas del Llano';
const BALANCEADOS = 'Alimentos Balanceados Monay';
const BOCONO = 'Distribuidora Agropecuaria Boconó';
const PRODUCTORES = 'Productores Asociados de Trujillo';

const productos = [
  // Fertilizantes y enmiendas
  p('F001', 'Urea 46% saco 50 kg', 38, 29.1, 'Fertilizantes', 'Pequiven', AGROINSUMOS, false, 730, 'Depósito seco'),
  p('F002', 'Fertilizante 15-15-15 saco 50 kg', 45, 34.2, 'Fertilizantes', 'Pequiven', AGROINSUMOS, false, 730, 'Depósito seco'),
  p('F003', 'Fosfato diamónico (DAP) saco 50 kg', 52, 40.3, 'Fertilizantes', 'Yara', AGROINSUMOS, false, 730, 'Depósito seco'),
  p('F004', 'Sulfato de amonio saco 50 kg', 26, 19.4, 'Fertilizantes', 'Pequiven', AGROINSUMOS, false, 730, 'Depósito seco'),
  p('F005', 'Cloruro de potasio saco 50 kg', 41, 31.0, 'Fertilizantes', 'Yara', AGROINSUMOS, false, 730, 'Depósito seco'),
  p('F006', 'Abono orgánico compost saco 40 kg', 12, 7.5, 'Fertilizantes', 'Tierra Viva', PRODUCTORES, false, 365, 'Patio'),
  p('F007', 'Fertilizante foliar 1 L', 14, 9.2, 'Fertilizantes', 'Bayfolan', AGROINSUMOS, false, 730, 'Agroquímicos'),
  p('F008', 'Cal agrícola saco 40 kg', 8, 5.1, 'Fertilizantes', 'Calcáreos Andinos', AGROINSUMOS, false, null, 'Patio'),

  // Semillas
  p('S001', 'Semilla de maíz híbrido bolsa 20 kg', 95, 72.0, 'Semillas', 'Danac', SEMILLAS, false, 365, 'Depósito seco'),
  p('S002', 'Semilla de papa certificada saco 50 kg', 60, 45.0, 'Semillas', 'INIA', SEMILLAS, true, 90, 'Cuarto frío'),
  p('S003', 'Semilla de caraota negra 5 kg', 22, 15.2, 'Semillas', 'INIA', SEMILLAS, false, 365, 'Depósito seco'),
  p('S004', 'Semilla de cebolla sobre 500 g', 35, 24.1, 'Semillas', 'Sakata', SEMILLAS, false, 365, 'Depósito seco'),
  p('S005', 'Semilla de tomate híbrido sobre 10 g', 18, 12.0, 'Semillas', 'Seminis', SEMILLAS, false, 365, 'Depósito seco'),
  p('S006', 'Semilla de pimentón sobre 10 g', 16, 10.8, 'Semillas', 'Seminis', SEMILLAS, false, 365, 'Depósito seco'),
  p('S007', 'Semilla de zanahoria lata 500 g', 20, 13.5, 'Semillas', 'Sakata', SEMILLAS, false, 365, 'Depósito seco'),

  // Agroquímicos
  p('A001', 'Herbicida glifosato 1 L', 9, 6.2, 'Agroquímicos', 'Roundup', AGROINSUMOS, false, 730, 'Agroquímicos'),
  p('A002', 'Herbicida paraquat 1 L', 10, 7.0, 'Agroquímicos', 'Gramoxone', AGROINSUMOS, false, 730, 'Agroquímicos'),
  p('A003', 'Insecticida cipermetrina 1 L', 13, 8.8, 'Agroquímicos', 'Arrivo', BOCONO, false, 730, 'Agroquímicos'),
  p('A004', 'Fungicida mancozeb 1 kg', 11, 7.4, 'Agroquímicos', 'Dithane', AGROINSUMOS, false, 730, 'Agroquímicos'),
  p('A005', 'Fungicida clorotalonil 1 L', 15, 10.2, 'Agroquímicos', 'Bravo', BOCONO, false, 730, 'Agroquímicos'),
  p('A006', 'Adherente agrícola 1 L', 6, 3.9, 'Agroquímicos', 'Agrotin', BOCONO, false, 730, 'Agroquímicos'),
  p('A007', 'Nematicida granulado 1 kg', 18, 12.5, 'Agroquímicos', 'Counter', AGROINSUMOS, false, 730, 'Agroquímicos'),

  // Alimento animal
  p('N001', 'Alimento pollos de engorde saco 40 kg', 34, 27.0, 'Alimento animal', 'Purina', BALANCEADOS, true, 90, 'Depósito seco'),
  p('N002', 'Alimento gallinas ponedoras saco 40 kg', 32, 25.5, 'Alimento animal', 'Purina', BALANCEADOS, true, 90, 'Depósito seco'),
  p('N003', 'Alimento para cerdos saco 40 kg', 30, 23.8, 'Alimento animal', 'Protinal', BALANCEADOS, true, 90, 'Depósito seco'),
  p('N004', 'Alimento ganado lechero saco 40 kg', 28, 22.0, 'Alimento animal', 'Protinal', BALANCEADOS, true, 120, 'Depósito seco'),
  p('N005', 'Alimento para perros saco 20 kg', 26, 19.0, 'Alimento animal', 'Dogourmet', BALANCEADOS, true, 180, 'Depósito seco'),
  p('N006', 'Sal mineralizada saco 25 kg', 15, 10.5, 'Alimento animal', 'Minerasal', BALANCEADOS, false, null, 'Depósito seco'),
  p('N007', 'Melaza tambor 20 L', 18, 12.5, 'Alimento animal', 'Central Motatán', PRODUCTORES, true, 180, 'Patio'),

  // Productos veterinarios
  p('V001', 'Vacuna aftosa frasco 50 dosis', 42, 31.0, 'Veterinarios', 'Bioaftogen', BOCONO, true, 180, 'Cuarto frío'),
  p('V002', 'Desparasitante ivermectina 500 mL', 24, 16.5, 'Veterinarios', 'Ivomec', BOCONO, false, 720, 'Agroquímicos'),
  p('V003', 'Vitaminas ADE 100 mL', 12, 8.0, 'Veterinarios', 'Vitaminol', BOCONO, false, 540, 'Cuarto frío'),
  p('V004', 'Antibiótico oxitetraciclina 100 mL', 14, 9.5, 'Veterinarios', 'Terramicina', BOCONO, false, 540, 'Cuarto frío'),
  p('V005', 'Garrapaticida 1 L', 19, 13.0, 'Veterinarios', 'Butox', BOCONO, false, 720, 'Agroquímicos'),

  // Herramientas y riego
  p('H001', 'Machete 22 pulgadas', 7, 4.2, 'Herramientas y riego', 'Tramontina', BOCONO, false, null, 'Depósito seco'),
  p('H002', 'Manguera de riego 1/2" 50 m', 28, 19.0, 'Herramientas y riego', 'Plastigama', BOCONO, false, null, 'Depósito seco'),
  p('H003', 'Fumigadora de espalda 20 L', 55, 39.0, 'Herramientas y riego', 'Jacto', BOCONO, false, null, 'Depósito seco'),
  p('H004', 'Cinta de riego por goteo rollo 1000 m', 85, 62.0, 'Herramientas y riego', 'Netafim', BOCONO, false, null, 'Depósito seco'),
  p('H005', 'Pala punta redonda', 12, 7.8, 'Herramientas y riego', 'Tramontina', BOCONO, false, null, 'Depósito seco'),
  p('H006', 'Alambre de púas rollo 400 m', 48, 36.0, 'Herramientas y riego', 'Sidetur', BOCONO, false, null, 'Patio'),

  // Rubros perecederos (compra a productores de la zona y reventa a comercios)
  p('R001', 'Papa blanca saco 45 kg', 30, 22.0, 'Rubros perecederos', 'Cosecha local', PRODUCTORES, true, 30, 'Cuarto frío'),
  p('R002', 'Cebolla saco 25 kg', 18, 12.5, 'Rubros perecederos', 'Cosecha local', PRODUCTORES, true, 30, 'Depósito seco'),
  p('R003', 'Tomate cesta 20 kg', 16, 11.0, 'Rubros perecederos', 'Cosecha local', PRODUCTORES, true, 7, 'Cuarto frío'),
  p('R004', 'Zanahoria saco 30 kg', 14, 9.5, 'Rubros perecederos', 'Cosecha local', PRODUCTORES, true, 20, 'Cuarto frío'),
  p('R005', 'Plátano caja 20 kg', 12, 8.0, 'Rubros perecederos', 'Cosecha local', PRODUCTORES, true, 10, 'Depósito seco'),
  p('R006', 'Huevos cartón 30 unidades', 5.5, 4.1, 'Rubros perecederos', 'Granja La Ceiba', PRODUCTORES, true, 21, 'Cuarto frío'),
  p('R007', 'Queso blanco duro kg', 6.5, 4.8, 'Rubros perecederos', 'Lácteos Monay', PRODUCTORES, true, 30, 'Cuarto frío')
];

module.exports = productos;
