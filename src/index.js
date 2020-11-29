import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Weather from "./components/Weather";
import Sports from "./components/Sports";
import Ask from "./components/Ask";
import News from "./components/News";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={Weather} />
      <Route path="/sports" component={Sports} />
      <Route path="/ask" component={Ask} />
      <Route path="/news" component={News} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));
