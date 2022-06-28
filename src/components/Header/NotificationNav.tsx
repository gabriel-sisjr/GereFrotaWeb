
import { HStack, IconButton, useColorMode } from '@chakra-ui/react'
import { RiNotificationLine } from 'react-icons/ri';

export function NotificationNav() {
  const { colorMode } = useColorMode()
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.800"
      borderRightWidth={1}
      borderColor="gray.300"
    >
      <IconButton
        bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
        aria-label='abre as notificações de manutenção'
        icon={<RiNotificationLine />}
        fontSize="20"
      />
    </HStack>
  );
}
