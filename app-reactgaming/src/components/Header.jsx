import React from "react";
import { Link } from "react-router-dom";
import "../css/components/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Gaming Overload</Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/gamereviews">Game Reviews</Link>
          </li>
          <li>
            <Link to="/about&contact">About&Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Userdashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
