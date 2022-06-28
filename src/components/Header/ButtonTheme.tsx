import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export function ButtonTheme() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
      aria-label='Toogle theme'
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunFill />}
      onClick={toggleColorMode}
    />
  );
}
