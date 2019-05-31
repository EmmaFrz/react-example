import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/LoginContainer.js';
import Dashboard from '../containers/Dashboard.js';

function App(props){
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route exact path="/dashboard" component={Dashboard}/>
			</Switch>
		</BrowserRouter>
	)
}

export default App;