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
    Hide
} from '@chakra-ui/react'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const alchemyId = '';

const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


export const NavigationBar = () => {
    const router = useRouter()

    return (
        <Flex justify="space-between" align="center" borderBottom="1px">
            <Link as={NextLink} href='' _activeLink={{ textDecor: 'none' }} _hover={{ textDecor: 'none' }}>
                <Flex alignItems="center" paddingX={['.5rem', null, '1.5rem']} paddingY='.5rem'>
                    <Box>
                        <Image boxSize='3rem' src='/static/rofl-logo.png' alt='rofl-logo.png' />
                    </Box>
                    <Box>
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='#C95CC9' ml='.5rem'>ROFL</Text>
                    </Box>
                </Flex>
            </Link>
            <Flex>
                <Hide below='md'>
                    <Link as={NextLink} href='/Home'>
                        <Button rounded='.75rem' bgColor='white' aria-label='create raffle' p='.75rem' m='.5rem' boxShadow="inset 0 0 0 2px #DFE4EC,0 2px 0 0 #DFE4EC,0px 2px 4px rgba(0,0,0,0.02);">
                            Create Raffle
                        </Button>
                    </Link>
                </Hide>
                <Show below='md'>
                    <Link as={NextLink} href='/Fund Stuff'>
                        <IconButton bgColor='white' aria-label='create raffle' p='1.25rem' m='.5rem' boxShadow="inset 0 0 0 2px #DFE4EC,0 2px 0 0 #DFE4EC,0px 2px 4px rgba(0,0,0,0.02);" />
                    </Link>
                </Show>
                <Box paddingRight={['.5rem', null, '1.5rem']} paddingY='.5rem'>
                    <WagmiConfig client={client}>
                        <ConnectKitProvider theme='rounded'>
                            <ConnectKitButton />
                        </ConnectKitProvider>
                    </WagmiConfig>
                </Box>
            </Flex>
        </Flex>
    )

}
