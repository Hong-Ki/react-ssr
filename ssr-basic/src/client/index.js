import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../style/main.scss";

const render =
  typeof window !== "undefined" ? ReactDOM.render : ReactDOM.hydrate;
render(<App />, document.getElementById("root"));
