import React from "react";
import { BrowserRouter as Router, NavLink} from "react-router-dom";


import './footer.scss'



const Footer = ( { items }) => {
    return (
        <div className="footernav ">
            <ul className="footernavmenu">
        {items.map((item) => (
						<li key={item.name} className="itemnav">
                            
							<NavLink  className="Link" activeClassName="active" to={item.to}>
								{item.name}
							</NavLink>
						</li>
					))}
                    </ul>
        </div>

    )

    
}
 
export default Footer;