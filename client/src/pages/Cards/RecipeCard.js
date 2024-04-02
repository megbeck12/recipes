import React from "react";
import "./../Cards/Card.css";

export default function RecipeCard(props) {
  const {name, ingredients, cooking_time, cooking_device, author} = props;

  return (
    <div className="cards recipe-card">
      <div className="recipe-text">
        <h4>{name}</h4>
        <p>{ingredients}</p>
        <p>{cooking_time}</p>
        <p>{cooking_device}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}
