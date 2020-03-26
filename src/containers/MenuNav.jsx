import React from 'react';
import ItemNav from '../components/ItemNav';
//box sizing key frames animations transicion
//flex box
//media query
const datos = [
	{
		IconName: 'fi-home size-8',
		Texto: 'Inicio'
	},
	{
		IconName: 'fi-list',
		Texto: 'Explorar'
	},
	{
		IconName: 'fi-lightbulb',
		Texto: 'Notificaciones'
	},
	{
		IconName: ' fi-mail',
		Texto: 'Mensajes'
	},
	{
		IconName: 'fi-bookmark',
		Texto: 'Guardados'
	},
	{
		IconName: 'fi-align-left',
		Texto: 'Listas'
	},
	{
		IconName: 'fi-align-center',
		Texto: 'Perfil'
	},
	{
		IconName: 'fi-braille',
		Texto: 'Mas opciones'
	}
];
export default function MenuNav() {
	return (
		<nav className='appnav'>
			{datos.map((item, key) => {
				return <ItemNav IconName={item.IconName} Texto={item.Texto} />;
			})}
		</nav>
	);
}
