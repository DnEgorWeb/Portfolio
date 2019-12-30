import React from 'react';
import logoWithColor from '../../images/logoWithColor.jpg';
import './index.css';

export default () => (
	<div className="about">
		<img src={logoWithColor} className="about__logo" />
		<div className="about__description">
			<h4 className="about__description__title">МОБИЛЬНЫЙ РАЗРАБОТЧИК</h4>
			<p className="about__description__text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Fusce aliquet, est nec aliquam dictum, quam augue tincidunt odio, 
				vitae maximus odio dui at nibh. Duis blandit tortor non nisl eleifend maximus. 
				Quisque iaculis id neque sed interdum. Etiam eu ex ut nulla aliquam finibus 
				quis id elit. Nam in purus quam. Proin gravida justo id massa cursus euismod.
				Sed faucibus eros in iaculis tincidunt.
			</p>
		</div>
	</div>
);