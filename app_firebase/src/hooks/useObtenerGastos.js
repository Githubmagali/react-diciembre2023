import { useState, useEffect } from "react";
import { db } from './../firebase/firebaseConfig';
import { useAuth } from './../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where, limit, startAfter } from "firebase/firestore";

const useObtenerGastos = () => {
  // Estado local
  const { usuario } = useAuth();
  const [gastos, setGastos] = useState([]);
  const [ultimoGasto, setUltimoGasto]= useState(null);
  const [hayMasPorCargar, setHayMasPorCargar] = useState(false);


  const obtenerMasGastos = ()=>{
    const consulta = query(
      collection(db, 'gastos'),
      where('uidUsuario', '==', usuario.uid),
      orderBy('fecha', 'desc'),
      limit(3),
      startAfter(ultimoGasto)
    );
    onSnapshot(consulta, (snapshot)=>{
      if(snapshot.docs.length > 0){
        setUltimoGasto(snapshot.docs[snapshot.docs.length -1]);

        setGastos(gastos.concat(snapshot.docs.map((gasto)=>{
          console.log('Más Gastos:', gastos.concat(snapshot.docs.map(gasto => ({ ...gasto.data(), id: gasto.id }))));
return{...gasto.data(), id: gasto.id}
        })))
      }else{
        setHayMasPorCargar(false);
      }
    }, error=>{console.log(error)});
  }
  

  useEffect(() => {
     
      const consulta = query(
          collection(db, 'gastos'),
          where('uidUsuario', '==', usuario.uid),
          orderBy('fecha', 'desc'),
          limit(10)
      );

      const unsuscribe = onSnapshot(consulta, (snapshot) => {
        console.log('Snapshot en useEffect:', snapshot.docs);
        if (snapshot.docs.length > 0) {
          setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]); 
          setHayMasPorCargar(true); 
        } else {
          setHayMasPorCargar(false); 
        }
        setGastos(
          snapshot.docs.map((gasto) => {
            return { ...gasto.data(), id: gasto.id };
          }));
      });
      
      return unsuscribe;
  }, [usuario]);

  return [gastos, obtenerMasGastos, hayMasPorCargar];
}

export default useObtenerGastos;
