import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import BotonCerrarSesion from './componentes/BotonCerrarSesion';
import FormularioGasto from './componentes/FormularioGastos';
import BarraTotalGastado from './componentes/BarraTotalGastado';


function App() {
  return (
    <>
    <Helmet>
      <title>Agregar gasto</title>
    </Helmet>
    <div className="app-header">
      <div className='app-contenedor-header'>
        <div className='app-titulo'>Agregar gasto</div>
        <div className='app-contenedor-botones'>
          <NavLink to="/categorias">Categorias</NavLink>
          <NavLink to="/lista">Lista de gastos</NavLink>
          <NavLink to="/">Inicio</NavLink>
          <BotonCerrarSesion />

        </div>

      </div>
    </div>
    <FormularioGasto />
  <BarraTotalGastado />
    </>
  );
}

export default App;
