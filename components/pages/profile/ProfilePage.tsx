import { useState } from 'react'
import NextLink from 'next/link'
import { ProfileForm } from '@/components/elements/profileForm'

import {
    Flex,
    Text,
    Button,

} from '@chakra-ui/react'



export const ProfilePage = () => {
    // Status state
    const [isFetching, setIsFetching] = useState(false)
    const [isUser, setIsUser] = useState(false)

    const prefillUser = {
        imgUrl: '',
        name: '',
        bio: '',
        twitter: '',
        primaryFunction: '',
    }
    const onSubmit = () => {

    }

    return (
        <Flex justify="center" mt={'68px'}>
            <Flex align="center" direction="column" height="100vh" width="60vw">
                <Button>Get Funded</Button>
                <ProfileForm
                    isFetching={isFetching}
                    isUser={isUser}
                    prefillUser={prefillUser}
                    onSubmit={onSubmit}
                />
                <Flex></Flex>
                <Flex></Flex>
            </Flex>
        </Flex>

    )
}