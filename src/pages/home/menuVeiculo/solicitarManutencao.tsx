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
  Select,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFileUpload } from "react-icons/fa";
import { RiAddLine, RiCarLine } from "react-icons/ri";
import { ButtonBack } from "~/components/Button/ButtonBack";
import { ButtonCancel } from "~/components/Button/ButtonCancel";
import { ButtonDefault } from "~/components/Button/ButtonDefault";
import { ButtonSave } from "~/components/Button/ButtonSave";
import { TextArea } from "~/components/Form/TextArea";

export default function SolicitarManutencao() {
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
          <Stack direction={["column", "row"]} spacing={8} justify={"space-between"}>
            <FormControl w={["150px", "sm", "250px"]}>
              <FormLabel>Leitura do Odômetro</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl w={["150px", "sm", "250px"]}>
              <FormLabel>Data</FormLabel>
              <Input type="Date" />
            </FormControl>
          </Stack>
          <Box>
            <Stack spacing={8} mt={16}>
              <Stack direction={["column", "row"]} justify={"space-between"} align={"center"}>
                <Text fontWeight={'bold'} fontSize={'lg'}>Defeito</Text>
                <ButtonDefault name={"Novo Defeito"} iconName={RiAddLine} />
              </Stack>
              <Divider w={'100%'} my={8} borderColor={useColorModeValue('gray.500', 'gray.700')} />
              <FormControl w={["150px", "sm", "250px"]} >
                <FormLabel>Tipo Manutenção</FormLabel>
                <Select placeholder={"Corretiva"}></Select>
              </FormControl>
              <TextArea label={"Descrição"} />
              <ButtonDefault name={"Anexar Arquivo"} iconName={FaFileUpload} />
            </Stack>
          </Box>
        </Box>
        <Box>
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