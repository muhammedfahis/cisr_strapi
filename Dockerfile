FROM node:14.19.1

WORKDIR /var/nodeapp

COPY ./package.json ./

RUN npm install

RUN npm install -g pm2

COPY ./ ./

EXPOSE 1337

CMD ["npm","start"]