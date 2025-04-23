const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Настройка middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Логирование запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Обработка POST-запроса с данными формы
app.post('/feedback', (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Простая валидация
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'Пожалуйста, заполните все обязательные поля' 
      });
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Пожалуйста, введите корректный email' 
      });
    }

    // Создаем объект с данными
    const feedbackData = {
      name,
      email,
      phone: phone || 'Не указан',
      message,
      date: new Date().toISOString()
    };

    // Сохраняем в файл (в реальном приложении нужно использовать БД)
    const filePath = path.join(__dirname, 'feedback.json');
    let feedbacks = [];

    try {
      if (fs.existsSync(filePath)) {
        feedbacks = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      }
    } catch (err) {
      console.error('Ошибка чтения файла:', err);
    }

    feedbacks.push(feedbackData);

    fs.writeFileSync(filePath, JSON.stringify(feedbacks, null, 2), 'utf8');

    // Отправляем успешный ответ
    res.status(200).json({ 
      success: true,
      message: 'Спасибо за ваш отзыв! Мы свяжемся с вами в ближайшее время.' 
    });

  } catch (error) {
    console.error('Ошибка обработки формы:', error);
    res.status(500).json({ 
      success: false,
      message: 'Произошла ошибка при обработке формы. Пожалуйста, попробуйте позже.' 
    });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Доступен по адресу: http://localhost:${PORT}`);
});