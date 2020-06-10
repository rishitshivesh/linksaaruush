import React, { Component } from "react";

import classes from "./Events.module.css";
import Event from "../../components/Event/Event";
import Section from "../../components/Section/Section";

class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-11 mx-auto mt-5">
          <div className="row col-12">
            <Section
              img="https://image.flaticon.com/icons/svg/3022/3022689.svg"
              name="Competitions"
              className={classes.competitions}
            >
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
            </Section>
            <Section
              img="https://image.flaticon.com/icons/svg/2912/2912780.svg"
              name="Certificates"
              className={classes.certificates}
            >
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
            </Section>
          </div>
          <div className="row col-12">
            <Section
              img="https://image.flaticon.com/icons/svg/3003/3003252.svg"
              name="Webinars"
              className={classes.webinars}
            >
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
            </Section>
            <Section
              img="https://image.flaticon.com/icons/svg/3003/3003246.svg"
              name="Workshops"
              className={classes.workshops}
            >
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
              <Event name="Hi" description="woo" />
            </Section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Events;
