import { MaquinaTuring } from '../types/types';

export const examples: MaquinaTuring[] = [
  {
    simboloAlmacenamiento: 'σ',
    descripcion: 'Invierte los bits de un número binario',
    estados: [
      { nombre: 'q0', id: 0 },
      { nombre: 'q1', id: 1 },
    ],
    alfabeto: ['0', '1'],
    blanco: '△',
    estadoFinal: { nombre: 'q1', id: 1 },
    transiciones: [
      {
        id: 0,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q0', id: 0 },
        leer: '0',
        escribir: '1',
        direccion: 'R',
      },
      {
        id: 1,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q0', id: 0 },
        leer: '1',
        escribir: '0',
        direccion: 'R',
      },
      {
        id: 2,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '△',
        escribir: '△',
        direccion: 'R',
      },
    ],
    estadoInicial: { nombre: 'q0', id: 0 },
  },
  {
    simboloAlmacenamiento: 'σ',
    descripcion: "Complementa una cadena de 0's y 1's, y regresa a la posición inicial",
    estados: [
      { nombre: 'q0', id: 0 },
      { nombre: 'q1', id: 1 },
      { nombre: 'q2', id: 2 },
      { nombre: 'qf', id: 3 },
    ],
    alfabeto: ['0', '1'],
    blanco: '△',
    estadoFinal: { nombre: 'qf', id: 3 },
    estadoInicial: { nombre: 'q0', id: 0 },
    transiciones: [
      {
        id: 0,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '0',
        escribir: '#',
        direccion: 'R',
      },
      {
        id: 1,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '1',
        escribir: '#',
        direccion: 'R',
      },
      {
        id: 2,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '0',
        escribir: '1',
        direccion: 'R',
      },
      {
        id: 3,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '1',
        escribir: '0',
        direccion: 'R',
      },
      {
        id: 4,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q2', id: 2 },
        leer: '△',
        escribir: '△',
        direccion: 'L',
      },
      {
        id: 5,
        desde: { nombre: 'q2', id: 2 },
        hacia: { nombre: 'q2', id: 2 },
        leer: '0',
        escribir: '0',
        direccion: 'L',
      },
      {
        id: 6,
        desde: { nombre: 'q2', id: 2 },
        hacia: { nombre: 'q2', id: 2 },
        leer: '1',
        escribir: '1',
        direccion: 'L',
      },
      {
        id: 7,
        desde: { nombre: 'q2', id: 2 },
        hacia: { nombre: 'qf', id: 3 },
        leer: '#',
        escribir: '#',
        direccion: 'N',
      },
    ],
  },
  {
    simboloAlmacenamiento: 'σ',
    descripcion: 'Suma 1 a un número binario',
    estados: [
      { nombre: 'q0', id: 0 },
      { nombre: 'q1', id: 1 },
      { nombre: 'qf', id: 2 },
    ],
    alfabeto: ['1', '0'],
    blanco: '△',
    estadoFinal: { nombre: 'qf', id: 2 },
    estadoInicial: { nombre: 'q0', id: 0 },
    transiciones: [
      {
        id: 0,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q0', id: 0 },
        leer: '1',
        escribir: '1',
        direccion: 'R',
      },
      {
        id: 1,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q0', id: 0 },
        leer: '0',
        escribir: '0',
        direccion: 'R',
      },
      {
        id: 2,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '△',
        escribir: '△',
        direccion: 'L',
      },
      {
        id: 3,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q1', id: 1 },
        leer: '1',
        escribir: '0',
        direccion: 'L',
      },
      {
        id: 4,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'qf', id: 2 },
        leer: '0',
        escribir: '1',
        direccion: 'L',
      },
      {
        id: 5,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'qf', id: 2 },
        leer: '△',
        escribir: '1',
        direccion: 'L',
      },
    ],
  },
  {
    descripcion: 'Máquina que copia el primer caracter despues de un blanco',
    estados: [
      { nombre: 'q0', id: 0 },
      { nombre: 'q1', id: 1 },
      { nombre: 'q2', id: 2 },
      { nombre: 'q3', id: 3 },
      { nombre: 'q4', id: 4 },
    ],
    alfabeto: ['x', 'y', '_'],
    blanco: '_',
    estadoInicial: { nombre: 'q0', id: 0 },
    estadoFinal: { nombre: 'q6', id: 6 },
    transiciones: [
      {
        id: 0,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q1', id: 1 },
        leer: 'x',
        almacenar: 'x',
        escribir: '#',
        direccion: 'R',
      },
      {
        id: 1,
        desde: { nombre: 'q0', id: 0 },
        hacia: { nombre: 'q1', id: 1 },
        leer: 'y',
        almacenar: 'y',
        escribir: '#',
        direccion: 'R',
      },
      {
        id: 2,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q1', id: 1 },
        leer: 'y',
        escribir: 'y',
        direccion: 'R',
      },
      {
        id: 3,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q1', id: 1 },
        leer: 'x',
        escribir: 'x',
        direccion: 'R',
      },
      {
        id: 4,
        desde: { nombre: 'q1', id: 1 },
        hacia: { nombre: 'q2', id: 2 },
        leer: '_',
        escribir: '_',
        direccion: 'R',
      },
      {
        id: 5,
        desde: { nombre: 'q2', id: 2 },
        hacia: { nombre: 'q3', id: 3 },
        leer: '_',
        escribir: 'σ',
        direccion: 'L',
      },
      /* muevete a la izquierda hasta encontrar la marca */
      {
        id: 6,
        desde: { nombre: 'q3', id: 3 },
        hacia: { nombre: 'q3', id: 3 },
        leer: 'y',
        escribir: 'y',
        direccion: 'L',
      },
      {
        id: 7,
        desde: { nombre: 'q3', id: 3 },
        hacia: { nombre: 'q3', id: 3 },
        leer: 'x',
        escribir: 'x',
        direccion: 'L',
      },
      {
        id: 8,
        desde: { nombre: 'q3', id: 3 },
        hacia: { nombre: 'q3', id: 3 },
        leer: '_',
        escribir: '_',
        direccion: 'L',
      },
      {
        id: 9,
        desde: { nombre: 'q3', id: 3 },
        hacia: { nombre: 'q4', id: 4 },
        leer: '#',
        escribir: 'σ',
        direccion: 'R',
      },
      /*       {
        id: 10,
        desde: { nombre: 'q4', id: 4 },
        hacia: { nombre: 'q5', id: 5 },
        leer: 'x',
        almacenar: 'x',
        escribir: '#',
        direccion: 'R',
      },
      {
        id: 11,
        desde: { nombre: 'q4', id: 4 },
        hacia: { nombre: 'q5', id: 5 },
        leer: 'y',
        almacenar: 'y',
        escribir: '#',
        direccion: 'R',
      },
      {
        id: 12,
        desde: { nombre: 'q5', id: 5 },
        hacia: { nombre: 'q6', id: 6 },
        leer: '_',
        escribir: '_',
        direccion: 'R',
      },
      {
        id: 13,
        desde: { nombre: 'q6', id: 6 },
        hacia: { nombre: 'q6', id: 6 },
        leer: 'x',
        escribir: 'x',
        direccion: 'R',
      },
      {
        id: 14,
        desde: { nombre: 'q6', id: 6 },
        hacia: { nombre: 'q6', id: 6 },
        leer: 'y',
        escribir: 'y',
        direccion: 'R',
      },
      {
        id: 15,
        desde: { nombre: 'q6', id: 6 },
        hacia: { nombre: 'q7', id: 7 },
        leer: '_',
        escribir: '_',
        direccion: 'L',
      },
      {
        id: 16,
        desde: { nombre: 'q7', id: 7 },
        hacia: { nombre: 'q4', id: 4 },
        leer: '#',
        escribir: 'σ',
        direccion: 'L',
      },
      {
        id: 17,
        desde: { nombre: 'q4', id: 4 },
        hacia: { nombre: 'q8', id: 8 },
        leer: '_',
        escribir: '_',
        direccion: 'R',
      }, */
    ],
    simbolos: ['#'],
    cintaAlmacenada: '',
    simboloAlmacenamiento: '',
  },
  {
    simboloAlmacenamiento: 'σ',
    descripcion: 'Copia una cadena después del primer blanco (a la inversa)',
    estados: [
      { nombre: '1', id: 0 },
      { nombre: '2', id: 1 },
      { nombre: '3', id: 2 },
      { nombre: '4', id: 3 },
      { nombre: '5', id: 4 },
      { nombre: '6', id: 5 },
      { nombre: '7', id: 6 },
      { nombre: '8', id: 7 },
      { nombre: '9', id: 8 },
    ],
    alfabeto: ['x', 'y'],
    blanco: '△',
    estadoFinal: { nombre: '9', id: 8 },
    transiciones: [
      {
        id: 0,
        desde: { nombre: '1', id: 0 },
        hacia: { nombre: '1', id: 0 },
        leer: 'x',
        escribir: 'x',
        direccion: 'R',
        almacenar: '',
      },
      {
        id: 1,
        desde: { nombre: '1', id: 0 },
        hacia: { nombre: '1', id: 0 },
        leer: 'y',
        escribir: 'y',
        direccion: 'R',
      },
      {
        id: 2,
        desde: { nombre: '1', id: 0 },
        hacia: { nombre: '2', id: 1 },
        leer: '△',
        escribir: '△',
        direccion: 'R',
      },
      {
        id: 3,
        desde: { nombre: '2', id: 1 },
        hacia: { nombre: '2', id: 1 },
        leer: 'x',
        escribir: 'x',
        direccion: 'R',
      },
      {
        id: 4,
        desde: { nombre: '2', id: 1 },
        hacia: { nombre: '2', id: 1 },
        leer: 'y',
        escribir: 'y',
        direccion: 'R',
      },
      {
        id: 5,
        desde: { nombre: '2', id: 1 },
        hacia: { nombre: '3', id: 2 },
        leer: '△',
        escribir: '△',
        direccion: 'R',
      },
      {
        id: 6,
        desde: { nombre: '3', id: 2 },
        hacia: { nombre: '3', id: 2 },
        leer: '△',
        escribir: '△',
        direccion: 'L',
      },
      {
        id: 7,
        desde: { nombre: '3', id: 2 },
        hacia: { nombre: '4', id: 3 },
        leer: 'x',
        escribir: '#',
        direccion: 'R',
        almacenar: 'x',
      },
      {
        id: 8,
        desde: { nombre: '3', id: 2 },
        hacia: { nombre: '4', id: 3 },
        leer: 'y',
        escribir: '#',
        direccion: 'R',
        almacenar: 'y',
      },
      {
        id: 9,
        desde: { nombre: '4', id: 3 },
        hacia: { nombre: '4', id: 3 },
        leer: 'x',
        escribir: 'x',
        direccion: 'R',
      },
      {
        id: 10,
        desde: { nombre: '4', id: 3 },
        hacia: { nombre: '4', id: 3 },
        leer: 'y',
        escribir: 'y',
        direccion: 'R',
      },
      {
        id: 11,
        desde: { nombre: '4', id: 3 },
        hacia: { nombre: '5', id: 4 },
        leer: '△',
        escribir: '△',
        direccion: 'R',
      },
      {
        id: 12,
        desde: { nombre: '5', id: 4 },
        hacia: { nombre: '5', id: 4 },
        leer: 'x',
        escribir: 'x',
        direccion: 'R',
      },
      {
        id: 13,
        desde: { nombre: '5', id: 4 },
        hacia: { nombre: '5', id: 4 },
        leer: 'y',
        escribir: 'y',
        direccion: 'R',
      },
      {
        id: 14,
        desde: { nombre: '5', id: 4 },
        hacia: { nombre: '6', id: 5 },
        leer: '△',
        escribir: 'σ',
        direccion: 'L',
      },
      {
        id: 15,
        desde: { nombre: '6', id: 5 },
        hacia: { nombre: '6', id: 5 },
        leer: 'x',
        escribir: 'x',
        direccion: 'L',
      },
      {
        id: 16,
        desde: { nombre: '6', id: 5 },
        hacia: { nombre: '6', id: 5 },
        leer: 'y',
        escribir: 'y',
        direccion: 'L',
      },
      {
        id: 17,
        desde: { nombre: '6', id: 5 },
        hacia: { nombre: '7', id: 6 },
        leer: '△',
        escribir: '△',
        direccion: 'L',
      },
      {
        id: 18,
        desde: { nombre: '7', id: 6 },
        hacia: { nombre: '7', id: 6 },
        leer: 'x',
        escribir: 'x',
        direccion: 'L',
      },
      {
        id: 19,
        desde: { nombre: '7', id: 6 },
        hacia: { nombre: '7', id: 6 },
        leer: 'y',
        escribir: 'y',
        direccion: 'L',
      },
      {
        id: 20,
        desde: { nombre: '7', id: 6 },
        hacia: { nombre: '7', id: 6 },
        leer: '△',
        escribir: '△',
        direccion: 'L',
      },
      {
        id: 21,
        desde: { nombre: '7', id: 6 },
        hacia: { nombre: '8', id: 7 },
        leer: '#',
        escribir: 'σ',
        direccion: 'L',
      },
      {
        id: 22,
        desde: { nombre: '8', id: 7 },
        hacia: { nombre: '4', id: 3 },
        leer: 'y',
        escribir: '#',
        direccion: 'R',
        almacenar: 'y',
      },
      {
        id: 23,
        desde: { nombre: '8', id: 7 },
        hacia: { nombre: '4', id: 3 },
        leer: 'x',
        escribir: '#',
        direccion: 'R',
        almacenar: 'x',
      },
      {
        id: 24,
        desde: { nombre: '8', id: 7 },
        hacia: { nombre: '9', id: 8 },
        leer: '△',
        escribir: '△',
        direccion: 'N',
      },
    ],
    estadoInicial: { nombre: '1', id: 0 },
    simbolos: ['#', '△', 'σ'],
  },
];
