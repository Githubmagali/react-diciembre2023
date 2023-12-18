import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Define a provider for the context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        // Increase the quantity if the item already exists
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add the new item with a quantity of 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find(cartItem => cartItem.id === itemId);
      if (itemExists && itemExists.quantity > 1) {
        // Decrease the quantity if more than 1
        return prevCart.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // Remove the item if quantity is 1
        return prevCart.filter(cartItem => cartItem.id !== itemId);
      }
    });
  };

  // Provide the cart and functions to manipulate it
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
