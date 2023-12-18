import React from "react";
import Productos from "./../componentes/Productos";

const Tienda = ({ productos }) => {
  return (
    <div>
      
      <Productos productos={productos} />
    </div>
  );
};

export default Tienda;
