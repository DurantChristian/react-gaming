import React from "react";
import witcher3 from "/images/witcher3.png";
import "../css/pages/order.css";

const Order = () => {
  return (
    <>
      <head>
        <title>Order Confirmation</title>
      </head>
      
      <main className="order-container">
        <h2>Order Successfully Placed</h2>
        <a href="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png">
          <img src={witcher3} alt="Order Confirmation" className="order-img" />
        </a>
        <h3>The Witcher 3</h3>
        <p>Thank you for your order! Your order has been processed successfully.</p>
        <p>You will receive a confirmation email shortly.</p>
      </main>
    </>
  );
};

export default Order;
