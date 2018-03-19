
FROM node:8.9.4

COPY package.json package-lock.json /

#RUN npm clean cache -f
RUN npm i -g npm
RUN npm config set proxy http://proxylatam.indra.es:8080
RUN npm config set proxy https://proxylatam.indra.es:8080
RUN npm install
#RUN npm install -g @angular/cli@latest

ENV NODE_ENV=production
ENV PORT=9000

RUN mkdir /ng-app 
RUN cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . /ng-app

EXPOSE 9000

ENTRYPOINT npm start --host 0.0.0.0

