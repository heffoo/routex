import React from "react";
import {  NavLink} from "react-router-dom";


import "./nav.scss";

const nav = ({ items }) => {
	return (
			<div className="navbar">
				<ul className="navmenu">
					{items.map((item) => (
						<li key={item.to} className="itemnav">
							<NavLink  className="Link" activeClassName="active" to={item.to}>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			
			
	  );
	
};



export default nav;
