import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import First from './pages/home/home'
import Second from './pages/second/second'
import Third from './pages/third/third'

import './footer.scss'



const Footer = ( { items }) => {
    return (
<Router>
        <div className="footernav ">
            <ul className="footernavmenu">
        {items.map((item) => (
						<li className="itemnav">
							<NavLink  className="Link" activeClassName="active" to={item.to}>
								{item.name}
							</NavLink>
						</li>
					))}
                    </ul>
        </div>
        <Switch>
				<Route path="/third">
					
				</Route>
				<Route path="/second">
					
				</Route>
				<Route path="/">
			
				</Route>
			</Switch>
    </Router>

    )

    
}
 
export default Footer;