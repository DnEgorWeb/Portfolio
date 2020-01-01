import React from 'react';
import works from './works';
import './index.css';

export default () => (
	<div className="experience">
		<p className="experience__description">
			Опыт работы перечислен в обратном порядке (от последнего к самому давнему).
		</p>
		{
			works.map(work => (
				<div className="experience__work" key={work.name}>
					<div className="experience__work__logo__wrapper">
						<img src={work.logo} className="experience__work__logo" />
					</div>
					<div className="experience__work__text">
						<div>
							<p className="experience__work__text__title">{work.name}</p>
							<p className="experience__work__text__position">
								<b>Должность:</b> {work.description}
							</p>
							<p className="experience__work__text__responsibility">
								<b>Деятельность:</b> {work.responsibility}
							</p>
							<p className="experience__work__text__period">{work.period}</p>
						</div>
						{
							work.website && (
								<a
									href={work.website}
									target="_blank"
									className="experience__work__text__link"
								>
									Перейти на сайт
								</a>
							)
						}
					</div>
				</div>
			))
		}
	</div>
);