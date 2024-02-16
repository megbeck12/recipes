import React, { useState } from "react";
import "./NewRecipe.css";
import Form from "../../Form/Form";

export default function NewRecipe() {
  const [formData, setFormData] = useState({
    recipe_name: "",
    ingredients: "",
    cooking_time: "",
    cooking_device: "",
  });

  const postFormData = async () => {
    try {
      await fetch("http://localhost:3001/recipe/post", {
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
  ];
  return (
    <div>
      <Form
        fields={formFields}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
