FROM node:16

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["node", "dist/main.js"]
