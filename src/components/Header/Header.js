import React from 'react';
import logoImg from '../../images/logo.png';
import './index.css';

export default () => (
	<header className="header__container">
		<div className="header__top">
		  <div className="header__top__titles">
		  	<h1 className="header__top__titles__title">Приветствую!</h1>
		    <h2 className="header__top__titles__subtitle">
		    	Давайте познакомимся и, может быть,<br/> вместе поработаем.
		  	</h2>
		  	<span className="header__top__titles__lang">Eng</span>&nbsp;
		  	<span className="header__top__titles__lang">Rus</span>
	  	</div>
		  <img src={logoImg} className="header__top__logo" />
		</div>
        <section className="header__info">
        	<p className="header__info__column small">
        		<span className="header__info__name">ДЕРЯБИН ЕГОР</span>
        	</p>
        	<div className="header__info__separator" />
        	<p className="header__info__column big">
        		<span className="header__info__column__description">
                    Это мой сайт-портфолио,
                </span>
                <span className="header__info__column__description">
                    Здесь вы можете ознакомиться
                </span>
                <span className="header__info__column__description">
                    Со всей необходимой информацией.
                </span>
        	</p>
        	<div className="header__info__separator" />
        	<ul className="header__info__column header__info__socialList big">
        		<li>LinkedIn</li>
        		<li>Github</li>
        		<li>HH</li>
        	</ul>
        </section>
	</header>
);
