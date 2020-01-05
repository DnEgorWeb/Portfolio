import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './index.css';

export default () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list__item">
          <NavLink exact to="/" activeClassName="navigation__list__item__active">
            {t('navigation.about')}
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/portfolio" activeClassName="navigation__list__item__active">
            {t('navigation.portfolio')}
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/experience" activeClassName="navigation__list__item__active">
            {t('navigation.experience')}
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/skills" activeClassName="navigation__list__item__active">
            {t('navigation.skills')}
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/education" activeClassName="navigation__list__item__active">
            {t('navigation.education')}
          </NavLink>
        </li>
        <li className="navigation__list__item">
          <NavLink to="/contacts" activeClassName="navigation__list__item__active">
            {t('navigation.contacts')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}