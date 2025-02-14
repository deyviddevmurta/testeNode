# Estágio de construção
FROM node:20

# Define o diretório de trabalho
WORKDIR /app

# Copia e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código e gera o build
COPY . .
CMD [ "npm", "start" ]


