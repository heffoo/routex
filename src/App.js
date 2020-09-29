import React from "react";
import Nav from "./components /nav";
import Footer from "./components /footer";
import NAV_ITEMS from "./consts";
import {Switch, Route } from "react-router-dom";

import First from "./components /pages/home/home";
import Second from "./components /pages/second/second";
import Third from "./components /pages/third/third";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
        <div>
          <Nav items={NAV_ITEMS} />
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
          <Footer items={NAV_ITEMS} />
        </div>

    );
  }
}
export default App;
