import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default () => (
	<nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__list__item">
        <NavLink exact to="/" activeClassName="navigation__list__item__active">Обо мне</NavLink>
      </li>
      <li className="navigation__list__item">
        <NavLink to="/portfolio" activeClassName="navigation__list__item__active">Портфолио</NavLink>
      </li>
      <li className="navigation__list__item">
        <NavLink to="/experience" activeClassName="navigation__list__item__active">Опыт</NavLink>
      </li>
      <li className="navigation__list__item">
        <NavLink to="/education" activeClassName="navigation__list__item__active">Образование</NavLink>
      </li>
      <li className="navigation__list__item">
        <NavLink to="/skills" activeClassName="navigation__list__item__active">Навыки</NavLink>
      </li>
      <li className="navigation__list__item">
        <NavLink to="/contacts" activeClassName="navigation__list__item__active">Контакты</NavLink>
      </li>
    </ul>
  </nav>
);