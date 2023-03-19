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
    Spacer,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, 
    Tooltip
} from '@chakra-ui/react'
import { SearchIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { NextPage } from 'next'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const description = `Sample project description. This project is going to change the world. Please fund and help me take this project to the moon 🚀🚀🚀.`

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
            image: 'https://bit.ly/dan-abramov',
        },
        {
            name: "Bob",
            amount: "5%",
            image: 'https://bit.ly/dan-abramov',
        },
        {
            name: "Chuck",
            amount: "15%",
            image: 'https://bit.ly/dan-abramov',
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

function SliderThumbWithTooltip() {
    const [sliderValue, setSliderValue] = useState(5)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
      <Slider
        id='slider'
        defaultValue={5}
        min={0}
        max={100}
        colorScheme='teal'
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
          25%
        </SliderMark>
        <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
          50%
        </SliderMark>
        <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    )
  }



const Funding: NextPage = () => {
    const [sliderValue, setSliderValue] = useState(5)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <Flex justify="center" height="100%" mt="40">
            <Flex align="center" direction="column" width="60%">
                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>{project.title}</Text>
                <Spacer />
                <Box bg='purple.500' w='100%' p={4} color='white' height="100%">
                    <Flex align="center" direction="column" justify="space-between" height="100%">
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>{project.description}</Text>
                        <Spacer />
                        <Flex justify="start" width="100%" mt="10">
                            <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<ArrowUpIcon />}
                            />
                            <IconButton
                            colorScheme='red'
                            aria-label='Search database'
                            icon={<ArrowDownIcon />}
                            />                        
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
                        <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Fund this Project</Text>
                        <Spacer />
                        <SliderThumbWithTooltip />
                        <Flex justify="start" width="100%" mt="10">
                            <Button color="black">Fund!</Button>
                        </Flex>
                    </Flex>
                </Box>
                <Spacer />
                <Flex width="100%" direction="column">
                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='black' ml='.5rem'>Funders</Text>
                    <Box bg='tomato' w='100%' p={4} color='white'>
                        {project && project.funders && project.funders.map((funder) => (
                            <Flex border="1px" align="center" key={uuidv4()}>
                                <Image boxSize='50px' src={funder.image} alt='Dan Abramov' />
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
                            <Flex border="1px" align="center" key={uuidv4()}>
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