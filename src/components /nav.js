import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import First from './pages/home/home'
import Second from './pages/second/second'

import "./nav.scss";

const Appl = ({ items }) => {
  return (
    <Router>
      <div className="navbar">
        <ul className="navmenu">
          {items.map((item) => (
            <li className="itemnav">
              <Link className="Link" activeClassNAme="activeLink" to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
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

function Third() {
  return <div className="page"> Third</div>;
}

export default Appl;
