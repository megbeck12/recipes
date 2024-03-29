import React from "react";
import "./../App.css";
import "./../Footer/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="/" className="footer-menu-item">
            Homepage
          </a>
        </li>
        <li>
          <a href="/create-new-recipe" className="footer-menu-item">
            Create New Recipe
          </a>
        </li>
        <li>
          <a href="/find-a-recipe" className="footer-menu-item">
            Find a Recipe
          </a>
        </li>
        <li>
          <a href="/login" className="footer-menu-item">
            Login
          </a>
        </li>
        <li>
          <a href="/api" className="footer-menu-item">
            Api Test
          </a>
        </li>
      </ul>
      <div className="footer-info">&#169; 2024 Meghan Beck</div>
    </div>
  );
}
