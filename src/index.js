"use strict";

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h1>here is you net worth app</h1>;
  }
}

const element = document.getElementById("root");
ReactDOM.render(<App />, element);
