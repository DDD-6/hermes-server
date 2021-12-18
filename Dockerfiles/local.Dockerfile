FROM node:14-alpine

WORKDIR /home/app

COPY tsconfig* /home/app
COPY webpack-hmr.config.js /home/app
COPY nest-cli.json /home/app
COPY package.json /home/app
COPY yarn.lock /home/app
RUN yarn

CMD ["yarn",  "start:dev"]