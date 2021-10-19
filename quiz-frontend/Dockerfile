FROM node:14.15.5-alpine3.13 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install jquery
COPY . .
RUN npm run build
# Stage2
FROM nginx:latest AS prod
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/quiz-frontend /usr/share/nginx/html
EXPOSE 80:80
