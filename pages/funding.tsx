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
import { v4 as uuidv4 } from 'uuid';

const description = `Sample project description. This project is going to change the world. I am taking this project to the moon 🚀🚀🚀 so you better invest now.`

const project = {
    title: "Super Cool Project",
    description: description,
    goal: "1000 DAI",
    revenue: "50%",
    equity: "20%",
    funders: [
        {
            name: "Alice",
            amount: "10%",
        },
        {
            name: "Bob",
            amount: "5%",
        },
        {
            name: "Chuck",
            amount: "15%",
        }
    ],
    comments: [
        {
            name: "Bob",
            text: "Super stoked to be part of this project!",
        },
        {
            name: "Denise",
            text: "This project looks great!",
        },
        {
            name: "Alice",
            text: "First funder!!!!",
        }
    ]

}



const Funding: NextPage = () => {
    return (
        <Flex justify="center" height="100%" mt="40">
            <Flex align="center" direction="column" width="60%">
                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>{project.title}</Text>
                <Spacer />
                <Box bg='blue.500' w='100%' p={4} color='white' height="100%">
                    <Flex align="center" direction="column" justify="space-between" height="100%">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>{project.description}</Text>
                        <Spacer />
                        <Flex justify="start" width="100%" mt="10">
                            <Button color="black">Upvote</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Spacer />
                <Box bg='green.500' w='100%' p={4} color='white' height="100%">
                    <Flex align="center" direction="column">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Goal: {project.goal}</Text>
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Revenue Share: {project.revenue}</Text>
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Equity: {project.equity}</Text>
                    </Flex>
                </Box>
                <Spacer />
                <Box bg='yellow.500' w='100%' p={4} color='white' height="100%">
                    <Flex align="center" direction="column" justify="space-between" height="100%">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Uniswap Box</Text>
                        <Spacer />
                        <Flex justify="start" width="100%" mt="10">
                            <Button color="black">Swap</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Spacer />
                <Flex width="100%" direction="column">
                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>Funders</Text>
                    <Box bg='tomato' w='100%' p={4} color='white'>
                        {project && project.funders && project.funders.map((funder) => (
                            <Flex align="center" key={uuidv4()}>
                                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{funder.name}</Text>
                                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{funder.amount}</Text>
                            </Flex>
                        ))}
                    </Box>
                </Flex>
                <Spacer />
                <Flex width="100%" direction="column">
                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>Comments</Text>
                    <Box bg='orange.500' w='100%' p={4} color='white'>
                        {project && project.comments && project.comments.map((comment) => (
                            <Flex align="center" key={uuidv4()}>
                                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{comment.name}</Text>
                                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{comment.text}</Text>
                            </Flex>
                        ))}
                    </Box>
                </Flex>
                <Spacer />
            </Flex>
        </Flex>
    )
}


export default Funding;