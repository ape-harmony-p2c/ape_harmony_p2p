import { useState } from 'react'
import NextLink from 'next/link'
import { AboutSection } from '@/components/elements/aboutSection/AboutSection'
import { RecentlyFunded } from '@/components/elements/recentlyFunded'
import { TopFunders } from '@/components/elements/topFunders'

import { memo, useContext } from 'react'
import { UserContext } from '@/contexts/userContext'

import {
    Flex,
    Text,
    Box
} from '@chakra-ui/react'

export const HomePage = () => {
    const user = useContext(UserContext)
    console.log(user)
    return (
        <>
         <Box pt={140} w='100vw' h='100vh'>
            <AboutSection />
            <Flex flexDir={'column'} align={'center'}>
                <RecentlyFunded />
                <TopFunders />
            </Flex>
        </Box>
        </>
    )
}
