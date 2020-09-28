import React from "react";
import Appl from "./components /nav";
import Footer from './components /footer'
import NAV_ITEMS from './consts'


import "./App.scss";

function App() {
  return (
    <div>
    <Appl
      items={NAV_ITEMS}
    />

  <Footer items={NAV_ITEMS}
  />
       </div>
  )
}
export default App;
