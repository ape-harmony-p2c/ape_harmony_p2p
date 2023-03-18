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
    Spacer 
} from '@chakra-ui/react'
import { NextPage } from 'next'

const Funding: NextPage = () => {
    return (
        <Flex justify="center">
            <Flex align="center" direction="column" height="100vh" width="60vw">
                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>Title</Text>
                <Spacer />
                <Box bg='blue.500' w='100%' p={4} color='white' height="30vh">
                    <Flex align="center" direction="column" justify="space-between" height="100%">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Body</Text>
                        <Flex justify="start" width="100%">
                            <Button color="black">Upvote</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Spacer />
                <Box bg='green.500' w='100%' p={4} color='white' height="20vh">
                    <Flex align="center" direction="column">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Info</Text>
                    </Flex>
                </Box>
                <Spacer />
                <Flex width="100%" direction="column">
                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>Funders</Text>
                    <Box bg='tomato' w='100%' p={4} color='white'>
                        <Flex align="center" direction="column">
                            <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Funder n</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Spacer />
            </Flex>
        </Flex>
    )
}


export default Funding;