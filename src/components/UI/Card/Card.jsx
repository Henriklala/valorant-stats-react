import React from "react";
import './Card.css';

const Card = props => {
    return <div className={`${"card"} ${props.className}`}><div>{props.children}</div></div>
};

export default Card;