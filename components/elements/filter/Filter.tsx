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

export const Filter = () => {
    const router = useRouter()

    return (
        <Tabs variant='soft-rounded' colorScheme='whatsapp'>
            <TabList>
                <Tab>Top</Tab>
                <Tab>Latest</Tab>
                <Tab>Ending Soon</Tab>
                <Tab>Complete</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>Top</p>
                </TabPanel>
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
