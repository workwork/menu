# VERSION 0.2
# DOCKER-VERSION 0.3.4
# To build:
# 1. Install docker (http://docker.io)
# 2. Checkout source: git@github.com:gasi/docker-node-hello.git
# 3. Build container: docker build .

FROM    java:8-jre

# Enable EPEL for Node.js
# RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
# RUN     yum install -y -q npm


RUN set -x \
	&& apt-get update \
	&& apt-get install -y nodejs npm


# App
ADD . /src

#Install Gulp
RUN npm install gulp -g
RUN ln -s /usr/bin/nodejs /usr/bin/node

#Setup hosts
RUN echo "127.0.0.1 docker.me" >> /etc/hosts


EXPOSE  3000
WORKDIR "/src"

# Install app dependencies
RUN npm install
RUN npm install -g npm
RUN npm rebuild node-sass

CMD ["npm", "start"]