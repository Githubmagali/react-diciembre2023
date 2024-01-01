import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, Link } from "react-router-dom";
import BotonCerrarSesion from "./BotonCerrarSesion";
import useObtenerGastos from './../hooks/useObtenerGastos';
import BarraTotalGastado from "./BarraTotalGastado";
import ConvertirAMoneda from "./../funciones/ConvertirAMoneda";
import borrarGasto from "../firebase/borrarGasto";



const ListaDeGastos = () => {

  //extraigo el valor por eso lo tengo que encerrar entre parentesis
  const [gastos] = useObtenerGastos();
  //console.log(gastos);
  return (
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
            <BotonCerrarSesion />
          </div>
        </div>
      </div>
      <div className="div-lista-de-gastos">

        {gastos.map((gasto) => {

          return (
            <li className="elemento-de-lista" key={gasto.id}>
              <div className="categoria-lista">
                {gasto.categoria}
              </div>
              <div className="categoria-descripcion-lista">
                {gasto.descripcion}
              </div>
              <div className="cantidad-lista">
             {ConvertirAMoneda(gasto.cantidad)}
              </div>
             <div className="contenedor-botones-lista">
             <Link to={`/editar-gasto/${gasto.id}`} className="boton-accion-lista">E</Link>
              <button className="boton-accion-lista"  onClick={()=>borrarGasto(gasto.id)}>X</button>
             </div>
            </li>
          );
        })}
      </div>
      <BarraTotalGastado />
    </>
  );
}

export default ListaDeGastos;