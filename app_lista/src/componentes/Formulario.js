import React, { useState } from "react";

const Formulario = ({ notas, cambiarNotas }) => {
  const [textoNota, cambiarTextoNota] = useState('');

  const handleInput = (e) => {
    cambiarTextoNota(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();

    cambiarNotas([
      ...notas,
      {
        id: id,
        texto: textoNota,
        completada: false
      }
    ]);
    cambiarTextoNota(''); //refresca el input y lo deja vacio
  };

  return (
    <form action="" className="" onSubmit={handleSubmit}>
      <input
        type="text"
        className=""
        placeholder="Escribe una nueva nota"
        value={textoNota}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="">Registrar</button>
    </form>
  );
};

export default Formulario;