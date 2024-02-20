import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

// Your interfaces...

export default function Form() {
  return (
    <Box flex={0.5}>
      <VStack spacing={3}>
        <FormControl id='description'>
          <FormLabel>Descripción</FormLabel>
          <Textarea placeholder='Introduce la descripción' />
        </FormControl>
        <FormControl id='states'>
          <FormLabel>Estados</FormLabel>
          <Input placeholder='Introduce los estados' />
        </FormControl>
        <FormControl id='alphabet'>
          <FormLabel>Alfabeto</FormLabel>
          <Input placeholder='Introduce el alfabeto' />
        </FormControl>
        <FormControl id='blank'>
          <FormLabel>Blanco</FormLabel>
          <Input placeholder='Introduce el blanco' />
        </FormControl>
        <FormControl id='finalState'>
          <FormLabel>Estado Final</FormLabel>
          <Input placeholder='Introduce el estado final' />
        </FormControl>
        <FormControl id='initialState'>
          <FormLabel>Estado Inicial</FormLabel>
          <Input placeholder='Introduce el estado inicial' />
        </FormControl>
        <FormControl id='transitions'>
          <FormLabel>Transiciones</FormLabel>
          <Textarea placeholder='Introduce las transiciones' maxH={'100px'} />
        </FormControl>
        <Button colorScheme='blue' type='submit' w={'full'}>
          Crear máquina
        </Button>
      </VStack>
    </Box>
  );
}
