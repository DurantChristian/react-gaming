import React from "react";
import { Link } from "react-router-dom";
import "../components/css/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/reviews">Game Reviews</Link>
          </li>
          <li>
            <Link to="/about-contact">About & Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">User Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
