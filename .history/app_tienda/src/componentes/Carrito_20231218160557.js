import React from "react";
import './../App.css';

const Carrito =({carrito})=>{
    return(
        <div >
        <h1 className="texto-centro">Carrito</h1>
        {carrito.length >0 ? 
        carrito.map((producto, index)=>{
          return(
            <div className="carrito-producto"key={index}>
            <p className="carrito-p">{producto.nombre}</p>
            Cantidad {producto.cantidad}
            </div>
            
          );
        })
        : <p className="texto-centro">No hay productos</p>
        }
        </div>
    );
}

export default Carrito;