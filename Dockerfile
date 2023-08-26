FROM node:17-alpine
WORKDIR /app
RUN npm install -g nodemon
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

