import React, { ReactNode, createContext, useState } from 'react';
import { Estado, MaquinaTuring, Transicion } from '../types/types';
import { examples } from '../constants/examples';

const defaultMaquina = {
  descripcion: '',
  alfabeto: [] as string[],
  estados: [] as Estado[],
  blanco: '',
  estadoFinal: { nombre: '', id: 0 },
  estadoInicial: { nombre: '', id: 0 },
  transiciones: [] as Transicion[],
  cintaAlmacenada: '',
  simbolos: [] as string[],
} as MaquinaTuring;

interface ContextType {
  maquina: MaquinaTuring;
  setMaquina: React.Dispatch<React.SetStateAction<MaquinaTuring>>;
}

export const Context = createContext<ContextType>({
  maquina: defaultMaquina,
  setMaquina: () => {},
});

export default function MaquinaProvider({ children }: { children: ReactNode }) {
  const [maquina, setMaquina] = useState<MaquinaTuring>(examples[1]);

  return (
    <>
      <Context.Provider value={{ maquina, setMaquina }}>{children}</Context.Provider>
    </>
  );
}
