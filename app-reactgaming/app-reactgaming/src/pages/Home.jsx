import React from "react";
import { Link, useNavigate } from "react-router-dom";
import gameofthemonth from "../images/gameofthemonth.png";
import topsell from "../images/topsell.png";
import upcominggames from "../images/upcominggames.png";
import exclusives from "../images/exclusives.png";
import developerspotlight from "../images/gamedeveloper.png";
import competitivegaming from "../images/competitive.png";
import updates from "../images/patches.png";
import accessories from "../images/accessories.png";
import "../pages/css/home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>Gaming Overload</h1>
      </header>

      <nav className="secondary-nav">
        <ul>
          <li><Link to="#">Highlights</Link></li>
          <li><Link to="#">Promotions</Link></li>
          <li><Link to="#">Latest-arrivals</Link></li>
        </ul>
      </nav>

      <main>
        <section className="highlights">
          <div className="grid-container">
            <div className="grid-item">
              <a href="https://progameguides.com/wp-content/uploads/2022/04/featured-disney-dreamlight-valley-all-confirmed-characters.jpg?resize=768,432">
                <img src={gameofthemonth} alt="Game of the Month" />
              </a>
              <Link to="/highlights">{() => navigate("/highlights")}<p>Game of the Month</p> </Link>
            </div>

            <div className="grid-item">
              <a href="https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/05/best-selling-games-witcher-3-minecraft-mario-kart-8.jpg">
                <img src={topsell} alt="Top-Selling Games" />
              </a>
              <p>Top-Selling Games</p>
            </div>

            <div className="grid-item">
              <a href="https://gamertweak.com/wp-content/uploads/2020/06/PS5-Exclusive-Launch-Title-Policy.jpg">
                <img src={upcominggames} alt="Upcoming Releases" />
              </a>
              <p>Upcoming Releases</p>
            </div>

            <div className="grid-item">
              <a href="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/02/xbox-exclusives.jpg">
                <img src={exclusives} alt="Exclusive Editions" />
              </a>
              <p>Exclusive Editions</p>
            </div>

            <div className="grid-item">
              <a href="https://www.youtube.com/watch?v=kryPnxJtf6I">
                <img src={developerspotlight} alt="Developer Spotlights" />
              </a>
              <p>Developer Spotlights</p>
            </div>

            <div className="grid-item">
              <a href="https://media.istockphoto.com/id/1129493258/photo/esports-team-winning-the-match.jpg?s=612x612&w=0&k=20&c=iLdOsaZOuQBc_5bSHVkOwd8dTh0HW5w5MeGZdQdadCM=">
                <img src={competitivegaming} alt="Competitive Gaming" />
              </a>
              <p>Competitive Gaming</p>
            </div>

            <div className="grid-item">
              <a href="https://www.spieltimes.com/wp-content/uploads/2021/07/Fortnite-Update-v17.21-Patch-Notes-Downtime-All-Details-1068x601.png">
                <img src={updates} alt="Game Updates & Patches" />
              </a>
              <p>Game Updates & Patches</p>
            </div>

            <div className="grid-item">
              <a href="https://www.techspecs.info/blog/wp-content/uploads/2024/03/Best-PC-Accessories-Required-for-Gaming.jpg">
                <img src={accessories} alt="Must Have Accessories" />
              </a>
              <p>Must Have Accessories</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
