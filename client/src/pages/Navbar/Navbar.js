import React, { useState } from "react";
import "./Navbar.css";
import "./../../App.css"
import hamburger_menu_icon from "../../assets/hamburger_menu_icon.svg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <img
          src={hamburger_menu_icon}
          alt="header-logo"
          className="logo"
          onClick={toggle}
        />
        <div className="menu">
          {showNav && (
              <ul>
                <li>
                  <a href="/" className="main-menu-item">Homepage</a>
                </li>
                <li>
                  <a href="/create-new-recipe" className="main-menu-item">Create New Recipe</a>
                </li>
                <li>
                  <a href="/find-a-recipe" className="main-menu-item">Find a Recipe</a>
                </li>
                <li>
                  <a href="/login" className="main-menu-item">Login</a>
                </li>
                <li>
                  <a href="/api" className="main-menu-item">Api Test</a>
                </li>
              </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
