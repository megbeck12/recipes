import React from "react";
import "./../Header/Header.css";
import "./../../App.css";

export default function Header(props) {
  const {img, url, title} = props;

  return (
    <header className="header">
      <div className="header-container">
        <img src={img} className="header-image" alt="logo" />
      </div>
      <div className="overlay">
          <a href={url}>
            <strong>{title}</strong>
          </a>
      </div>
    </header>
  );
}
