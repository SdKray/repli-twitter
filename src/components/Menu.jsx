import React, { Component } from 'react';
import '../style.css';
import logo from '../assets/logo.png';
import '../assets/foundation.css';
import MenuNav from '../containers/MenuNav';

export default class Menu extends Component {
	render() {
		return (
			
				<div className='izq-menu'>
					<div className="containerNav">
					<div className='logo'>
						<img src={logo} className='app-logo' alt='twilogo' />
					</div>
					<div className=''>
						<nav className='appnav'>
							<MenuNav />
						</nav>
					</div>

					{/* 				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Inicio</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Explorar</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Notificaciones</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Mensajes</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Guardados</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Listas</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Perfil</strong>
					</span>
				</div>
				<div className='inicio'>
					<img src={casa} alt='' />
					<span>
						<strong>Màs opcines</strong>
					</span>
				</div> */}
				</div></div>
		);
	}
}
