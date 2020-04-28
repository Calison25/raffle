FROM node:alpine

WORKDIR /usr/src/raffle

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9008

CMD [ "npm", "start" ]