FROM node:12.18.1
 
WORKDIR /app
 
COPY package.json package.json
COPY yarn.lock yarn.lock
 
RUN yarn install
 
COPY . .
 
CMD [ "node", "setfeed.js" ]
