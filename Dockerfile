FROM node:20

WORKDIR /app

COPY package* . 
COPY ./prisma ./prisma

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
