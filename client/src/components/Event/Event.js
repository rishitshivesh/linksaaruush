import React from "react";

import "./Event.module.css";

const Event = (props) => {
  return (
    <React.Fragment>
      <a className="main mx-auto col-12 row mt-3 mb-5" href={props.click}>
        <div className="img text-md-right text-center col-md-3 col-12">
          <img
            style={{ borderRadius: "10px" }}
            src={props.image}
            alt={props.image}
            width="70px"
            heigth="70px"
          />
        </div>
        <div className="col-md-9 text-center text-md-left col-12">
          <h3 className=" mt-1 mb-0">{props.name}</h3>
          <p className="mt-0 mb-md-3 mb-1">{props.description}</p>
        </div>
      </a>
    </React.Fragment>
  );
};

export default Event;
