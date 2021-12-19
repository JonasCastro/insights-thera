FROM node:alpine

WORKDIR /home/node/insights-thera-server

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3333

CMD yarn start
