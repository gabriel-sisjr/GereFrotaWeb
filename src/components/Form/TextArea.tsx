import { VStack, Text, Textarea as ChakraTextarea, TextareaProps as ChakraTextareaProps } from '@chakra-ui/react';

interface TextareaProps extends ChakraTextareaProps {
  label: string;
}
export function Textarea({ label, ...rest }: TextareaProps) {
  return (
    <VStack w="100%" spacing="6" align="right" mt={["6", "8"]} >
      <Text>{label}</Text>
      <ChakraTextarea
        focusBorderColor="facebook.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor:
            'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </VStack>
  );
}