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
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { ProfileBar } from '../profileBar';

export const Filter = () => {
    const router = useRouter()

    return (
            <Tabs variant='soft-rounded' colorScheme='whatsapp' size={['sm', 'md', 'lg']} >
                <TabList>
                    <Tab color={'white'}>Top</Tab>
                    <Tab color={'white'}>Latest</Tab>
                    <Tab color={'white'}>Ending Soon</Tab>
                    <Tab color={'white'}>Complete</Tab>
                </TabList>
                <TabPanels py={5}>
                    <ProfileBar bgColor={'#212C3B'} headingColor={'white'} radius={6} customPadding={[3, 5]}/>
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
    )

}
