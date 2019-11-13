import React from "react";
import "./Card.css";
import img from "./image/photography.png";
import data from './data.json';

const Card = props => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto col-md-6 col-lg-4">
            <div className="card">{props.cardImage}
              {/* <img src={img} alt="images" /> */}
              <div className="card-title">
                <h4>{props.cardTitle}</h4>
                <p>{props.cardPara}</p>
              </div>
            </div>
          </div>
          
      </div>
      <div className="btnContainer">
            <button className="btn">
                Previous
            </button>
            <button className="btn">
              Next
            </button>
          </div>
        </div>
    </div>
  );
};

export default Card;
