FROM node:10-alpine
WORKDIR /app
COPY . .
RUN npm install cli-slides
CMD npx cli-slides ./node-cli.json
