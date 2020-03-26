import React, { Component } from 'react';
import '../style.css';
import logo from '../assets/logo.png';
import '../assets/foundation.css';
import MenuNav from '../containers/MenuNav';
import Boton from './Boton';

export default class Menu extends Component {
	render() {
		return (
			<div className='izq-menu'>
				<div className='containerNav'>
					<div className='logo'>
						<img src={logo} className='app-logo' alt='twilogo' />
					</div>
					<div className=''>
						<MenuNav />
					</div>
					<Boton texto='Twittear' />
				</div>
			</div>
		);
	}
}
