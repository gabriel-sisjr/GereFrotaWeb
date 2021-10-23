import { Tr, Td, Checkbox } from "@chakra-ui/react";

interface TrTableProps {
  campo: string;
}
export function TrTable({ campo }: TrTableProps) {
  return (
    <Tr>
      <Td px={["1", "4", "6"]}>{campo}</Td>
      <Td alignItems="center">
        <Checkbox colorScheme="facebook" marginLeft={["4", "10"]} />
      </Td>
      <Td>
        <Checkbox colorScheme="facebook" marginLeft={["4", "10"]} />
      </Td>
    </Tr>
  );
}