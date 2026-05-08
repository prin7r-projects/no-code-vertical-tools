# Build stage
FROM wasp-lang/wasp:0.23.0 AS builder
WORKDIR /app
COPY apps/app /app/apps/app
COPY package.json .
RUN npm install && cd apps/app && wasp build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/apps/app/.wasp/build/server /app/server
COPY --from=builder /app/apps/app/.wasp/build/client /app/client
RUN npm install --production -C /app/server
EXPOSE 3100
CMD ["node", "/app/server/server.js"]
