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
    <HStack spacing={"8"}>
      <ChakraCheckbox size={"lg"} colorScheme={"facebook"} {...rest} />
      <Text fontWeight={"bold"}>{label}</Text>
    </HStack>
  );
}