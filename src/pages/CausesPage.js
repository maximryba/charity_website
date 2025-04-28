import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import popularImage from '../assets/img/popular.png';
import popularHoverImage from '../assets/img/popular_hover.png';
import sponsorOne from '../assets/img/sponsor_one.png';
import sponsorTwo from '../assets/img/sponsor_two.png';
import sponsorThree from '../assets/img/sponsor_three.png';
import sponsorFour from '../assets/img/sponsor_four.png';

const CausesPage = () => {
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
      title: "Дети, с которыми мы работаем",
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
    },
    {
      category: "Еда",
      title: "Помощь с едой",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 75,
      raised: "$1,500",
      goal: "$2,000"
    },
    {
      category: "Медицина",
      title: "Помощь ветеранам с медициной",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 60,
      raised: "$600",
      goal: "$1,000"
    },
    {
      category: "Бездомные",
      title: "Помощь детям из Ганы",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 85,
      raised: "$8,500",
      goal: "$10,000"
    },
    {
      category: "Образование",
      title: "Ежегодная акция школьных принадлежностей",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 90,
      raised: "$9,000",
      goal: "$10,000"
    },
    {
      category: "Другие",
      title: "Тоби знакомится с компьютером и интернетом",
      description: "Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonumy....",
      progress: 75,
      raised: "$1,500",
      goal: "$2,000"
    }
  ];

  const sponsors = [sponsorOne, sponsorTwo, sponsorThree, sponsorFour];

  return (
    <>
      <div className="container">
        <Header />
      </div>

      <main>
        <h1>Наши цели</h1>
        <p className="main__text">Главная/Цели</p>
      </main>

      <div className="main__container">
        <h3>Последние цели</h3>
        <h2>Выберите популярную цель и пожертвуйте</h2>
      </div>

      <div className="popular__blocks">
        {causes.map((cause, index) => (
          <div className="popular__block" key={index}>
            <img loading="lazy" src={popularImage} alt="Block" className="popular__img" />
            <img loading="lazy" src={popularHoverImage} alt="Block" className="popular__img__hover" />
            <div className="popular__block__container">
              <p className="popular__block__section">{cause.category}</p>
              <h6>{cause.title}</h6>
              <p className="popular__block__text">{cause.description}</p>
              <div className="upper__bar__line">
                <p className="popular__bar__text">Пожертвовать</p>
                <p className="popular__bar__percentage">{cause.progress}%</p>
              </div>
              <ProgressBar percentage={cause.progress} showNumbers={false} />
              <div className="below__bar__line">
                <p className="popular__bar__text">Собрано: {cause.raised}</p>
                <p className="popular__bar__text">Цель: {cause.goal}</p>
              </div>
              <button className="popular__button">Пожертвовать сейчас</button>
            </div>
          </div>
        ))}
      </div>

      <div className="sponsors">
        {sponsors.map((sponsor, index) => (
          <img 
            key={index}
            loading="lazy" 
            src={sponsor} 
            alt="Sponsor" 
            className="sponsor__img" 
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default CausesPage;