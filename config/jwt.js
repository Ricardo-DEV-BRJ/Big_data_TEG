const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('JWT_SECRET debe estar configurado en producción');
}

module.exports = JWT_SECRET || 'secreto-local-solo-para-desarrollo';
