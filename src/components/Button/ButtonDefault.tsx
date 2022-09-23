import { Button, ButtonProps, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { ElementType } from "react";

interface ButtonDefaultProps extends ButtonProps {
    name: string;
    iconName: ElementType;
}

export function ButtonDefault({ iconName, name, ...rest }: ButtonDefaultProps) {
    return (
        <Button
            as={'a'} size={'lg'} fontSize={'md'}
            w={"200px"}
            colorScheme={'facebook'} disabled
            _disabled={{
                bg: 'facebook.500',
            }}
            _hover={{ bg: useColorModeValue('facebook.800', 'facebook.300') }}
            leftIcon={<Icon as={iconName} fontSize={"lg"} color={'white'} />}
            cursor={"pointer"}
            {...rest}
        >
            <Text color={'white'}>{name}</Text>
        </Button>
    );
}