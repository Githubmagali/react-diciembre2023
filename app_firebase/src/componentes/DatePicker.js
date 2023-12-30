import React, {useState} from "react";
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import format from 'date-fns/format';
import 'react-day-picker/dist/style.css';


//fecha = new Date() ; si no se definio la fecha quiero que traigas la fecha del dia de hoy
const formatFecha = (fecha = new Date())=>{
    return format(fecha, `dd 'de' MMMM 'de' yyyy`, {locale:es});
};


const DatePicker= ({fecha, setFecha})=>{
    const[visible, setVisible]= useState(false);

    return(
        <div className="contenedor-date-picker">
          <input type="text" readOnly onClick={()=>setVisible(!visible)} value={formatFecha(fecha)}/>
          {visible && <DayPicker  selected={fecha} onSelect={setFecha} mode="single" locale={es} />}
        </div>
    );
};

export default DatePicker;

//mode="single" me permite seleccionar la fecha
//onSelect selecciona la fecha que le hacemos click