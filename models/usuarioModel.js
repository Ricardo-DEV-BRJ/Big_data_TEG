/**
 * Modelo de usuarios: CRUD contra la tabla `usuarios` usando el pool de MariaDB.
 * Solo se usa desde authController; no se expone directamente a las rutas.
 */
const db = require('../config/mariadb');

// Asegura que la tabla exista (puede correr en paralelo con el iniciar() de mariadb.js)
const CREAR_TABLA = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email            VARCHAR(255) NOT NULL UNIQUE,
    password_hash    VARCHAR(255) NOT NULL,
    rol              ENUM('vendedor','gerente','administrador') NOT NULL DEFAULT 'vendedor',
    must_change_password TINYINT(1) NOT NULL DEFAULT 1,
    activo           TINYINT(1) NOT NULL DEFAULT 1,
    creado_por       INT UNSIGNED NULL,
    created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX usuarios_email (email),
    INDEX usuarios_rol (rol)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
`;

let tablaLista = null;
function asegurarTabla() {
  if (!tablaLista) {
    tablaLista = (async () => {
      await db.query(CREAR_TABLA);

      // Actualiza instalaciones anteriores sin modificar los datos existentes.
      const columnas = await db.query('SHOW COLUMNS FROM usuarios');
      const existentes = new Set(columnas.map((columna) => columna.Field));
      const migraciones = [
        ['rol', "ALTER TABLE usuarios ADD COLUMN rol ENUM('vendedor','gerente','administrador') NOT NULL DEFAULT 'vendedor'"],
        ['must_change_password', 'ALTER TABLE usuarios ADD COLUMN must_change_password TINYINT(1) NOT NULL DEFAULT 1'],
        ['activo', 'ALTER TABLE usuarios ADD COLUMN activo TINYINT(1) NOT NULL DEFAULT 1'],
        ['creado_por', 'ALTER TABLE usuarios ADD COLUMN creado_por INT UNSIGNED NULL'],
        ['created_at', 'ALTER TABLE usuarios ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP'],
        ['updated_at', 'ALTER TABLE usuarios ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'],
      ];

      for (const [nombre, sql] of migraciones) {
        if (!existentes.has(nombre)) await db.query(sql);
      }
    })().catch((err) => { tablaLista = null; throw err; });
  }
  return tablaLista;
}

/** Busca un usuario por email (devuelve null si no existe). */
async function porEmail(email) {
  await asegurarTabla();
  const filas = await db.query(
    'SELECT * FROM usuarios WHERE email = ? AND activo = 1 LIMIT 1',
    [email]
  );
  return filas[0] ?? null;
}

/** Busca un usuario por id (devuelve null si no existe). */
async function porId(id) {
  await asegurarTabla();
  const filas = await db.query(
    'SELECT * FROM usuarios WHERE id = ? AND activo = 1 LIMIT 1',
    [id]
  );
  return filas[0] ?? null;
}

/**
 * Crea un nuevo usuario.
 * @param {object} datos - { email, password_hash, rol, creado_por }
 */
async function crear({ email, password_hash, rol, creado_por }) {
  await asegurarTabla();
  const result = await db.query(
    `INSERT INTO usuarios (email, password_hash, rol, must_change_password, creado_por)
     VALUES (?, ?, ?, 1, ?)`,
    [email, password_hash, rol, creado_por ?? null]
  );
  return result.insertId;
}

/**
 * Actualiza solo el hash de la contraseña y pone must_change_password = 0.
 */
async function cambiarPassword(id, nuevo_hash) {
  await asegurarTabla();
  await db.query(
    'UPDATE usuarios SET password_hash = ?, must_change_password = 0 WHERE id = ?',
    [nuevo_hash, id]
  );
}

/**
 * Lista todos los usuarios (sin el hash de contraseña).
 * @param {object} opts - { pagina, porPagina, buscar }
 */
async function listar({ pagina = 1, porPagina = 20, buscar = '' } = {}) {
  await asegurarTabla();
  const offset = (pagina - 1) * porPagina;
  const like = `%${buscar}%`;

  const [filas, total] = await Promise.all([
    db.query(
      `SELECT id, email, rol, must_change_password, activo, created_at, updated_at
       FROM usuarios
       WHERE activo = 1 AND (email LIKE ? OR rol LIKE ?)
       ORDER BY created_at DESC
       LIMIT ? OFFSET ?`,
      [like, like, porPagina, offset]
    ),
    db.query(
      'SELECT COUNT(*) AS total FROM usuarios WHERE activo = 1 AND (email LIKE ? OR rol LIKE ?)',
      [like, like]
    ),
  ]);

  return { filas, total: total[0].total };
}

/** Desactiva (soft-delete) un usuario. */
async function desactivar(id) {
  await asegurarTabla();
  await db.query('UPDATE usuarios SET activo = 0 WHERE id = ?', [id]);
}

module.exports = { porEmail, porId, crear, cambiarPassword, listar, desactivar };
