import React from "react";

import classes from "./Header.module.css";
import aaruushLogo from "../../assets/images/aaruush'21_logo.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={classes.main + " col-12"}>
        <div className="text-center">
          <img
            src={aaruushLogo}
            alt="aaruushLogo"
            className="my-3"
            style={{ minWidth: "250px", width: "50vw", maxWidth: "350px" }}
            onClick={props.aaruushLogoClicked}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
