import {
  Flex,
  Button,
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue
} from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";
import { RiNotificationLine, RiSearchLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function Manutencao() {
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
            <Heading size="lg" fontWeight="normal">Solicitações</Heading>
            <HStack>
              <Text fontWeight="bold" fontSize="lg">1</Text>
              <Icon as={RiNotificationLine} fontSize={["24", "30"]} />
            </HStack>
          </Flex>
          <Divider my="6" borderColor="gray.700" />
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Icon as={AiFillCar} fontSize="20" />
                </Th>
                <Th>Status</Th>
                {isWideVersion && <Th>Data da Solicitação</Th>}
                <Th w="8">Ação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]} color="gray.300" w="8">
                  <Icon as={AiFillCar} fontSize={"20"} color="red.500" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Número da Solicitação</Text>
                    <Text fontSize="sm" color="gray.300">Status</Text>
                  </Box>
                </Td>
                {isWideVersion &&
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Unidade</Text>
                      <Text fontSize="sm" color="gray.300">4 de Abril de 2021</Text>
                    </Box>
                  </Td>}
                <Td>
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