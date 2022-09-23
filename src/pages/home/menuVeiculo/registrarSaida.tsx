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
  Text,
  Textarea,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { RiCarLine } from "react-icons/ri";
import { ButtonBack } from "~/components/Button/ButtonBack";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonSave } from "~/components/Button/ButtonSave";
import { TextArea } from "~/components/Form/TextArea";

export default function RegistrarSaida() {
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
          <FormControl>
            <FormLabel>Data</FormLabel>
            <Input type="date" w={"xs"} />
          </FormControl>
          <SimpleGrid minChildWidth={"240px"} spacing={"8"} mt={"8"}>
            <FormControl>
              <FormLabel>Horário da Saída</FormLabel>
              <Input type="time" w={"xs"} />
            </FormControl>
            <FormControl>
              <FormLabel>Leitura do Odômetro</FormLabel>
              <Input type="number" w={"xs"} />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth={"240px"} spacing={"8"} mt={"8"}>
            <FormControl>
              <FormLabel>Horário de Retorno</FormLabel>
              <Input type="time" w={"xs"} />
            </FormControl>
            <FormControl>
              <FormLabel>Leitura do Odômetro</FormLabel>
              <Input type="number" w={"xs"} />
            </FormControl>
          </SimpleGrid>
          <FormControl mt={"8"}>
            <TextArea label="Descrição" />
          </FormControl>
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
    </Flex>
  );
}