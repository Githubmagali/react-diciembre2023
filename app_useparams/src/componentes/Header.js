import React from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="header-contenedor">
            <h1 className="header-titulo"></h1>
            <nav className="header-nav">
                <NavLink to="/" >Inicio</NavLink>
                <NavLink to="/acerca-de" >Acerca de</NavLink>
                <NavLink to="/blog" >Blog</NavLink>
            </nav> 
        </div>
    )
}

export default Header;