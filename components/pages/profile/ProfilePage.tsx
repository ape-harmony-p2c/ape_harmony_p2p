import { useState } from 'react'
import NextLink from 'next/link'
import { ProfileForm } from '@/components/elements/profileForm'
import * as routes from '../../../constants/routes'

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
            <Flex direction="column" height="100vh" width="60vw">
                <Flex
                    w={'100%'}
                    justifyContent={'right'}
                    mt='20px'
                    padding="20px"
                >
                    <NextLink href={routes.CREATE_PROPOSAL}>
                        <Button
                            h="42px"
                        >
                            Get Funded
                        </Button>
                    </NextLink>
                </Flex>
                <ProfileForm
                    isFetching={isFetching}
                    isUser={isUser}
                    prefillUser={prefillUser}
                    onSubmit={onSubmit}
                />
                <Flex></Flex>
                <Flex></Flex>
            </Flex>
        </Flex >

    )
}