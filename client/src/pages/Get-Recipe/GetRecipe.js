import React, { useState } from "react";
import "./GetRecipe.css";

export default function GetRecipe() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOption, setDropDownOption] = useState("");

  const apiGetCall = async () => {
    try {
      const response = await fetch("http://localhost:3001/recipe/get");
      console.log("GET endpoint executed successfully!");

      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      throw new Error("Error executing GET endpoint", error.message);
    }
  };

  const apiSearchTermGetCall = async (term) => {
    try {
      const response = await fetch(`http://localhost:3001/recipe/post/${term}`)
      
      const jsonData = await response.json()
      console.log("this is the json data", jsonData)

      setData(jsonData)
    } catch (error) {
      throw new Error("Error executing GET endpoint", error.message)
    }
  }

  const apiDropdownGetCall = async (dropdown) => {
    try {
      console.log("before response", dropdown)
      const response = await fetch(`http://localhost:3001/recipe/post/${dropdown}`)
      console.log("after response", response)
      const jsonData = await response.json()
console.log("afterjsonData")
      setData(jsonData)
    } catch (error) {
      throw new Error("Error executing GET endpoint", error.message)
    }
  }

  const buildQuery = (term, dropdown) => {
    if (term && dropdown) {
      return apiSearchTermGetCall(term);
    }

    if (term) {
      return apiSearchTermGetCall(term);
    }

    if (dropdown) {
      return apiDropdownGetCall(dropdown);
    }
    return apiGetCall();
  };

  const searchCollection = async (term, dropdown) => {
    try {
      const q = await apiDropdownGetCall(dropdown);
      // const q = buildQuery(term, dropdown);
      console.log("before query snapshot")
      const querySnapshot = buildQuery(term, dropdown);
      console.log(querySnapshot)

      // const dataArray = q.map((item, index) => ({
      //   id: index,
      //   ...item,
      // }));

      return q;
    } catch (error) {
      console.log("Error fetching data from backend", error);
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
          {/* {data.map((item) => (
            <div key={item}>
              <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <td>{item.id}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{item.recipeName}</td>
                  </tr>
                  <tr>
                    <th>Ingredients</th>
                    <td>{item.ingredients}</td>
                  </tr>
                  <tr>
                    <th>Cooking Time</th>
                    <td>{item.cookingTime}</td>
                  </tr>
                  <tr>
                    <th>Cooking Device</th>
                    <td>{item.cookingDevice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
