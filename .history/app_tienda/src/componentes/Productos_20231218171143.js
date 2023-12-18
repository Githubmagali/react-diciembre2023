import React from "react";
import "./../App.css";
import { useCart } from "../CartContext";

const Productos = ({
  productos,
  //   agregarProductoAlCarrito,
  //   quitarProductoAlCarrito,
}) => {
  const { addToCart, removeFromCart } = useCart();

  return (
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
                    addToCart(producto.id, producto.nombre);
                }}
              >
                +
              </button>
              <button
                className="boton"
                onClick={(e) => {
                  quitarProductoAlCarrito(producto.id, producto.nombre);
                }}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
