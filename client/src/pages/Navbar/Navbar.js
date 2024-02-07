import React, { useState } from "react";
import "./Navbar.css";
import test_apple_image from "../../assets/test_apple_image.jpeg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [navMessage, setNavMessaage] = useState("Click to open menu");

  const toggle = () => {
    const displayMessage = () => showNav ? "Click to open menu" : "Click to close menu";
    setNavMessaage(displayMessage)
    setShowNav(!showNav);
  };

  return (
    <div className="navbar-container">
      <a href="/"><img src={test_apple_image} alt="header-logo" className="logo"/></a>
      <nav className="navbar">
        <button className="logo" onClick={toggle}>
          {navMessage}
        </button>
        <div>
          {showNav && (
            <ul>
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/spaghetti">Spaghetti Recipe</a>
              </li>
              <li>
                <a href="/create-new-recipe">Create New Recipe</a>
              </li>
              <li>
                <a href="/find-a-recipe">Find a Recipe</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          )}
        </div>
        <input
          type="text"
          placeholder="Search Recipes"
          className="search-bar"
        />
      </nav>
    </div>
  );
}
