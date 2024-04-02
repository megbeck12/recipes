import React from "react";
import "./../../App.css";
import "./../Cards/Card.css"

export default function Card(props) {
const {img, header, description, url} = props;

  return (
    <div className="cards">
      <div className="card">
        <img src={img} alt="card-logo" className="card-image" />
        <div className="card-text">
          <div className="card-header">
            <h3>
              {header}
            </h3>
          </div>
          <div className="card-description">{description}</div>
          <span>
            <a href={url} target="_blank" rel="noreferrer" className="card-link">Learn More</a>
          </span>
        </div>
      </div>
    </div>
  );
}
