import { Button, Icon, ButtonProps } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

interface ButtonVoltarProps extends ButtonProps {
  nameButton: string;
}

export function ButtonVoltar({ nameButton, ...rest }: ButtonVoltarProps) {
  return (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="whiteAlpha"
      leftIcon={<Icon as={FaArrowAltCircleLeft} fontSize="20" />}
      {...rest}
    >
      {nameButton}
    </Button>
  );
}