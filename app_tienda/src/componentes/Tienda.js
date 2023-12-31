import React from "react";
import "./../App.css";
import { useCart } from "../CartContext";

const Tienda = ({ productos }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Tienda</h1>
      <div>
        <p> Estos son los productos</p>
        <div className="contenedor-productos">
          {productos.map((producto, index) => {
            return (
              <div className="contenedor-producto" key={index}>
                <p className="p">{producto.nombre}</p>
                <button
                  className="boton"
                  onClick={(e) => {
                    addToCart(producto);
                  }}
                >
                  +
                </button>
                <button
                  className="boton"
                  onClick={(e) => {
                    removeFromCart(producto.id);
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tienda;
