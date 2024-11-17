# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.0
FROM node:${NODE_VERSION}-slim as build

WORKDIR /app
COPY package*.json ./

RUN npm pkg delete scripts.prepare
RUN npm ci --include=dev

# Copy application code
COPY . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# server
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=0 /app/dist /usr/share/nginx/html
