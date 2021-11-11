import React, { Fragment } from "react";
import "./App.css";

import Top from "./Top"
import Login from "./components/Login"

function App() {
  return (
    <Fragment>
    <div className="App">
      <Top />
      <Login />
    </div>
    </Fragment>
  );
}

export default App;
