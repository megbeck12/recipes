import React from "react";
import "./../Cards/Card.css";

export default function RecipeCard(props) {
  return (
    <div className="cards recipe-card">
      <div className="recipe-text">
        <h4>{props.name}</h4>
        <p>{props.ingredients}</p>
        <p>{props.cooking_time}</p>
        <p>{props.cooking_device}</p>
        <p>{props.author}</p>
      </div>
    </div>
  );
}
