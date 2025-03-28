import React from "react";
import witcher3 from "../images/witcher3.png";
import callofduty from "../images/callofduty.png";
import portal2 from "../images/portal2.png";
import fortnite from "../images/fortnitecover.png";
import minecraft from "../images/minecraft.png";
import sims4 from "../images/sims.png";
import eldenring from "../images/eldenring.png";
import casino from "../images/gamble.png";
import "../css/pages/reviewspage.css";

const Reviews = () => {
  return (
    <>
      <header>
        <h1>Game Reviews</h1>
      </header>
      
      <main>
        <section className="reviews-search">
          <input type="text" placeholder="Search for a game review..." />
        </section>

        <section className="game-categories">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">RPG</a></li>
            <li><a href="#">Strategy</a></li>
          </ul>
        </section>

        <h2>Latest Game Reviews</h2>
        <section className="game-reviews">
          <div className="review">
            <a href="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png">
              <img src={witcher3} alt="The Witcher 3" />
            </a>
            <h3>The Witcher 3</h3>
            <p>An epic fantasy role-playing game with a rich storyline and immersive gameplay.</p>
            <a href="gamereview.html">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.VuiE5FTU5oGpkPFpB219MAHaJP?w=202&h=253&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={callofduty} alt="Call Of Duty" />
            </a>
            <h3>Call of Duty</h3>
            <p>A fast-paced first-person shooter that offers thrilling multiplayer experiences.</p>
            <a href="#">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.4TnaxXC6nGhzKiqy8ddkzgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={portal2} alt="Portal 2" />
            </a>
            <h3>Portal 2</h3>
            <p>A mind-bending puzzle game that challenges your problem-solving abilities with humor.</p>
            <a href="#">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.-d1p2Hl7wIaVAbXcnwAi8gHaHa?w=178&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={fortnite} alt="Fortnite" />
            </a>
            <h3>Fortnite</h3>
            <p>A action-packed first-person shooter that offers a variety of multiplayer experiences.</p>
            <a href="#">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.q3f8gyBPvNpIXNxDrrKJfgHaLH?w=121&h=182&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={minecraft} alt="Minecraft" />
            </a>
            <h3>Minecraft</h3>
            <p>A creative game where you can build your own world and have fun with friends.</p>
            <a href="#">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.OTfX_Ps333yQWE_mIBqeiQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={sims4} alt="Sims 4" />
            </a>
            <h3>Sims 4</h3>
            <p>An open-world futuristic game.</p>
            <a href="#">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.yJirbyWKnLNEVvWDciCxPQAAAA?w=155&h=220&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={eldenring} alt="Elden Ring" />
            </a>
            <h3>Elden Ring</h3>
            <p>A dark and mysterious world filled with adventure.</p>
            <a href="#">Read More</a>
          </div>
          
          <div className="review">
            <a href="https://th.bing.com/th/id/OIP.XuuZ9U8X2G2ENh2t1380GwHaEK?w=318&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={casino} alt="Casino" />
            </a>
            <h3>Casino</h3>
            <p>A thrilling and risky gambling game.</p>
            <a href="#">Read More</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Reviews;
