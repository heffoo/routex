import React from "react";
import {NavLink} from "react-router-dom";


import './footer.scss'



const Footer = ( { items }) => {
    return (
        <div className="footernav ">
            <ul className="footernavmenu">
        {items.map((item) => (
						<li key={item.name} className="itemnavfooter">
                            
							<NavLink  className="Link" activeClassName="active" to={item.to}>
								{item.name}
							</NavLink>
						</li>
					))}
                    </ul>
                    <div className="footerContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam.
                    </div>
        </div>

    )

    
}
 
export default Footer;