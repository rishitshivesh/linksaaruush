import React from "react";

const Section = (props) => {
  return (
    <React.Fragment>
      <div className={props.className + " col-12 col-lg-6 mb-4 mb-lg-3"}>
        <div className="row">
          <img
            src={props.img}
            alt={props.name}
            width="40px"
            style={{ paddingBottom: "10px", marginRight: "10px" }}
          />
          <h2 style={{ minWidth: "200px" }}>{props.name}</h2>
          <span className="d-none d-sm-block col-4 col-lg-6"></span>
        </div>
        <div className="col-10 mx-auto">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Section;
