SET FOREIGN_KEY_CHECKS = 0;

-- Métricas y modelos analíticos (los vuelve a llenar el recálculo)
TRUNCATE TABLE metricas_ejecuciones;
TRUNCATE TABLE productos_top;
TRUNCATE TABLE ventas_diarias;
TRUNCATE TABLE ventas_horas;
TRUNCATE TABLE productos_mensual;
TRUNCATE TABLE productos_metricas;
TRUNCATE TABLE clientes_metricas;
TRUNCATE TABLE clientes_mes;
TRUNCATE TABLE segmentos_mensual;
TRUNCATE TABLE cuentas_por_cobrar;
TRUNCATE TABLE flujo_proyectado;
TRUNCATE TABLE vendedores_mensual;
TRUNCATE TABLE sucursales;
TRUNCATE TABLE metas;
TRUNCATE TABLE pagos_mensual;
TRUNCATE TABLE tasa_cambio_diaria;
TRUNCATE TABLE descuentos_mensual;
TRUNCATE TABLE inventario_metricas;
TRUNCATE TABLE inventario_mensual;
TRUNCATE TABLE proveedores_metricas;
TRUNCATE TABLE inventario_reposicion;
TRUNCATE TABLE ventas_posibles_duplicados;
TRUNCATE TABLE prevision_demanda;
TRUNCATE TABLE prevision_metricas;
TRUNCATE TABLE alertas_margen;
TRUNCATE TABLE calidad_datos;

TRUNCATE TABLE dim_tiempo;
TRUNCATE TABLE dim_producto;
TRUNCATE TABLE dim_cliente;
TRUNCATE TABLE dim_tasa;
TRUNCATE TABLE dim_zona;
TRUNCATE TABLE hechos_ventas;
TRUNCATE TABLE hechos_inventario;
TRUNCATE TABLE hechos_ambiente_energia;


SET FOREIGN_KEY_CHECKS = 1;