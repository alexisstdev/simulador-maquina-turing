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
