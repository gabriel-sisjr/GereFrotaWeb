import { Button, ButtonProps, Text, useColorModeValue } from "@chakra-ui/react";

interface ButtonCancelProps extends ButtonProps {
  name: string;
}

export function ButtonCancel({ name, ...rest }: ButtonCancelProps) {
  return (
    <Button
      as={'a'} size={'lg'} fontSize={'md'}
      colorScheme={'gray'} disabled
      _disabled={{
        bg: 'gray.500',
      }}
      _hover={{ bg: useColorModeValue('gray.800', 'gray.300') }}
      cursor={"pointer"}
      {...rest}
    >
      <Text color={'white'}>{name}</Text>
    </Button>
  );
}