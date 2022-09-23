import { Box, BoxProps, CloseButton, Divider, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { LinkItemsList, LinkItemsRegistration } from "./LinkItems";
import { NavItem } from "./NavItem";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box transition={"3s ease"}
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderWidth={'2px'}
      w={{ base: 'full', md: '60' }}
      pos={'fixed'}
      h={'full'}
      {...rest}>
      <Flex h={'20'} alignItems={'center'} mx={8} justifyContent={'space-between'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} w={64} fontFamily={'monospace'}>
          GereFrotas
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItemsList.map((link) => (
        <NavItem key={link.name} href={link.route} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Flex my={4} alignItems={"center"} justifyContent={"center"} >
        <Divider w={'50%'} borderColor={useColorModeValue('gray.500', 'gray.700')} ml={'5%'} mr={'5%'} />
        <Text fontSize={'xs'}> Cadastros </Text>
        <Divider w={'50%'} borderColor={useColorModeValue('gray.500', 'gray.700')} ml={'5%'} mr={'5%'} />
      </Flex>
      {LinkItemsRegistration.map((link) => (
        <NavItem key={link.name} href={link.route} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}