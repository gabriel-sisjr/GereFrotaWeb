import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
  useColorMode
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { RiNotificationLine } from 'react-icons/ri';
import Link from "next/link";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }} height={20}
      alignItems={'center'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderBottomWidth={'1px'}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant={'outline'}
        aria-label={'open menu'}
        icon={<FiMenu />}
      />
      <Text display={{ base: 'flex', md: 'none' }}
        fontSize={'2xl'}
        fontFamily={'monospace'}
        fontWeight={'bold'}
      >
        GereFrotas
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size={'lg'} variant={'ghost'} aria-label={'Toggle Color Mode'}
          icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
          onClick={() => toggleColorMode()}
        />
        <IconButton size={'lg'} variant={'ghost'} aria-label={'open menu'}
          icon={<RiNotificationLine />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2}
              transition={'all 0.3s'}
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'md'}
                  src={'https://github.com/clovijan.png'} />
                <VStack display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize={'sm'}>Clovijan Rocha</Text>
                  <Text fontSize={'xs'} color={'gray.600'}>clovijan@gmail.com</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Preferências</MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link href="/">Sair</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}