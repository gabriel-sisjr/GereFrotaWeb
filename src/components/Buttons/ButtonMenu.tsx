import { Button, Icon, VStack, ButtonProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";


interface ButtonMenuProps extends ButtonProps {
  nameButtom: string;
  surnameButton?: String;
  icon: ElementType;
}
export function ButtonMenu({ nameButtom, surnameButton, icon, ...rest }: ButtonMenuProps) {
  return (
    <Button
      colorScheme="facebook"
      fontSize="sm"
      as="a"
      w="32"
      h={["140", "170"]}
      {...rest}>
      <VStack spacing="6">
        <Icon as={icon} fontSize="38" />
        <VStack spacing="1">
          <Text fontSize={["sm", "md", "lg"]}>{nameButtom}</Text>
          <Text fontSize={["sm", "md", "lg"]}>{surnameButton}</Text>
        </VStack>
      </VStack>
    </Button>
  );
}