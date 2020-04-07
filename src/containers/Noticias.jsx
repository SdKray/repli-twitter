import React from 'react';
import Inicio from '../components/Inicio';
import Twittear from '../components/Twittear';
import Twits from '../components/Twits';
const tws = [
	{
		User: 'Luis Alberto',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Emmanuel Escamilla',
		Texto:
			' Nulla a euismod mi. Etiam convallis volutpat accumsan. Etiam ac est ac sem gravida tincidunt. Praesent gravida, felis eget mollis cursus, lorem purus euismod neque, at ultrices massa neque vitae diam. Quisque sit amet nisl fermentum, finibus ipsum id, tristique orci. Proin in ipsum efficitur, tincidunt libero a, ullamcorper est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce cursus dictum dolor ac porttitor. Duis pellentesque est vitae ultrices laoreet. Praesent commodo mattis magna, sed rhoncus erat lacinia vel. '
	},
	{
		User: 'Rodrigo Hernandez',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Luis Alberto',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Emmanuel Escamilla',
		Texto:
			' Nulla a euismod mi. Etiam convallis volutpat accumsan. Etiam ac est ac sem gravida tincidunt. Praesent gravida, felis eget mollis cursus, lorem purus euismod neque, at ultrices massa neque vitae diam. Quisque sit amet nisl fermentum, finibus ipsum id, tristique orci. Proin in ipsum efficitur, tincidunt libero a, ullamcorper est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce cursus dictum dolor ac porttitor. Duis pellentesque est vitae ultrices laoreet. Praesent commodo mattis magna, sed rhoncus erat lacinia vel. '
	},
	{
		User: 'Rodrigo Hernandez',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Luis Alberto',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Emmanuel Escamilla',
		Texto:
			' Nulla a euismod mi. Etiam convallis volutpat accumsan. Etiam ac est ac sem gravida tincidunt. Praesent gravida, felis eget mollis cursus, lorem purus euismod neque, at ultrices massa neque vitae diam. Quisque sit amet nisl fermentum, finibus ipsum id, tristique orci. Proin in ipsum efficitur, tincidunt libero a, ullamcorper est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce cursus dictum dolor ac porttitor. Duis pellentesque est vitae ultrices laoreet. Praesent commodo mattis magna, sed rhoncus erat lacinia vel. '
	},
	{
		User: 'Rodrigo Hernandez',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Luis Alberto',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	},
	{
		User: 'Emmanuel Escamilla',
		Texto:
			' Nulla a euismod mi. Etiam convallis volutpat accumsan. Etiam ac est ac sem gravida tincidunt. Praesent gravida, felis eget mollis cursus, lorem purus euismod neque, at ultrices massa neque vitae diam. Quisque sit amet nisl fermentum, finibus ipsum id, tristique orci. Proin in ipsum efficitur, tincidunt libero a, ullamcorper est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce cursus dictum dolor ac porttitor. Duis pellentesque est vitae ultrices laoreet. Praesent commodo mattis magna, sed rhoncus erat lacinia vel. '
	},
	{
		User: 'Rodrigo Hernandez',
		Texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dui, volutpat sed lacinia eu, suscipit quis erat.'
	}
];
export default function Noticias() {
	return (
		<div className='container'>
			<div className='ConIni'>
				<Inicio />
			</div>
			<Twittear />
			<div className='separador'></div>
			<div className='twits'>
				{tws.map((item, key) => {
					return <Twits User={item.User} Texto={item.Texto} />;
				})}
			</div>
		</div>
	);
}
