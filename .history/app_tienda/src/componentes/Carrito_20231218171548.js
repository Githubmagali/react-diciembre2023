import React from "react";
import "./../App.css";
import { useCart } from "../CartContext"; // Import useCart

const Carrito = () =>
  // {carrito}
  {
    const { cart } = useCart(); // Use Cart Context
    console.log("")
    return (
      <div>
        <h1 className="texto-centro">Carrito</h1>
        {cart.length > 0 ? (
          cart.map((producto, index) => {
            return (
              <div className="carrito-producto" key={index}>
                <p className="carrito-p">{producto.nombre}</p>
                Cantidad {producto.quantity}
              </div>
            );
          })
        ) : (
          <p className="texto-centro">No hay productos</p>
        )}
      </div>
    );
  };

export default Carrito;