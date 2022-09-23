import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillCar } from "react-icons/ai";
import { RiSteering2Fill } from "react-icons/ri";
import { Pagination } from "~/components/Pagination";

export default function Home() {
  return (

    <Flex minH={'100vh'}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius={10}
      boxShadow={'lg'} p={8}
      alignItems={'center'}
      justifyContent={'center'}>
      <Box minH={'100vh'} w={'95%'}>
        <Heading size={'lg'}>Veículos Disponíveis</Heading>
        <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
        <Box>
          <TableContainer>
            <Table colorScheme={useColorModeValue('gray', 'whiteAlpha')}>
              <Thead>
                <Tr>
                  <Th><Icon as={AiFillCar} fontSize={'xl'} /></Th>
                  <Th>Veículo</Th>
                  <Th>Modelo do Veículo</Th>
                  <Th>Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Icon as={AiFillCar} fontSize={'xl'} />
                  </Td>
                  <Td>
                    <Text fontWeight={'bold'}>Placa do Veículo</Text>
                  </Td>
                  <Td>
                    <Text fontWeight={'bold'}>Modelo</Text>
                  </Td>
                  <Td>
                    <Link href={'home/menuVeiculo'} passHref>
                      <Button as={'a'} size={'md'} fontSize={'sm'}
                        colorScheme={'facebook'} disabled
                        _disabled={{
                          bg: 'facebook.500',
                        }}
                        _hover={{ bg: useColorModeValue('facebook.800', 'facebook.300') }}
                        leftIcon={<Icon as={RiSteering2Fill} fontSize={'xl'} color={'white'} />}
                      >
                        <Text color={'white'}>Usar Veículo</Text>
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Pagination />
        </Box>
      </Box>
    </Flex >
  )
}