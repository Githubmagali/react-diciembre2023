import React from "react";
import './../App.css';
import {useCart} from ''

const Productos =({productos, agregarProductoAlCarrito, quitarProductoAlCarrito})=>{
    return(
        <div>
            <p> Estos son los productos</p>
        <div className="contenedor-productos">
        {productos.map((producto, index)=>{
       return(
        <div className="contenedor-producto" key={index}>
            <p className="p">{producto.nombre}</p>
            <button className="boton" onClick={(e)=>{agregarProductoAlCarrito(producto.id,producto.nombre)}}>+</button>
            <button className="boton" onClick={(e)=>{quitarProductoAlCarrito(producto.id,producto.nombre)}}>-</button>

        </div>
       )
        })}
        </div>
        </div>
    );
}

export default Productos;