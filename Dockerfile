FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=pass 

RUN mkdir -p docker-nodejs-setup

COPY . /docker-nodejs-setup 

WORKDIR /docker-nodejs-setup

RUN npm install

CMD [ "npm", "start" ]