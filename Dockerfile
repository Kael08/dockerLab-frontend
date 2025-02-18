# Используем Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходники проекта
COPY . .

# Собираем проект React
RUN npm run build

# Устанавливаем HTTP-сервер serve
RUN npm install -g serve

# Открываем порт
EXPOSE 5173

# Запускаем приложение
CMD ["npm", "run", "dev", "--", "--host"]