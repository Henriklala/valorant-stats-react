import React from "react";
import './ContentCard.css';

const ContentCard = props => {
    return <div className={`${"content_card"} ${props.className}`}><div>{props.children}</div></div>
};

export default ContentCard;