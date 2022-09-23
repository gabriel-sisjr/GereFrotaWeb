import {
  Text,
  Textarea as ChakraTextArea,
  TextareaProps as ChakraTextAreaProps,
  VStack,

} from "@chakra-ui/react"

interface TextAreaProps extends ChakraTextAreaProps {
  label: string;
}

export function TextArea({ label, ...rest }: TextAreaProps) {
  return (
    <VStack align={"right"}>
      <Text fontWeight={"bold"}>{label}</Text>
      <ChakraTextArea />
    </VStack>
  )
}