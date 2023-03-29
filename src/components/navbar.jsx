import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import logo from "../assets/logo.png";
import classes from "../styles/navbar.module.css";

function NavbarComponent({ navigation }) {
  return (
    <Navbar id={classes.navWrapper} expand="xl" className={classes.navbar}>
      <Container className="navbar-inner" fluid>
        <Navbar.Brand to="/home">
          <NavLink
            style={{ textAlign: "center", padding: 15 }}
            className={({ isActive }) =>
              `${classes.navLink} ${
                isActive ? classes.active : classes.nonActive
              }`
            }
            to="/home"
          >
            <img src={logo} className={classes.logo} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`ms-auto my-2 my-lg-0 ${classes.navbar}`}>
            <NavLink
              style={{ textAlign: "center", paddingLeft: 40, paddingRight: 40 }}
              className={
                ({ isActive }) =>
                `${classes.navLink}  ${
                  isActive ? classes.active : classes.nonActive
                }`                                
              }
              id="navlink-home"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", paddingLeft: 40, paddingRight: 40 }}
              to="/services"
              id="navlink-about"
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", paddingLeft: 40, paddingRight: 40 }}
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", paddingLeft: 40, paddingRight: 40 }}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </Nav>
          <div className="d-flex options-container">
            <Link className="btn quote-btn" to={"/contact"}>
              Call: 864-510-9105
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
