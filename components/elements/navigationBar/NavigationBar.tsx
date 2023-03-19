import { useState, useContext } from 'react';
import {
    Flex,
    Link,
    Button,
    useColorMode,
    IconButton
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { UserContext } from '@/contexts/userContext';
import { useAccount } from 'wagmi';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export const NavigationBar = () => {
    const router = useRouter()
    const [location, setLocation] = useState('home')
    // const [address, setAddress] = useState('')
    const { address } = useAccount()


    // setAddress(user.address)
    // const sessionsInfo = useSession()
    // if (sessionsInfo.address) {
    //     setAddress(sessionsInfo.address)
    // }
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
            < Flex mt={'20px'} px={[2, 3, null, 6]} >
                <Link as={NextLink} href={routes.HOME}>
                    <Button
                        size={['sm', null, 'lg']}
                        onClick={() => { setLocation('home') }}
                        borderColor={location === 'home' ? '#A1F408' : 'none'}
                        border={location === 'home' ? '2px' : 'none'}
                        bgColor={location === 'home' ? 'gray.100' : 'none'}
                        mr={['10px', null, null, '20px']}
                        color='#A1F408'
                        variant={'ghost'}
                        rounded='.75rem'
                        aria-label='home'
                        p='.75rem'>
                        Home
                    </Button>
                </Link>
                <Link as={NextLink} href={routes.LOOKING_FOR}>
                    <Button
                        size={['sm', null, 'lg']}
                        onClick={() => { setLocation('fundings') }}
                        rounded='.75rem'
                        color='#A1F408'
                        variant={'ghost'}
                        aria-label='Discover'
                        p='.75rem'
                        borderColor={location === 'fundings' ? '#A1F408' : 'none'}
                        border={location === 'fundings' ? '2px' : 'none'}
                        bgColor={location === 'fundings' ? 'gray.100' : 'none'}
                    >
                        Discover
                    </Button>
                </Link>
                {address &&
                    <Link as={NextLink} href={`/profile/${address}`}>
                        <Button
                            size={['sm', null, 'lg']}
                            onClick={() => { setLocation('fundings') }}
                            rounded='.75rem'
                            color='teal'
                            variant={'ghost'}
                            aria-label='fund stuff'
                            p='.75rem'
                            borderColor={location === 'fundings' ? 'teal' : 'none'}
                            border={location === 'fundings' ? '2px' : 'none'}
                            bgColor={location === 'fundings' ? 'gray.100' : 'none'}
                        >
                            Profile
                        </Button>
                    </Link>
                }
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
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon color={'orange'} />}
                    aria-label="Toggle light/dark mode"
                    borderRadius="full"
                    _hover={{ bg: "gray.300" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </Flex>
        </Flex >
    )

}
