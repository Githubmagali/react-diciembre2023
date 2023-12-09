import React from 'react';
import Nota from './Nota';

const ListaDeNotas = ({ notas, cambiarNotas, mostrarNotas }) => {
  if (!notas || !notas.length) {
    return <p className='lista-nota__mensaje'>No hay notas disponibles.</p>;
  }
  
  const notasFiltradas = mostrarNotas ? notas : notas.filter(nota => !nota.completada);
  

  const toggleCompletada = (id) => {
    cambiarNotas(
      notas.map((nota) => {
        if (nota.id === id) {
          return { ...nota, completada: !nota.completada };
        }
        return nota;
      })
    );
  };
  

  const nuevoTextoDeLista = (id, nuevoTexto )=>{
    cambiarNotas(notas.map((nota)=>{
      if (nota.id === id){
        return {...nota, texto: nuevoTexto }
      }
      return nota;
    }));
  }
  const eliminarNota = (index) => {
    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    cambiarNotas(nuevasNotas);
  };



  return (
    <ul className='lista-nota'>
      {notasFiltradas.map((nota, index) => {
        if(mostrarNotas){
        return (
         <Nota key={nota.id} 
        notas={notasFiltradas}
         cambiarNotas={cambiarNotas}
         index={index }
        toggleCompletada={toggleCompletada}
        nuevoTextoDeLista={nuevoTextoDeLista}
        eliminarNota={eliminarNota}
        
         />
      );
        } else if(!nota.completada){
        return (
            <Nota key={nota.id} 
        notas={notas}
         cambiarNotas={cambiarNotas}
         index={index }
        toggleCompletada={toggleCompletada}
        nuevoTextoDeLista={nuevoTextoDeLista}
        eliminarNota={eliminarNota}
        />
        );
        }
        return;

})}
    </ul>
  );
};

export default ListaDeNotas;
