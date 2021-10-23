import {
  Box, Flex, Heading, HStack,
  Text, Icon, Divider, VStack,
  Stack, Button, useBreakpointValue,
  useDisclosure, Modal, ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton,
  ModalBody, ModalFooter, SimpleGrid
} from "@chakra-ui/react";
import Link from 'next/link';
import { FaTools } from "react-icons/fa";
import { RiCarLine, RiCloseCircleFill, RiEditLine, RiGasStationFill, RiSurveyLine } from "react-icons/ri";
import { ButtonMenu } from "../../../components/Buttons/ButtonMenu";
import { ButtonVoltar } from "../../../components/Buttons/ButtonVoltar";
import { Input } from "../../../components/Form/Input";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";

export default function MenuVeiculo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <VStack spacing="8" >
            <Stack
              w="90%"
              direction={["column", "row"]}
              spacing={["8", "24"]}
              mt={["4", "8"]}
              justify="space-between"
              align="center"
            >
              <Link href="/home/menuVeiculo/vistoria" passHref>
                <ButtonMenu nameButtom="Realizar" surnameButton="Vistoria" icon={RiSurveyLine} />
              </Link>
              <ButtonMenu nameButtom="Abastecer" icon={RiGasStationFill} cursor="pointer" onClick={onOpen} />
              <Link href="/home/menuVeiculo/saida" passHref>
                <ButtonMenu nameButtom="Registrar" surnameButton="Saída" icon={RiEditLine} />
              </Link>
            </Stack>
            <Stack
              w="90%"
              direction={["column", "row"]}
              spacing={["8", "24"]}
              mt="8"
              justify="space-around"
              align="center"
            >
              <Link href="/home/menuVeiculo/solicitarManutencao" passHref>
                <ButtonMenu nameButtom="Solicitar" surnameButton="Manutenção" icon={FaTools} />
              </Link>
              <Link href="/home" passHref>
                <ButtonMenu as="a" nameButtom="Finalizar Uso" icon={RiCloseCircleFill} />
              </Link>
            </Stack>
          </VStack>
        </Box>
      </Flex >
      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent bg="gray.700" >
          <ModalHeader>
            <HStack spacing="4">
              <Icon as={RiGasStationFill} fontSize="20" />
              <Text fontWeight="bold" fontSize="lg">Registrar Abastecimento</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <Flex align="center" direction="column">
            <ModalBody>
              <SimpleGrid spacing="4" w="100%">
                <Input label="Leitura do Odômetro" name="leituraOdometro" />
                <Input label="Litros Abastecidos" name="litrosAbastecidos" />
              </SimpleGrid>
            </ModalBody>
            <ModalFooter>
              <Flex mt="8" justify="flex-end">
                <HStack>
                  <Button cursor="pointer" as="a" colorScheme="whiteAlpha" onClick={onClose}>Cancelar</Button>
                  <Button colorScheme="facebook">Salvar</Button>
                </HStack>
              </Flex>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </Box >
  );
}