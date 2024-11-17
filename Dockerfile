# https://github.com/fly-apps/hello-create-react-app/blob/main/Dockerfile

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION}-slim as build

WORKDIR /react-app
COPY package*.json .
COPY vite.config.js .

# Set production environment
ENV NODE_ENV="production"

RUN npm pkg delete scripts.prepare
RUN npm ci --include=dev

# Copy application code
COPY . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# server
FROM nginx
COPY --from=dist /react-app/dist /usr/share/nginx/html
