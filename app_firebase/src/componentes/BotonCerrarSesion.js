import React from "react";
import { auth } from "./../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const BotonCerrarSesion = ()=>{
    const navigate = useNavigate();

    const CerrarSesion = async()=>{
        try{
            await signOut(auth);
            navigate('/iniciar-sesion');
        }catch(error){
            console.log(error);
        }
    }
    return(
        <button as="button" onClick={CerrarSesion} className="boton-cerrar-sesion">Cerrar sesion</button>
    )
}

export default BotonCerrarSesion;