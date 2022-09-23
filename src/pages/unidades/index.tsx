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
import { BiBuildingHouse } from "react-icons/bi";
import { RiAddLine } from "react-icons/ri";
import { ButtonDefault } from "~/components/Button/ButtonDefault";
import { ButtonView } from "~/components/Button/ButtonView";
import { Pagination } from "~/components/Pagination";

export default function Unidades() {
  return (
    <Flex minH={'100vh'}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius={10}
      boxShadow={'lg'} p={8}
      alignItems={'center'}
      justifyContent={'center'}>
      <Box minH={'100vh'} w={'95%'}>
        <Flex justify={'space-between'}>
          <Heading size={'lg'}>Unidades</Heading>
          <Link href="unidades/create" passHref >
            <ButtonDefault name={'Nova Unidade'} iconName={RiAddLine} />
          </Link>
        </Flex>
        <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
        <Box>
          <TableContainer>
            <Table colorScheme={useColorModeValue('gray', 'whiteAlpha')}>
              <Thead>
                <Tr>
                  <Th>
                    <Icon as={BiBuildingHouse} fontSize={'xl'} />
                  </Th>
                  <Th>Status</Th>
                  <Th>Data do Cadastro</Th>
                  <Th>Ação</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Icon as={BiBuildingHouse} fontSize={'xl'} />
                  </Td>
                  <Td>
                    <Text fontWeight={'bold'}>Sigla da Unidade</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>Endereço da Unidade</Text>
                  </Td>
                  <Td fontWeight={'bold'}>04 de Abril de 2022</Td>
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