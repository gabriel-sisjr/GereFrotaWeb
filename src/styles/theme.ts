import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const theme = extendTheme({
  config: <ThemeConfig>{
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
});

export default theme;
