import { useState } from 'react'
import Link from 'next/link'
import { Filter } from '@/components/elements/filter'

import {
    Flex,
    Text,
    Box,
    Heading,
    Button
} from '@chakra-ui/react'

const projectsMockData = [
    {
        pfp: 'swag.src',
        lookingFor: '$1800 USDC',
        funders: ['CoachK', 'LeoDaVincc', 'SaucyGroover'],
        fundingRecieved: '$900 USDC'
    },
    {
        pfp: 'swag.src',
        lookingFor: '$1800 USDC',
        funders: ['CoachK', 'LeoDaVincc', 'SaucyGroover'],
        fundingRecieved: '$900 USDC'
    }
]

export const LookingForPage = () => {

    const profilesToDisplay = () => {
        
    }

    return (
        <Box pt={90} w='100vw' h='100vh' px={[2, 3, null, 6]}>
            <Flex justify={'space-between'}>
            <Heading size={['xl', null, null, '2xl']} color='white' pb={3}>
               Discover
            </Heading>
            <Link href='/create-proposal'>            
            <Button>Get Funding</Button>
            </Link>

            </Flex>
            <Filter />
        </Box>
    )
}