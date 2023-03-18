import { useState } from 'react'
import NextLink from 'next/link'
import { AboutSection } from '@/components/elements/aboutSection/AboutSection'

import {
    Flex,
    Text,
    Box
} from '@chakra-ui/react'

export const HomePage = () => {
    return (
        <Box bgColor='#0F0F16'>
            <AboutSection />
        </Box>
    )
}