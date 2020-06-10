import React from "react";

import classes from "./Header.module.css";
import aaruushLogo from "../../assets/images/aaruush_logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.main + " col-12"}>
        <div className="text-center">
          <img
            src={aaruushLogo}
            alt="aaruushLogo"
            className="my-3"
            style={{ minWidth: "250px", width: "50vw", maxWidth: "350px" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
