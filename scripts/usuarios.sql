-- ============================================================
-- Módulo de autenticación y control de acceso basado en roles
-- Ejecutar sobre la base de datos `servicio`
-- ============================================================

-- Tabla de usuarios del sistema. Roles de la Tabla 18: gerente (Gerencia), administracion
-- (Administración), vendedor (Ventas), almacen (Almacén), administrador (Soporte TI).
CREATE TABLE IF NOT EXISTS usuarios (
  id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email            VARCHAR(255) NOT NULL UNIQUE,
  password_hash    VARCHAR(255) NOT NULL,
  rol              ENUM('gerente', 'administracion', 'vendedor', 'almacen', 'administrador') NOT NULL DEFAULT 'vendedor',
  must_change_password TINYINT(1) NOT NULL DEFAULT 1,
  activo           TINYINT(1) NOT NULL DEFAULT 1,
  creado_por       INT UNSIGNED NULL,        -- FK al administrador que lo creó
  created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX usuarios_email (email),
  INDEX usuarios_rol (rol)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Semilla: administrador inicial (contraseña: Admin1234! — cámbiela en el primer login)
-- Regenerar el hash con: node -e "require('bcryptjs').hash('Admin1234!',12).then(console.log)"
INSERT IGNORE INTO usuarios (email, password_hash, rol, must_change_password)
VALUES (
  'admin@bigagrojm.com',
  '$2b$12$K9e4VsQq7dXzOZy6EjZ8yOXuFxO4NZy5w8jBfIpCO3k4P1Y2XsQB2',
  'administrador',
  1
);
