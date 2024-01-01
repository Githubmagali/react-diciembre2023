import React from "react";
import ConvertirAMoneda from "./../funciones/ConvertirAMoneda";

const BarraTotalGastado = ()=>{
    return(
        <div className="barra-total">
            <p>Gastos:</p>
            <p>{ConvertirAMoneda(0.00)}</p>
        </div>
    )
}

export default BarraTotalGastado;