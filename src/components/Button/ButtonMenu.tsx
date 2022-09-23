import {
  Button,
  ButtonProps,
  Icon,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { ElementType } from "react";

interface ButtonMenuProps extends ButtonProps {
  nameButton: string;
  surNameButton?: string;
  icon: ElementType;
}
export function ButtonMenu({ nameButton, surNameButton, icon, ...rest }: ButtonMenuProps) {
  return (
    <Button
      colorScheme={'facebook'}
      fontSize={'2xl'}
      as={'a'}
      w={32}
      h={170}
      disabled
      _disabled={{
        bg: 'facebook.500',
      }}
      _hover={{ bg: useColorModeValue('facebook.800', 'facebook.300') }}
      cursor={'pointer'}
      {...rest}
    >
      <VStack>
        <Icon as={icon} fontSize={'3xl'} color={'white'} />
        <VStack>
          <Text color={'white'} fontSize={'xl'}>{nameButton}</Text>
          <Text color={'white'} fontSize={'xl'}>{surNameButton}</Text>
        </VStack>
      </VStack>
    </Button>
  )
}