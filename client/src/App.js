import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Events from "./containers/Events/Events";
import AdminPanel from "./containers/AdminPanel/AdminPanel";
import LogIn from "./containers/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
    };
  }
  componentWillMount() {
    let expirationTime = localStorage.getItem("authTokenExpiration");
    let currentTime = new Date().getTime();
    let forcedLogout = expirationTime - currentTime;
    if (localStorage.getItem("authToken")) {
      if (forcedLogout > 0) {
        this.setState({ isAuth: true });
      } else {
        this.setState({ isAuth: false });
      }
    }
  }

  render() {
    let authRoutes = (
      <React.Fragment>
        <Switch>
          <Route path="/admin/panel" exact>
            <Redirect to="/admin/login" />
          </Route>

          <Route path="/admin/login" exact>
            <LogIn
              afterLogin={() => this.setState({ isAuth: true })}
              onLogout={() => {
                alert("Session Timeout");
                this.setState({ isAuth: false });
              }}
            />
          </Route>

          <Route path="/" component={Events} exact />
          <Route path="*" component={NotFound} exact />
        </Switch>
      </React.Fragment>
    );

    if (this.state.isAuth) {
      authRoutes = (
        <React.Fragment>
          <Switch>
            <Route path="/admin/login" exact>
              <Redirect to="/admin/panel" />
            </Route>

            <Route path="/admin/panel" exact>
              <AdminPanel
                onLogout={() => {
                  alert("You are about to be logged out");
                  this.setState({ isAuth: false });
                }}
              />
            </Route>

            <Route path="/" component={Events} exact />
            <Route path="*" component={NotFound} exact />
          </Switch>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <div style={{ position: "relative", minHeight: "100vh" }}>
            {authRoutes}
          </div>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
