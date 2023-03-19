import { useEffect, useState } from 'react';
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
import axios from 'axios';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { v4 as uuidv4 } from 'uuid';

type Project = {
    title: string,
    id: number,
    seeking: number,

}

export const YourContributions = ({ address }: { address: string | string[] | undefined }) => {
    const router = useRouter()
    const [projects, setProjects] = useState<Project[]>([])

    const handleClick = async (filter: string) => {
        console.log(filter)
        try {
            const res = await axios.get('./api/crowdsale', {
                params: {
                    _sortBy: filter,
                },
            });
            const { data } = res
            console.log(data)
            setProjects(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('./api/crowdsale', {
                    params: {
                        _sortBy: 'mostUpvotes',
                        _take: '4'
                    },
                });
                const { data } = res
                console.log(data)
                setProjects(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Accordion allowToggle w={['98%', null, null, '90%']}>
                <AccordionItem color='white' borderTop={'1px solid #4E5D73'} borderBottom={'none'} borderColor='#4E5D73' rounded={'.25rem'}>
                    <h2>
                        <AccordionButton bgColor='#212C3B' rounded='.25rem'>
                            <Box as="span" flex='1' textAlign='left' fontSize={21} fontWeight='semibold'>
                                Your Projects
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {
                            projects && projects.length && projects.map((project) => (
                                <ProfileBar id={project.id} title={project.title} seeking={project.seeking} bgColor={'#212C3B'} headingColor={'white'} radius={6} customPadding={[3, 5]} key={uuidv4()} />
                            ))
                        }
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )

}



