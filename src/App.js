import React from 'react';
import Menu from './components/Menu';
//import Menuder from './components/Menuder';
import './App.css';
import Noticias from './containers/Noticias';
//import MenuNav from './containers/MenuNav';

function App() {
	return (
		<div className='App' style={{backgroundColor:"#ffff"}}>
			<div style={{width:"80%", display:"flex"}}> 
				<div style={{ width: "20%",  }} >
					<Menu />
				</div>
				<div style={{ width: "60%" }}>
					<Noticias />
				</div>
				<div style={{ width: "20%", backgroundColor: "#846544" }}>
					Seccion 3
			</div>

			</div>
			
		</div>
	);
}

export default App;

