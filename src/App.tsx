import { Container, Divider, Heading } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Turing from './Components/Turing';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Container maxW={'4xl'} py={8}>
        <Heading>Simulador Máquina de Turing</Heading>
        <Divider my={4} />
        <Turing />
      </Container>
    </AnimatePresence>
  );
}

export default App;
