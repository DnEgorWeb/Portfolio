import React from 'react';
import { useTranslation } from 'react-i18next';
import allSkills from './allSkills';
import './index.css';

export default () => {
	const { t } = useTranslation();

	return (
		<div className="skills">
			{
				Object.entries(allSkills).map(([skillName, skills]) => (
					<div className="skills__item" key={skillName}>
						<p className="skills__item__title">{t(`skills.${skillName}.title`)}</p>
						{
							skills.map((skill, index) => (
								<p className="skills__item__name"key={index}>— {t(`skills.${skillName}.${index}`)};</p>
							))
						}
					</div>
				))
			}
		</div>
	);
}