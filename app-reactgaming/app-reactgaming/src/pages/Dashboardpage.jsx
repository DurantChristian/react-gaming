import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import john from "../images/john.png";
import jane from "../images/jane.png";
import user from "../images/user.png";
import friend1 from "../images/friend1.png";
import friend2 from "../images/friend2.png";
import "../pages/css/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
    <Navigation />
    <main className="dashboard-container">
      <section className="user-profiles">
        <h2>User Profiles</h2>
        <div className="profile-box">
          <a href="https://th.bing.com/th/id/OIP._LD4BZXDIeGEgTdaTU0-dwHaEK?w=260&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img
              src={john}
              alt="Profile 1"
            />
          </a>
          <div className="profile-info">
            <p>John Doe</p>
            <p>Web Developer</p>
            <p>Passionate about games</p>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
        <div className="profile-box">
          <a href="https://th.bing.com/th/id/OIP.c0VBB-lqMAzkkXGwoNuoMgAAAA?w=126&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img
              src={jane}
              alt="Profile 2"
            />
          </a>
          <div className="profile-info">
            <p>Jane Smith</p>
            <p>Graphic Designer</p>
            <p>Love creating games</p>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
      </section>

      <section className="user-details">
        <h2>User Profile</h2>
        <a href="https://th.bing.com/th/id/OIP.sYBdeQnREOilbZ4_9ibSeAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
          <img
            src={user}
            alt="User Profile"
          />
        </a>
        <p>Here are the detailed information of the user.</p>
        <ul>
        <li> <Link to="/settings"></Link>
        <div className="button-group">
          <button className="edit-btn" onClick={() => navigate("/settings")}>Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
        </li>
        </ul>
      </section>

      <section className="friends-list">
        <h2>Friends</h2>
        <div className="friend-box">
          <a href="https://th.bing.com/th/id/OIF.PQ9y6X1FytHUvvG5sh2sKQ?w=176&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img
              src={friend1}
              alt="Friend 1"
            />
          </a>
          <div className="friend-info">
            <p>Mike Johnson</p>
            <p>Data Analyst</p>
            <p>Data-driven decision</p>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
        <div className="friend-box">
          <a href="https://www.shutterstock.com/image-photo/portrait-streamer-african-young-woman-260nw-1893225928.jpg">
            <img
              src={friend2}
              alt="Friend 2"
            />
          </a>
          <div className="friend-info">
            <p>Emily Davis</p>
            <p>Project Manager</p>
            <p>Expert in managing</p>
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Dashboard;
