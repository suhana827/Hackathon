import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaHeart, FaMagic, FaUsers } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">RecipeBook</div>
      <ul>
        <li>
          <Link to="/"><FaHome className="icon" /> Dashboard</Link>
        </li>
        <li>
          <Link to="/add-recipe"><FaPlus className="icon" /> Add Recipe</Link>
        </li>
        <li>
          <Link to="/favorites"><FaHeart className="icon" /> Favourites</Link>
        </li>
        <li>
          <Link to="/ai-recipe"><FaMagic className="icon" /> AI Recipes</Link>
        </li>
        <li>
          <Link to="/public-feed"><FaUsers className="icon" /> Public Feed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
