import React from "react";
import "./css/reviewdetails.css";

const ReviewDetails = ({ game, closeDetail }) => {
    return (
      <div className="review-details">
        <h2>{game.title} Review</h2>
        <div className="review-box">
          <p><strong>Name of game:</strong> {game.title}</p>
          <p><strong>Your Name:</strong> {game.username}</p>
          <p><strong>Aim of the game:</strong> {game.about}</p>
          <p><strong>Difficulty rating (1–5, 5 being the hardest):</strong> {game.difficulty}</p>
          <p><strong>Quality of the graphics:</strong> {game.graphics}</p>
          <p><strong>Is this game fun to play? Why or why not?</strong> {game.fun_factor}</p>
          <p><strong>Rate this game (1–5, 5 being the best):</strong> {game.rating}</p>
          <img
            src={`https://serverside-code.onrender.com/images/${game.img_name}`}
            alt={game.title}
            className="game-image"
          />
          <button onClick={closeDetail}>Back</button>
        </div>
      </div>
    );
  };
  
  export default ReviewDetails;
  