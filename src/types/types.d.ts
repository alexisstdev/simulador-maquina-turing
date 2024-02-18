interface TuringMachine {
  states: string[];
  alphabet: string[];
  blank: string;
  finalStates: string[];
  transitions: Transition[];
  initialState: string;
}

interface Transition {
  from: string;
  to: string;
  read: string;
  write: string;
  direction: string;
}
