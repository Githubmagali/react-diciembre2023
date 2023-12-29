import React, { useState } from "react";

const SelectCategorias = ({ categoria, setCategoria }) => {

    const [mostrarSelect, setCambiarSelect] = useState(false);

    const categorias = [
        { id: 'comida', texto: 'Comida' },
        { id: 'cuentas y pagos', texto: 'Cuentas y pagos' },
        { id: 'hogar', texto: 'Hogar' },
        { id: 'transporte', texto: 'Transporte' },
        { id: 'ropa', texto: 'Ropa' },
        { id: 'salud e higiene', texto: 'Salud e Higiene' },
        { id: 'compras', texto: 'Compras' },
        { id: 'diversion', texto: 'Diversion' }
    ]

    const handleClick = (e) => {
        setCategoria(e.currentTarget.dataset.valor)
    }


    return (
        <div className="contenedor-select" onClick={() => setCambiarSelect(!mostrarSelect)}>
            <div className="opcion-seleccionada-select">{categoria}</div>
            {mostrarSelect &&
                <div className="select-categorias"   >
                    {categorias.map((categoria, index) => {
                    return <div className="opciones-categorias"
                    key={index}
                        onClick={handleClick}
                        data-valor={categoria.id}
                    >
                        {categoria.texto}
                    </div>
                })}</div>}


        </div>
    )
}

export default SelectCategorias;