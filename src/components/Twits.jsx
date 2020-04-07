import React from 'react';
import Perfil from '../assets/img/perfil.jpg';
import '../assets/foundation.css';

export default function Twits({ User, Texto }) {
	return (
		<div className='cotwi'>
			<div className='imgtwi'>
				<img src={Perfil} alt='Perfil' />
			</div>
			<div className='cotwiText'>
				<h4>{User}</h4>
				<span>{Texto}</span>
				<div className='icons'>
					<div className=''>
						<i className='fi-comment'></i>
						<span> 2</span>
					</div>
					<div className=''>
						<i className='fi-share'></i>
						<span> 614</span>
					</div>
					<div className=''>
						<i className='fi-heart'></i>
						<span> 10</span>
					</div>
					<div className=''>
						<i className='fi-upload'></i>
					</div>
				</div>
			</div>
			<div className=''></div>
		</div>
	);
}
