import { useState } from 'react'
import NextLink from 'next/link'
import { ProfileForm } from '@/components/elements/profileForm'
import * as routes from '../../../constants/routes'
import axios from 'axios';

import {
    Flex,
    Text,
    Button,

} from '@chakra-ui/react'

interface ProfileFormProps {
    address: string
}

export const ProfilePage = ({ address }: ProfileFormProps) => {
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

        useEffect(() => {
            async function fetchData() {
                try {
                    const res = await axios.get('./api/crowdsale', {
                        params: {
                            _sortBy: 'mostUpvotes',
                        },
                    });
                    const { data } = res
                    console.log(data)
                    setProjects(data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchData();
        }, []);
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