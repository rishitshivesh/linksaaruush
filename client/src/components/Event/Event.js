import React from "react";

const Event = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <img src={props.image} alt={props.image} width="100px" height="100px" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
};

export default Event;
