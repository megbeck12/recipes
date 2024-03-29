import React from "react";
import lasagna from "./../../assets/lasagna.jpg";
import "./../../App.css";
import Card from "./../Card/Card";
import "./../Card/Card.css";
import Footer from "./../../Footer/Footer";
import flour from "./../../assets/flour.jpeg"
import bowls_grain from "./../../assets/bowls_grain.jpg"
import one_pan from "./../../assets/one_pan.jpg"
import pretzels from "./../../assets/pretzels.jpeg"
import Header from "../Header/Header";

function Homepage() {
  return (
    <div className="container-align">
      <Header img={lasagna} title={"Easy Recipes for Late Night Dinners"} url={"/find-a-recipe"}/>
      <div className="card-container">
        <Card
          img={flour}
          header={
            "Master Your Kitchen: Essential Cooking Techniques Made Simple"
          }
          description={
            "Unlock the secrets of culinary success with our comprehensive guide to essential cooking techniques."
          }
          url={
            "https://www.foodnetwork.com/holidays-and-parties/photos/cutest-ever-easter-cupcakes"
          }
        />
        <Card
          img={bowls_grain}
          header={
            "Fuel Your Body, Feed Your Soul: Healthy Eating Hacks and Delicious Recipes"
          }
          description={
            "Discover a world of flavor and nourishment with our collection of healthy eating hacks and mouthwatering recipes."
          }
          url={
            "https://www.foodnetwork.com/recipes/photos/our-best-egg-recipes"
          }
        />
        <Card
          img={one_pan}
          header={
            "Epicurean Adventures: Dive into Special Diets with Delectable Dishes"
          }
          description={
            "Embark on a culinary journey tailored to your dietary preferences with our curated selection of delectable dishes."
          }
          url={
            "https://www.foodnetwork.com/shows/guys-grocery-games/photos/top-7-tips-for-a-better-burger"
          }
        />
        <Card
          img={pretzels}
          header={
            "Picture Perfect Plates: Food Photography Secrets for Stunning Shots"
          }
          description={
            "Capture the beauty and essence of your culinary creations with our food photography secrets."
          }
          url={
            "https://www.foodnetwork.com/recipes/food-network-kitchen/avocado-rose-eggs-benedict-3631659"
          }
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
