import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getHero, getFooter } from './api/api';

import { useEffect, useState } from 'react';

import Home from './pages/Home/Home';
import Legals from './pages/Legals/Legals';
import Privacy from './pages/Privacy/Privacy';

import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {


	return (
		<div className="App">
			<Router>


				<Switch>
					<Route exact path="/legals">
						<Legals></Legals>
					</Route>
					<Route exact path="/privacy">
						<Privacy></Privacy>
					</Route>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>


			</Router>
		</div>
	);
}

export default App;
