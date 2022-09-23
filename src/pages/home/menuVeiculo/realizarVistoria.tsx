import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFileUpload } from "react-icons/fa";
import { RiCarLine } from "react-icons/ri";
import { ButtonBack } from "~/components/Button/ButtonBack";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonDefault } from "~/components/Button/ButtonDefault";
import { ButtonSave } from "~/components/Button/ButtonSave";
import { CheckVistoria } from "~/components/Form/CheckVistoria";
import { TextArea } from "~/components/Form/TextArea";
import { TrTable } from "~/components/Table/TrTable";

export default function RealizarVistoria() {
  return (
    <Flex minH={'100vh'}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius={10}
      boxShadow={'lg'} p={8}
      alignItems={'center'}
      justifyContent={'center'}>
      <Box minH={'100vh'} w={'95%'}>
        <Flex justify={'space-between'}>
          <Heading size={'lg'}>
            <HStack spacing={'8'}>
              <Icon as={RiCarLine} fontSize={'2xl'} />
              <Text fontWeight={'bold'} fontSize={'2xl'}>ABNT-2104</Text>
            </HStack>
          </Heading>
          <Link href={'/home/menuVeiculo'} passHref>
            <ButtonBack />
          </Link>
        </Flex>
        <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
        <Box>
          <Box>
            <VStack spacing={"8"} align={"left"}>
              <FormControl>
                <FormLabel>Leitura do Odômetro</FormLabel>
                <Input type="number" w={"xs"} />
              </FormControl>
              <Text fontSize={"lg"} ml="4" fontWeight={"bold"}>
                Marque caso haja alguma alteração.
              </Text>
            </VStack>
          </Box>
          <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
          <TableContainer>
            <Table colorScheme={"gray"} size={"lg"}>
              <Thead>
                <Tr alignItems={'center'}>
                  <Th></Th>
                  <Th><Text align={'center'}>lado direito</Text></Th>
                  <Th><Text align={'center'}>lado esquerdo</Text></Th>
                </Tr>
              </Thead>
              <Tbody>
                <TrTable campo={"Farol"} />
                <TrTable campo={"Freio Dianteiro"} />
                <TrTable campo={"Freio Traseiro"} />
                <TrTable campo={"Lanterna Dianteira"} />
                <TrTable campo={"Lanterna Traseira"} />
                <TrTable campo={"Rodas Dianteiras"} />
                <TrTable campo={"Rodas Traseiras"} />
                <TrTable campo={"Pneu Dianteiro"} />
                <TrTable campo={"Pneu Traseiro"} />
                <TrTable campo={"Calotas Dianteiras"} />
                <TrTable campo={"Calotas Traseiras"} />
                <TrTable campo={"Espelho Retrovisor"} />
              </Tbody>
            </Table>
          </TableContainer>
          <SimpleGrid minChildWidth={"200px"} spacing={"8"} mt={"8"} columns={3}>
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
            <CheckVistoria label="Nível de Água do Reservatório" />
          </SimpleGrid>
          <Box mt={12} >
            <VStack w={"100%"} spacing={8} align={"right"}>
              <TextArea label={"Descrição"} />
              <ButtonDefault name={"Anexar Arquivo"} iconName={FaFileUpload} />
            </VStack>
          </Box>
          <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
          <Flex mt="8" justify="flex-end">
            <HStack>
              <Link href={'/home/menuVeiculo'}>
                <ButtonCancel name={"Cancelar"} />
              </Link>
              <ButtonSave name={" Salvar "} />
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}