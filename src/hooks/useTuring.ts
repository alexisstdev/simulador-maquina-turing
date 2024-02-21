/* eslint-disable react-hooks/exhaustive-deps */
/*create hook useTuring */

import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../Components/MaquinaProvider';

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
      const timer = setTimeout(ejecutarMaquina, 1000);
      return () => clearTimeout(timer);
    }
  }, [cinta, cabeza]);

  function ejecutarMaquina() {
    // Si la máquina no está en ejecución, la inicia
    if (!enEjecucion.current) {
      enEjecucion.current = true;
      setCinta([...entrada].concat(maquina.blanco));
      return;
    }

    // Busca la transición correspondiente en la máquina
    const simbolo = cinta[cabeza] || maquina.blanco;
    const transicion = maquina.transiciones.find(
      (t) => t.desde.id === estado.current.id && t.leer === simbolo
    );

    // Si no encuentra la transición, lanza un error
    if (!transicion) {
      throw new Error(
        `No se encontró una transición para el estado ${estado.current.nombre} y el símbolo ${simbolo}`
      );
    }

    // Actualiza la cinta con el nuevo símbolo
    const nuevaCinta = [...cinta];
    nuevaCinta[cabeza] = transicion.escribir;
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
