import React from "react";

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>
        We're open until <strong>{closeHour}:00</strong>
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
