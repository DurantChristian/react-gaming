import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/gamecard.css";
import ReviewDetails from "./Reviewdetails";

const GameCard = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://serverside-code.onrender.com/api/games")
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching games:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading games...</div>;
  if (error) return <div>Error loading games: {error.message}</div>;

  if (selectedGame) {
    return (
      <ReviewDetails
        game={selectedGame}
        closeDetail={() => setSelectedGame(null)}
        />
    );
  }

  return (
    <>
      {games.map((game) => (
        <div class="review">
          <h3>{game.title}</h3>
          <img
            src={`https://serverside-code.onrender.com/images/${game.img_name}`}
            alt={game.reference}
            className="game-image"
          />
          <p>{game.about}</p>
          <button onClick={() => setSelectedGame(game)} className="read-more">
            Read More
          </button>
        </div>
      ))}
    </>
  );
};

export default GameCard;
