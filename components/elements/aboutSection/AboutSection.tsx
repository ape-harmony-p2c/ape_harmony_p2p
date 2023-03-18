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
            <Heading size={['3xl', null, null, '3xl']} color='#A1F408'>
                Come build with us!
            </Heading>
            <Text size='lg' color='white'>
                Built by communities.<br />Built for communities.<br />Build for &#40;insert some other cheesy shit&#41;
            </Text>          
        </Box>  
        </>
    )

}
