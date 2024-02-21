import { Divider } from '@chakra-ui/react';
import Diagrama from './Diagrama';
import Form from './Form';

const Turing = () => {
  return (
    <>
      <Form />

      <Divider my={8} />
      <Diagrama isCreando={true} />

      <Divider />
    </>
  );
};

export default Turing;
