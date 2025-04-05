import { Link } from "react-router-dom";
import "../components/css/reviewsnav.css";

const Reviewsnav = () => {
  return (
    <section className="game-categories">
        <h2>Categories</h2>
        <ul>
            <li><Link to="/c">Action</Link></li>
            <li><Link to="/c">Adventure</Link></li>
            <li><Link to="/c">RPG</Link></li>
            <li><Link to="/c">Strategy</Link></li>
        </ul>
    </section>
  );
};

export default Reviewsnav;