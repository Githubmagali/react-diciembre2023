import React, { useEffect } from "react";
import './../alerta.css';

const Alerta = ({ tipo, mensaje, estadoAlerta, setEstadoAlerta }) => {
  useEffect(() => {
    let tiempo;

    if (estadoAlerta === true) {
      tiempo = setTimeout(() => {
        setEstadoAlerta(false);
      }, 4000);
    }

    return () => clearTimeout(tiempo);
    //cada vez que el componente se monte o las dependencias cambien
  }, [estadoAlerta, setEstadoAlerta]);

  return (
    <>
      {estadoAlerta && (
        <div className={`contenedor-alerta ${tipo}`}>
          <p>{mensaje}</p>
        </div>
      )}
    </>
  );
};

export default Alerta;
