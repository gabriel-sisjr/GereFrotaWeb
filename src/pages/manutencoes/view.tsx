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
    Select,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonDefault } from "~/components/Button/ButtonDefault";
import { ButtonSave } from "~/components/Button/ButtonSave";
import { TextArea } from "~/components/Form/TextArea";

export default function VisualizarManutencao() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex minH={'100vh'}
            bg={useColorModeValue('white', 'gray.800')}
            borderRadius={10}
            boxShadow={'lg'} p={8}
            alignItems={'center'}
            justifyContent={'center'}>
            <Box minH={'100vh'} w={'95%'}>
                <Stack justify={'space-between'} direction={["column", "row"]} spacing={8}>
                    <Heading size={'lg'}>
                        <HStack spacing={'8'} borderLeft={"8px"} alignItems={"center"} borderColor={"red"}>
                            <Text fontWeight={'bold'} ml={8} fontSize={'2xl'}>Nº ABNT-2104 - Recebida</Text>
                        </HStack>
                    </Heading>
                    <ButtonDefault name={"Histórico do Veículo"} iconName={AiOutlineFileSearch} onClick={onOpen} />
                </Stack>
                <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                <Box>
                    <Stack spacing={8}>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["240px", "sm", "xl"]}>
                                <FormLabel>Nome do Solicitante</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["240px", "sm", "xl"]}>
                                <FormLabel>Nome da Unidade</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>Data</FormLabel>
                                <Input type="date" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>Veiculo</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                        <Stack spacing={8}>
                            <Stack direction={["column", "row"]} justify={"space-between"} align={"center"}>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Defeito</Text>
                                <ButtonDefault name={"Visualizar Anexos"} iconName={FaSearch} />
                            </Stack>
                            <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                            <FormControl w={["150px", "sm", "250px"]} >
                                <FormLabel>Tipo Manutenção</FormLabel>
                                <Select placeholder={"Corretiva"}></Select>
                            </FormControl>
                            <TextArea label={"Descrição"} />
                        </Stack>
                    </Stack>
                    <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                    <Flex mt="8" justify="flex-end">
                        <HStack>
                            <Link href={'/manutencoes'}>
                                <ButtonCancel name={"Cancelar"} />
                            </Link>
                            <ButtonSave name={" Salvar "} />
                        </HStack>
                    </Flex>
                </Box>
                <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader >
                            <HStack justifyContent={"center"} spacing={8}>
                                <Icon as={AiOutlineFileSearch} fontSize={"xx-large"} />
                                <Text fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>Histórico do Veículo</Text>
                            </HStack>
                            <Divider w={'100%'} my={4} borderColor={useColorModeValue('gray.500', 'white')} />
                        </ModalHeader>
                        <ModalCloseButton />
                        <Flex align="center" direction="column" >
                            <Box mt={4} w={'95%'} borderRadius={8} border={"1px"} borderColor={useColorModeValue('gray.500', 'white')}>
                                <ModalBody>
                                    <SimpleGrid spacing="4" w="100%">
                                        <FormControl>
                                            <FormLabel>Nº</FormLabel>
                                            <Input type="number" w={"xs"} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Data</FormLabel>
                                            <Input type="date" w={"xs"} />
                                        </FormControl>
                                        <FormControl>
                                            <TextArea label={"Relatório Mecânico"} w={"xs"} />
                                        </FormControl>
                                    </SimpleGrid>
                                </ModalBody>
                            </Box>
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
        </Flex >
    );
}