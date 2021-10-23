import {
  Box, Flex, Heading, HStack,
  Icon, Text, Divider, VStack,
  Table, Thead, Tr, Th,
  Tbody, SimpleGrid, Button,
  useBreakpointValue
} from '@chakra-ui/react';
import Link from 'next/link'
import { FaFileUpload } from 'react-icons/fa';
import { RiCarLine } from 'react-icons/ri';
import { ButtonVoltar } from '../../../components/Buttons/ButtonVoltar';
import { CheckVistoria } from '../../../components/Form/CheckVistoria';
import { Input } from '../../../components/Form/Input';
import { Textarea } from '../../../components/Form/TextArea';
import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';
import { TrTable } from '../../../components/Table/TrTable';

export default function RealizarVistoria() {
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
            <Link href="/home/menuVeiculo" passHref>
              <ButtonVoltar nameButton={isWideVersion ? 'Voltar' : ''} />
            </Link>
          </Flex>
          <Divider my="6" borderColor="gray.700" />
          <Box>
            <VStack spacing="8" align="left">
              <Input
                type="number"
                name="leituraOdometro"
                label="Leitura do Odômetro"
                maxWidth="280px"
              />
              <Text
                fontSize="lg"
                ml="4"
                fontWeight="bold"
                color="gray.300"
              >
                Marque caso haja alguma alteração.
              </Text>
            </VStack>
          </Box>
          <Divider my="6" borderColor="gray.700" />
          <Table colorScheme="whiteAlpha" size={"sm"} >
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Lado Direito</Th>
                <Th>Lado Esquerdo</Th>
              </Tr>
            </Thead>
            <Tbody>
              <TrTable campo="Farol" />
              <TrTable campo="Placa" />
              <TrTable campo="Freio" />
              <TrTable campo="Lanterna Dianteira" />
              <TrTable campo="Lanterna Traseira" />
              <TrTable campo="Rodas" />
              <TrTable campo="Pneus" />
              <TrTable campo="Calotas" />
              <TrTable campo="Lataria" />
              <TrTable campo="Espelho Retrovisor" />
            </Tbody>
          </Table>
          <Flex
            mt="8"
            justify="space-around"
            align="center"
            w="100%"
          >
            <SimpleGrid minChildWidth="200px" spacing={["6", "8"]} w="95%">
              <CheckVistoria label="Luz de Placa" />
              <CheckVistoria label="Luz de Ré" />
              <CheckVistoria label="Luz Interna" />
              <CheckVistoria label="Bateria" />
              <CheckVistoria label="Extintor" />
              <CheckVistoria label="Estepe" />
              <CheckVistoria label="Macaco" />
              <CheckVistoria label="Chave de Roda" />
              <CheckVistoria label="Rádio" />
              <CheckVistoria label="Painel" />
              <CheckVistoria label="Retrovisor Interno" />
              <CheckVistoria label="Luminoso (Giro)" />
              <CheckVistoria label="Sirene" />
              <CheckVistoria label="Antena" />
              <CheckVistoria label="Painel de Instrumentos" />
              <CheckVistoria label="Estojo de Ferramentas" />
              <CheckVistoria label="Módulo de controle(Giro/Sirene)" />
              <CheckVistoria label="Cartão de Abastecimento" />
              <CheckVistoria label="Documento de Licenciamento" />
              <CheckVistoria label="Antena de Segurança" />
              <CheckVistoria label="Nívdel de Água do Reservatório" />
            </SimpleGrid>
          </Flex>
          <Textarea label="Descrição" />
          <VStack
            w="100%"
            mt="8"
            spacing="6"
            align="right"
            maxWidth="200px"
          >
            <Button
              as="a"
              size="md"
              fontSize="md"
              colorScheme="facebook"
              leftIcon={<Icon as={FaFileUpload} fontSize={["20", "24"]} />}
            >
              Anexar Arquivo
            </Button>
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