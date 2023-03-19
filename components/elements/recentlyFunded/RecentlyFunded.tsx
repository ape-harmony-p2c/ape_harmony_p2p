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
    Heading,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { ProfileBar } from '../profileBar';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const RecentlyFunded = () => {
    const router = useRouter()

    return (
        <>        
        <Accordion allowToggle w={['98%', null, null, '90%']}>
            <AccordionItem color='white' borderTop={'1px solid #4E5D73'} borderBottom={'none'} borderColor='#4E5D73' rounded={'.25rem'}>
                <h2>
                <AccordionButton bgColor='#212C3B' rounded='.25rem'>
                    <Box as="span" flex='1' textAlign='left' fontSize={21} fontWeight='semibold'>
                    Recently Funded
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <ProfileBar bgColor={'initial'} headingColor={'white'} customPadding={[0]} radius={0}/>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </>
    )

}
