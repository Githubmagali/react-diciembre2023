import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const ListaDeGastos =()=>{
    return(
        <>
        <Helmet>
            <title>Lista de gastos</title>
        </Helmet>
        <div className="app-header">
      <div className='app-contenedor-header'>
        <div className='app-titulo'>Lista de gastos</div>
        <div className='app-contenedor-botones'>
          <NavLink to="/categorias">Categorias</NavLink>
          <NavLink to="/lista">Lista de gastos</NavLink>
          <NavLink to="/">Inicio</NavLink>
        </div>

      </div>
    </div>
        </>
        );
}

export default ListaDeGastos;