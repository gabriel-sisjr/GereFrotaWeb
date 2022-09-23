import {
  Checkbox,
  Td,
  Tr
} from "@chakra-ui/react";

interface TrTableProps {
  campo: String
}
export function TrTable({ campo }: TrTableProps) {
  return (
    <Tr>
      <Td fontWeight={"bold"}>{campo}</Td>
      <Td><Checkbox marginLeft={'48%'} size={'lg'} /></Td>
      <Td><Checkbox marginLeft={'48%'} size={'lg'} /></Td>
    </Tr>
  );
}