import { useState } from 'react';
import {
    Flex,
    Link,
    Button,
    Show,
    Hide,
    useColorMode,
    Switch,
    IconButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export const NavigationBar = () => {
    const router = useRouter()
    const [location, setLocation] = useState('home')
    const [isHovered, setIsHovered] = useState(false);

    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <Flex
            position="absolute"
            top={0}
            justifyContent={['left', null, null, null, 'center']}
            width={["100%"]}
            mb={'40px'}
        >
            {/* <Flex
                justifyContent="center"
                width="100%"
                backgroundColor="white"
                opacity={0.99}
            > */}
            {/* <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                height={['100px', null, '160px']}
                width={['100%', null, null, null, '80em']}
                paddingLeft={4}
                paddingRight={4}
                marginLeft={[0, null, 4]}
                marginRight={[0, null, 4]}
            > */}
            < Flex mt={'20px'} ml={['30px', null, '40px', '80px', '0px']} >
                <Link as={NextLink} href={routes.HOME}>
                    <Button
                        size={['sm', null, 'lg']}
                        onClick={() => { setLocation('home') }}
                        borderColor={location === 'home' ? 'teal' : 'none'}
                        border={location === 'home' ? '2px' : 'none'}
                        bgColor={location === 'home' ? 'gray.100' : 'none'}
                        mr={['10px', null, null, '20px']}
                        color='teal'
                        variant={'ghost'}
                        rounded='.75rem'
                        aria-label='home'
                        p='.75rem'
                    >
                        Home
                    </Button>
                </Link>
                <Link as={NextLink} href={routes.LOOKING_FOR}>
                    <Button
                        size={['sm', null, 'lg']}
                        onClick={() => { setLocation('fundings') }}
                        rounded='.75rem'
                        color='teal'
                        variant={'ghost'}
                        aria-label='Discover'
                        p='.75rem'
                        borderColor={location === 'fundings' ? 'teal' : 'none'}
                        border={location === 'fundings' ? '2px' : 'none'}
                        bgColor={location === 'fundings' ? 'gray.100' : 'none'}
                    >
                        Discover
                    </Button>
                </Link>
            </Flex >
            <Flex h={['32px', null, '48px']} position={'absolute'} top={['20px', null, '20px']} right={['4px', null, '20px']}>
                <ConnectButton
                    accountStatus={{
                        smallScreen: 'avatar',
                        largeScreen: 'full',
                    }}
                />
                <IconButton
                    ml={4}
                    onClick={toggleColorMode}
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    aria-label="Toggle light/dark mode"
                    borderRadius="full"
                      bg={isHovered ? "gray.300" : "gray.200"}
                    _hover={{ bg: "gray.300" }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
            </Flex>
            {/* </Flex> */}
            {/* </Flex> */}
        </Flex >
    )

}
