FROM node:lts-slim 

WORKDIR /app
COPY package.json package.json
COPY . . 
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]