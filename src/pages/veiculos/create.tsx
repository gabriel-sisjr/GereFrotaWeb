import { Box, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, Select, Stack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { ButtonBack } from "~/components/Button/ButtonBack";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonSave } from "~/components/Button/ButtonSave";

export default function create() {
    return (
        <Flex minH={'100vh'} bg={useColorModeValue('white', 'gray.800')}
            borderRadius={10} boxShadow={'lg'} p={8} alignItems={'center'}
            justifyContent={'center'}>
            <Box minH={'100vh'} w={'95%'}>
                <Flex justify={'space-between'}>
                    <Heading size={'lg'}> Novo Veículo</Heading>
                    <Link href={'/veiculos'} passHref>
                        <ButtonBack />
                    </Link>
                </Flex>
                <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                <Box>
                    <Stack spacing={8}>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["240px", "sm", "xl"]}>
                                <FormLabel>Unidade do CBMSE</FormLabel>
                                <Select placeholder={"select"}></Select>
                            </FormControl>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>Sigla do Veículo</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["240px", "sm", "xl"]}>
                                <FormLabel>Tipo de Veículo</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>Ano</FormLabel>
                                <Input type="date" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["240px", "sm", "xl"]}>
                                <FormLabel>Marca</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>Chassi do veiculo</FormLabel>
                                <Input type="number" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Odômetro</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Placa</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Volume do Tanque</FormLabel>
                                <Input type="number" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Renavam</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Valor de compra</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Vencimento IPVA</FormLabel>
                                <Input type="date" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Status Veículo</FormLabel>
                                <Select placeholder={"select"}></Select>
                            </FormControl>
                            <FormControl w={["150px", "sm", "250px"]}>
                                <FormLabel>Valor atual do Veículo</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                    <Flex mt="8" justify="flex-end">
                        <HStack>
                            <Link href={'/veiculos'}>
                                <ButtonCancel name={"Cancelar"} />
                            </Link>
                            <ButtonSave name={" Salvar "} />
                        </HStack>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}