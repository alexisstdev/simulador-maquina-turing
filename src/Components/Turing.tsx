import { Divider, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { examples } from '../constants/examples';

const machine = examples[2];

const Turing = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function runTuringMachine(input: string) {
    setInput(input);
    let state = machine.initialState;
    const tape = [...input];
    let position = 0;

    while (state.id !== machine.finalState.id) {
      const symbol = tape[position] || machine.blank;
      const transition = machine.transitions.find(
        (t) => t.from.id === state.id && t.read === symbol
      );

      if (!transition) {
        throw new Error(
          `No transition found from state "${state.name}" on symbol "${symbol}"`
        );
      }

      tape[position] = transition.write;
      position += transition.direction === 'R' ? 1 : -1;
      state = transition.to;
    }

    setOutput(tape.join(''));
  }

  return (
    <>
      <Text fontSize={'2xl'}>{machine.description}</Text>

      <Divider my={4} />

      <form>
        <FormLabel>Entrada</FormLabel>

        <Input value={input} onChange={(e) => runTuringMachine(e.target.value)} />

        <Divider my={4} />
        {output && (
          <>
            <Heading size='md' mt={4}>
              Entrada
            </Heading>
            <Text mt={1} fontSize={'xl'}>
              {input}
            </Text>
            <Heading size='md' mt={4}>
              Salida
            </Heading>
            <Text mt={1} fontSize={'xl'}>
              {output}
            </Text>
          </>
        )}
      </form>
    </>
  );
};

export default Turing;
