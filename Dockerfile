# Build stage
FROM node:22-alpine AS build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine AS production-stage

# Copy built assets from the build stage to nginx serving directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
