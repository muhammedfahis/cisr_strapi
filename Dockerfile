FROM node:16.20.0

WORKDIR /var/nodeapp

COPY ./package.json ./
RUN npm install -g npm@9.6.7

RUN npm install

RUN npm run build

COPY ./ ./

EXPOSE 1337

CMD ["npm","start"]