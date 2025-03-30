import React from 'react';
import "../pages/css/gamereview.css";

const GameReview = () => {
  return (
    <div>
      <header>
        <h1>The Witcher 3 Review</h1>
      </header>
      <main>
        <section className="review-box">
          <p><strong>Name of game:</strong> The Witcher 3</p>
          <p><strong>Your Name:</strong> John Doe</p>
          <p><strong>Aim of the game:</strong> To find Ciri and protect her.</p>
          <p><strong>Difficulty rating (1-5, 5 being the hardest):</strong> 3</p>
          <p><strong>Quality of the graphics:</strong> Great quality</p>
          <p><strong>Is this game fun to play? Why or why not?</strong> Yes, because I enjoy games that mix deep storytelling, action, exploration, and meaningful choices.</p>
          <p><strong>Rate this game (1-5, 5 being the best):</strong> 5</p>
        </section>
      </main>
    </div>
  );
};

export default GameReview;
