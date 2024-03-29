import React, { useState } from "react";
import Form from "../../Form/Form";
import "./../../App.css"

export default function Login() {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const postUserFormData = async () => {
    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log("User POST created successfully!");
    } catch (error) {
      throw new Error("Error creating user post", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postUserFormData();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const formFields = [
    { name: "username", type: "text", label: "Username" },
    { name: "password", type: "text", label: "Password" },
  ];

  return (
    // <div>
    //   <Form
    //     fields={formFields}
    //     userData={userData}
    //     onInputChange={handleInputChange}
    //     onSubmit={handleSubmit}
    //   />
    // </div>
    <form method="post">
      <div className="container">
        <label htmlFor="username">
          <strong>Username</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          required
        />
        <div>
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" name="remember" defaultChecked={false} />
        </label>
        </div>
        <div>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
        </div>
        <div>
          <span className="psw">
            <a href="google.com">Forgot password?</a>
          </span>
        </div>
      </div>
    </form>
  );
}
