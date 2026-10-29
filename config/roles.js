/**
 * Roles del sistema según la Tabla 18 del Capítulo VI. El valor es el que se guarda en
 * usuarios.rol; la etiqueta es el área de la empresa que representa.
 * Los grupos se usan en las rutas para dar acceso por área (mínimo privilegio).
 */
const ROLES = {
  gerente: 'Gerencia',
  administracion: 'Administración',
  vendedor: 'Ventas',
  almacen: 'Almacén',
  administrador: 'Soporte TI'
};

const LISTA = Object.keys(ROLES);

const GRUPOS = {
  // Ventas, productos y clientes
  comercial: ['vendedor', 'gerente', 'administracion', 'administrador'],
  // Cobranza, pagos, monedas, tasas, metas y calidad de datos
  finanzas: ['gerente', 'administracion', 'administrador'],
  // Inventario, reposición, previsión y proveedores
  operaciones: ['gerente', 'almacen', 'administrador'],
  // Tableros de conjunto y bitácora
  direccion: ['gerente', 'administrador'],
  // Usuarios y recálculo manual
  sistema: ['administrador']
};

// Datasets que cada rol puede cargar por POST /api/ingestas.
const CARGA_POR_ROL = {
  administrador: null, // todos
  administracion: ['ventas', 'metas', 'tasas'],
  almacen: ['inventario', 'compras']
};

module.exports = { ROLES, LISTA, GRUPOS, CARGA_POR_ROL };
