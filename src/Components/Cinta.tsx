import { Flex, Text } from '@chakra-ui/react';

interface Props {
  cinta: string[];
  cabeza: number;
  setCabeza: React.Dispatch<React.SetStateAction<number>>;
  isEjecutando: boolean;
}

export default function Cinta({ cinta, cabeza, setCabeza, isEjecutando }: Props) {
  return (
    <Flex gap={3} overflowX={'auto'} mt={8} p={2}>
      {cinta.map((symbol, index) => (
        <Flex
          key={index}
          direction={'column'}
          alignItems={'center'}
          gap={1}
          transition={'all 0.2s ease-in-out'}
          _hover={{ cursor: 'pointer', transform: 'scale(1.03)' }}
        >
          <Flex
            key={index}
            style={{ color: index === cabeza ? '#2b6cb0' : 'white' }}
            px={3}
            border={'3px solid white'}
            borderRadius={'lg'}
            textAlign={'center'}
            minW={'50px'}
            boxSize={'80px'}
            justifyContent={'center'}
            alignItems={'center'}
            onClick={() => {
              if (!isEjecutando) setCabeza(index);
            }}
          >
            <Text fontSize={'3xl'}>{symbol}</Text>
          </Flex>
          {index === cabeza && (
            <Text color='#2b6cb0' fontSize={'3xl'} transition={'all 0.2s ease-in-out'}>
              ▲
            </Text>
          )}
        </Flex>
      ))}
    </Flex>
  );
}
