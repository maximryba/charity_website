import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import aboutUsImage from '../assets/img/about_us.png';
import welcomeImage from '../assets/img/welcome.svg';
import missionIcon from '../assets/img/mission.png';
import visionIcon from '../assets/img/vision.png';
import homeImage from '../assets/img/home_img.png';
import dollarImage from '../assets/img/dollar_img.png';
import handshakeImage from '../assets/img/handshake_img.png';
import handsIcon from '../assets/img/hands.png';
import peopleIcon from '../assets/img/people.png';
import birdIcon from '../assets/img/bird.png';
import globeIcon from '../assets/img/globe.png';
import sponsorOne from '../assets/img/sponsor_one.png';
import sponsorTwo from '../assets/img/sponsor_two.png';
import sponsorThree from '../assets/img/sponsor_three.png';
import sponsorFour from '../assets/img/sponsor_four.png';

const AboutPage = () => {
  const aboutBlocks = [
    {
      image: homeImage,
      title: "Еда & Пожертвования бездомным",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy tempor invidunt ut labore et magna aliquyam erat, sed diam voluptua.....",
      items: [
        "Протяни свою руку с нами к лучшей жизни",
        "Давайте делать правильные вещи сейчас"
      ],
      colored: true
    },
    {
      image: dollarImage,
      title: "Сделай пожертвование",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy tempor invidunt ut labore et magna aliquyam erat, sed diam voluptua.....",
      items: [
        "Протяни свою руку с нами к лучшей жизни",
        "Давайте делать правильные вещи сейчас",
        "Lorem ipsum dolor sit amet"
      ],
      colored: false
    },
    {
      image: handshakeImage,
      title: "Некоммерческая НПО",
      desc: "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy tempor invidunt ut labore.....",
      items: [
        "Протяни свою руку с нами к лучшей жизни",
        "Давайте делать правильные вещи сейчас",
        "Lorem ipsum dolor sit amet",
        "Дети, которым мы можем спасти жизнь"
      ],
      colored: false
    }
  ];

  const funFacts = [
    { icon: handsIcon, number: "4597+", text: "Людей собрано" },
    { icon: peopleIcon, number: "8945+", text: "Волонтеров" },
    { icon: birdIcon, number: "10M+", text: "Бедных людей спасено" },
    { icon: globeIcon, number: "100+", text: "Разных стран" }
  ];

  const sponsors = [sponsorOne, sponsorTwo, sponsorThree, sponsorFour];

  return (
    <>
      <div className="container">
        <Header />
      </div>

      <main>
        <h1>О нас</h1>
        <p className="main__text">Главная/О нас</p>
      </main>

      <div className="about__us">
        <div className="left">
          <img src={aboutUsImage} alt="Cards" className="about__us__img" />
        </div>
        <div className="right_about_us">
          <h3>О фонде</h3>
          <h2>Ваша помощь очень важна.​</h2>
          <p className="block__text">
            Рецепт счастья в помощи другим. Никогда не недооценивайте то, что вы можете изменить в судьбах бедных, раненых и беспомощных.
          </p>
          <button className="filled__button">Узнать больше</button>
        </div>
      </div>

      <div className="welcome__block">
        <div className="left">
          <h3>Добро пожаловать в фонд</h3>
          <h2>Будем помогать людям вместе</h2>
          <p className="block__text welcome">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo.
          </p>
          <div className="welcome__blocks">
            <div className="mission__block">
              <div className="block__line">
                <img src={missionIcon} alt="Verified" className="mission__img" />
                <p className="block__title">Наша миссия</p>
              </div>
              <p className="subblock__text">
                Lorem Ipsum Dolor Sit Amet,
                Consetetur Sadipscing Elitr,
                Sed Diam
              </p>
            </div>
            <div className="vission__block">
              <div className="block__line">
                <img src={visionIcon} alt="Note" className="vission__img" />
                <p className="block__title">Наше видение</p>
              </div>
              <p className="subblock__text">
                Lorem Ipsum Dolor Sit Amet,
                Consetetur Sadipscing Elitr,
                Sed Diam
              </p>
            </div>
          </div>
          <ProgressBar title="Пожертвования" percentage={75} />
          <ProgressBar title="Медицина" percentage={90} />
        </div>
        <div className="right">
          <img loading="lazy" src={welcomeImage} alt="Info" className="welcome__img" />
        </div>
      </div>

      <div className="about">
        <h3>О нас</h3>
        <h2>Наши функции</h2>
        <div className="about__blocks">
          {aboutBlocks.map((block, index) => (
            <div key={index} className={`about__block ${block.colored ? 'colored' : ''}`}>
              <img loading="lazy" src={block.image} alt={block.title} className="about__img" />
              <p className={`about__block__title ${block.colored ? 'colored__text' : ''}`}>{block.title}</p>
              <p className={`about__block__desc ${block.colored ? 'colored__text' : ''}`}>{block.desc}</p>
              {block.items.map((item, i) => (
                <p key={i} className={`about__block__text ${block.colored ? 'colored__text' : ''}`}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="fun__facts__blocks">
        {funFacts.map((fact, index) => (
          <div key={index} className="fun__facts__block">
            <img loading="lazy" src={fact.icon} alt={fact.text} className="fun__facts__img" />
            <p className="fun__facts__number">{fact.number}</p>
            <p className="fun__facts__text">{fact.text}</p>
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

export default AboutPage;