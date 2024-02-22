import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';
import useMaquinas from '../hooks/useMachines';
import { Estado, Transicion } from '../types/types';
import { Context } from './MaquinaProvider';

export default function Form() {
  const [transiciones, setTransiciones] = useState<Transicion[]>([
    {
      id: 0,
      desde: { nombre: '', id: 0 },
      hacia: { nombre: '', id: 0 },
      leer: '',
      escribir: '',
      direccion: '',
      almacenar: '',
    },
  ]);

  const { addMachine } = useMaquinas();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isValidSymbol = (symbol, alphabet, extras) => {
    return alphabet.includes(symbol) || (extras && extras.includes(symbol));
  };

  const { maquina, setMaquina } = useContext(Context);

  useEffect(() => {
    setMaquina((maquina) => ({ ...maquina, transiciones }));
  }, [transiciones, setMaquina]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          addMachine(maquina);

          alert('Máquina guardada correctamente');
        }}
      >
        <Text fontSize={'3xl'}>Detalles de la máquina</Text>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap={4}
          justifyContent={'space-between'}
          mt={4}
        >
          <FormControl id='description'>
            <FormLabel>Descripción</FormLabel>
            <Input
              placeholder='Descripción de lo que hace la máquina.'
              required
              onChange={(e) => {
                setMaquina({ ...maquina, descripcion: e.target.value });
              }}
            />
          </FormControl>
          <FormControl id='alphabet'>
            <FormLabel>Alfabeto</FormLabel>
            <Input
              placeholder='Alfabeto separado por comas, ej: a,b,c'
              required
              onChange={(e) => {
                const alfabeto = e.target.value.split(',');

                setMaquina({ ...maquina, alfabeto });
              }}
            />
          </FormControl>
          <FormControl id='states'>
            <FormLabel>Estados</FormLabel>
            <Input
              placeholder='Estados separados por comas, ej: q0,q1,q2,q3'
              required
              onChange={(e) => {
                const estados = e.target.value.split(',').map((estado, index) => {
                  return { nombre: estado, id: index };
                });

                setMaquina({ ...maquina, estados });
              }}
            />
          </FormControl>
          <FormControl id='blank'>
            <FormLabel>Blanco</FormLabel>
            <Input
              placeholder='Blanco de la cinta, (solo un símbolo) ej: △'
              required
              onChange={(e) => {
                setMaquina({ ...maquina, blanco: e.target.value });
              }}
            />
          </FormControl>
          <FormControl id='extras'>
            <FormLabel>Simbolos extras como marcas (opcional)</FormLabel>
            <Input
              placeholder='Simbolos extras separados por comas, ej: #,&,!'
              onChange={(e) => {
                const extras = e.target.value.split(',');

                setMaquina({ ...maquina, simbolos: extras });
              }}
            />
          </FormControl>
          <FormControl id='extras'>
            <FormLabel>Simbolo de almacenamiento</FormLabel>
            <Input
              placeholder='Simbolo de almacenamiento, (solo un símbolo) ej: σ'
              onChange={(e) => {
                setMaquina({ ...maquina, cintaAlmacenada: e.target.value });
              }}
            />
          </FormControl>
          <FormControl id='initialState'>
            <FormLabel>Estado Inicial</FormLabel>
            <Select
              placeholder='Selecciona el estado inicial'
              required
              onChange={(e) => {
                setMaquina({
                  ...maquina,
                  estadoInicial: maquina.estados.find(
                    (estado) => estado.nombre === e.target.value
                  ) as Estado,
                });
              }}
            >
              {maquina.estados?.map((estado) => (
                <option key={estado.id} style={{ color: 'black' }}>
                  {estado.nombre}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id='finalState'>
            <FormLabel>Estado Final</FormLabel>
            <Select
              placeholder='Selecciona el estado final'
              required
              onChange={(e) => {
                setMaquina({
                  ...maquina,
                  estadoFinal: maquina.estados.find(
                    (estado) => estado.nombre === e.target.value
                  ) as Estado,
                });
              }}
            >
              {maquina.estados?.map((estado) => (
                <option key={estado.id} style={{ color: 'black' }}>
                  {estado.nombre}
                </option>
              ))}
            </Select>
          </FormControl>
        </SimpleGrid>
        <Divider my={8} />
        <FormControl id='transitions'>
          <Flex justifyContent={'space-between'} alignItems={'end'}>
            <Text fontSize={'3xl'}>Transiciones</Text>
            <Button
              colorScheme='blue'
              leftIcon={<FiPlus />}
              onClick={() => {
                setTransiciones([
                  ...transiciones,
                  {
                    id: transiciones.length,
                    desde: { nombre: '', id: 0 },
                    hacia: { nombre: '', id: 0 },
                    leer: '',
                    escribir: '',
                    direccion: '',
                  },
                ]);
              }}
            >
              Agregar
            </Button>
          </Flex>
          <VStack mt={3} gap={4}>
            {transiciones.map((_: Transicion, index: number) => (
              <Flex key={index} gap={3} alignItems={'end'}>
                <FormControl id='from'>
                  <FormLabel>Desde</FormLabel>
                  <Select
                    placeholder='Estado inicial'
                    required
                    onChange={(e) => {
                      const nuevoEstado = maquina.estados.find(
                        (estado) => estado.nombre === e.target.value
                      ) as Estado;

                      const nuevasTransiciones = [...transiciones];
                      nuevasTransiciones[index].desde = nuevoEstado;
                      setTransiciones(nuevasTransiciones);
                    }}
                  >
                    {maquina.estados?.map((estado) => (
                      <option key={estado.id} style={{ color: 'black' }}>
                        {estado.nombre}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl id='to'>
                  <FormLabel>Hacia</FormLabel>
                  <Select
                    placeholder='Estado final'
                    required
                    onChange={(e) => {
                      const nuevoEstado = maquina.estados.find(
                        (estado) => estado.nombre === e.target.value
                      ) as Estado;

                      const nuevasTransiciones = [...transiciones];
                      nuevasTransiciones[index].hacia = nuevoEstado;
                      setTransiciones(nuevasTransiciones);
                    }}
                  >
                    {maquina.estados?.map((estado) => (
                      <option key={estado.id} style={{ color: 'black' }}>
                        {estado.nombre}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl id='read'>
                  <FormLabel>Leer</FormLabel>
                  <Input
                    placeholder='Símbolo a leer'
                    required
                    value={transiciones[index].leer}
                    onChange={(e) => {
                      const symbol = e.target.value;
                      if (
                        symbol === '' ||
                        isValidSymbol(symbol, maquina.alfabeto, maquina?.simbolos)
                      ) {
                        const nuevasTransiciones = [...transiciones];
                        nuevasTransiciones[index].leer = symbol;
                        setTransiciones(nuevasTransiciones);
                      } else {
                        alert('Ingresa un símbolo válido del alfabeto.');
                        // Elimina el valor si no es válido
                        const nuevasTransiciones = [...transiciones];
                        nuevasTransiciones[index].leer = '';
                        setTransiciones(nuevasTransiciones);
                      }
                    }}
                  />
                </FormControl>

                <FormControl id='write'>
                  <FormLabel>Escribir</FormLabel>
                  <Input
                    placeholder='Símbolo a escribir'
                    required
                    value={transiciones[index].escribir}
                    onChange={(e) => {
                      const symbol = e.target.value;
                      if (
                        symbol === '' ||
                        isValidSymbol(symbol, maquina.alfabeto, maquina?.simbolos)
                      ) {
                        const nuevasTransiciones = [...transiciones];
                        nuevasTransiciones[index].escribir = symbol;
                        setTransiciones(nuevasTransiciones);
                      } else {
                        alert('Ingresa un símbolo válido del alfabeto.');
                        // Elimina el valor si no es válido
                        const nuevasTransiciones = [...transiciones];
                        nuevasTransiciones[index].escribir = '';
                        setTransiciones(nuevasTransiciones);
                      }
                    }}
                  />
                </FormControl>

                <FormControl id='store'>
                  <FormLabel>Almacenar (opcional)</FormLabel>
                  <Input
                    placeholder='Símbolo a almacenar'
                    value={transiciones[index].almacenar}
                    onChange={(e) => {
                      const symbol = e.target.value;
                      if (
                        symbol === '' ||
                        isValidSymbol(symbol, maquina.alfabeto, maquina?.simbolos)
                      ) {
                        const nuevasTransiciones = [...transiciones];
                        nuevasTransiciones[index].almacenar = symbol;
                        setTransiciones(nuevasTransiciones);
                      } else {
                        alert('Ingresa un símbolo válido del alfabeto.');
                        // Elimina el valor si no es válido
                        const nuevasTransiciones = [...transiciones];
                        nuevasTransiciones[index].almacenar = '';
                        setTransiciones(nuevasTransiciones);
                      }
                    }}
                  />
                </FormControl>

                <FormControl id='direction'>
                  <FormLabel>Movimiento</FormLabel>
                  <Select
                    placeholder='Movimiento'
                    required
                    onChange={(e) => {
                      const nuevasTransiciones = [...transiciones];
                      nuevasTransiciones[index].direccion = e.target.value;
                      setTransiciones(nuevasTransiciones);
                    }}
                  >
                    <option value='I' style={{ color: 'black' }}>
                      Izquierda
                    </option>
                    <option value='D' style={{ color: 'black' }}>
                      Derecha
                    </option>
                    <option value='N' style={{ color: 'black' }}>
                      Nada
                    </option>
                  </Select>
                </FormControl>

                <IconButton
                  aria-label='Eliminar'
                  icon={<FiTrash />}
                  onClick={() => {
                    if (transiciones.length === 1) {
                      alert('La máquina debe tener al menos una transición');
                      return;
                    }

                    setTransiciones(transiciones.filter((_, i) => i !== index));
                  }}
                />
              </Flex>
            ))}
          </VStack>
        </FormControl>

        <Divider my={8} />
        <Box w={'full'} display={'flex'}>
          <Button colorScheme='blue' type='submit' marginLeft={'auto'}>
            Guardar máquina
          </Button>
        </Box>
      </form>
    </>
  );
}
