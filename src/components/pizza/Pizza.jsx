import React from "react";

const Pizza = ({ image, name, ingredients, price, soldOut }) => {
  //   if (soldOut) return null;
  const soldOutClassName = "sold-out";
  return (
    <li className={`pizza ${soldOut ? soldOutClassName : ""}`}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD-OUT" : `€${price}`}</span>
      </div>
    </li>
  );
};

export default Pizza;
