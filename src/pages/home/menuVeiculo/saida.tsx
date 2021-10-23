import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Link,
  useBreakpointValue,
  Divider,
  VStack,
  SimpleGrid,
  Button
} from '@chakra-ui/react';
import { RiCarLine } from 'react-icons/ri';
import { ButtonVoltar } from '../../../components/Buttons/ButtonVoltar';
import { Input } from '../../../components/Form/Input';
import { Textarea } from '../../../components/Form/TextArea';
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";


export default function RegistrarSaida() {
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
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input w="240px" name="data" label="Data" type="date" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="horarioSaida" label="Horário da Saída" type="time" />
              <Input name="leituraOdometro" label="Leitura do Odômetro" type="date" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="horarioRetorno" label="Horário de Retorno" type="time" />
              <Input name="leituraOdometro" label="Leitura do Odômetro" type="date" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Textarea label="Descrição" />
            </SimpleGrid>
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