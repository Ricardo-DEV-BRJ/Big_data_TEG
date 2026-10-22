module.exports = {
  minio: {
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: parseInt(process.env.MINIO_PORT || '9000', 10),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
    bucket: process.env.MINIO_BUCKET || 'datalake'
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  respaldo: {
    // Expresión cron "minuto hora día mes día-semana"; por defecto, todos los días a las 02:00.
    horario: process.env.RESPALDO_CRON || '0 2 * * *',
    // Zona horaria IANA (p. ej. America/Caracas); sin definir, se usa la hora local del servidor.
    zona: process.env.RESPALDO_ZONA || undefined
  }
};
