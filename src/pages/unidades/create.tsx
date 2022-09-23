import { Box, ButtonGroup, Divider, Flex, FormControl, FormLabel, Heading, HStack, Input, SimpleGrid, Spacer, Stack, useColorModeValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { ButtonBack } from "~/components/Button/ButtonBack";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonSave } from "~/components/Button/ButtonSave";

export default function create() {
    return (
        <Flex minH={'100vh'} bg={useColorModeValue('white', 'gray.800')}
            borderRadius={10} boxShadow={'lg'} p={8} alignItems={'center'}
            justifyContent={'center'}>
            <Box minH={'100vh'} w={'95%'} >
                <Flex justify={'space-between'}>
                    <Heading size={'lg'}> Nova Unidade</Heading>
                    <Link href={'/unidades'} passHref>
                        <ButtonBack />
                    </Link>
                </Flex>
                <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                <Box>
                    <Stack spacing={8}>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>CNPJ</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl ml={8} w={["240px", "sm", "xl"]}>
                                <FormLabel>Nome da Unidade</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                        <Stack direction={["column", "row"]} spacing={8}>
                            <FormControl w={["240px", "sm", "xl"]}>
                                <FormLabel>Responsável pela Unidade</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl w={["150px", "sm", "200px"]}>
                                <FormLabel>Telefone</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack direction={["column", "row"]} spacing={8} mt={8}>
                        <FormControl w={["240px", "sm", "xl"]}>
                            <FormLabel>Endereço</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl w={["100px"]}>
                            <FormLabel>Número</FormLabel>
                            <Input type="text" />
                        </FormControl>
                    </Stack>
                    <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
                    <Flex mt="8" justify="flex-end">
                        <ButtonGroup gap={2}>
                            <Link href={'/unidades'}>
                                <ButtonCancel name={"Cancelar"} />
                            </Link>
                            <ButtonSave name={" Salvar "} />
                        </ButtonGroup>
                    </Flex>
                </Box>
            </Box>
        </Flex >
    )
}