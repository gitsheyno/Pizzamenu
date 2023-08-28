import React from "react";
import PizzaCategories from "../pizza/PizzaCategories";
import { pizzaData } from "../../sources/data";

export const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from, All
            from our stone oven, all organic, all delicious
          </p>
          <PizzaCategories pizzaData={pizzaData} />
        </>
      ) : (
        <p>We're still woriking on our menu please come back later</p>
      )}
    </main>
  );
};

export default Menu;
