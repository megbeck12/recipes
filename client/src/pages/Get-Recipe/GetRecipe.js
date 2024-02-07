import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import "./GetRecipe.css";

export default function GetRecipe() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOption, setDropDownOption] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/recipes");
        const dataResponse = await response.json();
        setApiData(dataResponse);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  const buildQuery = (term, dropdown) => {
    const recipesRef = collection(db, "recipes");

    if (term && dropdown) {
      return query(
        recipesRef,
        where("recipes.recipeName", ">=", term),
        where("recipes.recipeName", "<=", term + "\uf8ff"),
        where("recipes.cookingDevice", "==", dropdown)
      );
    }

    if (term) {
      return query(
        recipesRef,
        where("recipes.recipeName", ">=", term),
        where("recipes.recipeName", "<=", term + "\uf8ff")
      );
    }

    if (dropdown) {
      return query(recipesRef, where("recipes.cookingDevice", "==", dropdown));
    }

    return query(recipesRef);
  };

  const searchCollection = async (term, dropdown) => {
    try {
      const q = buildQuery(term, dropdown);
      const querySnapshot = await getDocs(q);

      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return dataArray;
    } catch (error) {
      console.log("Error fetching data from Firebase", error);
    }
  };

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    const term = e.target.value;
    const data = await searchCollection(term, dropdownOption);
    setData(data);
  };

  const handleDropdown = async (e) => {
    setDropDownOption(e.target.value);
    const dropdown = e.target.value;
    const data = await searchCollection(searchTerm, dropdown);
    setData(data);
  };

  return (
    <div className="container">
      <div className="recipes">
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
        </div>
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{item.recipes.recipeName}</td>
                  </tr>
                  <tr>
                    <th>Ingredients</th>
                    <td>{item.recipes.ingredients}</td>
                  </tr>
                  <tr>
                    <th>Cooking Time</th>
                    <td>{item.recipes.cookingTime}</td>
                  </tr>
                  <tr>
                    <th>Cooking Device</th>
                    <td>{item.recipes.cookingDevice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
        {/*api testing*/}
        <div>
          {apiData.map((item) => (
            <div key={item.key}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
