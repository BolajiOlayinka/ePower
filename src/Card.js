import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <Link to={props.cardLink}>{props.cardImage}</Link>
        {/* <img src={img} alt="images" /> */}
        <div className="card-title">
          <h4>{props.cardTitle}</h4>
          <p>{props.cardPara}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
