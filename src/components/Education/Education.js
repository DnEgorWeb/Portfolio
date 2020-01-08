import React from 'react';
import { useTranslation } from 'react-i18next';
import educations from './educations';
import './index.css';

export default () => {
	const { t } = useTranslation();

	return (
		<div className="education">
			{
				educations.map((education, index) => (
					<div className="education__item" key={education.specialization}>
						<div className="education__item__logo__wrapper">
							<img
								src={education.image}
								className="education__item__logo"
								alt={education.title}
							/>
						</div>
						<div className="education__item__text">
							<p className="education__item__text__title">
								<b>{t('education.university')}:</b> {t(`education.${index}.university`)}
							</p>
							<p className="education__item__text__faculty">
								<b>{t('education.faculty')}:</b> {t(`education.${index}.faculty`)}
							</p>
							<p className="education__item__text__specialization">
								<b>{t('education.specialization')}:</b> {t(`education.${index}.specialization`)}
							</p>
							<p className="experience__work__text__degree">
								<b>{t('education.degree')}:</b> {t(`education.${index}.degree`)}
							</p>
						</div>
					</div>
				))
			}
		</div>
	);
}