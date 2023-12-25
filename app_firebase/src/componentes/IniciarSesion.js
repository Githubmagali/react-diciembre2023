import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const IniciarSesion =()=>{
    return(
        <>
        <Helmet>
            <title>Iniciar sesion</title>
        </Helmet>
        <NavLink to="/" className="registro-inicio" >Inicio</NavLink>
        <div className="registro-contenedor-principal">
        <form className="registro-formulario">
            <input className="registro-input" type="mail" name="mail" placeholder="mail"/>
            <input className="registro-input" type="password" name="password" placeholder="password"/>
            <NavLink as="button" type="submit" className="registro-enviar">Enviar</NavLink>
        </form>
        </div>
        </>
    );
}

export default IniciarSesion;