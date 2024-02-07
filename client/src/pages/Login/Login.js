import React, { useState } from "react";

export default function Login() {
  return (
    <form method="post">
      <div className="container">
        <label for="username">
          <strong>Username</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <label for="password">
          <strong>Password</strong>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked={false} name="remember" />
        </label>
      </div>

      <div class="container">
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <span class="psw">
          <a href="google.com">Forgot password?</a>
        </span>
      </div>
    </form>
  );
}
