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

WORKDIR /app

ADD ./config    ./config
ADD ./css       ./css
ADD ./images    ./images
ADD ./inc       ./inc
ADD ./js        ./js

ADD ./console.php f1.png f2.png favicon.ico index.php noised3.png ./

COPY --from=builder /builder/createadmin ./config/createadmin

RUN chmod +x ./config/createadmin
RUN chown -R 33:33 /app

EXPOSE 80

ENTRYPOINT [ "/bin/bash", "-c", "/app/config/docker-entrypoint.sh" ]
