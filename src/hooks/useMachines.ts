import { useState, useEffect } from 'react';
import { examples } from '../constants/examples';
import { MaquinaTuring } from '../types/types';

function useMachines() {
  const [machines, setMachines] = useState<MaquinaTuring[]>([]);

  useEffect(() => {
    let loadedMachines = JSON.parse(localStorage.getItem('machines') || '[]');

    if (!loadedMachines || loadedMachines.length === 0) {
      loadedMachines = examples;
      localStorage.setItem('machines', JSON.stringify(loadedMachines));
    }

    setMachines(loadedMachines);
  }, []);

  const addMachine = (machine: MaquinaTuring) => {
    setMachines((prevMachines) => {
      const updatedMachines = [...prevMachines, machine];

      localStorage.setItem('machines', JSON.stringify(updatedMachines));

      return updatedMachines;
    });
  };

  return { machines, addMachine };
}

export default useMachines;
