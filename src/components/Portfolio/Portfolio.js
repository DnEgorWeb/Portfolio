import React from 'react';
import projects from './projects';
import './index.css';

export default () => (
	<div className="portfolio">
		<p className="portfolio__description">
			Ниже перечислены приложения, зарелизенные в Google Play / App Store, 
			open-source проекты, а также приложения, не доступные в мобильных сторах
			(частные приложения, либо находящиеся на этапе разработки / тестирования).
		</p>
		<p className="portfolio__title">STORE APPLICATIONS:</p>
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
		<p className="portfolio__title">OPEN SOURCE:</p>
		<p className="portfolio__openSource">
			— <a
					href="https://www.npmjs.com/package/rn-sliding-view"
					target="_blank"
					rel="noopener noreferrer"
				>
					rn-sliding-view:</a>&nbsp;
			библиотека для react-native, позволяющая добавлять анимированные view (aka menu),
			включая drag'n'drop, кастомные стили, направления, анимации, etc.
		</p>
		<p className="portfolio__title">НЕ ВОШЕДШЕЕ В СТОРЫ:</p>
		<p className="portfolio__noStoreProject">
			— Zuma Chat: мессенджер с end-to-end шифрованием, поддерживающий чаты 1 - 1, групповые чаты, обмен
			текстом, аудио-, фото- и видеосообщениями. Приложение разработано для использования заказчиком
			внутри своей компании. Платформа: Android.
		</p>
		<p className="portfolio__noStoreProject">
			— Radix: крипто-кошелек, поддерживающий покупку / продажу / конвертацию валюты, 
			встроенный мессенджер, qr-считыватель, оповещения, etc. Платформа: iOS & Android.&nbsp;
			<a
				href="https://xorixora.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Сайт проекта.
			</a>
		</p>
	</div>
);