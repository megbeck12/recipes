import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import cake from "./../../assets/cake.jpg"
import Footer from "../Footer/Footer";
import RecipeCard from "../Cards/RecipeCard";
import "./../Cards/Card.css";

export default function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiGetCall = async () => {
      try {
        const response = await fetch("http://localhost:3001/recipes");
        console.log("GET endpoint executed successfully!");

        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        throw new Error("Error executing GET endpoint", error.message);
      }
    };

    apiGetCall();
  }, []);

  return (
    <div className="container-align">
      <Header img={cake} title={"API Test"} />
      <div className="card-container">
        {data.map((item) => (
          <div key={item} className="recipes">
            <RecipeCard
              name={item.recipe_name}
              ingredients={item.ingredients}
              cooking_time={item.cooking_time}
              cooking_device={item.cooking_device}
              author={item.author_name}
            />
          </div>
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
