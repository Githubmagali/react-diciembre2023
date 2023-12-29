import React, {useState, useEffect} from "react";
import SelectCategorias from "./SelectCategorias";

const FormularioGasto = ()=>{
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');
    const [categoria, setCategoria] = useState('hogar');

    const handleChange =(e)=>{
        if (e.target.name === 'descripcion'){
            setInputDescripcion(e.target.value);
        }else if(e.target.name === 'valor'){
       setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
    }



    return(
        <form onSubmit={handleSubmit} className="formulario-gasto">
            <div className="div-select">
                <SelectCategorias categoria={categoria} setCategoria={setCategoria} className="select-categorias"/>
                <div>div</div>
            </div>
            <div>
                <input className="input-formulario-gasto"type="text" name="descripcion" id="descripcion" placeholder="Descripcion" value={inputDescripcion} onChange={handleChange}/>
                <input className="input-formulario-gasto" type="text" name="valor" id="valor" placeholder="$0,00" value={inputCantidad} onChange={handleChange}/>
            </div>
            <button as="button" type="submit" className="boton-formulario-gasto">Enviar</button>
        </form>
    )
}
export default FormularioGasto;