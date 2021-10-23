import { Flex, Box, Text, Avatar } from '@chakra-ui/react'


interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Clovijan Rocha</Text>
          <Text color="gray.300" fontSize="small">
            clovijan@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Clovijan Rocha" src="https://github.com/clovijan.png" />
    </Flex>
  );
}