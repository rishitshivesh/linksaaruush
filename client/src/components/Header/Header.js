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
            width={window.innerWidth < 991 ? "300px" : "450px"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
