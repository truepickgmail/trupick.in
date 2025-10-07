# syntax=docker/dockerfile:1.7

# 1) Base deps stage
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# 2) Builder stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Use standalone output for lean runtime
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 3) Runner stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install curl for healthchecks
RUN apk add --no-cache curl

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy standalone build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/next.config.mjs ./next.config.mjs

USER nextjs

# Expose the default Next.js port
EXPOSE 3000

# Healthcheck calls our health route
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 CMD curl -fsS http://127.0.0.1:3000/api/health > /dev/null || exit 1

CMD ["node", "server.js"]


