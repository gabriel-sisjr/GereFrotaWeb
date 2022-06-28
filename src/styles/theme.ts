import { ChakraTheme, extendTheme } from '@chakra-ui/react';

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    primary: "#03438B",
    warning: "#E3DB0B",
    danger: "#E63946",
    sucess: "#358F43",
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
}

export const theme = extendTheme(customTheme)
