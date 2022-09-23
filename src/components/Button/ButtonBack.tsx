import { Button, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export function ButtonBack({ ...rest }) {
  return (
    <Button
      as={'a'} size={'md'} fontSize={'sm'}
      colorScheme={'gray'} disabled
      _disabled={{
        bg: 'gray.500',
      }}
      _hover={{ bg: useColorModeValue('gray.800', 'gray.300') }}
      leftIcon={<Icon as={FaArrowAltCircleLeft} fontSize={'xl'} color={'white'} />}
      {...rest}
    >
      <Text color={'white'}>Voltar</Text>
    </Button>
  );
}