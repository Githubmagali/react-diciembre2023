import React from "react";
import './../App.css';
import { connect } from "react-redux";


const Productos =({ productos, agregarProducto, quitarProducto})=>{
    return(
        <div>
            <p className="texto-centro"> Estos son los productos</p>
        <div className="contenedor-productos">
        {productos.map((producto, index)=>{
       return(
        <div className="contenedor-producto" key={index}>
            <p className="p">{producto.nombre}</p>
            <button className="boton"onClick={() => agregarProducto(producto.id, producto.nombre)}>+</button>
            <button className="boton"onClick={() => quitarProducto(producto.id, producto.nombre)} >-</button>

        </div>
       )
        })}
        </div>
        </div>
    );
}

const mapStateToProps = (estado)=>{
    return {
        productos: estado.productos
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        agregarProducto :(idProducto, nombre)=>{
            dispatch({type: 'AGREGAR_PRODUCTO', idProducto, nombre });
        },
        quitarProducto: (idProducto, nombre)=>{
            dispatch({type: 'QUITAR_PRODUCTO', idProducto, nombre });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Productos);