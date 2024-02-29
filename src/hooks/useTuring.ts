/* eslint-disable react-hooks/exhaustive-deps */
/*create hook useTuring */

import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../Components/MaquinaProvider';

/* 
export interface MaquinaTuring {
  descripcion: string;
  estados: Estado[];
  alfabeto: string[];
  blanco: string;
  estadoFinal: Estado;
  transiciones: Transicion[];
  estadoInicial: Estado;
  simbolos?: string[];
  cintaAlmacenada?: string;
}

export interface Transicion {
  id: number;
  desde: Estado;
  hacia: Estado;
  leer: string;
  escribir: string;
  almacenar?: string;
  direccion: string;
}
*/

export default function useTuring() {
  // Define el estado inicial y los setters para entrada, salida, cinta y cabeza
  const [entrada, setEntrada] = useState('');
  const [salida, setSalida] = useState('');
  const [cinta, setCinta] = useState<string[]>([]);
  const [cabeza, setCabeza] = useState(0);

  // Obtiene la máquina del contexto
  const { maquina } = useContext(Context);

  // Define las referencias para enEjecucion y estado
  const enEjecucion = useRef(false);
  const estado = useRef(maquina.estadoInicial);

  // Define un efecto que se ejecuta cuando cambian cinta o cabeza
  useEffect(() => {
    if (enEjecucion.current) {
      const timer = setTimeout(ejecutarMaquina, 300);
      return () => clearTimeout(timer);
    }
  }, [cinta, cabeza]);

  function ejecutarMaquina() {
    if (!enEjecucion.current) {
      // Si la máquina no está en ejecución, la inicia
      enEjecucion.current = true;
      setCinta([...entrada].concat(Array(60).fill(maquina.blanco)));
      return;
    }

    // Busca la transición correspondiente en la máquina
    const simbolo = cinta[cabeza] || maquina.blanco;
    const transicion = maquina.transiciones.find(
      (t) => t.desde.id === estado.current.id && t.leer === simbolo
    );

    // Si no encuentra la transición, lanza un error
    if (!transicion) {
      alert('Terminación anormal: no se encontró transición válida');
      enEjecucion.current = false;
      return;
    }

    if (cabeza >= cinta.length && estado.current.id !== maquina.estadoFinal.id) {
      alert('Problema de parada');
      enEjecucion.current = false;
      return;
    }

    // Actualiza la cinta con el nuevo símbolo
    const nuevaCinta = [...cinta];

    if (transicion.almacenar && transicion.almacenar?.length > 0) {
      maquina.cintaAlmacenada = transicion.almacenar;
    }

    if (transicion.escribir === 'σ') {
      nuevaCinta[cabeza] = maquina.cintaAlmacenada || maquina.blanco;
    } else {
      nuevaCinta[cabeza] = transicion.escribir;
    }

    setCinta(nuevaCinta);

    // Actualiza la posición de la cabeza
    setCabeza((cabezalAnterior) =>
      transicion.direccion === 'R' ? cabezalAnterior + 1 : cabezalAnterior - 1
    );

    // Actualiza el estado actual de la máquina
    estado.current = transicion.hacia;

    // Si la máquina ha llegado al estado final, detiene la ejecución y establece la salida
    if (estado.current.id === maquina.estadoFinal.id) {
      enEjecucion.current = false;
      setSalida(nuevaCinta.join(''));

      alert('Cadena aceptada, la máquina ha terminado de ejecutarse.');

      setEntrada('');
      setSalida('');
      setCabeza(0);
      estado.current = maquina.estadoInicial;

      return;
    }
  }

  return {
    entrada,
    salida,
    cinta,
    cabeza,
    setEntrada,
    setCabeza,
    ejecutarMaquina,
    setCinta,
    isEjecutando: enEjecucion.current,
  };
}
