import { ChakraProvider } from '@chakra-ui/react';
import theme from '~/styles/theme';
import SidebarWithHeader from '~/components/Sidebar/SidebarWithHeader';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    if (router.pathname === '/') {
      return (
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      )
    }
    return (
      <ChakraProvider theme={theme}>
        <SidebarWithHeader>
          <Component {...pageProps} />
        </SidebarWithHeader>
      </ChakraProvider>
    )
  }
}


export default MyApp;
