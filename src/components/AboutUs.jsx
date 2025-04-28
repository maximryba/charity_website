import React from 'react';
import aboutUsImage from '../assets/img/about_us.png';

const AboutUs = () => {
  return (
    <div className="about__us">
      <div className="left">
        <img src={aboutUsImage} alt="Cards" className="about__us__img" />
      </div>
      <div className="right_block">
        <h3>О нас</h3>
        <h2>Ваша помощь очень важна​</h2>
        <p className="block__text">
          Рецепт счастья в помощи другим. Никогда не недооценивайте то, что вы можете изменить в судьбах бедных, раненых и беспомощных.
        </p>
        <button className="filled__button">Узнать больше</button>
      </div>
    </div>
  );
};

export default AboutUs;