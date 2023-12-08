import React from 'react';
import Nota from './Nota';

const ListaDeNotas = ({ notas, cambiarNotas }) => {
  if (!notas || !notas.length) {
    return <p>No hay notas disponibles.</p>;
  }

  return (
    <ul>
      {notas.map((nota, index) => (
        <Nota key={index} notas={notas} cambiarNotas={cambiarNotas} index={index} />
      ))}
    </ul>
  );
};

export default ListaDeNotas;
