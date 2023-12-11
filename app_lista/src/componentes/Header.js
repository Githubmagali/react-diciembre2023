import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";

const Header = ({mostrarNotas, cambiarMostrarNotas})=>{

const toggleCompletada = ()=>{
    cambiarMostrarNotas(!mostrarNotas);
}

  return(
        <header>
            <h1>Notas</h1>
            {mostrarNotas ?
             <div> <FontAwesomeIcon icon={faEye}onClick={()=>toggleCompletada()} /></div>
              :
              <div> <FontAwesomeIcon icon={faEyeSlash} onClick={()=>toggleCompletada()} /></div>
            }
         
        </header>
    );
}

export default Header;