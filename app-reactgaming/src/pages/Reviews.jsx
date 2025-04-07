import React from "react";
import Reviewsearchbar from "../components/Reviewsearchbar";
import Reviewsnav from "../components/Reviewsnav";
import GameCard from "../components/Gamecard";
import "../pages/css/reviewspage.css";

const Reviews = () => {
  const [setGames] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://serverside-code.onrender.com/api/games");
      setGames(response.data);
    })();
  }, []);
  return (
    <>
      <header>
        <h1>Game Reviews</h1>
      </header>
      
      <main>
        <Reviewsearchbar />

        <Reviewsnav />

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
