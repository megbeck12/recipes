import React, { useState } from "react";
import "./GetRecipe.css";
import "./../../App.css";
import Header from "../Header/Header";
import cake from "./../../assets/cake.jpg"
import Footer from "../Footer/Footer";
import RecipeCard from "../Cards/RecipeCard";
import "./../Cards/Card.css";

export default function GetRecipe() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOption, setDropDownOption] = useState("");
  const [authorName, setAuthorName] = useState("");

  const apiGetCall = async () => {
    try {
      const response = await fetch("http://localhost:3001/recipes");
      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (error) {
      throw new Error("Error executing GET endpoint", error.message);
    }
  };

  const apiSearchTermGetCall = async (term) => {
    try {
      const response = await fetch(
        `http://localhost:3001/recipes/recipe/${term}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (error) {
      throw new Error("Error executing GET recipe endpoint", error.message);
    }
  };

  const apiRecipeDropdownGetCall = async (dropdown) => {
    try {
      const response = await fetch(
        `http://localhost:3001/recipes/cookingdevice/${dropdown}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (error) {
      throw new Error("Error executing GET recipe endpoint", error.message);
    }
  };

  const apiAuthorGetCall = async (authorName) => {
    try {
      const response = await fetch(
        `http://localhost:3001/recipes/author/${authorName}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (error) {
      throw new Error("Error executing GET author endpoint", error.message);
    }
  };

  const apiAuthorAndDeviceGetCall = async (authorName, dropdownOption) => {
    try {
      const response = await fetch(
        `http://localhost:3001/recipes/deviceandauthor/${dropdownOption}/${authorName}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (error) {
      throw new Error(
        "Error executing GET author and device endpoint",
        error.message
      );
    }
  };

  const buildQuery = async (term, dropdown, author) => {
    if (term && dropdown) {
      return await apiSearchTermGetCall(term);
    }

    if (dropdown && author) {
      return await apiAuthorAndDeviceGetCall(author, dropdown);
    }

    if (term) {
      return await apiSearchTermGetCall(term);
    }

    if (dropdown) {
      return await apiRecipeDropdownGetCall(dropdown);
    }

    if (author) {
      return await apiAuthorGetCall(author);
    }
    return await apiGetCall();
  };

  const searchCollection = async (term, dropdown, author) => {
    try {
      const querySnapshot = await buildQuery(term, dropdown, author);
      const dataArray = querySnapshot.map((key, index) => ({
        id: index,
        ...key,
      }));

      return dataArray;
    } catch (error) {
      console.log("Error fetching data from backend", error);
    }
  };

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const searchTermData = await searchCollection(
      term,
      dropdownOption,
      authorName
    );
    setData(searchTermData);
  };

  const handleDropdown = async (e) => {
    const dropdown = e.target.value;
    setDropDownOption(dropdown);
    const dropdownData = await searchCollection(searchTerm, dropdown);
    setData(dropdownData);
  };

  const handleAuthorSearch = async (e) => {
    const authorSearch = e.target.value;
    setAuthorName(authorSearch);
    const authorData = await searchCollection(
      searchTerm,
      dropdownOption,
      authorSearch
    );
    setData(authorData);
  };

  const handleDefaultLoad = async () => {
    const searchTerm = "";
    const dropdownOption = "";
    const defaultData = await searchCollection(searchTerm, dropdownOption);
    setData(defaultData);
  };

  return (
    <div className="container-align">
      <Header img={cake} title={"Have a recipe you'd like to submit?"} />
      <div className="search">
        <label htmlFor="recipe-searchbar">
          <input
            type="text"
            id="recipe-searchbar"
            placeholder="Search Recipe Name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
        <label htmlFor="recipe-dropdown">
          <select
            id="recipe-dropdown"
            value={dropdownOption}
            onChange={handleDropdown}
          >
            <option value="">Select Cooking Device</option>
            <option value="oven">Oven</option>
            <option value="airfryer">Air Fryer</option>
            <option value="stovetop">Stovetop</option>
            <option value="microwave">Microwave</option>
          </select>
        </label>
        <label htmlFor="recipe-searchbar">
          <input
            type="text"
            id="recipe-searchbar"
            placeholder="Search Recipes By Author Name"
            value={authorName}
            onChange={handleAuthorSearch}
          />
        </label>
        <label htmlFor="default-load">
          <button id="default-load" onClick={handleDefaultLoad}>
            Load All Recipes
          </button>
        </label>
      </div>
      <div className="card-container">
        {data.map((item) => (
          <div key={JSON.stringify(item)} className="recipes">
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
