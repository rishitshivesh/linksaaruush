import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Nothing was found</h2>
        <p>
          We think you are lost, and should not be here. We will wonder how you
          ended up here. You should go to the{" "}
          <a href="/">
            <strong>homepage</strong>
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
