import React, { useState } from "react";
import "./../../App.css";
import Form from "../Form/Form";
import Header from "../Header/Header";
import cake from "./../../assets/cake.jpg"
import Footer from "../Footer/Footer";
import "./../Form/Form.css";

export default function NewRecipe() {
  const [formData, setFormData] = useState({
    recipe_name: "",
    ingredients: "",
    cooking_time: "",
    cooking_device: "oven",
  });

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
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
      required: true,
    },
    {
      name: "ingredients",
      type: "text",
      label: "Ingredients",
      required: true
    },
    {
      name: "cooking_time",
      type: "text",
      label: "Cooking Time",
      required: false,
    },
    {
      name: "cooking_device",
      type: "select",
      label: "Cooking Device",
      required: false,
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
      required: true
    },
  ];
  return (
    <div className="container-align">
      <Header img={cake} title={"Have a recipe you'd like to submit?"} />
      <div>
        {" "}
        {submitted ? (
          <div className="container">
            <h2>Thanks for submitting!</h2>
            <span>Have another recipe you'd like to submit?</span>
            <div>
              <button className="submit">
                <a href="/create-new-recipe">Click here</a>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Form
              fields={formFields}
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              submitText={"Submit"}
            />
          </div>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
