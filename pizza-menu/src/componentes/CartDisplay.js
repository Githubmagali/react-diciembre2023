import React from "react";
import { useCart } from "../CartContext";

const CartDisplay = () => {
  const { cart, totalCost } = useCart();

  return (
    <div className="cart-display">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <ul >
          {cart.map((item, index) => (
            <li key={index}className="cart-items">
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="cart-p">No items in cart.</p>
      )}
      <p className="cart-p-total">Total Cost: ${totalCost}</p>
    </div>
  );
};

export default CartDisplay;
