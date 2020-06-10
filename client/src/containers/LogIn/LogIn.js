import React, { Component } from "react";
import axios from "axios";

import LogInForm from "../../components/LogInForm/LogInForm";

class Login extends Component {
  login(data) {
    axios
      .post("/api/admin/login", data)
      .then((res) => {
        this.props.afterLogin();
        let loginTimeout = new Date().getTime() + 60 * 60 * 1000;
        localStorage.setItem("authTokenExpiration", loginTimeout);
        localStorage.setItem("authToken", res.data.authToken);
        let expirationTime = localStorage.getItem("authTokenExpiration");
        let currentTime = new Date().getTime();
        let forcedLogout = expirationTime - currentTime;
        setTimeout(() => this.props.onLogout(), forcedLogout);
        alert("NO TRESPASSING!");
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("Invalid Credentials. Please try again.");
        } else if (err.response.status === 400) {
          alert(err.data.error);
        }
      });
  }

  render() {
    return (
      <React.Fragment>
        <LogInForm onSubmitForm={(values) => this.login(values)} />
      </React.Fragment>
    );
  }
}

export default Login;
