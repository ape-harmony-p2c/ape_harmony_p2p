import { useState } from 'react'
import NextLink from 'next/link'
import { Filter } from '@/components/elements/filter'

import {
    Flex,
    Text,
    Box
} from '@chakra-ui/react'

export const LookingForPage = () => {
    return (
        <Box bgColor='#0F0F16' pt={110} w='100vw' h='100vh'>
            <Filter />
        </Box>
    )
}