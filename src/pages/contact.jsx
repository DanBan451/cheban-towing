import React, { Component } from "react";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";
import Joi from "joi-browser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

import phoneIcon from "../assets/phone.svg";
import mailIcon from "../assets/mail.svg";

import classes from "../styles/contact.module.css";

const schema = {
  name: Joi.string().required().label("Name"),
  location: Joi.string().required().label("Location"),
  phone: Joi.number().required().label("Phone"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
};

export default class Contact extends Component {
  state = {
    data: {
      name: "",
      location: "",
      phone: "",
      email: "",
    },
    errors: {},
    formSubmitted: false
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // call server
    emailjs.sendForm('service_jttihy6', 'template_kntzqvm', e.target, '9l16KYABsgoVopG9i').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));      

    toast.success("Contact Sent!");
    var form = document.getElementById("application-form");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = true;
    }

    this.setState({ formSubmitted: true })
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const error = this.validateProperty(name, value);

    let errors = {
      ...this.state.errors,
      [name]: error,
    };

    let data = {
      ...this.state.data,
      [name]: value,
    };

    this.setState({ data, errors });
  };

  validateProperty = (name, value) => {
    let obj = { [name]: value };
    let subSchema = { [name]: schema[name] };

    let { error } = Joi.validate(obj, subSchema);

    return error ? error.details[0].message : null;
  };
  validate = () => {
    const errors = {};
    const options = {
      abortEarly: false,
    };
    let { error: result } = Joi.validate(this.state.data, schema, options);

    if (result) {
      result.details.forEach((element) => {
        errors[element.context.key] = element.message;
      });
      return errors;
    }
    return null;
  };

  render() {
    const { name, location, phone, email } = this.state.data;

    return (
      <div className={classes.contact}>
        <ToastContainer />
        <NavbarComponent />
        <h1>Contact Us</h1>
        <div className={classes.content}>
          <div className={classes.context}>
            <h2>
              Have any questions? Call us
              <br /> or send an inquiry today!
            </h2>

            <div>
              <img src={phoneIcon} alt="" />
              <span>
                <span>(864) 510-9105</span>
              </span>
            </div>
            <div>
              <img src={mailIcon} alt="" />
              <span>rctowing03@gmail.com</span>
            </div>
          </div>
          <form id='application-form' className={classes.form} onSubmit={this.handleSubmit} style={{ opacity: (this.state.formSubmitted) ? 0.5 : 1 }}>
            <input
              placeholder="Your Name"
              name="name"
              type="text"
              onChange={this.handleChange}
              value={name}
            />
            {this.state.errors?.name && (
              <div className={`alert alert-danger ${classes.error}`}>
                {this.state.errors?.name}
              </div>
            )}
            <input
              placeholder="City, State, or Zipcode"
              name="location"
              type="text"
              onChange={this.handleChange}
              value={location}
            />
            {this.state.errors?.location && (
              <div className={`alert alert-danger ${classes.error}`}>
                {this.state.errors?.location}
              </div>
            )}
            <input
              placeholder="Phone Number"
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={phone}
            />
            {this.state.errors?.phone && (
              <div className={`alert alert-danger ${classes.error}`}>
                {this.state.errors?.phone}
              </div>
            )}
            <input
              placeholder="Email"
              type="text"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
            {this.state.errors?.email && (
              <div className={`alert alert-danger ${classes.error}`}>
                {this.state.errors?.email}
              </div>
            )}
            <button className={`btn ${classes.submit}`} disabled={this.validate() || this.state.formSubmitted} >Send Contact</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
