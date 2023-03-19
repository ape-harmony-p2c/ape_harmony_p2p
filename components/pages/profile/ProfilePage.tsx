import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { ProfileForm } from '@/components/elements/profileForm'
import * as routes from '../../../constants/routes'
import axios from 'axios';

import {
    Flex,
    Text,
    Button,

} from '@chakra-ui/react'
import { YourProjects } from '@/components/elements/';
import { YourContributions } from '@/components/elements';

export interface ProfileFormValues {
    name: string,
    bio: string,
    twitter: string,
    primaryFunction: string,
}
export const ProfilePage = ({ address }: { address: string | undefined }) => {
    // Status state
    const [isFetching, setIsFetching] = useState(false)
    const [isUser, setIsUser] = useState(false)
    const [user, setUser] = useState({})
    const prefillUser = {
        // imgUrl: '',
        name: '',
        bio: '',
        twitter: '',
        primaryFunction: '',
    }
    const onSubmit = (values: ProfileFormValues) => {

        async function fetchData() {
            try {
                const res = await axios.put('./api/user', {
                    _userName: values.name,
                    _bio: values.bio,
                    _twitter: values.twitter,
                    _primaryFunction: values.primaryFunction
                });
                const { data } = res
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

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
                    // isFetching={isFetching}
                    address={address}
                    isUser={isUser}
                    prefillUser={prefillUser}
                    onSubmit={onSubmit}
                />
                <YourProjects address={address} />
                <YourContributions address={address} />
            </Flex>
        </Flex >

    )
}