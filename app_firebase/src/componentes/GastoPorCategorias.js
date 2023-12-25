import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';

const GastoPorCategorias =()=>{
    return(
        <>
        <Helmet>
            <title>Gastos por categoria</title>
        </Helmet>
        <div className="app-header">
      <div className='app-contenedor-header'>
        <div className='app-titulo'>Gastos por categoria</div>
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

export default GastoPorCategorias;