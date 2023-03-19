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
    Tooltip,
    Progress
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
            amount: 10,
            image: 'https://bit.ly/dan-abramov',
        },
        {
            name: "Bob",
            amount: 5,
            image: 'https://bit.ly/dan-abramov',
        },
        {
            name: "Chuck",
            amount: 15,
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



export const FundingPage: NextPage = () => {
    const [sliderValue, setSliderValue] = useState(5);
    const [showTooltip, setShowTooltip] = useState(false);
    const [theme, SetTheme] = useState('dark');
    return (
        <Flex justify="center" bgColor='#0F0F16' pt={90} px={[2, 3, null, 6]}>
            <Flex align="center" direction="column" width="60%">
                <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>{project.title}</Text>
                <Spacer />
                <Flex align="center" direction="column">
                    <Box bgColor='#212C3B' rounded='6' padding={[3, 5]} w='100%' p={4} mt="4" color='white'>
                        <Flex align="center" direction="column" justify="space-between">
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
                    <Box bgColor='#212C3B' rounded='6' w='100%' p={4} mt="4" color='white'>
                        <Flex align="center" direction="column">
                            <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Goal: {project.goal}</Text>
                            <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Revenue Share: {project.revenue}</Text>
                            <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Equity: {project.equity}</Text>
                        </Flex>
                    </Box>
                    <Spacer />
                    <Box bgColor='#212C3B' rounded='6' w='100%' p={4} mt="4" color='white'>
                        <Flex align="center" direction="column" justify="space-between">
                            <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Fund this Project</Text>
                            <Spacer />
                            <SliderThumbWithTooltip />
                            <Flex justify="start" width="100%" mt="10">
                                <Button 
                                    size={['sm', null, 'lg']}
                                    onClick={() => { setLocation('fundings') }}
                                    rounded='.75rem'
                                    color='teal'
                                    variant={'ghost'}
                                    aria-label='fund stuff'
                                    p='.75rem'
                                    borderColor={theme === 'dark' ? 'teal' : 'none'}
                                    border={theme === 'dark' ? '2px' : 'none'}
                                    bgColor={theme === 'dark' ? 'gray.100' : 'none'}
                                >
                                    Fund!
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Spacer />
                <Flex width="100%" direction="column" mt="4">
                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Funders</Text>
                    
                        {project && project.funders && project.funders.map((funder) => (
                            <Box bgColor='#212C3B' rounded='6' w='100%' p={4} mt="2" color='white' key={uuidv4()}>
                                <Flex align="center" >
                                    <Image boxSize='50px' src={funder.image} alt='Dan Abramov' />
                                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{funder.name}</Text>
                                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{funder.amount}</Text>
                                    <Progress value={funder.amount} size='sm' colorScheme='pink' rounded={1}/>
                                </Flex>
                            </Box>
                        ))}
                    
                </Flex>
                <Spacer />
                <Flex width="100%" direction="column" mt="4">
                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem'>Comments</Text>
                    
                        {project && project.comments && project.comments.map((comment) => (
                            <Box bgColor='#212C3B' rounded='6' w='100%' p={4} mt="2" color='white' key={uuidv4()}>
                                <Flex align="center" >
                                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{comment.name}:</Text>
                                    <Text fontFamily='Syne Tactile' fontSize='1.25rem' color='white' ml='.5rem' >{comment.text}</Text>
                                </Flex>
                            </Box>
                        ))}
                    
                </Flex>
                <Spacer />
            </Flex>
        </Flex>
    )
}
