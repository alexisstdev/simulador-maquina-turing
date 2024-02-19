/* 
interface State {
  name: string;
  id: number;
}

interface TuringMachine {
  description: string;
  states: State[];
  alphabet: string[];
  blank: string;
  finalState: State;
  transitions: Transition[];
  initialState: State;
}

interface Transition {
  id: number;
  from: State;
  to: State;
  read: string;
  write: string;
  direction: string;
}

*/
const blank = '△';

export const examples: TuringMachine[] = [
  {
    description: 'Suma 1 a un número binario',
    states: [
      { name: 'q0', id: 0 },
      { name: 'q1', id: 1 },
      { name: 'q2', id: 2 },
      { name: 'q3', id: 3 },
      { name: 'q4', id: 4 },
    ],
    alphabet: ['0', '1'],
    blank: blank,
    finalState: { name: 'q4', id: 4 },
    transitions: [
      {
        id: 0,
        from: { name: 'q0', id: 0 },
        to: { name: 'q0', id: 0 },
        read: '0',
        write: '0',
        direction: 'R',
      },
      {
        id: 1,
        from: { name: 'q0', id: 0 },
        to: { name: 'q0', id: 0 },
        read: '1',
        write: '1',
        direction: 'R',
      },
      {
        id: 2,
        from: { name: 'q0', id: 0 },
        to: { name: 'q1', id: 1 },
        read: blank,
        write: blank,
        direction: 'R',
      },
      {
        id: 3,
        from: { name: 'q1', id: 1 },
        to: { name: 'q1', id: 1 },
        read: '0',
        write: '1',
        direction: 'R',
      },
      {
        id: 4,
        from: { name: 'q1', id: 1 },
        to: { name: 'q2', id: 2 },
        read: '1',
        write: '0',
        direction: 'L',
      },
      {
        id: 5,
        from: { name: 'q2', id: 2 },
        to: { name: 'q2', id: 2 },
        read: '0',
        write: '0',
        direction: 'L',
      },
      {
        id: 6,
        from: { name: 'q2', id: 2 },
        to: { name: 'q2', id: 2 },
        read: '1',
        write: '1',
        direction: 'L',
      },
      {
        id: 7,
        from: { name: 'q2', id: 2 },
        to: { name: 'q3', id: 3 },
        read: blank,
        write: blank,
        direction: 'R',
      },
      {
        id: 8,
        from: { name: 'q3', id: 3 },
        to: { name: 'q3', id: 3 },
        read: '0',
        write: '0',
        direction: 'R',
      },
      {
        id: 9,
        from: { name: 'q3', id: 3 },
        to: { name: 'q3', id: 3 },
        read: '1',
        write: '1',
        direction: 'R',
      },
      {
        id: 10,
        from: { name: 'q3', id: 3 },
        to: { name: 'q4', id: 4 },
        read: blank,
        write: blank,
        direction: 'R',
      },
    ],
    initialState: { name: 'q0', id: 0 },
  },
  {
    description: 'Invierte los bits de un número binario',
    states: [
      { name: 'q0', id: 0 },
      { name: 'q1', id: 1 },
    ],
    alphabet: ['0', '1'],
    blank: blank,
    finalState: { name: 'q1', id: 1 },
    transitions: [
      {
        id: 0,
        from: { name: 'q0', id: 0 },
        to: { name: 'q0', id: 0 },
        read: '0',
        write: '1',
        direction: 'R',
      },
      {
        id: 1,
        from: { name: 'q0', id: 0 },
        to: { name: 'q0', id: 0 },
        read: '1',
        write: '0',
        direction: 'R',
      },
      {
        id: 2,
        from: { name: 'q0', id: 0 },
        to: { name: 'q1', id: 1 },
        read: blank,
        write: blank,
        direction: 'R',
      },
    ],
    initialState: { name: 'q0', id: 0 },
  },
  {
    description: 'Reemplaza los 1s por 0s',
    states: [
      { name: 'q0', id: 0 },
      { name: 'q1', id: 1 },
    ],
    alphabet: ['0', '1'],
    blank: blank,
    finalState: { name: 'q1', id: 1 },
    transitions: [
      {
        id: 0,
        from: { name: 'q0', id: 0 },
        to: { name: 'q0', id: 0 },
        read: '1',
        write: '0',
        direction: 'R',
      },
      {
        id: 1,
        from: { name: 'q0', id: 0 },
        to: { name: 'q0', id: 0 },
        read: '0',
        write: '0',
        direction: 'R',
      },
      {
        id: 2,
        from: { name: 'q0', id: 0 },
        to: { name: 'q1', id: 1 },
        read: blank,
        write: blank,
        direction: 'R',
      },
    ],
    initialState: { name: 'q0', id: 0 },
  },
];
