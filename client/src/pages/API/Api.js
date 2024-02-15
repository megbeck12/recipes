import React, { useState } from "react";
import { useEffect } from "react";

export default function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
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

    apiGetCall();
  }, []);

  return (
    <div>
    {data.map((item) => (
      <div key={item}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{item.recipe_name}</td>
            </tr>
            <tr>
              <th>Ingredients</th>
              <td>{item.ingredients}</td>
            </tr>
            <tr>
              <th>Cooking Time</th>
              <td>{item.cooking_time}</td>
            </tr>
            <tr>
              <th>Cooking Device</th>
              <td>{item.cooking_device}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ))}
  </div>
  );
}
