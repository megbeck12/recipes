import React from "react";
import "./../Header/Header.css";
import "./../../App.css";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-container">
        <img src={props.img} className="header-image" alt="logo" />
      </div>
      <div className="overlay">
          <a href={props.url}>
            <strong>{props.title}</strong>
          </a>
      </div>
    </header>
  );
}
