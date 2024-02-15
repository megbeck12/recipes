import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spaghetti from "./pages/Spaghetti/Spaghetti";
import Homepage from "./pages/Homepage/Homepage";
import NewRecipe from "./pages/New-Recipe/NewRecipe";
import Navbar from "./pages/Navbar/Navbar";
import Login from "./pages/Login/Login";
import GetRecipe from "./pages/Get-Recipe/GetRecipe";
import Api from "./pages/API/Api";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/spaghetti" element={<Spaghetti />} />
        <Route path="/create-new-recipe" element={<NewRecipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-a-recipe" element={<GetRecipe />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App;
