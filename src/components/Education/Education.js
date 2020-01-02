import React from 'react';
import educations from './educations';
import './index.css';

export default () => (
	<div className="education">
		{
			educations.map(education => (
				<div className="education__item" key={education.title}>
					<div className="education__item__logo__wrapper">
						<img
							src={education.image}
							className="education__item__logo"
							alt={education.title}
						/>
					</div>
					<div className="education__item__text">
						<p className="education__item__text__title">
							<b>Университет:</b> {education.title}
						</p>
						<p className="education__item__text__faculty">
							<b>Факультет:</b> {education.faculty}
						</p>
						<p className="education__item__text__specialization">
							<b>Специализация:</b> {education.specialization}
						</p>
						<p className="experience__work__text__degree">
							<b>Степень:</b> {education.degree}
						</p>
					</div>
				</div>
			))
		}
	</div>
);