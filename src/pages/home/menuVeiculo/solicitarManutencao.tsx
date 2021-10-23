import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  Divider,
  VStack,
  SimpleGrid,
  Button
} from "@chakra-ui/react";
import Link from 'next/link';
import { FaFileUpload } from "react-icons/fa";
import { RiAddLine, RiCarLine } from "react-icons/ri";
import { ButtonVoltar } from "../../../components/Buttons/ButtonVoltar";
import { Input } from "../../../components/Form/Input";
import { Textarea } from "../../../components/Form/TextArea";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";

export default function SolicitarManutencao() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              <HStack spacing="8">
                <Icon as={RiCarLine} fontSize={["24", "32"]} />
                <Text fontWeight="bold" fontSize={["20", "24"]}>ABNT-2401</Text>
              </HStack>
            </Heading>
            <Link href="/home" passHref>
              <ButtonVoltar nameButton={isWideVersion ? 'Voltar' : ''} />
            </Link>
          </Flex>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="leituraOdometro" label="Leitura do Odômetro" type="date" />
              <Input w="240px" name="data" label="Data" type="date" />
            </SimpleGrid>
            <Flex mt="6" justify="space-between" align="center" w="100%">
              <Text fontWeight="bold" fontSize="lg">Defeito</Text>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="facebook"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Novo Defeito
              </Button>
            </Flex>
            <Divider my="6" borderColor="gray.700" />
            <VStack spacing="4" w="100%">
              <SimpleGrid minChildWidth="240px" w="100%">
                <Input w="240px" name="tipoManutencao" label="Tipo Manutenção" />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" w="100%">
                <Textarea label="Descrição" />
              </SimpleGrid>
              <SimpleGrid maxChildWidth="240px" w="100%">
                <Button
                  mt="8"
                  w="200px"
                  as="a"
                  size="md"
                  fontSize="md"
                  colorScheme="facebook"
                  leftIcon={<Icon as={FaFileUpload} fontSize={["20", "24"]} />}
                >
                  Anexar Arquivo
                </Button>
              </SimpleGrid>
            </VStack>
          </VStack>
          <Divider my="6" borderColor="gray.700" />
          <Flex mt="8" justify="flex-end">
            <HStack>
              <Link href="/home/menuVeiculo/" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="facebook">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}