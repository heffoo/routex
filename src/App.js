import React from "react";
import Appl from "./components /nav";

import "./App.scss";

function App() {
  return (
    <Appl
      items={[
        {
          to: '/first',
          name: "first item",
        },
        {
          to: '/second',
          name: "second item",
        },
        {
          to: '/third',
          name: "third item",
        },
      ]}
    />
  );
}
export default App;
