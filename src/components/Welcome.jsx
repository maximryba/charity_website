import React from 'react';
import welcomeImage from '../assets/img/welcome.svg';
import missionIcon from '../assets/img/mission.png';
import visionIcon from '../assets/img/vision.png';
import ProgressBar from './ProgressBar';

const Welcome = () => {
  return (
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
        <ProgressBar title="Медицинская помощь" percentage={90} />
      </div>
      <div className="right">
        <img src={welcomeImage} alt="Info" className="welcome__img" />
      </div>
    </div>
  );
};

export default Welcome;