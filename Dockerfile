FROM node:24

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install

COPY . .    

RUN npm run build

CMD ["npm", "run", "start"]
