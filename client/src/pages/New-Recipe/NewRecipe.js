import React, { useState } from "react";
import "./../../App.css";
import Form from "../Form/Form";
import Header from "../Header/Header";
import recipe_form from "./../../assets/recipe_form.jpg"
import Footer from "../Footer/Footer";

export default function NewRecipe() {
  const [formData, setFormData] = useState({
    recipe_name: "",
    ingredients: "",
    cooking_time: "",
    cooking_device: "oven",
  });

  const postFormData = async () => {
    try {
      await fetch("http://localhost:3001/recipes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Post created successfully!");
    } catch (error) {
      throw new Error("Error creating post", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postFormData();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formFields = [
    {
      name: "recipe_name",
      type: "text",
      label: "Recipe Name",
    },
    {
      name: "ingredients",
      type: "text",
      label: "Ingredients",
    },
    {
      name: "cooking_time",
      type: "text",
      label: "Cooking Time",
    },
    {
      name: "cooking_device",
      type: "select",
      label: "Cooking Device",
      options: [
        {
          value: "oven",
          label: "Oven",
        },
        {
          value: "microwave",
          label: "Microwave",
        },
        {
          value: "stovetop",
          label: "Stovetop",
        },
        {
          value: "airfryer",
          label: "Air Fryer",
        },
      ],
    },
    {
      name: "author_name",
      type: "text",
      label: "Author Name",
    },
  ];
  return (
    <div className="container-align">
      <Header img={recipe_form} title={"Have a recipe you'd like to submit?"}/>
      <div>
        <Form
          fields={formFields}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
