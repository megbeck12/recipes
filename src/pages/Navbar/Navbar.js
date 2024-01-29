import React, { useState } from "react";
import "./Navbar.css";
import test_apple_image from "./../../assets/test_apple_image.jpeg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);

  const toggle = () => setShowNav(!showNav);

  return (
    <div className="navbar-container">
      <img src={test_apple_image} alt="logo" className="logo" />
      <nav className="navbar">
        <button className="logo" onClick={toggle}>
          Click to Open Menu
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
