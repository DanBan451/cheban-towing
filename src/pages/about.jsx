import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";

import classes from "../styles/about.module.css";

import icon from "../assets/downArrow.svg";
import truckface from "../assets/trucksface.jpg";
import porshe from "../assets/porshe.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className={classes.header}>
          <div className={classes.content}>
            <h1>About Us</h1>
            <p>
              We are ready to go to work for you. Anytime of the day or night,
              regardless of the weather conditions. Our dispatchers and tow
              truck operators are standing by waiting for your call.
            </p>
            <p>
              Roadside assistance or just need a tow?
              <br />
              We are ready to help!
            </p>
            <a href="#main">
              <img src={icon} />
            </a>
          </div>
        </div>
        <div id='main' className={classes.main}>
          <div className={classes.photos}>
            <img src={truckface} alt="" />
            <img src={porshe} alt="" />
          </div>
          <div className={classes.context}>
            <h1>Who we are</h1>
            <p>
              Located in Spartanburg County, R. Cheban Towing has been family
              owned and operated since 2016. We pride ourselves for providing
              the best service and lowest rates. There is nothing like the
              security you feel when you know you have a service you can trust
              if you get stranded on the road. We are the towing company that
              quotes accurate times and are definitely the only Spartanburg
              towing company that will treat your vehicle as our own. This is
              because we believe in building lifelong ties with our community.
              We learned a long time ago that the best business is repeat
              business. We are built from your need and input, so our business
              is yours. We deliver 100% customer service always and put you as
              our priority. That is what we specialize in!
            </p>
            <p>
              Call R. Cheban Towing for all your roadside assistance and towing
              needs!
            </p>
            <div className={classes.links}>
              <Link to={"tel:+18645109105"} className={`btn ${classes.link}`}>
                Call: 864-510-9105
              </Link>
              <Link to="/services" className={`btn ${classes.link}`}>
                See Our Services
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
