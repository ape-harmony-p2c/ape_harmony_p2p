import { useState } from 'react';
import {
    Flex,
    Link,
    Button,
    Show,
    Hide
} from '@chakra-ui/react'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSession } from '@randombits/use-siwe';


export const NavigationBar = () => {
    const router = useRouter()
    const [location, setLocation] = useState('home')
    const [address, setAddress] = useState('')
    const sessionsInfo = useSession()
    if (sessionsInfo.address) {
        setAddress(sessionsInfo.address)
    }

    return (
        <Flex
            position="absolute"
            top={0}
            justifyContent={['left', null, null, null, 'center']}
            width={["100%"]}
            mb={'40px'}
        >
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
                        aria-label='fund stuff'
                        p='.75rem'
                        borderColor={location === 'fundings' ? 'teal' : 'none'}
                        border={location === 'fundings' ? '2px' : 'none'}
                        bgColor={location === 'fundings' ? 'gray.100' : 'none'}
                    >
                        Looking For
                    </Button>
                </Link>
            </Flex >
            <Flex h={['32px', null, '48px']} position={'absolute'} top={['20px', null, '20px']} right={['4px', null, '20px']}>
                {/* <Link as={NextLink} href={address ? routes.PROFILE}> */}
                <ConnectButton
                    accountStatus={{
                        smallScreen: 'avatar',
                        largeScreen: 'full',
                    }}
                />
                {/* </Link> */}
            </Flex>
        </Flex >
    )

}
