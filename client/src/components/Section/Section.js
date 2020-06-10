import React from "react";

const Section = (props) => {
  return (
    <React.Fragment>
      <div className="col-12 col-lg-6 mx-auto">
        <div className="row">
          <img
            src={props.img}
            alt={props.name}
            width="30px"
            style={{ paddingBottom: "10px", marginRight: "10px" }}
          />
          <h1>{props.name}</h1>
        </div>
        <div className="col-10 mx-auto">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Section;
