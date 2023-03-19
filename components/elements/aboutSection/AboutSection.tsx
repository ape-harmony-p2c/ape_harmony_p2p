import {
    Box,
    Flex,
    Link,
    Button,
    Image,
    HStack,
    LinkBox,
    LinkOverlay,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Show,
    Hide,
    Heading
} from '@chakra-ui/react'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const AboutSection = () => {
    const router = useRouter()

    return (
        <>
        <Box>
            <Heading  size={['2xl', null, null, '3xl']} textAlign={'center'}>
                Come <Text display={'inline'}>build</Text> with us!
            </Heading>
            <Text fontSize={['14px', '16px', null, '22px']} color='#979797' px='2rem' textAlign='center' py={10}>
                Built by communities. Built for communities. Built to inspire communities.
            </Text>          
        </Box>  
        </>
    )

}
