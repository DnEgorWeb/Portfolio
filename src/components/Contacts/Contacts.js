import React from 'react';
import communication from './communication';
import './index.css';

export default () => (
	<div className="contacts">
		<p className="contacts__title">Связаться со мной можно следующими способами:</p>
		{
			communication.map((item, index) => (
				<p className="contacts__item" key={index}>
					<b>{item.type}:</b> {item.value}
				</p>
			))
		}
	</div>
);
