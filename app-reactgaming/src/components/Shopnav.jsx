import React from "react";
import { Link } from "react-router-dom";
import "../components/css/shopnav.css";

const Shopnav = () => {
  return (
    <nav className="secondary-nav">
        <ul>
          <li><Link to="/shop">Games</Link></li>
          <li><Link to="/c">Toys</Link></li>
          <li><Link to="/c">Accessories</Link></li>
          <li><Link to="/c">Consoles</Link></li>
        </ul>
      </nav>
  );
};

export default Shopnav;