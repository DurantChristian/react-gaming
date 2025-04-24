import React from "react";
import "./css/reviewdetails.css";

const ReviewDetails = ({ review, closeDetail }) => {
  return (
    <div className="review-detail">
      <h2>{review.title} Review</h2>
      <div className="detail-box">
        <p><strong>Name of game:</strong> {review.title}</p>
        <p><strong>Your Name:</strong> {review.user_name}</p>
        <p><strong>Aim of the game:</strong> {review.about}</p>
        <p><strong>Difficulty rating (1–5, 5 being the hardest):</strong> {review.rating}/5</p>
        <p><strong>Quality of the graphics:</strong> {review.graphics_quality}</p>
        <p><strong>Is this game fun to play? Why or why not?</strong> {review.fun_explanation}</p>
        <p><strong>Rate this game (1–5, 5 being the best):</strong> {review.rating}/5</p>
        <button onClick={closeDetail}>Close</button>
      </div>
    </div>
  );
};

export default ReviewDetails;