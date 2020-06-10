import React, { Component } from "react";
import axios from "axios";

import LogInForm from "../../components/LogInForm/LogInForm";

class Login extends Component {
  login(data) {
    alert(data);
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
