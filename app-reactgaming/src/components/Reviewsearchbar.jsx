import React from "react";
import "../components/css/reviewsearchbar.css";

const Reviewsearchbar = () => {
  return (
    <section className="reviews-search">
          <input type="text" placeholder="Search for a game review..." />
    </section>
  );
};

export default Reviewsearchbar;