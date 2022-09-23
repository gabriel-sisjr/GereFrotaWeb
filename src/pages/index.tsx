import { useColorModeValue } from '@chakra-ui/color-mode';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Text,
  Input,
  Checkbox
} from '@chakra-ui/react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <Flex as={'form'} minH={'100vh'} align={'center'} justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Faça Login em sua conta</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>e desfrute de todas as funcionalidades</Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type={"email"} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type={"password"} />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'}
                justify={'space-between'}>
                <Checkbox>Lembre-me</Checkbox>
              </Stack>
              <Link href={"/home"}>
                <Button type="submit"
                  bg={'blue.600'}
                  color={'white'}
                  _hover={{ bg: 'blue.700' }}
                >
                  Entrar
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
};

