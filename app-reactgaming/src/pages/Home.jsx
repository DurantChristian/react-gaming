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
import Homenav from "../components/Homenav";
import "../pages/css/home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <h1>Gaming Overload</h1>
      </header>

      <Homenav />

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
              <Link to="/topselling"><p>Top-Selling Games</p></Link>
            </div>

            <div className="grid-item">
              <a href="https://gamertweak.com/wp-content/uploads/2020/06/PS5-Exclusive-Launch-Title-Policy.jpg">
                <img src={upcominggames} alt="Upcoming Releases" />
              </a>
              <Link to="/releases"><p>Upcoming Releases</p></Link>
            </div>

            <div className="grid-item">
              <a href="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/02/xbox-exclusives.jpg">
                <img src={exclusives} alt="Exclusive Editions" />
              </a>
              <Link to="/exclusives"><p>Exclusive Editions</p></Link>
            </div>

            <div className="grid-item">
              <a href="https://www.youtube.com/watch?v=kryPnxJtf6I">
                <img src={developerspotlight} alt="Developer Spotlights" />
              </a>
             <Link to="/spotlights"><p>Developer Spotlights</p></Link>
            </div>

            <div className="grid-item">
              <a href="https://media.istockphoto.com/id/1129493258/photo/esports-team-winning-the-match.jpg?s=612x612&w=0&k=20&c=iLdOsaZOuQBc_5bSHVkOwd8dTh0HW5w5MeGZdQdadCM=">
                <img src={competitivegaming} alt="Competitive Gaming" />
              </a>
              <Link to="/gaming"><p>Competitive Gaming</p></Link>
            </div>

            <div className="grid-item">
              <a href="https://www.spieltimes.com/wp-content/uploads/2021/07/Fortnite-Update-v17.21-Patch-Notes-Downtime-All-Details-1068x601.png">
                <img src={updates} alt="Game Updates & Patches" />
              </a>
              <Link to="updates"><p>Game Updates & Patches</p></Link>
            </div>

            <div className="grid-item">
              <a href="https://www.techspecs.info/blog/wp-content/uploads/2024/03/Best-PC-Accessories-Required-for-Gaming.jpg">
                <img src={accessories} alt="Must Have Accessories" />
              </a>
              <Link to="accessories"><p>Must Have Accessories</p></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
