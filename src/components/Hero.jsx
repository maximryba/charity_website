import React from 'react';

const Hero = () => {
  return (
    <main>
      <h4>Дарим надежду для бездомных</h4>
      <h1>Помогаем каждому сделать мир лучше</h1>
      <p className="main__text">Мы ищем тех, кто меняет мир и помогаем им с достижением уникальной цели.</p>
      <div className="main__buttons">
        <button className="filled__button">Пожертвовать сейчас</button>
        <button className="empty__button">Узнать о нас</button>
      </div>
    </main>
  );
};

export default Hero;