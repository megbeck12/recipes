import React, { useState } from "react";
import "./NewRecipe.css";
import Form from "../../Form/Form";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./../../firebase"

export default function NewRecipe() {
  const [formData, setFormData] = useState({
    recipeName: "",
    ingredients: "",
    cookingTime: "",
    cookingDevice: "oven",
  });

  const postFormData = async () => {
    try {
      await addDoc(collection(db, "recipes"), {
        recipes: formData,
      });
      console.log("Form submitted to Firestore");
    } catch (error) {
      console.log("Error adding data to Firestore", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted", formData);
    postFormData()
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
      name: "recipeName",
      type: "text",
      label: "Recipe Name",
    },
    {
      name: "ingredients",
      type: "text",
      label: "Ingredients",
    },
    {
      name: "cookingTime",
      type: "text",
      label: "Cooking Time",
    },
    {
      name: "cookingDevice",
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
    //create a form -> POST call to Firebase
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
