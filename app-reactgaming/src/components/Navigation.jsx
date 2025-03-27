import { Link } from "react-router-dom";
import "../css/navigation.css";

const Navigation = () => {
  return (
    <nav className="secondary-nav">
      <ul>
        <li><Link to="/dashboard">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/activity">Activity</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
