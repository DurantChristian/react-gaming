import React from "react";
import gameshop from "/images/gameshop.png";
import witcher3 from "/images/withcer3.png";
import cyberpunk from "/images/Cyberpunk2077.png";
import reddead from "/images/reddead.png";
import eldenring from "/images/eldenring.png";
import frozen from "/images/frozen.png";
import casino from "/images/gamble.png";
import sims4 from "/images/sims.png";
import nascar from "/images/nascar.png";
import minecraft from "/images/minecraft.png";
import fortnite from "/images/fortnitecover.png";
import "../css/pages/shop.css";

const Shop = () => {
  return (
    <main className="shop-container">
      <input type="text" className="search-box" placeholder="Search for games..." />

      <nav className="secondary-nav">
        <ul>
          <li><Link to="/shop">Games</Link></li>
          <li><Link to="/shop">Toys</Link></li>
          <li><Link to="/shop">Accessories</Link></li>
          <li><Link to="/shop">Consoles</Link></li>
        </ul>
      </nav>

      <a href="https://th.bing.com/th/id/OIP.YwK20X8_XASiPvJk1ZmsUgAAAA?rs=1&pid=ImgDetMain">
        <img
          src={gameshop}
          alt="Featured Game"
          className="featured-img"
        />
      </a>

      <h2>Hot Games</h2>
      <div className="games-grid">
        <div className="game-item">
          <a href="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png">
            <img src={witcher3} alt="Game" />
          </a>
          <p><strong>The Witcher 3</strong></p>
          <p>Best RPG</p>
          <p>Explore a vast open world</p>
          <a href="order.html">
            <button className="buy-btn">Buy Now</button>
          </a>
        </div>

        <div className="game-item">
          <a href="https://gamefaqs.gamespot.com/a/box/7/2/6/986726_front.jpg">
            <img src={cyberpunk} alt="Game" />
          </a>
          <p><strong>Cyberpunk 2077</strong></p>
          <p>Futuristic RPG</p>
          <p>Experience Night City</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.J73lWAjQJieXfS4ji05wXwHaNK?w=115&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={reddead} alt="Game" />
          </a>
          <p><strong>Red Dead Redemption 2</strong></p>
          <p>Action Adventure</p>
          <p>Live the cowboy experience</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.yJirbyWKnLNEVvWDciCxPQAAAA?w=155&h=220&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={eldenring} alt="Game" />
          </a>
          <p><strong>Elden Ring</strong></p>
          <p>Epic Fantasy</p>
          <p>Unravel a dark and mysterious world</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.HGuBxCatUjcqZkOxEBb1RwHaHa?w=150&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={frozen} alt="Game" />
          </a>
          <p><strong>Frozen</strong></p>
          <p>Adventure</p>
          <p>Become a princess</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.XuuZ9U8X2G2ENh2t1380GwHaEK?w=318&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={casino} alt="Game" />
          </a>
          <p><strong>Casino</strong></p>
          <p>Gamble</p>
          <p>Make lots of money</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.OTfX_Ps333yQWE_mIBqeiQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={sims4} alt="Game" />
          </a>
          <p><strong>Sims 4</strong></p>
          <p>An open world action</p>
          <p>Live your dreams</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.QHz6W2Doi9G8obm02tytoAHaIp?w=154&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={nascar} alt="Game" />
          </a>
          <p><strong>Nascar Heat 3</strong></p>
          <p>An open world action</p>
          <p>Become a racing champion</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.q3f8gyBPvNpIXNxDrrKJfgHaLH?w=121&h=182&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={minecraft} alt="Game" />
          </a>
          <p><strong>Minecraft</strong></p>
          <p>Creative sandbox</p>
          <p>Build your own world</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="game-item">
          <a href="https://th.bing.com/th/id/OIP.-d1p2Hl7wIaVAbXcnwAi8gHaHa?w=178&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={fortnite} alt="Game" />
          </a>
          <p><strong>Fortnite</strong></p>
          <p>Action pack</p>
          <p>Join your friends in action</p>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </main>
  );
};

export default Shop;
