import {
  Box, Flex, Heading, Button, Icon,
  useBreakpointValue, Divider, Table,
  Thead, Tr, Th, Checkbox, Tbody,
  Td, Text,
} from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';
import { RiAddLine, RiSearchLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';


export default function ListaVeiculos() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Veículos da Frota</Heading>

            <Link href="veiculos/create" passHref >
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="facebook"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                {isWideVersion ? 'Novo Veículo' : 'Novo'}
              </Button>
            </Link>
          </Flex>
          <Divider my="6" borderColor="gray.700" />

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="facebook" />
                </Th>
                <Th >Veículo</Th>
                <Th></Th>
                <Th textAlign="center">Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}><Checkbox colorScheme="facebook" /></Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Placa do Veículo</Text>
                    <Text fontSize="sm" color="gray.300">Unidade do Veículo</Text>
                  </Box>
                </Td>
                <Td />
                <Td w="8">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whatsapp"
                    leftIcon={<Icon as={RiSearchLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Visualizar' : ''}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}