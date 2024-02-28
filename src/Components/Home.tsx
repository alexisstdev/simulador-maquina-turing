import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { FormEvent, useContext, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import useMaquinas from '../hooks/useMachines';
import useTuring from '../hooks/useTuring';
import { MaquinaTuring } from '../types/types';
import Cinta from './Cinta';
import Detalles from './Detalles';
import Diagrama from './Diagrama';
import { Context } from './MaquinaProvider';

export default function Home() {
  const {
    entrada,
    cinta,
    cabeza,
    isEjecutando,
    setEntrada,
    ejecutarMaquina,
    setCinta,
    setCabeza,
  } = useTuring();

  const { machines } = useMaquinas();
  const { setMaquina, maquina: selectedMaquina } = useContext(Context);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    ejecutarMaquina();
  }

  useEffect(() => {
    if (machines.length > 0) {
      setMaquina(machines[3]);
    }
  }, [machines, setMaquina]);

  useEffect(() => {
    if (selectedMaquina) {
      setCinta([selectedMaquina.blanco]);
    }
  }, [selectedMaquina, setCinta]);

  return (
    <>
      <Flex
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        mt={8}
        mb={4}
        gap={8}
      >
        <Box flex={0.5}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={'2xl'}>Cargar máquina</Text>
            <Button
              leftIcon={<FiPlus />}
              onClick={() => {
                navigate('/crear');
              }}
              ml={4}
            >
              Crear máquina
            </Button>
          </Flex>
          <Select
            placeholder='Seleccionar máquina'
            mt={4}
            value={selectedMaquina.descripcion}
            onChange={(e) => {
              const maquinaSeleccionada = machines.find(
                (machine) => machine.descripcion === e.target.value
              ) as MaquinaTuring;

              if (!maquinaSeleccionada) return;

              return setMaquina(maquinaSeleccionada);
            }}
          >
            {machines.map((machine, index) => (
              <option key={index} value={machine.descripcion} style={{ color: 'black' }}>
                {machine.descripcion}
              </option>
            ))}
          </Select>
          <form onSubmit={handleSubmit}>
            <FormLabel mt={4}>Entrada</FormLabel>

            <Input
              value={entrada}
              onChange={(e) => {
                setEntrada(e.target.value);

                setCinta([...e.target.value].concat(selectedMaquina.blanco));
              }}
            />
            <Button type='submit' mt={4} colorScheme='blue' size={'lg'} width={'100%'}>
              Ejecutar
            </Button>
          </form>
        </Box>
        <Box flex={0.5}>
          <Diagrama />
        </Box>
      </Flex>
      <Divider my={8} />
      <Detalles />
      <Cinta
        cinta={cinta}
        cabeza={cabeza}
        setCabeza={setCabeza}
        isEjecutando={isEjecutando}
      />
      <Text opacity={0.7} textAlign='center'>
        Seleccione una celda de la cinta para posicionar el cabezal.
      </Text>
    </>
  );
}
