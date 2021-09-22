import React from "react";

import style from "./Event.module.css";
import cfa from "../../assets/images/cfavol.png";

const Nasa = (props) => {
  return (
    <React.Fragment>
      {/* <a className="main mx-auto col-12 row mt-3 mb-5" href={props.click}>
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
      </a> */}

      <div
        class="main nasa mx-auto col-12 row mt-3 mb-5"
        className={style.event_main}
      >
        <div class="img text-md-right text-center col-md-3 col-12">
          <img
            style={{ borderRadius: "10px" }}
            src={cfa}
            className={style.image}
            alt="cfa"
            width="70px"
            heigth="50px"
          />
        </div>
        <div class="col-md-9 text-center text-md-left col-12">
          <a
            class={style.event_a}
            href="https://forms.gle/zen1zVAGpALraniX6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 class="mt-1 mb-0">Call For Aaruush Batch 2025</h3>
          </a>
          <a
            class={style.event_a}
            href="https://drive.google.com/file/d/1MLn5wYYFrWVkW5EhDmswc2-Z6kOoWgVX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="mt-0 mb-md-3 mb-1">About Team Dynamics</p>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nasa;
