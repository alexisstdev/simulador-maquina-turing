import { Box, Button, Divider, Flex, FormLabel, Input, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { examples } from '../constants/examples';

const machine = examples[2];

const Turing = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [tape, setTape] = useState<string[]>([]);
  const [head, setHead] = useState(0);
  const isRunning = useRef(false);

  useEffect(() => {
    if (isRunning.current) {
      const timer = setTimeout(runTuringMachine, 1000);
      return () => clearTimeout(timer);
    }
  }, [tape, head]);

  function runTuringMachine() {
    if (!isRunning.current) {
      // Initialize
      isRunning.current = true;
      setTape([...input].concat(machine.blank));
      setHead(0);
      return;
    }

    let state = machine.initialState;
    const symbol = tape[head] || machine.blank;
    const transition = machine.transitions.find(
      (t) => t.from.id === state.id && t.read === symbol
    );

    if (!transition) {
      throw new Error(
        `No transition found from state "${state.name}" on symbol "${symbol}"`
      );
    }

    // Update tape and head
    const newTape = [...tape];
    newTape[head] = transition.write;
    setTape(newTape);
    setHead(head + (transition.direction === 'R' ? 1 : -1));
    state = transition.to;

    if (state.id === machine.finalState.id) {
      // Stop when reaching final state
      isRunning.current = false;
      setOutput(newTape.join(''));
    }
  }

  return (
    <>
      <Text fontSize={'2xl'}>{machine.description}</Text>

      <form>
        <FormLabel mt={4}>Entrada</FormLabel>

        <Input value={input} onChange={(e) => setInput(e.target.value)} />

        <Button
          type='button'
          mt={4}
          onClick={() => {
            runTuringMachine();
          }}
        >
          Ejecutar
        </Button>

        <Divider my={4} />

        <Text mt={1} fontSize={'xl'}>
          <Flex gap={3}>
            {tape.map((symbol, index) => (
              <Flex key={index} direction={'column'} alignItems={'center'} gap={1}>
                <Box
                  key={index}
                  style={{ color: index === head ? '#2b6cb0' : 'white' }}
                  px={3}
                  border={'2px solid white'}
                  borderRadius={'md'}
                >
                  <Text fontSize={'3xl'}>{symbol}</Text>
                </Box>
                {index === head && <Text color={'#2b6cb0'}>▲</Text>}
              </Flex>
            ))}
          </Flex>
        </Text>
      </form>
    </>
  );
};

export default Turing;
