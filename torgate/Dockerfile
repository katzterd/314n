FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y tor curl

ADD ./torrc.conf /etc/tor/torrc
ADD ./init.sh /init.sh

CMD bash /init.sh
