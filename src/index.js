import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Weather from "./Weather";

//import Sports from "./components/Sports";
//import Ask from "./components/Ask";
//import News from "./components/News";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={Weather} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));
