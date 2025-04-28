import React from 'react';
import { NavLink } from 'react-router-dom';
import footerLogo from '../assets/img/footer_logo.png';
import twitterIcon from '../assets/img/twitter.png';
import instaIcon from '../assets/img/insta.png';
import pinterestIcon from '../assets/img/pinterest.png';
import youtubeIcon from '../assets/img/youtube.png';

const Footer = () => {
  const socialMedia = [
    { icon: twitterIcon, alt: "Twitter", link: "#" },
    { icon: instaIcon, alt: "Instagram", link: "#" },
    { icon: pinterestIcon, alt: "Pinterest", link: "#" },
    { icon: youtubeIcon, alt: "YouTube", link: "#" }
  ];

  return (
    <footer>
      <div className="sections">
        <div className="section" id="section__one">
          <img loading="lazy" src={footerLogo} alt="GiveLife" className="footer__img" />
          <p className="footer__text__number">10k</p>
          <p className="footer__text__main">Клиентов по всему миру уже подключились</p>
        </div>
        <div className="section" id="section__two">
          <p className="footer__section">Быстрые ссылки</p>
          <NavLink to="/" className="footer__link">Главная</NavLink>
          <NavLink to="/about" className="footer__link">О нас</NavLink>
          <NavLink to="#" className="footer__link">Фото</NavLink>
          <NavLink 
                  to="/news" className="footer__link" >
                  Новости
                </NavLink>
        </div>
        <div className="section" id="section__three">
          <p className="footer__section">Будьте на связи</p>
          <NavLink to="/contact" className="footer__link">Контакты</NavLink>
          <NavLink to="#" className="footer__link">Наши сервисы</NavLink>
        </div>
        <div className="section" id="section__four">
          <p className="footer__section">Адрес</p>
          <p className="footer__text">2464 Роял Лн. Меса, Москва 45463</p>
        </div>
        <div className="section" id="section__five">
          <p className="footer__section">Почта</p>
          <div className="footer__input">
            <input maxLength="100" type="email" className="email__input" placeholder="Введите вашу почту" />
            <button className="button__subscribe">Подписаться</button>
          </div>
          <p className="footer__text" id="warning">Ваша почта в безопасности с нами, мы не спамим.</p>
          <p className="footer__section">Подписаться</p>
          <div className="medias">
            {socialMedia.map((media, index) => (
              <a href={media.link} className="media__link" key={index}>
                <img loading="lazy" src={media.icon} alt={media.alt} className="media__img" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__line"></div>
      <br />
      <p className="copyright">Разработано Максимом и Степаном</p>
    </footer>
  );
};

export default Footer;