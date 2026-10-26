/**
 * Middlewares de autenticación y control de acceso por rol (RBAC).
 *
 * Uso:
 *   const { verToken, soloRoles, noCambioForzado } = require('../middlewares/auth');
 *
 *   router.get('/privado', verToken, noCambioForzado, handler)
 *   router.post('/admin-only', verToken, noCambioForzado, soloRoles('administrador'), handler)
 */
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');
const JWT_SECRET = require('../config/jwt');

/**
 * Verifica que el request traiga un JWT válido.
 * Carga en `req.usuario` el estado vigente de la cuenta desde la base de datos.
 */
async function verToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
  if (!payload || !Number.isInteger(payload.id) || payload.id < 1) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }

  try {
    const usuario = await Usuario.porId(payload.id);
    if (!usuario) {
      return res.status(401).json({ error: 'La cuenta ya no está disponible' });
    }

    // El estado de la cuenta y el rol se leen de la base de datos, no del token.
    req.usuario = {
      id: usuario.id,
      email: usuario.email,
      rol: usuario.rol,
      must_change_password: !!usuario.must_change_password,
    };
    return next();
  } catch (err) {
    return next(err);
  }
}

/**
 * Bloquea el acceso si el usuario tiene el cambio de contraseña pendiente.
 * Debe usarse DESPUÉS de verToken.
 * Solo permite las rutas de cambio de contraseña.
 */
function noCambioForzado(req, res, next) {
  if (req.usuario?.must_change_password) {
    return res.status(403).json({
      error: 'Debe cambiar su contraseña antes de continuar',
      must_change_password: true,
    });
  }
  next();
}

/**
 * Fábrica de middleware de roles.
 * @param {...string} roles - Roles permitidos, ej: 'administrador', 'gerente'
 *
 * Ejemplo:
 *   router.get('/', verToken, noCambioForzado, soloRoles('administrador'), handler)
 */
function soloRoles(...roles) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ error: 'No autenticado' });
    }
    if (!roles.includes(req.usuario.rol)) {
      return res.status(403).json({
        error: `Acceso denegado. Se requiere uno de los roles: ${roles.join(', ')}`,
      });
    }
    next();
  };
}

module.exports = { verToken, noCambioForzado, soloRoles };
