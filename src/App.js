import React from 'react';
import Menu from './components/Menu';
//import Menuder from './components/Menuder';
import './App.css';
import Noticias from './containers/Noticias';
//import MenuNav from './containers/MenuNav';

function App() {
	return (
		<div className='App'>
			<Menu />
			<div className='prueba'>
				<Noticias />
			</div>
		</div>
	);
}

export default App;
