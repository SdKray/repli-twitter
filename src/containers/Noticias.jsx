import React from 'react';
import Inicio from '../components/Inicio';
import Twittear from '../components/Twittear';
import Twits from '../components/Twits';

export default function Noticias() {
	return (
		<div className='container'>
			<div className='ConIni'>
				<Inicio />
			</div>
			<Twittear />
			<div className='separador'></div>
			<div className='twits'>
				<Twits />
			</div>
		</div>
	);
}
