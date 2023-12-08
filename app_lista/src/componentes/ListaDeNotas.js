import React from 'react';
import Nota from './Nota';

const ListaDeNotas = ({ notas, cambiarNotas }) => {
  if (!notas || !notas.length) {
    return <p>No hay notas disponibles.</p>;
  }

  const toggleCompletada = (id)=>{
    console.log('Seleccionamos el check de v o f', id)
    cambiarNotas(notas.map((nota)=>{
   if (nota.id === id){
      return {...nota, completada: !nota.completada}
   }
   return nota;
    }));
  };

  return (
    <ul>
      {notas.map((nota, index) => (
        <Nota key={nota.id} notas={notas} cambiarNotas={cambiarNotas} index={index }toggleCompletada={toggleCompletada} />
      ))}
    </ul>
  );
};

export default ListaDeNotas;
