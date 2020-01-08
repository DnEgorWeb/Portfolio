import React from 'react';
import { useTranslation } from 'react-i18next';	
import logoWithColor from '../../images/logoWithColor.jpg';
import './index.css';

export default () => {
	const { t } = useTranslation();

	return (
		<div className="about">
			<img src={logoWithColor} className="about__logo" alt="logo" />
			<div className="about__description">
				<h4 className="about__description__title">{t('about.title')}</h4>
				<p className="about__description__text">{t('about.first__text')}</p>
				<p className="about__description__text">{t('about.second__text')}</p>
				<p className="about__description__text">{t('about.third__text')}</p>
			</div>
		</div>
	);
}