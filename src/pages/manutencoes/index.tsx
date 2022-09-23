import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
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
import { RiNotificationLine } from "react-icons/ri";
import { ButtonView } from "~/components/Button/ButtonView";
import { Pagination } from "~/components/Pagination";

export default function Manutencoes() {
  return (
    <Flex minH={'100vh'}
      bg={useColorModeValue('white', 'gray.800')} borderRadius={10} boxShadow={'lg'} p={8}
      alignItems={'center'} justifyContent={'center'}>
      <Box minH={'100vh'} w={'95%'}>
        <Flex justify={'space-between'}>
          <Heading size={'lg'}>Solicitações</Heading>
          <HStack>
            <Text fontWeight={'bold'} fontSize={'2xl'}>1</Text>
            <Icon as={RiNotificationLine} fontSize={'2xl'} />
          </HStack>
        </Flex>
        <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
        <Box>
          <TableContainer>
            <Table colorScheme={useColorModeValue('gray', 'whiteAlpha')}>
              <Thead>
                <Tr>
                  <Th><Icon as={AiFillCar} fontSize={'xl'} /></Th>
                  <Th>Status</Th>
                  <Th>Data da Solicitação</Th>
                  <Th>Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Icon as={AiFillCar} fontSize={'xl'} color="red.500" />
                  </Td>
                  <Td>
                    <Text fontWeight={'bold'}>Placa do Veículo</Text>
                    <Text fontSize={'sm'}>Número da Solicitação</Text>
                  </Td>
                  <Td>
                    <Text fontWeight={'bold'}>Unidade</Text>
                    <Text fontSize={'sm'}>4 de Abril de 2021</Text>
                  </Td>
                  <Td>
                    <Link href={'/manutencoes/view'} passHref>
                      <ButtonView />
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