import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Error from "./components/Error";
import Hello from "./components/Hello";

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/hello"} component={Hello} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default App;
