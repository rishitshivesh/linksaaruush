import React from "react";

const Section = (props) => {
  return (
    <React.Fragment>
      <div className={props.className}>
        <div className="row">
          <img
            src={props.img}
            alt={props.name}
            width="45px"
            style={{ paddingBottom: "10px", marginRight: "10px" }}
          />
          <h2 className="mx-auto mx-sm-0" style={{ minWidth: "200px" }}>
            {props.name}
          </h2>
          {/* <span className="d-none d-sm-block"></span> */}
        </div>
        <div>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Section;
