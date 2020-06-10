import React from "react";

const Event = (props) => {
  return (
    <React.Fragment>
      <div className="row my-3">
        <div className="mr-3">
          <img src={props.image} alt={props.image} width="70px" height="70px" />
        </div>
        <div>
          <h3 className="mt-1 mb-0">{props.name}</h3>
          <p className="mt-0 mb-1">{props.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Event;
