import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Events from "./containers/Events/Events";
import AdminPanel from "./containers/AdminPanel/AdminPanel";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <div style={{ position: "relative", minHeight: "100vh" }}>
            <Route path="/admin-panel" component={AdminPanel} exact />
            <Route path="/" component={Events} exact />
          </div>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
