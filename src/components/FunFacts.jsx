import React from 'react';
import handsIcon from '../assets/img/hands.png';
import peopleIcon from '../assets/img/people.png';
import birdIcon from '../assets/img/bird.png';
import globeIcon from '../assets/img/globe.png';

const FunFacts = () => {
  const facts = [
    { icon: handsIcon, number: "4597+", text: "Людей собрано" },
    { icon: peopleIcon, number: "8945+", text: "Волонтеров" },
    { icon: birdIcon, number: "10M+", text: "Бедных людей спасено" },
    { icon: globeIcon, number: "100+", text: "Разных стран" }
  ];

  return (
    <div className="fun__facts">
      <h3>Наши интересные факты</h3>
      <h2>Мы верим, что с вами сможем спасти больше жизней</h2>
      <div className="fun__facts__blocks" id="fun">
        {facts.map((fact, index) => (
          <div className="fun__facts__block" key={index}>
            <img loading="lazy" src={fact.icon} alt={fact.text} className="fun__facts__img" />
            <p className="fun__facts__number">{fact.number}</p>
            <p className="fun__facts__text">{fact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;