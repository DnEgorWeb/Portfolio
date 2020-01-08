import React from 'react';
import { useTranslation } from 'react-i18next';
import communication from './communication';
import './index.css';

export default () => {
	const { t } = useTranslation();

	return (
		<div className="contacts">
			<p className="contacts__title">{t('contacts.title')}:</p>
			{
				communication.map((item, index) => (
					<p className="contacts__item" key={index}>
						<b>{item.type}:</b> {item.value}
					</p>
				))
			}
		</div>
	);
}
