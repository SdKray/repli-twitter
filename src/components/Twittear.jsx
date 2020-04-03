import React from 'react';
import per from '../assets/img/perfil.jpg';

export default function Twittear() {
	return (
		<div className='content'>
			<div className='Twit'>
				<div className='div1'>
					<img src={per} alt='Perfil' />
				</div>
				<div className='div2'>
					<span>¿Qué está pasando?</span>
				</div>
			</div>

			<div className='div3'>
				<div className='btn2'>
					<a href='/'>Twittear</a>
				</div>
			</div>
		</div>
	);
}
