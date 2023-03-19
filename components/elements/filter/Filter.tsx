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
    Text,
    Show,
    Hide,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { ProfileBar } from '../profileBar';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

type Project = {
    title: string,
    id: number,
    seeking: number,

}

export const Filter = () => {
    const router = useRouter()
    const [projects, setProjects] = useState<Project[]>([])

    const handleClick = async (filter?: string) => {
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
                    },
                });
                const { data } = res
                setProjects(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
      }, []);

    return (
        <>
            <Tabs variant='soft-rounded' colorScheme='whatsapp' size={['sm', 'md', 'lg']} >
                <TabList>
                    <Tab onClick={() => handleClick('mostUpvotes')} color={'white'}>Top</Tab>
                    <Tab onClick={() => handleClick()} color={'white'}>Latest</Tab>
                    <Tab onClick={() => handleClick('endingSoon')} color={'white'}>Ending Soon</Tab>
                    <Tab onClick={() => handleClick('complete')} color={'white'}>Complete</Tab>
                </TabList>
                <Flex justify={'flex-start'} py={2} px={[2, 3, null, 6]}>
            </Flex>
                <TabPanels py={0}>
                    {
                        projects && projects.length && projects.map((project) => (
                            <ProfileBar id={project.id} title={project.title} seeking={project.seeking} bgColor={'#212C3B'} headingColor={'white'} radius={6} customPadding={[3, 5]} key={uuidv4()} />
                        ))
                    }
                    <TabPanel>
                    <p>Latest</p>
                    </TabPanel>
                    <TabPanel>
                    <p>Ending Soon</p>
                    </TabPanel>
                    <TabPanel>
                    <p>Ended</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )

}
