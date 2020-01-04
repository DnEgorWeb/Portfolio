import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

export default () => {
    const { t, i18n } = useTranslation();
    const [type, setType] = useState('Work');

    const changeLanguage = language => i18n.changeLanguage(language);
    const currentLanguage = i18n.languages[0];
    console.log('currentLanguage', currentLanguage);
    console.log('title: ', t('header.title'));
    console.log('title: ', t('title'));

    return (
        <header className="header__container">
            <div className="header__top">
              <div className="header__top__titles">
                <h1 className="header__top__titles__title">Приветствую! Давайте познакомимся.</h1>
                <h2 className="header__top__titles__subtitle">
                    (и, может быть, вместе поработаем)
                </h2>
                <span
                    onClick={() => changeLanguage('en')}
                    className={`header__top__titles__lang ${currentLanguage === 'en' && 'active'}`}
                >
                    Eng
                </span>&nbsp;
                <span
                    onClick={() => changeLanguage('ru')}
                    className={`header__top__titles__lang ${currentLanguage === 'ru' && 'active'}`}
                >
                    Rus
                </span>
              </div>
              {/*<img src={logoImg} className="header__top__logo" alt="" />*/}
            </div>
            <section className="header__info">
                <p className="header__info__column small">
                    <span className="header__info__name">ДЕРЯБИН ЕГОР</span>
                </p>
                <div className="header__info__separator" />
                <div className="header__info__column big">
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
                </div>
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
                                <li><b>WhatsApp:</b> 89992157535</li>
                                <li><b>Telegram:</b> @Dean__1812</li>
                                <li><b>Mail:</b> egor19942012@gmail.com</li>
                            </>
                        )
                    }
                </ul>
            </section>
        </header>
    );
}
