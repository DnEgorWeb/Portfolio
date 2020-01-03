import React, { useState } from 'react';
import logoImg from '../../images/logo.png';
import './index.css';

export default () => {
    const [type, setType] = useState('Work');

    return (
    <header className="header__container">
        <div className="header__top">
          <div className="header__top__titles">
            <h1 className="header__top__titles__title">Приветствую! Давайте познакомимся.</h1>
            <h2 className="header__top__titles__subtitle">
                (и, может быть, вместе поработаем)
            </h2>
            <span className="header__top__titles__lang">Eng</span>&nbsp;
            <span className="header__top__titles__lang">Rus</span>
          </div>
          {/*<img src={logoImg} className="header__top__logo" alt="" />*/}
        </div>
        <section className="header__info">
            <p className="header__info__column small">
                <span className="header__info__name">ДЕРЯБИН ЕГОР</span>
            </p>
            <div className="header__info__separator" />
            <p className="header__info__column big">
                <p className="header__info__column__description">
                    <span
                        onClick={() => setType('Work')}
                        className={type === 'Work' ? 'white' : ''}
                    >
                        Work
                    </span>
                </p>
                <p className="header__info__column__description">
                    <span
                        onClick={() => setType('Social')}
                        className={type === 'Social' ? 'white' : ''}
                    >
                        Social
                    </span>
                </p>
            </p>
            <div className="header__info__separator" />
            <ul className="header__info__column header__info__socialList big">
                {
                    type === 'Work' ? (
                        <>
                            <li>
                                <a href={'http://linkedin.com'} className="link linkedIn">LinkedIn</a>
                            </li>
                            <li>
                                <a href={'http://linkedin.com'} className="link github">Github</a>
                            </li>
                            <li>
                                <a href={'http://linkedin.com'} className="link headHunter">HH</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>Something else</li>
                        </>
                    )
                }
            </ul>
        </section>
    </header>
);
}
