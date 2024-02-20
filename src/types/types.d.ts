export interface State {
  name: string;
  id: number;
}

export interface TuringMachine {
  description: string;
  states: State[];
  alphabet: string[];
  blank: string;
  finalState: State;
  transitions: Transition[];
  initialState: State;
}

export interface Transition {
  id: number;
  from: State;
  to: State;
  read: string;
  write: string;
  direction: string;
}
