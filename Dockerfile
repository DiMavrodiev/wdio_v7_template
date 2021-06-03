FROM alpine:3.11

#Instal npm
RUN apk add --no-cache nodejs npm curl docker openjdk11-jre

# Copy package.json so npm deps can be cached
COPY ./package.json /usr/src/
COPY ./package-lock.json /usr/src/

#Working dir
WORKDIR /usr/src
RUN npm ci

COPY . /usr/src