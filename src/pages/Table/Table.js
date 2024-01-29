import React, { useState } from "react";
import "./Table.css";
import {  Link } from "react-router-dom";

export default function Table() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
      <div className="table-container">
        <input
          placeholder="Type Here"
          value={inputValue}
          onChange={handleChange}
        />
        <button>Click Me</button>
        <table>
          <tbody>
            <tr>
              <th>Complete?</th>
              <th>Recipe</th>
              <th>Total Time</th>
              <th>Required Ingredients</th>
              <th>Ingredients Needed</th>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <Link to="/spaghetti">Spaghetti </Link>
              </td>
              <td>2 hours</td>
              <td>Pasta, Meat, Red Sauce, Cheese</td>
              <td>Pasta</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}
