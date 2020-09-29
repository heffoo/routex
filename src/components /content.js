				
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import First from './pages/home/home'
import Second from './pages/second/second'
import Third from './pages/third/third'


import "./nav.scss";

const content = () => {
	return (
		<Router>
			<Switch>
				<Route path="/third">
					<Third />
				</Route>
				<Route path="/second">
					<Second />
				</Route>
				<Route path="/">
					<First />
				</Route>
			</Switch>
			
		</Router>
		
	  );
	
};



export default content;
