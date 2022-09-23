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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { FaTools } from "react-icons/fa";
import { RiCarLine, RiCloseCircleFill, RiEditLine, RiGasStationFill, RiSurveyLine } from "react-icons/ri";
import { ButtonBack } from "~/components/Button/ButtonBack";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonMenu } from "~/components/Button/ButtonMenu";
import { ButtonSave } from "~/components/Button/ButtonSave";

export default function MenuVeiculo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Link href={'/home'} passHref>
            <ButtonBack />
          </Link>
        </Flex>
        <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
        <Box>
          <VStack spacing="8" >
            <Stack w="90%" direction={["column", "row"]} spacing={["8", "24"]} mt={["4", "8"]}
              justify="space-between" align="center">
              <Link href={'menuVeiculo/realizarVistoria'} passHref>
                <ButtonMenu nameButton={'Realizar'} surNameButton={'Vistoria'} icon={RiSurveyLine} />
              </Link>
              <ButtonMenu nameButton={'Abastecer'} icon={RiGasStationFill} onClick={onOpen} cursor={"pointer"} />
              <Link href={'menuVeiculo/registrarSaida'} passHref>
                <ButtonMenu nameButton={'Registrar'} surNameButton={'Saída'} icon={RiEditLine} />
              </Link>
            </Stack>
            <Stack w="90%" direction={["column", "row"]} spacing={["8", "24"]} mt={["4", "8"]}
              justify="space-around" align="center">
              <Link href={'menuVeiculo/solicitarManutencao'} passHref>
                <ButtonMenu nameButton={'Solicitar'} surNameButton={'Manutenção'} icon={FaTools} />
              </Link>
              <Link href={'/home'} passHref>
                <ButtonMenu nameButton={'Finalizar'} surNameButton={'Uso'} icon={RiCloseCircleFill} />
              </Link>
            </Stack>
          </VStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader >
              <HStack justifyContent={"center"} spacing={8}>
                <Icon as={RiGasStationFill} fontSize={"xx-large"} />
                <Text fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>Registrar Abastecimento</Text>
              </HStack>
              <Divider w={'100%'} my={4} borderColor={useColorModeValue('gray.500', 'white')} />
            </ModalHeader>
            <ModalCloseButton />
            <Flex align="center" direction="column">
              <ModalBody>
                <SimpleGrid spacing="4" w="100%">
                  <FormControl>
                    <FormLabel>Data do Abastecimento</FormLabel>
                    <Input type="date" w={"xs"} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Leitura do Odômetro</FormLabel>
                    <Input type="number" w={"xs"} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Litros Abastecidos</FormLabel>
                    <Input type="number" w={"xs"} />
                  </FormControl>
                </SimpleGrid>
              </ModalBody>
              <ModalFooter>
                <Flex mt="4" justify="flex-end">
                  <HStack>
                    <ButtonSave name={" Salvar "} />
                    <ButtonCancel name={"Cancelar"} onClick={onClose} />
                  </HStack>
                </Flex>
              </ModalFooter>
            </Flex>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  )
}