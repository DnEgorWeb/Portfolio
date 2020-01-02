import React from 'react';
import projects from './projects';
import './index.css';

export default () => (
	<div className="portfolio">
		<p className="portfolio__description">
			Здесь можно посмотреть мобильные проекты, которые на данный момент
			доступны в Google Play / App Store. Некоторые из них доступны как для Android, так и 
			для iOS, некоторые - лишь для одной системы.<br />
			Также ниже можно ознакомиться с полным списком мобильных приложений, над которыми я работал.
		</p>
		<div className="portfolio__projects">
		{
			projects.map(project => (
				<div key={project.name} className="portfolio__projects__item">
					{/* <span>{project.name}</span> */}
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
					  	<p className="portfolio__projects__item__text__description">{project.description}</p>
					  </div>
					  <a
					  	href={project.website}
					  	className="portfolio__projects__item__text__link"
					  	target="_blank"
					  	rel="noopener noreferrer"
				  	>
					  	Перейти в стор
				  	</a>
					</div>
				</div>
			))
		}
		</div>
	</div>
);