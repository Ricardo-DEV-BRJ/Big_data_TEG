# API Express + DuckDB. Debian slim (glibc): los binarios nativos de DuckDB no funcionan en Alpine.
FROM node:22-bookworm-slim

ENV NODE_ENV=production \
    PORT=3000 \
    RESPALDO_DIR=/app/respaldos

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node . .
RUN mkdir -p /app/respaldos && chown -R node:node /app/respaldos

USER node

# Deja instalada la extensión httpfs de DuckDB en la imagen (evita descargarla en cada arranque)
RUN node -e "require('@duckdb/node-api').DuckDBInstance.create(':memory:').then(i=>i.connect()).then(c=>c.run('INSTALL httpfs'))"

EXPOSE 3000
VOLUME ["/app/respaldos"]

CMD ["node", "./bin/www"]
