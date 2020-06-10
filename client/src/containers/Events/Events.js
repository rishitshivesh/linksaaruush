import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

import classes from "./Events.module.css";
import Event from "../../components/Event/Event";
import Section from "../../components/Section/Section";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      certificates: [],
      workshops: [],
      webinars: [],
      competitions: [],
    };
  }

  componentWillMount() {
    let token = localStorage.getItem("authToken");
    setInterval(() => {
      axios
        .get("/api/competition/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.setState({ competitions: res.data.data.reverse() });
        })
        .catch((err) => {});
      axios
        .get("/api/certificate/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.setState({ certificates: res.data.data.reverse() });
        })
        .catch((err) => {});
      axios
        .get("/api/webinar/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.setState({ webinars: res.data.data.reverse() });
        })
        .catch((err) => {});
      axios
        .get("/api/workshop/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.setState({ workshops: res.data.data.reverse() });
        })
        .catch((err) => {});
    }, 500);
  }

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
              {this.state.competitions.map((competition) => (
                <React.Fragment>
                  <Event
                    key={competition._id}
                    name={competition.heading}
                    description={competition.description}
                    image={competition.imageUrl}
                    click={competition.link}
                  />
                  {window.location.pathname === "/admin/panel" ? (
                    <Button
                      className="col-12 mb-4"
                      color="danger"
                      outline
                      onClick={() =>
                        this.props.competitionRemove(competition._id)
                      }
                    >
                      Remove
                    </Button>
                  ) : null}
                </React.Fragment>
              ))}
            </Section>
            <Section
              img="https://image.flaticon.com/icons/svg/2912/2912780.svg"
              name="Certificates"
              className={classes.certificates}
            >
              {this.state.certificates.map((certificate) => (
                <React.Fragment>
                  <Event
                    key={certificate._id}
                    name={certificate.heading}
                    description={certificate.description}
                    image={certificate.imageUrl}
                    click={certificate.link}
                  />
                  {window.location.pathname === "/admin/panel" ? (
                    <Button
                      className="col-12 mb-4"
                      color="danger"
                      outline
                      onClick={() =>
                        this.props.certificateRemove(certificate._id)
                      }
                    >
                      Remove
                    </Button>
                  ) : null}
                </React.Fragment>
              ))}
            </Section>
          </div>
          <div className="row col-12">
            <Section
              img="https://image.flaticon.com/icons/svg/3003/3003252.svg"
              name="Webinars"
              className={classes.webinars}
            >
              {this.state.webinars.map((webinar) => (
                <React.Fragment>
                  <Event
                    key={webinar._id}
                    name={webinar.heading}
                    description={webinar.description}
                    image={webinar.imageUrl}
                    click={webinar.link}
                  />
                  {window.location.pathname === "/admin/panel" ? (
                    <Button
                      className="col-12 mb-4"
                      color="danger"
                      outline
                      onClick={() => this.props.webinarRemove(webinar._id)}
                    >
                      Remove
                    </Button>
                  ) : null}
                </React.Fragment>
              ))}
            </Section>
            <Section
              img="https://image.flaticon.com/icons/svg/3003/3003246.svg"
              name="Workshops"
              className={classes.workshops}
            >
              {this.state.workshops.map((workshop) => (
                <React.Fragment>
                  <Event
                    key={workshop._id}
                    name={workshop.heading}
                    description={workshop.description}
                    image={workshop.imageUrl}
                    click={workshop.link}
                  />
                  {window.location.pathname === "/admin/panel" ? (
                    <Button
                      className="col-12 mb-4"
                      color="danger"
                      outline
                      onClick={() => this.props.workshopRemove(workshop._id)}
                    >
                      Remove
                    </Button>
                  ) : null}
                </React.Fragment>
              ))}
            </Section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Events;
