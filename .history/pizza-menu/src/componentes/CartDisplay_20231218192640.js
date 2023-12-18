import React from "react";
import { useCart } from "./CartContext";

const CartDisplay = () => {
  const { cart, totalCost } = useCart();

  return (
    <div className="cart-display">
      <h3>Your Cart</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart.</p>
      )}
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
};

export default CartDisplay;
