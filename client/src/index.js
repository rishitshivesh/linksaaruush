import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
