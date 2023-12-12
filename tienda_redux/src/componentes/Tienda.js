import React from "react";
import Productos from './../componentes/Productos'

const Tienda =({ carrito, cambiarCarrito})=>{
    const agregarProductoAlCarrito = (idProducto, nombre) => {
        const yaEstaEnCarrito = carrito.some((producto) => producto.id === idProducto);
      
        if (yaEstaEnCarrito) {
          cambiarCarrito((pCarrito) =>
            pCarrito.map((producto) =>
              producto.id === idProducto
                ? { ...producto, cantidad: Math.min(100, producto.cantidad + 1) }
                : producto
            )
          );
        } else {
          cambiarCarrito((pCarrito) => [
            ...pCarrito,
            { id: idProducto, nombre: nombre, cantidad: 1 },
          ]);
        }
      };


      const quitarProductoAlCarrito = (idProducto, nombre) => {
        const yaEstaEnCarrito = carrito.some((producto) => producto.id === idProducto);
      
        if (yaEstaEnCarrito) {
          cambiarCarrito((pCarrito) =>
            pCarrito.map((producto) =>
              producto.id === idProducto
                ? { ...producto, cantidad: Math.max(0, producto.cantidad - 1) }
                : producto
            )
          );
        } else {
          cambiarCarrito((pCarrito) => [
            ...pCarrito,
            { id: idProducto, nombre: nombre, cantidad: 1 },
          ]);
        }
      };
    return(
        <div>
        <h1 className="texto-centro">Tienda</h1>
        <Productos agregarProductoAlCarrito={agregarProductoAlCarrito} quitarProductoAlCarrito={quitarProductoAlCarrito}/>
        </div>
    );
}

export default Tienda;