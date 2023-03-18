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

const description = `Sample project description. This project is going to change the world. I am taking this project to the moon 🚀🚀🚀 so you better invest now.`

const Funding: NextPage = () => {
    return (
        <Flex justify="center" height="100%" mt="40">
            <Flex align="center" direction="column" width="60%">
                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>Title</Text>
                <Spacer />
                <Box bg='blue.500' w='100%' p={4} color='white' height="100%">
                    <Flex align="center" direction="column" justify="space-between" height="100%">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>{description}</Text>
                        <Spacer />
                        <Flex justify="start" width="100%" mt="10">
                            <Button color="black">Upvote</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Spacer />
                <Box bg='green.500' w='100%' p={4} color='white' height="100%">
                    <Flex align="center" direction="column">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Goal</Text>
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Revenue</Text>
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Equity</Text>
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