import { Link } from "react-router-dom";
import classes from "../styles/quote.module.css";

const Quote = () => {
    return (
        <div className={classes.wrapper}>
            <h1>Call us today for a free quote<br /> and fast service!</h1>
            <Link to={"tel:+18645109105"} className={`btn ${classes.link}`}>Call: 864-510-9105</Link>     
        </div>
    );
}
 

export default Quote;