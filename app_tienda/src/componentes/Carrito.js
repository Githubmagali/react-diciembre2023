import React, {useState} from "react";
import './../App.css';

const Carrito =({carrito, cambiarCarrito})=>{
    return(
        <div >
        <h1>carrito</h1>
        {carrito.length >0 ? 
        carrito.map((producto, index)=>{
          return(
            <div className="carrito-producto"key={index}>
            <p className="carrito-p">{producto.nombre}</p>
            Cantidad {producto.cantidad}
            </div>
            
          );
        })
        : <p>No hay productos</p>
        }
        </div>
    );
}

export default Carrito;