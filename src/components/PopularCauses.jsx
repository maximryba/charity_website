import React from 'react';
import popularImage from '../assets/img/popular.png';
import ProgressBar from './ProgressBar';

const PopularCauses = () => {
  const causes = [
    {
      category: "Медицина",
      title: "Пожертвуйте на лечение бедных людей и медицину",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 60,
      raised: "$600",
      goal: "$1,000"
    },
    {
      category: "Бездомные",
      title: "Дети с которыми мы работаем",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 85,
      raised: "$8,500",
      goal: "$10,000"
    },
    {
      category: "Образование",
      title: "Помощь с образованием",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 90,
      raised: "$9,000",
      goal: "$10,000"
    }
  ];

  return (
    <div className="popular__blocks">
      <h3>Последние цели</h3>
      <h2 className="popular__header">Выберите популярную цель и пожертвуйте</h2>
      <div className="popular__line">
        {causes.map((cause, index) => (
          <div className="popular__block" key={index}>
            <img loading="lazy" src={popularImage} alt="Block" className="popular__img" />
            <div className="popular__block__container">
              <p className="popular__block__section">{cause.category}</p>
              <h6>{cause.title}</h6>
              <p className="popular__block__text">{cause.description}</p>
              <ProgressBar 
                title="Пожертвовать" 
                percentage={cause.progress} 
                showNumbers={false}
              />
              <div className="below__bar__line">
                <p className="popular__bar__text">Собрано: {cause.raised}</p>
                <p className="popular__bar__text">Цель: {cause.goal}</p>
              </div>
              <button className="popular__button">Пожертвовать сейчас</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCauses;