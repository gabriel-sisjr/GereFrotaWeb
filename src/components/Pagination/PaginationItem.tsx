import { Button, useColorModeValue } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({ number, isCurrent = false }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="facebook"
        disabled
        _disabled={{
          bg: 'facebook.400',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg={useColorModeValue('gray.300', 'gray.500')}
      _hover={{ bg: useColorModeValue('gray.500', 'gray.700') }}
    >
      {number}
    </Button>
  )
}