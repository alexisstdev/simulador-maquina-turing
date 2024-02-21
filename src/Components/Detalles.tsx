import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Context } from './MaquinaProvider';

export default function Detalles() {
  const { maquina } = useContext(Context);

  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={4}
      overflowX={'auto'}
    >
      <Text fontSize='3xl'>
        Q: {'{ ' + maquina.estados?.map((estado) => estado.nombre).join(', ') + ' }'}
      </Text>

      <Text fontSize='3xl'>Σ: {'{ ' + maquina?.alfabeto.join(', ') + ' }'}</Text>

      <Text fontSize='3xl'>qf: {'{ ' + maquina?.estadoFinal.nombre + ' }'}</Text>

      <Text fontSize='3xl'>q0: {'{ ' + maquina?.estadoInicial.nombre + ' }'}</Text>
    </Flex>
  );
}
