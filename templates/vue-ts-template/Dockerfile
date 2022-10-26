FROM node:current-alpine AS builder

RUN apk add git

RUN npm install -g pnpm

WORKDIR /srv

COPY . .

RUN pnpm install
RUN pnpm run build

FROM nginx:stable-alpine

RUN mkdir /app

ARG APP_VSN

LABEL maintainer=Byzanteam
# replace app-name
LABEL jet_app=app-name
LABEL jet_app_vsn=${APP_VSN}

COPY --from=builder /srv/dist /app/dist

COPY nginx/start.sh /app/start-nginx.sh
COPY nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["/app/start-nginx.sh"]

CMD ["nginx"]
