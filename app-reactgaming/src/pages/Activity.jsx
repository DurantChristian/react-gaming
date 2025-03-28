import React from "react";
import Navigation from "../components/navigation";
import userImage from "../images/user.png";
import "../css/pages/activity.css";

const Activity = () => {
  return (
    <div>
      <head>
        <title>User Activity Log</title>
      </head>

      <Navigation/>

      <main className="activity-container">
        <h2>User Activity Log</h2>

        <div className="activity-item">
          <a href="https://th.bing.com/th/id/OIP.sYBdeQnREOilbZ4_9ibSeAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={userImage} alt="Activity Image" />
          </a>
          <div className="activity-text">
            <p><strong>Logged In</strong></p>
            <p>User123 logged in to the dashboard.</p>
          </div>
          <button className="view-btn">View Details</button>
        </div>

        <div className="activity-item">
          <a href="https://th.bing.com/th/id/OIP.sYBdeQnREOilbZ4_9ibSeAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={userImage} alt="Activity Image" />
          </a>
          <div className="activity-text">
            <p><strong>Profile Updated</strong></p>
            <p>User123 updated their profile information.</p>
          </div>
          <button className="view-btn">View Details</button>
        </div>

        <div className="activity-item">
          <a href="https://th.bing.com/th/id/OIP.sYBdeQnREOilbZ4_9ibSeAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={userImage} alt="Activity Image" />
          </a>
          <div className="activity-text">
            <p><strong>Profile Updated</strong></p>
            <p>User123 updated their phone number.</p>
          </div>
          <button className="view-btn">View Details</button>
        </div>

        <div className="activity-item">
          <a href="https://th.bing.com/th/id/OIP.sYBdeQnREOilbZ4_9ibSeAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={userImage} alt="Activity Image" />
          </a>
          <div className="activity-text">
            <p><strong>Logged Out</strong></p>
            <p>User123 logged out.</p>
          </div>
          <button className="view-btn">View Details</button>
        </div>
      </main>
    </div>
  );
};

export default Activity;
