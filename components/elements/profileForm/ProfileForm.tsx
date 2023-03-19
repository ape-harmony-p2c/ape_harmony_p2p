import { useState } from 'react';
import {
    Flex,
    Link,
    Button,
    Show,
    Hide
} from '@chakra-ui/react'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import { Formik, Form, Field, FieldProps, FastField } from 'formik'


export interface ProfileFormValues {
    name: string,
    bio: string,
    twitter: string,
    primaryFunction: string,
}

interface ProfileFormProps {
    isFetching: boolean
    prefillUser?: ProfileFormValues
    onSubmit: (values: ProfileFormValues) => void
}


export const ProfileForm = ({
    isFetching,
    prefillUser,
    onSubmit,
}: ProfileFormProps) => {

    let initialValues = prefillUser ? prefillUser : {
        name: '',
        bio: '',
        twitter: '',
        primaryFunction: '',
    }

    return (
        <Formik>

        </Formik>
    )
}