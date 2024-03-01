import React from "react";
import braids from "../../assets/braids.jpeg";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <img src={braids} className="Homepage-logo" alt="logo" />
        <p>This is a grocery list application.</p>
        <Link to="/create-new-recipe">
        <button>Create New Recipe</button>
      </Link>
      </header>
    </div>
  );
}

export default Homepage;
