# 基础镜像
FROM node:20.11.1-alpine as build-stage
ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com
WORKDIR /app
RUN apk add git
COPY . .
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm run docs:build

FROM nginx:alpine
COPY --from=build-stage /app/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]