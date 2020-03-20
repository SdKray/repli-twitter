import React, { Component } from 'react';
import '../style.css';
import logo from '../assets/logo.png';
import '../assets/foundation.css';

export default class Menu extends Component {
	render() {
		return (
			<div className='izq-menu'>
				<div className='logo'>
					<img src={logo} className='app-logo' alt='twilogo' />
				</div>
				<div className=''>
					<nav className='appnav'>
						<div className=''>
							<a href='/'>
								<div className=''>
									<i className='step fi-home'></i>
								</div>
								<div className=''>
									<span>Inicio</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								{' '}
								<div className=''>
									<i className='step fi-list'></i>
								</div>
								<div className=''>
									<span>Explorar</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								{' '}
								<div className=''>
									<i className='step fi-lightbulb'></i>
								</div>
								<div className=''>
									<span>Notificaciones</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								{' '}
								<div className=''>
									<i className='step fi-mail size-14'></i>
								</div>
								<div className=''>
									<span>Mensajes</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								<div className=''>
									<i className='step fi-bookmark'></i>
								</div>
								<div className=''>
									<span>Guardados</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								<div className=''>
									<i className='step fi-align-left'></i>
								</div>
								<div className=''>
									<span>Listas</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								{' '}
								<div className=''>
									<i className='step fi-align-center'></i>
								</div>
								<div className=''>
									<span>Perfil</span>
								</div>
							</a>
						</div>
						<div className=''>
							<a href='/'>
								{' '}
								<div className=''>
									<i className='step fi-braille'></i>
								</div>
								<div className=''>
									<span>Mas opciones</span>
								</div>
							</a>
						</div>
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
			</div>
		);
	}
}
