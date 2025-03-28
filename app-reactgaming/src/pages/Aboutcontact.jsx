import React from "react";
import storelogo from "../images/storelogo.png";
import "../css/pages/aboutcontact.css";

const AboutContact = () => {
  return (
    <div className="about-contact-container">
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

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Need help with an order or have a question? Our team is here for you!</p>
        <p>Phone support: +1 (800) 123-GAMING (Monday–Friday, 9am – 6pm EST)</p>
            <p>Email: support@gamingoverload.com</p>
            <p>Live chat: Available on our website from 9am – 9pm EST</p>
            <a href="https://th.bing.com/th/id/OIP.3MME1ArJT1XzmGgmmASlogHaHa?w=159&h=180&c=7&r=0&o=5&dpr=2&pid=1.7">
            <img src={storelogo} alt="store logo"></img></a>
      </section>

      <section class="faq">
            <h2>FAQ</h2>
            <ul>
                <li><a href="#">Order tracking</a></li>
                <li><a href="#">Return policy</a></li>
                <li><a href="#">Shipping details</a></li>
                <li><a href="#">Game recommendations</a></li>
            </ul>
        </section>
    </div>
  );
};

export default AboutContact;
