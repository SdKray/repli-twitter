import React from 'react';
import Perfil from '../assets/img/perfil.jpg';

export default function Twits({ User, Texto }) {
	return (
		<div className='cotwi'>
			<div className='imgtwi'>
				<img src={Perfil} alt='Perfil' />
			</div>
			<div className='cotwiText'>
				<h4>{User}</h4>
				<span>{Texto}</span>
			</div>
			<div className=''></div>
		</div>
	);
}
