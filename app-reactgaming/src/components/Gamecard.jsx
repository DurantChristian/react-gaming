import React from "react";
import { Link } from "react-router-dom";
import "../components/css/gamecard.css";
import reviews from "../pages/data/Reviews.json";

const GameCard = () => {
  return (
    <>
    {reviews.map((review, index) => (
        <div className="review" key={index}>
          <a href={review.reference} target="_blank" rel="noopener noreferrer">
          <img src={require(`../images/${review.img_name}`)} alt={review.title} />
          </a>
          <h3>{review.title}</h3>
          <p>{review.about}</p>
          <Link to={review.external_link}><span>Read More</span></Link>
        </div>
      ))}
      </>
  );
};

export default GameCard;
