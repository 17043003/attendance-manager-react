import React, { Fragment } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Fragment>
      <div className="App">
        <Link to="/">トップ</Link>
        <Link to="/login">ログイン</Link>
      </div>
    </Fragment>
  );
}

export default App;
