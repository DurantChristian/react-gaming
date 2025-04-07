import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/gamecard.css";

const GameCard = () => {
  const [games, setGames] = useState([]);
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

  return (
    <div className="game-card-list">
      {games.map((game) => (
        <Link key={game._id} to={`/game/${game._id}`} className="game-card-link">
          <div className="game-card-item">
            <h3>{game.title}</h3>
            <img
              src={`https://serverside-code.onrender.com/images/${game.img_name}`}
              alt={game.title}
            />
            <p>{game.about}</p>
            <a href={game.external_link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameCard;
