import React from "react";
import './../App.css';
import { connect } from "react-redux";
import { calcularTotalCarrito } from './../reducers/tiendaReducer';


const Carrito =({carrito, totalCarrito})=>{
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
        <p className="texto-centro">Total en el carrito: {totalCarrito}</p>
        </div>
    );
}
const mapStateToProps = (estado)=>{
  return {
      carrito: estado.carrito,
      totalCarrito: calcularTotalCarrito(estado.carrito)
  }
}
export default connect(mapStateToProps)(Carrito);