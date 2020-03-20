import React, { Component } from 'react';
import '../menuder.css';

export default class Menuder extends Component {
	render() {
		return (
			<div className='menuder'>
				<div className='search'>
					<div className=''>
						<input type='text' placeholder='Buscar' />
					</div>
				</div>
			</div>
		);
	}
}
