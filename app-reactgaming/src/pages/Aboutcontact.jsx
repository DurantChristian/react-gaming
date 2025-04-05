import React, { useState } from "react";
import { Link } from "react-router-dom";
import storelogo from "../images/storelogo.png";
import "../pages/css/aboutcontact.css";

const AboutContact = () => {
  const [result, setFormData] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormData("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "817cffc5-dfd0-4c25-8906-e6530a0c8308");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormData("Email Successfully Sent");
      event.target.reset();
    } else {
      console.log("Error sending email", data);
      setFormData(data.message);
    }
  };
  return (
    <main className="two-column-container">
      <section className="about-section">
        <h2>About Us</h2>
        <p>Gaming Overload is your one-stop shop for all things gaming! We provide a wide selection of video games, consoles, and accessories to gamers of all levels.</p>
            <h3>Our Story</h3>
            <p>Founded in 2025, Gaming Overload was created by passionate gamers who wanted to build a store that truly caters to the gaming community.</p>
            <h3>What We Offer</h3>
            <ul>
                <li>Latest Game Releases – From AAA titles to indie gems</li>
                <li>Exclusive Deals & Promotions – Discounts, bundles, and pre-orders</li>
                <li>High-Quality Accessories – Apparel, collectibles, posters, and gifts</li>
                <li>Reliable Customer Support – Fast responses & hassle-free returns</li>
            </ul>

            <h3>Meet the Team</h3>
            <p>Christian Durant – Founder & CEO</p>
            <p>Alex Grey - Head of Customer Support</p>

            <h3>Follow Us</h3>
            <p>Instagram: @GamingOverload</p>
            <p>Twitter: @GamingOverload</p>
            <p>YouTube: GamingOverload</p>
      </section>

      <section className="contact-content">
        <h2>Contact Us</h2>
        <p>Need help with an order or have a question? Our team is here for you!</p>
        <p>Phone support: +1 (800) 123-GAMING (Monday–Friday, 9am – 6pm EST)</p>
            <p>Email: support@gamingoverload.com</p>
            <p>Live chat: Available on our website from 9am – 9pm EST</p>
            <a href="https://th.bing.com/th/id/OIP.3MME1ArJT1XzmGgmmASlogHaHa?w=159&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={storelogo} alt="store logo"></img>
            </a>

        <form id="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="First and Last" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="contact-method">Preferred Contact Method:</label>
          <select id="contact-method" name="contactMethod">
            <option>Email</option>
            <option>Phone</option>
            <option>Text</option>
          </select>

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
          <button type="reset">Cancel</button>
        </form>
        <span>{result}</span>
      </section>

      <section class="faq">
            <h2>FAQ</h2>
            <ul>
                <li><Link to="/tracking">Order tracking</Link></li>
                <li><Link to="/return">Return policy</Link></li>
                <li><Link to="/shipping">Shipping details</Link></li>
                <li><Link to="/recommendations">Game recommendations</Link></li>
            </ul>
        </section>

        <section className="store-location">
        <h3>Visit Our Store</h3>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211593.67774992716!2d-81.1023708995099!3d34.0399919986034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5697931d1e3%3A0xf32808f4b379fa96!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1742330969352!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default AboutContact;
