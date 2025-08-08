# Stage 1: Build with Bun
FROM oven/bun:1.1 AS builder

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies and build the app
RUN bun install && bun run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy built files to NGINX's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace the default NGINX config to support SPA routing
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
