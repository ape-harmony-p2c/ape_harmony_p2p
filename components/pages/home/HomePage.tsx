import { useState } from 'react'
import NextLink from 'next/link'
import { memo, useContext } from 'react'
import { UserContext } from '@/contexts/userContext'

import {
    Flex,
    Text,
} from '@chakra-ui/react'

export const HomePage = () => {
    const user = useContext(UserContext)
    return (
        <Flex justify="center">
            <Flex align="center" direction="column" height="100vh" width="60vw">
                <Text>{user.address}</Text>
                <Text>Home</Text>
            </Flex>
        </Flex>

    )
}