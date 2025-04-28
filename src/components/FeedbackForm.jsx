import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Container,
  Paper,
  Grid
} from '@mui/material';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '375', // Начальное значение с префиксом
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Удаляем все нецифровые символы
      const numbersOnly = value.replace(/[^\d]/g, '');
      
      // Проверяем, что префикс "375" остается
      if (!numbersOnly.startsWith('375')) {
        // Если пользователь пытается удалить префикс, восстанавливаем его
        setFormData(prev => ({
          ...prev,
          phone: '375' + numbersOnly.replace(/^375/, '').slice(0, 9) // 9 цифр после 375
        }));
        return;
      }
      
      // Ограничение длины: 375 + максимум 9 цифр = 12 символов
      if (numbersOnly.length > 12) return;
      
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
    } else {
      // Для остальных полей
      let processedValue = value;
      
      const maxLengths = {
        name: 100,
        email: 300,
        message: 500
      };
      
      if (maxLengths[name] && value.length > maxLengths[name]) {
        processedValue = value.slice(0, maxLengths[name]);
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: processedValue
      }));
    }
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhoneKeyDown = (e) => {
    // Запрещаем удаление префикса "375" с помощью Backspace или Delete
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const selectionStart = e.target.selectionStart;
      if (selectionStart <= 3) { // 3 - длина "375"
        e.preventDefault();
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Имя не должно превышать 100 символов';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    } else if (formData.email.length > 300) {
      newErrors.email = 'Email не должен превышать 300 символов';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Введите сообщение';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Сообщение не должно превышать 500 символов';
    }
    
    if (formData.phone && (formData.phone.length < 3 || !formData.phone.startsWith('375'))) {
      newErrors.phone = 'Телефон должен начинаться с 375';
    } else if (formData.phone && formData.phone.length > 12) {
      newErrors.phone = 'Телефон не должен превышать 12 цифр (375 + 9 цифр)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('http://localhost:3001/feedback', formData);
      
      if (response.status === 200) {
        setSnackbarMessage('Сообщение успешно отправлено!');
        setSnackbarSeverity('success');
        setFormData({
          name: '',
          email: '',
          phone: '375', // Сбрасываем к префиксу
          message: ''
        });
      } else {
        throw new Error('Ошибка при отправке');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setSnackbarMessage('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
      setSnackbarSeverity('error');
    } finally {
      setIsSubmitting(false);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Форма обратной связи
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name || `${formData.name.length}/100`}
                required
                inputProps={{ maxLength: 100 }}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email || `${formData.email.length}/300`}
                required
                inputProps={{ maxLength: 300 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Телефон (необязательно)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handlePhoneKeyDown}
                error={!!errors.phone}
                helperText={errors.phone || `375 + ${Math.max(0, formData.phone.length - 3)}/9 цифр`}
                inputProps={{ 
                  maxLength: 12,
                  inputMode: 'numeric',
                  pattern: '[0-9]*'
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ваше сообщение"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message || `${formData.message.length}/500`}
                required
                multiline
                rows={4}
                inputProps={{ maxLength: 500 }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
                sx={{ py: 1.5 }}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default FeedbackForm;
