import { Box, BoxProps, Drawer, DrawerContent, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MobileNav } from "./MobileNav";
import { SidebarContent } from "./SidebarContent";

interface SideProps extends BoxProps {
  children: ReactNode;
}

export default function SidebarWithHeader({ children }: SideProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.50', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer autoFocus={false}
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size={'full'}>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p={4}>
        {children}
      </Box>
    </Box>
  )
}