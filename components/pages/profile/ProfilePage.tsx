import { useState } from 'react'
import NextLink from 'next/link'

import {
    Flex,
    Text,
    Button,

} from '@chakra-ui/react'

export const ProfilePage = () => {
    return (
        <Flex justify="center" mt={'68px'}>
            <Flex align="center" direction="column" height="100vh" width="60vw">
                <Button>Get Funded</Button>
                <Flex></Flex>
                <Flex></Flex>
                <Flex></Flex>
            </Flex>
        </Flex>

    )
}