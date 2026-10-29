/**
 * Controlador de autenticación y gestión de usuarios.
 *
 * Endpoints:
 *   POST /api/auth/login           – Login con email + contraseña
 *   POST /api/auth/register        – Crear usuario (solo administrador)
 *   POST /api/auth/change-password – Cambiar contraseña (usuario autenticado)
 *   GET  /api/auth/usuarios        – Listar usuarios (solo administrador)
 *   DELETE /api/auth/usuarios/:id  – Desactivar usuario (solo administrador)
 */
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');
const JWT_SECRET = require('../config/jwt');
const { LISTA: ROLES } = require('../config/roles');
const auditoria = require('../models/auditoriaModel');

const SALT_ROUNDS = 12;
const JWT_EXPIRES = '8h';

// ─── Login ────────────────────────────────────────────────────────────────────

async function login(req, res, next) {
  try {
    
    const { email, password } = req.body;
    if (typeof email !== 'string' || !email.trim() || typeof password !== 'string' || !password) {
      return res.status(400).json({ error: 'email y password son requeridos' });
    }



    const usuario = await Usuario.porEmail(email.trim().toLowerCase());
    const coincide = usuario ? await bcrypt.compare(password, usuario.password_hash) : false;
    if (!coincide) {
      await auditoria.registrar(req, { accion: 'login_fallido', entidad: 'usuario', email: email.trim().toLowerCase().slice(0, 255), resultado: 'error' });
      // Mismo mensaje para no revelar si el email existe.
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    await auditoria.registrar(
      { ip: req.ip, usuario: { id: usuario.id, email: usuario.email, rol: usuario.rol } },
      { accion: 'login', entidad: 'usuario', entidad_id: usuario.id }
    );

    const payload = {
      id:    usuario.id,
      email: usuario.email,
      rol:   usuario.rol,
      must_change_password: !!usuario.must_change_password,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

    res.json({
      token,
      usuario: {
        id:    usuario.id,
        email: usuario.email,
        rol:   usuario.rol,
        must_change_password: !!usuario.must_change_password,
      },
    });
  } catch (err) {
    next(err);
  }
}

// ─── Registrar usuario (solo administrador) ───────────────────────────────────

async function registrar(req, res, next) {
  try {
    const { email, password, rol } = req.body;

    if (!email || !password || !rol) {
      return res.status(400).json({ error: 'email, password y rol son requeridos' });
    }
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Debe proporcionar un email válido' });
    }
    if (typeof password !== 'string' || password.length < 8) {
      return res.status(400).json({ error: 'La contraseña temporal debe tener al menos 8 caracteres' });
    }

    if (!ROLES.includes(rol)) {
      return res.status(400).json({ error: `Rol inválido. Valores permitidos: ${ROLES.join(', ')}` });
    }

    const existente = await Usuario.porEmail(email.trim().toLowerCase());
    if (existente) {
      return res.status(409).json({ error: 'Ya existe un usuario con ese email' });
    }

    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    let id;
    try {
      id = await Usuario.crear({
        email: email.trim().toLowerCase(),
        password_hash: hash,
        rol,
        creado_por: req.usuario.id,
      });
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Ya existe un usuario con ese email' });
      }
      throw err;
    }

    await auditoria.registrar(req, { accion: 'usuario_creado', entidad: 'usuario', entidad_id: id, nuevo: { email: email.trim().toLowerCase(), rol } });
    res.status(201).json({ message: 'Usuario creado correctamente', id });
  } catch (err) {
    next(err);
  }
}

// ─── Cambiar contraseña ───────────────────────────────────────────────────────

async function cambiarPassword(req, res, next) {
  try {
    const { password_actual, password_nuevo } = req.body;

    if (typeof password_nuevo !== 'string' || password_nuevo.length < 8) {
      return res.status(400).json({ error: 'La nueva contraseña debe tener al menos 8 caracteres' });
    }

    const usuario = await Usuario.porId(req.usuario.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Si NO es cambio forzado, verificar la contraseña actual.
    if (!usuario.must_change_password) {
      if (!password_actual) {
        return res.status(400).json({ error: 'Debe enviar la contraseña actual' });
      }
      const coincide = await bcrypt.compare(password_actual, usuario.password_hash);
      if (!coincide) {
        return res.status(401).json({ error: 'La contraseña actual no es correcta' });
      }
    }

    if (await bcrypt.compare(password_nuevo, usuario.password_hash)) {
      return res.status(400).json({ error: 'La nueva contraseña debe ser diferente a la actual' });
    }

    const hash = await bcrypt.hash(password_nuevo, SALT_ROUNDS);
    await Usuario.cambiarPassword(usuario.id, hash);
    await auditoria.registrar(req, { accion: 'password_cambiada', entidad: 'usuario', entidad_id: usuario.id, anterior: { must_change_password: !!usuario.must_change_password }, nuevo: { must_change_password: false } });

    // Nuevo token sin la bandera must_change_password
    const payload = { id: usuario.id, email: usuario.email, rol: usuario.rol, must_change_password: false };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

    res.json({ message: 'Contraseña actualizada correctamente', token });
  } catch (err) {
    next(err);
  }
}

// ─── Listar usuarios (solo administrador) ─────────────────────────────────────

async function listar(req, res, next) {
  try {
    const { page = 1, itemsPerPage = 20, search = '' } = req.query;
    const pagina = Number(page);
    const porPagina = Number(itemsPerPage);
    if (!Number.isInteger(pagina) || pagina < 1 || !Number.isInteger(porPagina) || porPagina < 1 || porPagina > 100) {
      return res.status(400).json({ error: 'La paginación debe ser válida (itemsPerPage máximo: 100)' });
    }
    const resultado = await Usuario.listar({
      pagina,
      porPagina,
      buscar:    search,
    });
    res.json(resultado);
  } catch (err) {
    next(err);
  }
}

// ─── Desactivar usuario (soft-delete, solo administrador) ─────────────────────

async function desactivar(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: 'Identificador de usuario inválido' });
    }
    if (id === req.usuario.id) {
      return res.status(400).json({ error: 'No puede desactivar su propia cuenta' });
    }
    const usuario = await Usuario.porId(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await Usuario.desactivar(id);
    await auditoria.registrar(req, { accion: 'usuario_desactivado', entidad: 'usuario', entidad_id: id, anterior: { email: usuario.email, rol: usuario.rol, activo: true }, nuevo: { activo: false } });
    res.json({ message: 'Usuario desactivado correctamente' });
  } catch (err) {
    next(err);
  }
}

module.exports = { login, registrar, cambiarPassword, listar, desactivar };