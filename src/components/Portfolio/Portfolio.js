import React from 'react';
import { useTranslation } from 'react-i18next';
import projects from './projects';
import './index.css';

export default () => {
	const { t } = useTranslation();

	return (
		<div className="portfolio">
			<p className="portfolio__description">{t('portfolio.description')}</p>
			<p className="portfolio__title">{t('portfolio.store_applications')}</p>
			<div className="portfolio__projects">
			{
				projects.map(project => (
					<div key={project.name} className="portfolio__projects__item">
						<a
							  href={project.website}
							  target="_blank"
							  className="portfolio__projects__item__link"
							  rel="noopener noreferrer"
					  >
							<img src={project.image} className="portfolio__projects__item__img" alt={project.name} />
						</a>
						<div className="portfolio__projects__item__text">
							<div>
							  <h5 className="portfolio__projects__item__text__title">{project.name}</h5>
							  <p className="portfolio__projects__item__text__description">{t(`portfolio.${project.name}`)}</p>
						  </div>
						  <a
							  href={project.website}
							  className="portfolio__projects__item__text__link"
							  target="_blank"
							  rel="noopener noreferrer"
						  >
							  {t('portfolio.go_to_store')}
						  </a>
						</div>
					</div>
				))
			}
			</div>
			<p className="portfolio__title">{t('portfolio.open_source')}</p>
			<p className="portfolio__openSource">
				— <a
						href="https://www.npmjs.com/package/rn-sliding-view"
						target="_blank"
						rel="noopener noreferrer"
					>
						rn-sliding-view:</a>&nbsp;
				{t('portfolio.rn_sliding_view_description')}
			</p>
			<p className="portfolio__title">{t('portfolio.not_in_stores')}</p>
			<p className="portfolio__noStoreProject">
				— Zuma Chat: {t('portfolio.zuma_description')}
			</p>
			<p className="portfolio__noStoreProject">
				— Radix: {t('portfolio.radix_description')}&nbsp;
				<a
					href="https://xorixora.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t('portfolio.radix_website')}
				</a>
			</p>
		</div>
	);
}