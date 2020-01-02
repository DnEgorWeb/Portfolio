import React from 'react';
import allSkills from './allSkills';
import './index.css';

export default () => (
	<div className="skills">
		{
			Object.entries(allSkills).map(([skillName, skills]) => (
				<div className="skills__item" key={skillName}>
					<p className="skills__item__title">{skillName}</p>
					{
						skills.map((skill, index) => (
							<p className="skills__item__name"key={index}>— {skill};</p>
						))
					}
				</div>
			))
		}
	</div>
);