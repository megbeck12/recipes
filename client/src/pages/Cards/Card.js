import React from "react";
import "./../../App.css";
import "./../Cards/Card.css"

export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="card-logo" className="card-image" />
        <div className="card-text">
          <div className="card-header">
            <h3>
              {props.header}
            </h3>
          </div>
          <div className="card-description">{props.description}</div>
          <span>
            <a href={props.url} target="_blank" rel="noreferrer" className="card-link">Learn More</a>
          </span>
        </div>
      </div>
    </div>
  );
}
