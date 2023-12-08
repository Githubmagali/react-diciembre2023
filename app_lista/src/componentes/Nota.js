import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nota = ({ notas, cambiarNotas, index }) => {
  const [editarNota, cambiarEditarNota] = useState(false);

  const eliminarNota = () => {
    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    cambiarNotas(nuevasNotas);
  };

  return (
    <li>
      <FontAwesomeIcon icon={faCheckSquare} />
      {editarNota ? (
        <form action="">
          <input type="text" />
          <button type="submit">Actualizar</button>
        </form>
      ) : (
        notas[index].texto
      )}

      <div>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon onClick={eliminarNota} icon={faTimes} />
      </div>
    </li>
  );
};

export default Nota;
