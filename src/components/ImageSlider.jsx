import React, { useState, useEffect } from 'react';
import { Box, IconButton, Fade } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const ImageSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [transitionDirection, setTransitionDirection] = useState('right');

  // Загрузка изображений
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
        });
      });

      const loaded = await Promise.all(promises);
      setLoadedImages(loaded);
    };

    loadImages();
  }, [images]);

  // Автоматическое переключение слайдов
  useEffect(() => {
    if (isPaused || loadedImages.length === 0) return;

    const timer = setTimeout(() => {
      setTransitionDirection('right');
      setCurrentIndex(prev => 
        prev === loadedImages.length - 1 ? 0 : prev + 1
      );
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, loadedImages]);

  const goToPrev = () => {
    setTransitionDirection('left');
    setCurrentIndex(prev => 
      prev === 0 ? loadedImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setTransitionDirection('right');
    setCurrentIndex(prev => 
      prev === loadedImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setTransitionDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  if (loadedImages.length === 0) {
    return (
      <Box 
        sx={{ 
          width: '100%', 
          height: '400px', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.paper'
        }}
      >
        Загрузка...
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: '400px',
        marginTop: '100px',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: 3,
        '&:hover .slider-controls': {
          opacity: 1
        }
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Основное изображение с анимацией */}
      <Fade 
        in={true} 
        key={currentIndex}
        timeout={500}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <Box
          component="img"
          src={loadedImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </Fade>

      {/* Кнопки навигации */}
      <IconButton
        className="slider-controls"
        onClick={goToPrev}
        sx={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          opacity: 0,
          transition: 'opacity 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>

      <IconButton
        className="slider-controls"
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          opacity: 0,
          transition: 'opacity 0.3s',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)'
          }
        }}
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>

      {/* Индикаторы слайдов */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 2
        }}
      >
        {loadedImages.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            onClick={() => goToSlide(index)}
            sx={{ p: 0, color: 'white' }}
          >
            {index === currentIndex ? (
              <CircleIcon fontSize="small" />
            ) : (
              <CircleOutlinedIcon fontSize="small" />
            )}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;