import { Button, ButtonProps, Icon, Text, useColorModeValue } from "@chakra-ui/react";

interface ButtonSalveProps extends ButtonProps {
  name: string;
}

export function ButtonSave({ name, ...rest }: ButtonSalveProps) {
  return (
    <Button
      as={'a'} size={'lg'} fontSize={'md'}
      colorScheme={'facebook'} disabled
      _disabled={{
        bg: 'facebook.500',
      }}
      _hover={{ bg: useColorModeValue('facebook.800', 'facebook.300') }}
      cursor={"pointer"}
      {...rest}
    >
      <Text color={'white'}>{name}</Text>
    </Button>
  );
}