# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do seu projeto para o contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha a porta em que o aplicativo será executado
EXPOSE 8080

# Comando para iniciar o aplicativo
CMD ["npm", "run", "serve"]
