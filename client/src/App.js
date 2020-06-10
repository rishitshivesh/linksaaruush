import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Events from "./containers/Events/Events";

class App extends Component {
  render() {
    return (
      <Switch>
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <Route path="/" component={Events} exact />
        </div>
      </Switch>
    );
  }
}

export default App;
