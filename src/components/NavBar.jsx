import { NavLink } from "react-router-dom";
import "../assets/NavBar.css";
import React from "react";

/* define the NavBar component */
function NavBar(){
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Restaurant</h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeclassname="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeclassname="active">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeclassname="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/review" activeclassname="active">Review</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/blogs" activeclassname="active">Blogs</NavLink>
        </li>
      </ul>
      <div className="icons">
        <NavLink to="/search"><span className="material-icons">search</span></NavLink>
        <NavLink to="/cart"><span className="material-icons">shopping_cart</span></NavLink>
      </div>
    </nav>
  );
};

export default NavBar;