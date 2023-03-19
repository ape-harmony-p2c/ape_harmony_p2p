import { useState } from 'react'
import NextLink from 'next/link'
import { AboutSection } from '@/components/elements/aboutSection/AboutSection'
import { RecentlyFunded } from '@/components/elements/recentlyFunded'

import {
    Flex,
    Text,
    Box
} from '@chakra-ui/react'

export const HomePage = () => {
    return (
        <Box bgColor='#0F0F16' padding='10rem'>
            <AboutSection />
            <RecentlyFunded />
        </Box>
    )
}