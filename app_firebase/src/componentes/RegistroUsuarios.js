import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Alerta from "./Alerta";

const RegistroUsuarios = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});


    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setCorreo(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "password2":
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstadoAlerta(true);
        setAlerta({});
      

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'Ingrese un correo valido'
            });
            return;
        }
        if (correo === '' || password === '' || password2 === '') {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'complete todos los campos'
            });
            return;
        }
        if (password !== password2) {
            setAlerta(true)
            setAlerta({
                tipo: 'error',
                mensaje: 'La contraseñas no coinciden'
            });
            return;
        }
        
        try {
            await createUserWithEmailAndPassword(auth, correo, password);
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'exito',
                mensaje: 'Usuario creado con exito'
            });
            setTimeout(()=>navigate('/'), 4000);
        }
        catch (error) {
            setAlerta(true);
            let mensaje;
            switch (error.code) {
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                    break;
            }
            setAlerta({ tipo: 'error', mensaje: mensaje });
        }
    };

    return (
        <>
            <Helmet>
                <title>Crear cuenta</title>
            </Helmet>
            <div className="registro-inicio">
                <NavLink to="/" >Inicio</NavLink>
                <NavLink to="iniciar-sesion" >Iniciar sesion</NavLink>
            </div>
            <div className="registro-contenedor-principal">
                <form className="registro-formulario" onSubmit={handleSubmit}>
                    <input className="registro-input" type="email" name="email" placeholder="mail" value={correo} onChange={handleChange} />
                    <input className="registro-input" type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                    <input className="registro-input" type="password" name="password2" placeholder="repetir password" value={password2} onChange={handleChange} />
                    <button type="submit" className="registro-enviar">Enviar</button>
                </form>
            </div>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                setEstadoAlerta={setEstadoAlerta} />
        </>
    );
}

export default RegistroUsuarios;