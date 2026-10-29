const path = require('path');

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
  // Tasas sugeridas para el registro manual (models/dolarApiModel.js).
  dolarApi: {
    url: (process.env.DOLARAPI_URL || 'https://ve.dolarapi.com/v1').replace(/\/$/, ''),
    timeoutMs: parseInt(process.env.DOLARAPI_TIMEOUT_MS || '8000', 10)
  },
  respaldo: {
    // Expresión cron "minuto hora día mes día-semana"; por defecto, todos los días a las 02:00.
    horario: process.env.RESPALDO_CRON || '0 2 * * *',
    // Zona horaria IANA (p. ej. America/Caracas); sin definir, se usa la hora local del servidor.
    zona: process.env.RESPALDO_ZONA || undefined,
    // Segunda copia en otro medio (disco externo, NAS o carpeta sincronizada con la nube).
    directorio: path.resolve(process.env.RESPALDO_DIR || path.join(__dirname, '..', 'respaldos')),
    retencionDias: parseInt(process.env.RESPALDO_RETENCION_DIAS || '14', 10)
  },
  metricas: {
    // Recálculo de las tablas de métricas; por defecto, todos los días a las 02:30 (después del respaldo).
    horario: process.env.METRICAS_CRON || '30 2 * * *',
    zona: process.env.RESPALDO_ZONA || undefined,
    // Revisión frecuente (6.4.4.2): si llegaron reportes nuevos (p. ej. existencias) desde el
    // último cálculo, recalcula; si no, no hace nada. Por defecto, cada 15 minutos.
    horarioIncremental: process.env.METRICAS_INCREMENTAL_CRON || '*/15 * * * *',
    // Datasets (carpetas del bucket) de donde salen las métricas.
    datasets: {
      ventas: process.env.DATASET_VENTAS || 'ventas',
      inventario: process.env.DATASET_INVENTARIO || 'inventario',
      compras: process.env.DATASET_COMPRAS || 'compras',
      metas: process.env.DATASET_METAS || 'metas',
      tasas: process.env.DATASET_TASAS || 'tasas'
    },
    // Horas sin actualizar la tasa a partir de las cuales se alerta (apartado 6.4.4.4).
    horasTasaVigente: parseFloat(process.env.HORAS_TASA_VIGENTE || '24'),
    // Desfase horario del negocio (las tasas se registran en hora local; Venezuela = -04:00).
    desfaseNegocio: process.env.DESFASE_NEGOCIO || '-04:00',
    // % de comisión del vendedor sobre lo cobrado sin IVA.
    comisionVendedor: parseFloat(process.env.COMISION_VENDEDOR || '3'),
    // Z del nivel de servicio para el inventario de seguridad (1,65 ≈ 95 %).
    nivelServicioZ: parseFloat(process.env.NIVEL_SERVICIO_Z || '1.65'),
    // α del suavizamiento exponencial simple de la previsión de demanda (0 < α < 1).
    alfaSuavizamiento: parseFloat(process.env.ALFA_SUAVIZAMIENTO || '0.3')
  }
};
