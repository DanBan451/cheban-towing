import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavbarComponent from "../components/navbar";
import Quote from "../components/quote";
import Footer from "../components/footer"

import image from "../assets/IMG_3605.jpg";
import image2 from "../assets/towingcar.jpg"

import classes from "../styles/home.module.css";

export default class Home extends Component {
  render() {
    console.log('hello from home');
    return (
      <React.Fragment>
        <NavbarComponent />
        <div style={{ backgroundImage: `url(${image})`}} className={classes.header}>
          <h1>Towing & Roadside Services<br /> in Spartanburg County</h1>
          <p>R. Cheban Towing is your premier towing, roadside assistance, and transport experts in Spartanburg County.<br />Contact us for the best service and lowest rates!</p>
          <Link to="/contact" className={`btn ${classes.link}`}>Contact Us Today!</Link>
        </div>
        <div className={classes.about}>
          <h1>At R. Cheban Towing</h1>
          <p>We understand that having a breakdown is stressful enough. That’s why we make the process easy, affordable, and reliable.<br /> We are family owned and operated, therefore your vehicle is more than just a breakdown for us. We treat and care for our customer’s as if their vehicles were our own.</p>          
          <p>Since 2016, we learned that the best business is repeat business. We strive to make an impact in our community and<br /> continue to build long-lasting relationships with our customers.</p>
          <Link to="/contact" className={`btn ${classes.link}`}>See Our Services</Link>        
        </div>
        <div className={classes.details}>
          <img src={image2} />
          <div className={classes.container}>
            <h1>Why choose us</h1>
            <div className={classes.item}>
              <h2>Quality Service</h2>
              <p>We offer quality service and treat your vehicles as our own. You can rest assure that you're in good hands with R. Cheban Towing.</p>
            </div>
            <div className={classes.item}>
              <h2>Best Rates</h2>
              <p>We believe in building lifelong ties with our community so we provide the best service with unbeatable rates!</p>
            </div>
            <div className={classes.item}>
              <h2>Reliable</h2>
              <p>We are here to help with any roadside issues. Trustworthy service you can count on 24/7.</p>
            </div>
          </div>
        </div>
        <Quote />
        <Footer />
      </React.Fragment>
    );
  }
}
