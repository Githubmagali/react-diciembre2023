import React from "react";
import "./../App.css";
import PizzaItem from "./PizzaItem";

const Menu = ({ PizzaData }) => {
  const pizzas = PizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <PizzaItem pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later...</p>
      )}
    </main>
  );
};

export default Menu;
