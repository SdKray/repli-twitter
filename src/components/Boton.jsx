import React from 'react';

export default function Boton({ texto }) {
	return (
		<div className='btn'>
			<a href='/'>{texto}</a>
		</div>
	);
}
