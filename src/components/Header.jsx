import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import loop from '../assets/img/loop.png';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="logo">
        <img loading="lazy" src={logo} alt="Logo" className="logo__img" />
      </div>

      <input type="checkbox" className="burger" id="burger-toggle" />
      <label className="burger-label" htmlFor="burger-toggle">
        <div></div>
        <div></div>
        <div></div>
      </label>

      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav__link ${isActive ? 'current' : ''}`}
        >
          Главная
        </NavLink>
              <NavLink 
        to="/causes" 
        className={({ isActive }) => `nav__link ${isActive ? 'current' : ''}`}
      >
        Цели
      </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav__link ${isActive ? 'current' : ''}`}
        >
          О нас
        </NavLink>
        <NavLink 
        to="/faq" 
        className={({ isActive }) => `nav__link ${isActive ? 'current' : ''}`}
      >
        FAQ
      </NavLink>
        <NavLink 
  to="/contact" 
  className={({ isActive }) => `nav__link ${isActive ? 'current' : ''}`}
>
  Контакты
</NavLink>
      </nav>
      <div className="search__block">
        <button className="filled__button">Связаться</button>
        <button className="search__button">
          <img loading="lazy" className="loop__img" src={loop} alt="Search" />
        </button>
      </div>
    </header>
  );
};

export default Header;