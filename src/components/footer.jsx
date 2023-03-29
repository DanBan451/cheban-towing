import React from "react";
import useWindowDimensions from "../utils/useWindowDimensions";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import classes from "../styles/footer.module.css";

export default function Footer({ quoteHandler }) {
  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footer}>
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/service"}>Services</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
        <Link className={`btn ${classes.quoteBtn}`} to={"/contact"}>
          Call: 864-510-9105
        </Link>
      </div>
      <div className={classes.copyright}>
        <div>
            <span>Copyright © 2023</span>
        </div>
      </div>
    </div>
  );
}
