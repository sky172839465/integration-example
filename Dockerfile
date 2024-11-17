# https://github.com/fly-apps/dockerfile-node/blob/main/test/frameworks/vite/Dockerfile

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.0
FROM node:${NODE_VERSION}-slim as build

LABEL fly_launch_runtime="Vite"

WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

RUN npm pkg delete scripts.prepare

COPY package*.json ./

RUN npm ci --include=dev

# Copy application code
COPY . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --omit=dev

# server
FROM nginx
COPY --from=dist /app/dist /usr/share/nginx/html

# Start the server by default, this can be overwritten at runtime
EXPOSE 80
CMD [ "/usr/sbin/nginx", "-g", "daemon off;" ]
