import { Link } from "react-router-dom";
import "../components/css/homenav.css";

const Homenav = () => {
  return (
    <nav className="secondary-nav">
        <ul>
            <li><Link to="/">Highlights</Link></li>
            <li><Link to="/c">Promotions</Link></li>
            <li><Link to="/c">Latest-arrivals</Link></li>
        </ul>
    </nav>
  );
};

export default Homenav;
