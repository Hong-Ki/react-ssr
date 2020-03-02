import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../style/main.scss";
import { BrowserRouter } from "react-router-dom";

const render =
  typeof window !== "undefined" ? ReactDOM.render : ReactDOM.hydrate;
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
