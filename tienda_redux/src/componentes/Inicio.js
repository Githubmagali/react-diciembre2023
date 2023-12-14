import React from "react";
import { connect } from "react-redux"; // Asegúrate de importar connect desde react-redux
import './../App.css';

const Inicio = ({ tarjeta }) => {
    return (
        <div>
            <h2 className="texto-centro">Descuentos en tarjetas</h2>
            <div>
                {tarjeta.map((producto, index) => (
                    <div key={index}>
                        <h4 className="h4-inicio">{producto.nombre}</h4>
                        <p className="p-inicio">{producto.texto}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (estado) => {
    return {
        tarjeta: estado.tarjeta
    };
};

export default connect(mapStateToProps)(Inicio); // Solo una exportación al final del archivo
