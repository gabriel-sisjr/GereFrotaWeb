import {
  Flex,
  Box,
  Heading,
  Divider,
  Table,
  Text,
  Thead,
  Icon,
  Button,
  useBreakpointValue,
  Tr,
  Th,
  Td,
  Tbody
} from "@chakra-ui/react";
import Link from 'next/link';
import { AiFillCar } from "react-icons/ai";
import { RiSteering2Fill } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Veículos Disponíveis</Heading>
          </Flex>
          <Divider my="6" borderColor="gray.700" />

          <Table colorScheme="whiteAlpha" >
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8"></Th>
                <Th>Veículo</Th>
                {isWideVersion && <Th>Modelo</Th>}
                <Th textAlign="center">Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} w="8">
                  <Icon as={AiFillCar} fontSize="20" />
                </Td>
                <Td>
                  <Text fontWeight="bold">Placa do Veículo</Text>
                </Td>
                {isWideVersion && <Td>
                  <Text fontWeight="bold">Modelo</Text>
                </Td>}
                <Td w="8">
                  <Link href="home/menuVeiculo" passHref>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="facebook"
                      leftIcon={<Icon as={RiSteering2Fill} fontSize={["20", "24"]} />}
                    >
                      {isWideVersion ? 'Usar Veículo' : ''}
                    </Button>
                  </Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}