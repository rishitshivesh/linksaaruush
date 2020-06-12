import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Events from "./containers/Events/Events";
import Spinner from "./components/Spinner/Spinner";
const AdminPanel = React.lazy(() =>
  import("./containers/AdminPanel/AdminPanel")
);
const LogIn = React.lazy(() => import("./containers/LogIn/LogIn"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
      toAdminLogin: 0,
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
        localStorage.removeItem("authToken");
        localStorage.removeItem("authTokenExpiration");
        alert("Session Timeout. Login again.");
      }
    }
  }

  render() {
    const aaruushLogoClicked = () => {
      if (window.location.pathname === "/") {
        this.setState({ toAdminLogin: this.state.toAdminLogin + 1 });
        if (this.state.toAdminLogin !== 0) {
          setTimeout(() => this.setState({ toAdminLogin: 0 }), 1500);
        }
        if (this.state.toAdminLogin === 5) {
          window.location.pathname = "/admin/login";
        }
      }
    };

    const onLogout = () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authTokenExpiration");
      alert("You are about to be logged out");
      this.setState({ isAuth: false });
    };

    return (
      <React.Fragment>
        <Header aaruushLogoClicked={() => aaruushLogoClicked()} />
        <Switch>
          <div style={{ position: "relative", minHeight: "100vh" }}>
            <React.Fragment>
              <Switch>
                <Route
                  path="/admin/panel"
                  render={() => (
                    <Suspense fallback={<Spinner />}>
                      {!this.state.isAuth ? (
                        <Redirect to="/admin/login" />
                      ) : (
                        <AdminPanel onLogout={() => onLogout()} />
                      )}
                    </Suspense>
                  )}
                />

                <Route
                  path="/admin/login"
                  render={() => (
                    <Suspense fallback={<Spinner />}>
                      {!this.state.isAuth ? (
                        <LogIn
                          afterLogin={() => this.setState({ isAuth: true })}
                          onLogout={() => onLogout()}
                        />
                      ) : (
                        <Redirect to="/admin/panel" />
                      )}
                    </Suspense>
                  )}
                />

                <Route path="/" component={Events} exact />

                <Route
                  path="*"
                  render={() => (
                    <Suspense fallback={<Spinner />}>
                      <NotFound />
                    </Suspense>
                  )}
                />
              </Switch>
            </React.Fragment>
          </div>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
