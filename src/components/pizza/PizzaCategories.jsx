import React from "react";

import Pizza from "./Pizza";

function PizzaCategories({ pizzaData }) {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza, index) => {
        const { name, photoName, ingredients, price, soldOut } = pizza;
        return (
          <Pizza
            name={name}
            image={photoName}
            key={index}
            ingredients={ingredients}
            price={price}
            soldOut={soldOut}
          />
        );
      })}
    </ul>
  );
}

export default PizzaCategories;
