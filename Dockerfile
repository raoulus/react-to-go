# Build stage
FROM node:12-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . ./

RUN npm run build

# Production stage
FROM nginx as production-stage
COPY --from=build-stage /app/public ./app
COPY ./nginx.template.conf /etc/nginx/nginx.conf
WORKDIR /app
CMD ["nginx", "-g", "daemon off;"]
