import React from "react";
import gameofthemonth from "../images/gameofthemonth.png";
import "../css/pages/Highlights.css";

const Highlights = () => {
  return (
    <main className="highlights-container">
      <h2>Disney Dreamlight Valley Highlights</h2>
      <div className="highlights-content">
        <a href="https://progameguides.com/wp-content/uploads/2022/04/featured-disney-dreamlight-valley-all-confirmed-characters.jpg?resize=768,432">
          <img
            src={gameofthemonth}
            alt="Disney Dreamlight Valley"
            className="highlights-img"
          />
        </a>
        <div className="highlights-text">
          <p><strong>Fantasy World Blend</strong> - Disney Dreamlight Valley is an open-world, life-simulation game that blends iconic Disney and Pixar characters and settings into a magical realm.</p>
          <br />
          <p><strong>Customization & Creativity</strong> - Create your own customizable character with tons of outfits and accessories. Build and decorate your own village with house and landscape customization.</p>
          <br />
          <p><strong>Quests with Disney Characters</strong> - Embark on unique quests and storylines with your favorite Disney characters, such as Mickey Mouse, Ariel, and Goofy, as you help them restore their magic and memories.</p>
          <br />
          <p><strong>Multiplayer Features</strong> - The game features multiplayer elements, allowing players to cooperate with friends, helping each other with missions and sharing resources.</p>
          <br />
          <p><strong>Seasonal Events & Updates</strong> - Regular seasonal updates and themed events bring fresh challenges, new characters, and additional content, keeping the experience dynamic and exciting.</p>
          <br />
          <p><strong>Exploration & Adventure</strong> - Vast open world to explore, including different biomes and magical locations. Unlock new areas, new characters, and rare items as you progress through the game, creating an ever-expanding experience.</p>
        </div>
      </div>
    </main>
  );
};

export default Highlights;
