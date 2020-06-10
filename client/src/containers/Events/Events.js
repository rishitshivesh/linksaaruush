import React, { Component } from "react";
import axios from 'axios';

import classes from "./Events.module.css";
import Event from "../../components/Event/Event";
import Section from "../../components/Section/Section";

class Events extends Component {

  constructor(){
    super();
    this.state = {
      certificates : [],
      workshops : [],
      webinars : [],
      competitions : []
    }
  }

  componentDidMount(){
    axios.all([
      axios.get('http://localhost:4200/api/certificate/get'),
      axios.get('http://localhost:4200/api/workshop/get'),
      // axios.get('http://localhost:4200/api/webinar/get'),
      // axios.get('http://localhost:4200/api/competition/get')
    ])
      .then(res=>{
        this.setState({
          certificates : res[0].data.data,
          workshops : res[1].data.data,
          // webinars : res[2].data.data,
          // competitions : res[3].data.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
  }

  render() {
    let certificates = this.state.certificates
    let workshops = this.state.workshops
    let webinars = this.state.webinars
    let competitions = this.state.competitions
    

    return (
      <React.Fragment>
        <div className="col-11 mx-auto mt-5">
          <div className="row col-12">
            <Section
              img="https://image.flaticon.com/icons/svg/3022/3022689.svg"
              name="Competitions"
              className={classes.competitions}
            >

            {competitions.map((competition)=>(
              <Event 
                key={competition._id}
                name={competition.heading}
                description={competition.description}
                image={competition.imageUrl}
                click={competition.link}
              />
            ))}
              
            </Section>

            <Section
              img="https://image.flaticon.com/icons/svg/2912/2912780.svg"
              name="Certificates"
              className={classes.certificates}
            > 

            {certificates.map((certificate)=>(
              <Event 
                key={certificate._id}
                name={certificate.heading}
                description={certificate.description}
                image={certificate.imageUrl}
                click={certificate.link}
              />
            ))}
              
            </Section>

          </div>

          <div className="row col-12">
            <Section
              img="https://image.flaticon.com/icons/svg/3003/3003252.svg"
              name="Webinars"
              className={classes.webinars}
            >

            {webinars.map((webinar)=>(
              <Event 
                key={webinar._id}
                name={webinar.heading}
                description={webinar.description}
                image={webinar.imageUrl}
                click={webinar.link}
              />
            ))}
              
            </Section>

            <Section
              img="https://image.flaticon.com/icons/svg/3003/3003246.svg"
              name="Workshops"
              className={classes.workshops}
            >

            {workshops.map((workshop)=>(
              <Event 
                key={workshop._id}
                name={workshop.heading}
                description={workshop.description}
                image={workshop.imageUrl}
                click={workshop.link}
              />
            ))}
              
            </Section>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Events;
