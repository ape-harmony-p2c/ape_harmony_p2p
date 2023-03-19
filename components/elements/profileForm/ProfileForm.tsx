import { useState } from 'react';
import {
    Flex,
    Link,
    Button,
    Show,
    Hide,
    Text,
    Input,
    FormControl,
    FormErrorMessage,
    Icon,
    Circle,
} from '@chakra-ui/react'
import Image from 'next/image'
import { MdPerson } from 'react-icons/md'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import { Formik, Form, Field, FieldProps, FastField } from 'formik'
import * as yup from 'yup'


export interface ProfileFormValues {
    imgUrl: string,
    name: string,
    bio: string,
    twitter: string,
    primaryFunction: string,
}

interface ProfileFormProps {
    isFetching: boolean
    isUser: boolean
    prefillUser?: ProfileFormValues
    onSubmit: (values: ProfileFormValues) => void
}

const validationSchema = yup.object().shape({
    name: yup.string(),
    twitter: yup
        .string()
        .max(15, 'Too many characters'),
    bio: yup.string().optional(),
    primaryFunction: yup.string().optional()
})


export const ProfileForm = ({
    isFetching,
    isUser,
    prefillUser,
    onSubmit,
}: ProfileFormProps) => {

    let initialValues = prefillUser ? prefillUser : {
        imgUrl: '',
        name: '',
        bio: '',
        twitter: '',
        primaryFunction: '',
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize
            isDisabled={!isUser}
            onSubmit={(values) => {
                onSubmit({ ...values })
            }}
        >
            {({ setFieldValue, values }) => (
                <Form
                    style={{
                        display: 'flex',
                        flex: 1,
                    }}
                >
                    <Flex
                        flexDir={'column'}
                    >
                        <Circle
                            position="relative"
                            size={['160px', null, '200px']}
                            backgroundColor="white"
                            overflow="hidden"
                        >
                            {initialValues.imgUrl ? (
                                <Image
                                    src={initialValues.imgUrl}
                                    alt="profile image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            ) : (
                                <Icon
                                    as={MdPerson}
                                    height="64px"
                                    width="64px"
                                    color="blackAlpha.300"
                                />
                            )}
                        </Circle>
                        <Flex
                            flex={1}
                            flexDirection="column"
                            marginRight={[0, null, 4]}
                            marginBottom={[8, null, 0]}
                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="gray.900"
                                style={{
                                    fontVariant: 'all-small-caps',
                                }}
                                marginBottom={2}
                            >
                                NAME
                            </Text>
                            <Field name="name">
                                {({ field, form }: FieldProps) => (
                                    <FormControl
                                        isInvalid={
                                            !!(
                                                form.errors.name &&
                                                form.touched.name
                                            )
                                        }
                                    >
                                        <Input
                                            {...field}
                                            id="name"
                                            placeholder="First name"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.name}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Flex
                            flex={1}
                            flexDirection="column"
                            marginRight={[0, null, 4]}
                            marginBottom={[8, null, 0]}
                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="gray.900"
                                style={{
                                    fontVariant: 'all-small-caps',
                                }}
                                marginBottom={2}
                            >
                                Bio
                            </Text>
                            <Field name="bio">
                                {({ field, form }: FieldProps) => (
                                    <FormControl
                                        isInvalid={
                                            !!(
                                                form.errors.bio &&
                                                form.touched.bio
                                            )
                                        }
                                    >
                                        <Input
                                            {...field}
                                            id="bio"
                                            placeholder="bio"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.bio}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Flex
                            flex={1}
                            flexDirection="column"
                            marginRight={[0, null, 4]}
                            marginBottom={[8, null, 0]}
                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="gray.900"
                                style={{
                                    fontVariant: 'all-small-caps',
                                }}
                                marginBottom={2}
                            >
                                Twitter
                            </Text>
                            <Field name="twitter">
                                {({ field, form }: FieldProps) => (
                                    <FormControl
                                        isInvalid={
                                            !!(
                                                form.errors.twitter &&
                                                form.touched.twitter
                                            )
                                        }
                                    >
                                        <Input
                                            {...field}
                                            id="twitter"
                                            placeholder="twitter"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.twitter}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Flex
                            flex={1}
                            flexDirection="column"
                            marginRight={[0, null, 4]}
                            marginBottom={[8, null, 0]}
                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="gray.900"
                                style={{
                                    fontVariant: 'all-small-caps',
                                }}
                                marginBottom={2}
                            >
                                PRIMARY FUNCTION
                            </Text>
                            <Field name="primaryFunction">
                                {({ field, form }: FieldProps) => (
                                    <FormControl
                                        isInvalid={
                                            !!(
                                                form.errors.primaryFunction &&
                                                form.touched.primaryFunction
                                            )
                                        }
                                    >
                                        <Input
                                            {...field}
                                            id="primaryFunction"
                                            placeholder="primaryFunction"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.primaryFunction}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                    </Flex>
                    <Button
                        display={isUser ? 'block' : 'none'}
                        type="submit"
                        fontSize={['16px', null, null, '24px']}
                        paddingLeft={16}
                        paddingRight={16}
                        paddingTop={[6, null, null, 8]}
                        paddingBottom={[6, null, null, 8]}
                        marginTop={12}
                        isLoading={isFetching}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
