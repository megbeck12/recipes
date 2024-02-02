import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./../../firebase";
import "./GetRecipe.css";

export default function GetRecipe() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOption, setDropDownOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesRef = collection(db, "recipes");

        const q =
          searchTerm && dropdownOption
            ? query(
                recipesRef,
                where("recipes.recipeName", ">=", searchTerm),
                where("recipes.recipeName", "<=", searchTerm + "\uf8ff"),
                where("recipes.cookingDevice", "==", dropdownOption)
              )
            : searchTerm
              ? query(
                  recipesRef,
                  where("recipes.recipeName", ">=", searchTerm),
                  where("recipes.recipeName", "<=", searchTerm + "\uf8ff")
                )
              : dropdownOption
                ? query(
                    recipesRef,
                    where("recipes.cookingDevice", "==", dropdownOption)
                  )
                : query(recipesRef);

        const querySnapshot = await getDocs(q);

        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(dataArray);
      } catch (error) {
        console.log("Error fetching data from Firebase", error);
      }
    };
    fetchData();
  }, [searchTerm, dropdownOption]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDropdown = (e) => {
    setDropDownOption(e.target.value);
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
              <option value="select-cooking-device">
                Select Cooking Device
              </option>
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
      </div>
    </div>
  );
}
