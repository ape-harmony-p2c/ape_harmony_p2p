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
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            amount: 100,
            image: 'https://bit.ly/dan-abramov',
        },
        {
            name: "Bob",
            amount: 50,
            image: 'https://bit.ly/dan-abramov',
        },
        {
            name: "Chuck",
            amount: 150,
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

interface SliderThumbProps {
    max: number,
  }

function SliderThumbWithTooltip({ max }: SliderThumbProps) {
    const [sliderValue, setSliderValue] = useState(5)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
      <Slider
        id='slider'
        defaultValue={5}
        min={0}
        max={max}
        colorScheme='teal'
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={max * .25} mt='1' ml='-2.5' fontSize='sm'>
          25%
        </SliderMark>
        <SliderMark value={max * .50} mt='1' ml='-2.5' fontSize='sm'>
          50%
        </SliderMark>
        <SliderMark value={max * .75} mt='1' ml='-2.5' fontSize='sm'>
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
          label={`${sliderValue} USDC`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    )
  }

  interface FundingPageProps {
    csid: string | undefined,
  }

type CrowdSale = {
    title: string,
    body: string,
    seeking: string,
    info: string

}

export const FundingPage: NextPage<FundingPageProps> = ({csid}: FundingPageProps) => {
    const [sliderValue, setSliderValue] = useState(5);
    const [showTooltip, setShowTooltip] = useState(false);
    const [theme, SetTheme] = useState('dark');
    const [crowdSale, setCrowdSale] = useState<CrowdSale>({
        title: '',
        body: '',
        seeking: '',
        info: ''
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/crowdsale', {
                    params: {
                        _crowdSaleId: csid,
                    },
                });
                const { data } = res
                setCrowdSale(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
      }, []);

    return (
        <Flex justify="center" bgColor='#0F0F16' pt={90} px={[2, 3, null, 6]}>
            <Flex align="center" direction="column" width="60%">
                <Text fontSize='1.25rem' color='white' ml='.5rem'>{crowdSale.title}</Text>
                <Spacer />
                <Flex align="center" direction="column">
                    <Box bgColor='#212C3B' rounded='6' padding={[3, 5]} w='100%' p={4} mt="4" color='white'>
                        <Flex align="center" direction="column" justify="space-between">
                            <Text fontSize='1.25rem' color='white' ml='.5rem'>{crowdSale.body}</Text>
                            <Spacer />
                            <Flex justify="start" width="100%" mt="10" gap="3">
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
                            <Text fontSize='1.25rem' color='white' ml='.5rem'>Goal: {crowdSale.seeking} USDC</Text>
                            <Text fontSize='1.25rem' color='white' ml='.5rem'>Revenue Share: {project.revenue}</Text>
                            <Text fontSize='1.25rem' color='white' ml='.5rem'>Equity: {project.equity}</Text>
                        </Flex>
                    </Box>
                    <Spacer />
                    <Box bgColor='#212C3B' rounded='6' w='100%' p={4} mt="4" color='white'>
                        <Flex align="center" direction="column" justify="space-between">
                            <Text fontSize='1.25rem' color='white' ml='.5rem'>Fund this Project</Text>
                            <Spacer />
                            <SliderThumbWithTooltip max={Number(crowdSale.seeking)} />
                            <Flex justify="start" width="100%" mt="10">
                                <Button 
                                    size={['sm', null, 'lg']}
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
                    <Text fontSize='1.25rem' color='white' ml='.5rem'>Funders</Text>
                    
                        {project && project.funders && project.funders.map((funder) => (
                            <Box bgColor='#212C3B' rounded='6' w='100%' p={4} mt="2" color='white' key={uuidv4()}>
                                <Flex align="center" >
                                    <Image alt='user-pfp' boxSize={58} rounded={30} bgColor='gray' justifyContent='center' src='/css-gradient.png'></Image>
                                    <Text fontSize='1.25rem' color='white' ml='.5rem' >{funder.amount} USDC</Text>
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
                                    <Image alt='user-pfp' boxSize={58} rounded={30} bgColor='gray' justifyContent='center' src='/css-gradient.png'></Image>
                                    <Text fontSize='1.25rem' color='white' ml='.5rem' >{comment.text}</Text>
                                </Flex>
                            </Box>
                        ))}
                    
                </Flex>
                <Spacer />
            </Flex>
        </Flex>
    )
}
