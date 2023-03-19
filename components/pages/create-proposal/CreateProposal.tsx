import { useState } from 'react'
import NextLink from 'next/link'
import { AboutSection } from '@/components/elements/aboutSection/AboutSection'
import { RecentlyFunded } from '@/components/elements/recentlyFunded'
import { TopFunders } from '@/components/elements/topFunders'
import { CreateProposalForm } from '@/components/elements/createProposal'

import { memo, useContext } from 'react'
import { UserContext } from '@/contexts/userContext'

import {
    Flex,
    Text,
    Box,
    Heading,
    Button

} from '@chakra-ui/react'

export const CreateProposal = () => {
    return (
        <Box pt={90} w='100vw' h='100vh' px={[2, 3, null, 6]}>
            <Heading size={['xl', null, null, '2xl']} color='white' pb={3}>
                Create Proposal
            </Heading>
            <CreateProposalForm />
        </Box>
    )
}
