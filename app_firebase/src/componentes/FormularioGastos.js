import React, { useState, useEffect } from "react";
import SelectCategorias from "./SelectCategorias";
import DatePicker from './DatePicker';
import agregarGasto from "../firebase/agregarGasto";
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { useAuth } from './../contextos/AuthContext';
import Alerta from './Alerta';

const FormularioGasto = () => {
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');
    const [categoria, setCategoria] = useState('hogar');
    const [fecha, setFecha] = useState(new Date());
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});

    const { usuario } = useAuth();
  

    const handleChange = (e) => {
        if (e.target.name === 'descripcion') {
            setInputDescripcion(e.target.value);
        } else if (e.target.name === 'valor') {
            setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let cantidad = parseFloat(inputCantidad).toFixed(2);
        console.log('Usuario UID:', usuario.uid);
        /*console.log('Submitting form with values:', {
            categoria,
            descripcion: inputDescripcion,
            cantidad,
            fecha: getUnixTime(fecha),
            uidUsuario: usuario.uid
        });*/

        //console.log(getUnixTime(fecha));
        //comprobamos que haya gastos para que lo agregue, evita que cuando el campo este vacio y hagamos click no 
        //agregue un campo vacio

        if (inputDescripcion !== '' && inputCantidad !== '') {

            //si tenemos una cantidad valida
            if (cantidad) {
                console.log('Usuario UID:', usuario.uid);
                agregarGasto({
                    categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: cantidad,
                    fecha: getUnixTime(fecha),
                    uidUsuario: usuario.uid
                })
                    //then reinicia el estado dejando el input limpio
                    .then(() => {
                        setCategoria('hogar');
                        setInputDescripcion('');
                        setInputCantidad('');
                        setFecha(new Date());

                        setEstadoAlerta(true);
                        setAlerta({ tipo: 'exito', mensaje: 'Ingreso exitoso' })
                    })
                    .catch((error) => {
                        console.error('Error al agregar gasto:', error);
                        setEstadoAlerta(true);
                        setAlerta({ tipo: 'error', mensaje: 'Hubo un error' })
                    })

            } else {
                setEstadoAlerta(true);
                setAlerta({ tipo: 'error', mensaje: 'valor incorrecto' })

            }

        } else {
            setEstadoAlerta(true);
            setAlerta({ tipo: 'error', mensaje: 'valores incompletos' })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="formulario-gasto">
            <div className="div-select">
                <SelectCategorias categoria={categoria} setCategoria={setCategoria} className="select-categorias" />
                <DatePicker fecha={fecha} setFecha={setFecha} />
            </div>
            <div>
                <input className="input-formulario-gasto" type="text" name="descripcion" id="descripcion" placeholder="Descripcion" value={inputDescripcion} onChange={handleChange} />
                <input className="input-formulario-gasto" type="text" name="valor" id="valor" placeholder="$0,00" value={inputCantidad} onChange={handleChange} />
            </div>
            <button as="button" type="submit" className="boton-formulario-gasto">Enviar</button>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta} />
        </form>
    )
}
export default FormularioGasto;