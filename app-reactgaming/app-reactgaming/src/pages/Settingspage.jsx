import React from "react";
import Navigation from "../components/Navigation";
import userImage from "../images/user.png";
import "../pages/css/settings.css";

const Settings = () => {
  return (
    <div>
      <head>
        <title>Settings</title>
      </head>

      <Navigation />  

      <main className="settings-container">
        <h2>Settings</h2>
        <div className="profile-picture">
          <a href="https://th.bing.com/th/id/OIP.sYBdeQnREOilbZ4_9ibSeAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={userImage} alt="Profile Picture" />
          </a>
          <button className="update-photo-btn">Update Photo</button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
