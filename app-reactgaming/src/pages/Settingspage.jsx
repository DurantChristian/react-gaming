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

        <form className="settings-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
          
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
          
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          
          <div className="form-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="reset" className="cancel-btn">Cancel</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Settings;
