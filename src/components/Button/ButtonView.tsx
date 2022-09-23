import { Button, Icon, Text, useColorModeValue, ButtonProps } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";


export function ButtonView({ ...rest }: ButtonProps) {
  return (
    <Button as={'a'} size={'md'} fontSize={'sm'} colorScheme={'whatsapp'}
      disabled
      _disabled={{
        bg: 'whatsapp.500',
      }}
      _hover={{ bg: useColorModeValue('whatsapp.700', 'whatsapp.400') }}
      leftIcon={<Icon as={RiSearchLine} fontSize={'xl'} color={'white'} />}
      {...rest}
    >
      <Text color={'white'}>Visualizar</Text>
    </Button>
  );
}