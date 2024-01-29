import React, { useState, useEffect } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./../../firebase";

export default function GetRecipe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "recipes");

        const querySnapshot = await getDocs(collectionRef);

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
    console.log(data);
  }, []);

  return (
    <div>
      <label htmlFor="recipe-search">
        <input type="text" id="recipe-search" placeholder="Search..." />
      </label>

      {data.map((item) => (
        <div>
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
  );
}
