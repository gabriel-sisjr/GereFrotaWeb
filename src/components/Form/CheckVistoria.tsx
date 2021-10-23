import {
  HStack,
  Checkbox as ChakraCheckbox,
  Text,
  CheckboxProps as ChakraCheckboxProps
} from '@chakra-ui/react';

interface CheckboxProps extends ChakraCheckboxProps {
  label: string;
}

export function CheckVistoria({ label, ...rest }: CheckboxProps) {
  return (
    <HStack>
      <ChakraCheckbox colorScheme="facebook" {...rest} />
      <Text fontSize="sm">{label}</Text>
    </HStack>
  );
}