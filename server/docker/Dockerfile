FROM node:20.5.1-alpine3.17
WORKDIR /node
COPY app/package.json .
RUN npm install -g npm@latest
RUN npm install
COPY ./app .
CMD [ "npm", "run", "mode" ]