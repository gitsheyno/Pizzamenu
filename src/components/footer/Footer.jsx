import React from "react";
import Order from "../order/Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between <strong>{openHour}:00</strong> and{" "}
          <strong>{closeHour}:00</strong>
        </p>
      )}
    </footer>
  );
};

export default Footer;
