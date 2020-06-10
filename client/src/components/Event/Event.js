import React from "react";

import "./Event.module.css";

const Event = (props) => {
  return (
    <React.Fragment>
      <a className={"main row my-3"} href={props.click}>
        <div className="mr-3">
          <img src={props.image} alt={props.image} width="70px" height="70px" />
        </div>
        <div>
          <h3 className="mt-1 mb-0">{props.name}</h3>
          <p className="mt-0 mb-1">{props.description}</p>
        </div>
      </a>
    </React.Fragment>
  );
};

export default Event;
