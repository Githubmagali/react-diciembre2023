import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <>
    <Helmet>
      <title>Agregar gasto</title>
    </Helmet>
    <div className="app-header">
      <div className='app-contenedor-header'>
        <div className='app-titulo'> Administrar gastos</div>
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

export default App;
