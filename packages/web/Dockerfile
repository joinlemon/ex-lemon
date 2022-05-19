FROM node:16-alpine as builder

ENV NODE_ENV=production

WORKDIR /web
COPY . /web

RUN set -x && \
    apk add \
    --no-cache --update \
    libtool automate autoconf nasm vips-dev fftw-dev gcc g++ make libpng-dev libc6-compat


RUN yarn install

WORKDIR /web

RUN yarn run build 

RUN yarn cache clean

FROM node:16-alpine
WORKDIR /web
COPY --from=builder /web /web/

RUN set -x && \
    apk add \
    --nocache --update \
    vips fftw libpng

ENV PORT 3000
EXPOSE 3000

CMD ["yarn", "run", "start", "-p", "8080"]