import {
  Box,
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
import { FaRegIdCard } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";
import { ButtonDefault } from "~/components/Button/ButtonDefault";
import { ButtonView } from "~/components/Button/ButtonView";
import { Pagination } from "~/components/Pagination";

export default function Conduntores() {
  return (
    <Flex minH={'100vh'}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius={10}
      boxShadow={'lg'} p={8}
      alignItems={'center'}
      justifyContent={'center'}>
      <Box minH={'100vh'} w={'95%'}>
        <Flex justify={'space-between'}>
          <Heading size={'lg'}>Condutores</Heading>
          <Link href="condutores/create" passHref >
            <ButtonDefault name={'Novo Condutor'} iconName={RiAddLine} />
          </Link>
        </Flex>
        <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
        <Box>
          <TableContainer>
            <Table colorScheme={useColorModeValue('gray', 'whiteAlpha')}>
              <Thead>
                <Tr>
                  <Th>
                    <Icon as={FaRegIdCard} fontSize={'xl'} />
                  </Th>
                  <Th>Status</Th>
                  <Th>Data de Cadastro</Th>
                  <Th>Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Icon as={FaRegIdCard} fontSize={'xl'} />
                  </Td>
                  <Td>
                    <Text fontWeight={'bold'}>Condutor</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>Patente do Condutor</Text>
                  </Td>
                  <Td fontWeight={'bold'}>04 de Abril de 2021</Td>
                  <Td>
                    <Link href={'#'} passHref>
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