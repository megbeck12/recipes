import React from "react";
import "./../Header/Header.css"

export default function Header(props) {
    return (
        <header className="header">
        <div className="header-container">
          <div className="overlay">
            <div className="overlay-text">
              <a href={props.url}>
                <strong>{props.title}</strong>
              </a>
            </div>
          </div>
          <img src={props.img} className="header-image" alt="logo" />
        </div>
      </header>
    )
}