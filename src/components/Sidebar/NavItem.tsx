import { Flex, FlexProps, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { useRouter } from "next/router";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  href: string;
  shouldMatchExactHref?: boolean;
}

export const NavItem = ({ icon, children, shouldMatchExactHref = false, href, ...rest }: NavItemProps) => {
  const { asPath } = useRouter();
  let isActive = false;

  if (shouldMatchExactHref && (asPath === href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExactHref &&
    (asPath.startsWith(String(href)) ||
      asPath.startsWith(String(rest.as)))) {
    isActive = true;
  }

  return (
    <Link href={href} style={{ textDecoration: 'none' }} passHref>
      <Flex align={'center'} p={4} mx={4} borderRadius={'lg'} color={isActive ? 'facebook.400' : useColorModeValue('gray.900', 'gray.50')}
        role="group"
        cursor={'pointer'}
        _hover={{
          bg: 'facebook.600',
          color: 'white',
        }}
        {...rest}>
        {icon && (<Icon mr={4} fontSize={'2xl'} _groupHover={{ color: 'white' }} as={icon} />)}
        <Text fontSize={'md'} fontWeight={'bold'}>{children}</Text>
      </Flex>
    </Link>
  )
}