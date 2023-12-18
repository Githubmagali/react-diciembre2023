import React from "react";
import Productos from "./../componentes/Productos";

const Tienda = ({ productos }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <Productos productos={productos} />
    </div>
  );
};

export default Tienda;
