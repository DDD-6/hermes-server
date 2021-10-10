FROM node:14-alpine

WORKDIR /home/app

COPY *.json /home/app
COPY yarn.lock /home/app

RUN "yarn"

COPY src /home/app/src
COPY test/*ts /home/app/test/

CMD ["yarn", "test:e2e"]