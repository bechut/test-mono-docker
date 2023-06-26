FROM node:16-alpine AS production

WORKDIR /app
COPY package.json ./

COPY . /production

RUN npm i
RUN npm run build

# ###########################

FROM node:16-alpine AS msuser

WORKDIR /msuser

COPY --from=production /app .
COPY . /msuser

CMD ["node", "dist/apps/msuser/main.js"]

# ###########################

FROM node:16-alpine AS msapp

WORKDIR /msapp


COPY --from=production /app .
COPY . /msapp

CMD ["node", "dist/apps/msapp/main.js"]
