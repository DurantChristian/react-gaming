import React from "react";
import Navigation from "../components/navigation";
import messageImage from "../images/message.png";
import emailImage from "../images/email.png";
import taskImage from "../images/task.png";
import replyImage from "../images/reply.png";
import alexImage from "../images/alex.png";
import "../pages/css/notifications.css";

const Notifications = () => {
  return (
    <div>
      <head>
        <title>Notifications</title>
      </head>

      <Navigation/>

      <main className="notifications-container">
        <h2>Notifications</h2>
        
        <nav className="notifications-nav">
          <ul>
            <li><a href="#">Alerts</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Updates</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </nav>

        <section className="notifications-list">
          <h3>Notifications</h3>
          
          <div className="notification-item">
            <a href="https://th.bing.com/th?q=Message+Icon+PNG+Black+and+White&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1&mw=247">
              <img src={messageImage} alt="Notification Image" />
            </a>
            <div className="notification-text">
              <p><strong>New Message</strong></p>
              <p>You have received a new message from John.</p>
            </div>
            <button className="view-btn">View</button>
          </div>
          
          <div className="notification-item">
            <a href="https://th.bing.com/th/id/R.243b6b0bf03c5f8ca4d6812ac7cb9616?rik=cHbjD0s9XWNEhw&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f113-1134506_computer-icons-email-bounce-address-letter-image-file.png&ehk=A0bGxsYsR%2foKnpPUsgro%2fs7%2bRSoOJiF%2b1n5%2bdLXZlmg%3d&risl=&pid=ImgRaw&r=0">
              <img src={emailImage} alt="Notification Image" />
            </a>
            <div className="notification-text">
              <p><strong>Email Alert</strong></p>
              <p>Your account verification email has been sent.</p>
            </div>
            <button className="open-btn">Open</button>
          </div>
          
          <div className="notification-item">
            <a href="https://th.bing.com/th/id/OIP.M9d3zAGQW7jj5igvA4Hc9wAAAA?w=160&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={taskImage} alt="Notification Image" />
            </a>
            <div className="notification-text">
              <p><strong>Task Reminder</strong></p>
              <p>Don't forget to complete your mission by the end of this week.</p>
            </div>
            <button className="check-btn">Check</button>
          </div>
          
          <div className="notification-item">
            <a href="https://th.bing.com/th/id/OIP.M9d3zAGQW7jj5igvA4Hc9wAAAA?w=160&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
              <img src={replyImage} alt="Notification Image" />
            </a>
            <div className="notification-text">
              <p><strong>Comment Reply</strong></p>
              <p>Alice replied to your comment on the forum.</p>
            </div>
            <button className="read-btn">Read</button>
          </div>
        </section>

        <section className="new-message-alert">
          <h3>New Message Alert</h3>
          <a href="https://static.vecteezy.com/system/resources/thumbnails/027/215/537/small_2x/smiling-african-american-customer-service-agent-with-headset-attending-calls-in-office-looking-at-camera-photo.jpg">
            <img src={alexImage} alt="New Message Image" />
          </a>
          <p>You have received a new message from Alex regarding the website update.</p>
          <div className="alert-buttons">
            <button className="read-btn">Read</button>
            <button className="dismiss-btn">Dismiss</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Notifications;
