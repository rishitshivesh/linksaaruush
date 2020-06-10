import React from "react";

import "./Event.module.css";

const Event = (props) => {
  return (
    <React.Fragment>
      <a className={"main row mt-3 mb-5"} href={props.click}>
        <div className="img mr-3">
          <img src={props.image} alt={props.image} width="70px" height="70px" />
        </div>
        <div>
          <h3 className="mt-1 mb-0">{props.name}</h3>
          <p className="mt-0 mb-3">{props.description}</p>
        </div>
      </a>
    </React.Fragment>
  );
};

export default Event;
