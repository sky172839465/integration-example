# https://github.com/fly-apps/hello-create-react-app/blob/main/Dockerfile

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20
FROM node:${NODE_VERSION} as build

WORKDIR /react-app
COPY package*.json .
COPY vite.config.js .

# Set production environment
ENV NODE_ENV="production"

RUN npm pkg delete scripts.prepare
RUN npm ci

# Copy application code
COPY . .

# Build application
RUN npm run build

# server
FROM nginx
COPY --from=build /react-app/build /usr/share/nginx/html
