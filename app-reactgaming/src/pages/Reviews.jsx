import React from "react";
import Reviewsearchbar from "../components/Reviewsearchbar";
import Reviewsnav from "../components/Reviewsnav";
import GameCard from "../components/Gamecard";
import ReviewsList from "../components/Reviewslist";
import "../pages/css/reviewspage.css";

const Reviews = () => {
  return (
    <>
      <header>
        <h1>Game Reviews</h1>
      </header>
      
      <main>
        <Reviewsearchbar />

        <Reviewsnav />

        <ReviewsList />

        <h2>Latest Game Reviews</h2>
        <section className="game-reviews">
          <div className="reviews-container">
          
              <GameCard />
    
          </div>
        </section>
      </main>
    </>
  );
};

export default Reviews;
