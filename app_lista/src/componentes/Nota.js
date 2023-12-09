import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes, faSquare } from '@fortawesome/free-solid-svg-icons';

const Nota = ({ notas, index, toggleCompletada, nuevoTextoDeLista, eliminarNota }) => {
  const [editarNota, cambiarEditarNota] = useState(false);
  const [nuevaNota, cambiarNuevaNota] = useState(notas[index].texto);


  const handleSubmit = (e) => {
    e.preventDefault();
    nuevoTextoDeLista(notas[index].id, nuevaNota)
    cambiarEditarNota(false);

  }

  

  return (
    <li className="lista-nota__tarea">
      <FontAwesomeIcon icon={notas[index].completada ? faCheckSquare : faSquare}
        className="lista-nota__icono lista-nota__icono-check"
        onClick={() => { toggleCompletada(notas[index].id) }} />
      {editarNota ? (
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={nuevaNota} onChange={(e) => cambiarNuevaNota(e.target.value)} />
          <button type="submit">Actualizar</button>
        </form>
      ) : (
        notas[index].texto
      )}

      <div>
        <FontAwesomeIcon icon={faEdit} onClick={() => { cambiarEditarNota(!editarNota) }} />
        <FontAwesomeIcon onClick={eliminarNota} icon={faTimes} />
      </div>
    </li>
  );
};

export default Nota;
