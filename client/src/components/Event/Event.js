import React from "react";

const Event = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div>
          <img src={props.image} alt={props.image} width="50px" height="50px" />
        </div>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Event;
