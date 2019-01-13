FROM node:4

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g forever

COPY . .

EXPOSE 3002


