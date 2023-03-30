import React, { Component } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/navbar";

import classes from "../styles/services.module.css";

import icon from "../assets/check.svg";
import bridge from "../assets/bridge.jpg";

export default class Service extends Component {
  render() {
    const services = [
      "24/7",
      "Towing",
      "Roadside Assistance",
      "Accident Recoveries",
      "Winch Outs",
      "Flatbed Service",
      "Tire Changes",
      "Jump Starts",
      "Lock Outs",
      "Fuel Delivery",
      "Unauthorized Vehicle Impounds",
      "Flat Tire Services"
    ];

    return (      
      <div className={classes.services}>
        <NavbarComponent />
        <div className={classes.background}>
          <div className={classes.wrapper}>
            <div className={classes.content}>
              <h1>Our Services</h1>
              <ul>
                {services.map(service => (
                  <li>
                    <img src={icon} alt="" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.quote}>
                <h1>Call us today for a free quote<br /> and fast service!</h1>
                <Link to={"tel:+18645109105"} className={`btn ${classes.link}`}>Call: 864-510-9105</Link>     
            </div>
          </div>
        </div>                
        <Footer />
      </div>
    );
  }
}
