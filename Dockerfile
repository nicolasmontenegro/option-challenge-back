# Build
FROM node:14.15.4-alpine3.12
WORKDIR /home/node/app
RUN apk update && apk add git

# Install dependences
COPY package.json yarn.lock ./
RUN yarn install --quiet
