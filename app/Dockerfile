FROM golang:1.24.2 AS builder

WORKDIR /builder

ADD ./scripts/createadmin .

RUN CGO_ENABLED=0 go build .


FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        supervisor \
        nginx \
        mariadb-client \
        php7.4 \
        php7.4-fpm \
        php7.4-mbstring \
        php7.4-mysql

WORKDIR /src

ADD config /

COPY --from=builder /builder/createadmin /

RUN chmod +x /createadmin

WORKDIR /src/app

ADD ./css       ./css
ADD ./images    ./images
ADD ./inc       ./inc
ADD ./js        ./js

ADD ./console.php f1.png f2.png favicon.ico index.php noised3.png ./

RUN chown -R 33:33 /src/app

EXPOSE 80

CMD [ "bash", "/docker-entrypoint.sh" ]
