import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Alerta from "./Alerta";

const IniciarSesion = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});


    const handleChange = (e)=>{
        if(e.target.name === 'email'){
          setCorreo(e.target.value);
        }else if (e.target.name === 'password'){
          setPassword(e.target.value);
        }
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
          setEstadoAlerta(false);
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
        if (correo === "" || password === "") {
            setEstadoAlerta(true);
            setAlerta({
                tipo: 'error',
                mensaje: 'complete todos los campos'
            });
            return;
        }

        try{
            await signInWithEmailAndPassword(auth, correo, password);
            setTimeout(()=>navigate('/'), 4000);
        }
        catch(error){
            setEstadoAlerta(true);
            let mensaje;
            switch (error.code) {
              case 'auth/wrong-password':
                mensaje = 'La contraseña es incorrecta.';
                break;
              case 'auth/user-not-found':
                mensaje = 'Usuario inválido.';
                break;
              default:
                mensaje = 'La contraseña es incorrecta.';
                break;
            }
            setAlerta({ tipo: 'error', mensaje: mensaje });

        }
    }

    return (
        <>
            <Helmet>
                <title>Iniciar sesion</title>
            </Helmet>
            <div className="registro-inicio">
                <NavLink to="/" >Inicio</NavLink>
                <NavLink to="/iniciar-sesion" >Iniciar sesion</NavLink>
            </div>
            <div className="inicio-sesion-contenedor-principal">
                <form className="inicio-sesion-formulario" onSubmit={handleSubmit}>
                    <input className="inicio-sesion-input" type="email" name="email" placeholder="Email" value={correo} onChange={handleChange} />
                    <input className="inicio-sesion-input" type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                    <button type="submit"  className="inicio-sesion-enviar">Enviar</button>
                   
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

export default IniciarSesion;