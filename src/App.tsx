import { Container, Divider, Heading } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Turing from './Components/Turing';
import useMaquinas from './hooks/useMachines';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import MaquinaProvider from './Components/MaquinaProvider';
import { Link } from 'react-router-dom';

function App() {
  useMaquinas();

  return (
    <AnimatePresence mode='wait'>
      <MaquinaProvider>
        <Container maxW={'4xl'} py={8}>
          <Heading as={'h1'} size={'xl'} textAlign={'center'} fontFamily={'monospace'}>
            <Link to={'/'}>Simulador Máquina de Turing</Link>
          </Heading>
          <Divider mt={4} mb={10} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/crear' element={<Turing />} />
          </Routes>
        </Container>
      </MaquinaProvider>
    </AnimatePresence>
  );
}

export default App;
