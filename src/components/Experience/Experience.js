import React from 'react';
import { useTranslation } from 'react-i18next';
import works from './works';
import './index.css';

export default () => {
	const { t } = useTranslation();

	return (
		<div className="experience">
			<p className="experience__description">{t('experience.description')}</p>
			{
				works.map(work => (
					<div className="experience__work" key={work.name}>
						<div className="experience__work__logo__wrapper">
							<img src={work.logo} className="experience__work__logo" alt={work.name} />
						</div>
						<div className="experience__work__text">
							<div>
								<p className="experience__work__text__title">{work.name}</p>
								<p className="experience__work__text__position">
									<b>{t('experience.position')}:</b> {work.description}
								</p>
								<p className="experience__work__text__responsibility">
									<b>{t('experience.responsibility')}:</b> {t(`experience.${work.name}`)}
								</p>
								<p className="experience__work__text__period">{work.period}</p>
							</div>
							{
								work.website && (
									<a
										href={work.website}
										target="_blank"
										className="experience__work__text__link"
										rel="noopener noreferrer"
									>
										{t('experience.go_to_website')}
									</a>
								)
							}
						</div>
					</div>
				))
			}
		</div>
	);
}