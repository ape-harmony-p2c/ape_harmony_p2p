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
    Textarea,
} from '@chakra-ui/react'
import Image from 'next/image'
import { MdPerson } from 'react-icons/md'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import { Formik, Form, Field, FieldProps, FastField } from 'formik'
import * as yup from 'yup'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'



export interface ProfileFormValues {
    // imgUrl: string,
    name: string,
    bio: string,
    twitter: string,
    primaryFunction: string,
}

interface ProfileFormProps {
    address: string | string[] | undefined,
    // isFetching: boolean
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
    // isFetching,
    address,
    isUser,
    prefillUser,
    onSubmit,
}: ProfileFormProps) => {

    let initialValues = prefillUser ? prefillUser : {
        // imgUrl: '',
        name: '',
        bio: '',
        twitter: '',
        primaryFunction: '',
    }
    console.log(address)
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize
            onSubmit={(values) => {
                onSubmit({ ...values })
            }}
        >
            {({ setFieldValue, values }) => (
                <Form
                    style={{
                        display: 'flex',
                        width: "100%",
                        // height: '100%'
                    }}
                >
                    <Flex
                        flexDir={'column'}
                        border='2px'
                        width={'100%'}
                        // maxWidth={'80rem'}
                        borderRadius={'.75rem'}
                        padding={['4px', null, '8px', null, '20px']}
                    >
                        <Circle
                            position="relative"
                            size={['160px', null, '200px']}
                            overflow="hidden"
                            mb='40px'
                        >
                            {typeof address === 'string' && <Jazzicon diameter={200} seed={jsNumberForAddress(address)} />}
                            {/* {initialValues.imgUrl ? (
                                <Image
                                    src={initialValues.imgUrl}
                                    alt="profile image"
                                    fill
                                />
                            ) : (
                                <Icon
                                    as={MdPerson}
                                    height="64px"
                                    width="64px"
                                    color="blackAlpha.300"
                                />
                            )} */}
                        </Circle>
                        <Flex
                            mb='40px'
                            flexDirection="column"
                        // 
                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="white"
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
                                            // backgroundColor={'white'}
                                            borderRadius={'9999px'}
                                            height={'42px'}
                                            // isDisabled={!isUser}
                                            {...field}
                                            id="name"
                                            placeholder="Name"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        {/* <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.name}
                                        </FormErrorMessage> */}
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Flex
                            mb='40px'
                            flexDirection="column"

                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="white"
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
                                        <Textarea
                                            height={'64px'}
                                            // backgroundColor={'white'}
                                            // isDisabled={!isUser}
                                            {...field}
                                            id="bio"
                                            placeholder="Tell us about you."
                                            variant="filled"
                                            padding={'8px 16px'}
                                            fontSize={'100%'}
                                            borderRadius={'1.5rem'}
                                            w={'100%'}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        {/* <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.bio}
                                        </FormErrorMessage> */}
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Flex
                            mb='40px'
                            flexDirection="column"

                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="white"
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
                                            // backgroundColor={'white'}
                                            borderRadius={'9999px'}
                                            height={'42px'}
                                            // isDisabled={!isUser}
                                            {...field}
                                            id="twitter"
                                            placeholder="Your twitter handle"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        {/* <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.twitter}
                                        </FormErrorMessage> */}
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Flex
                            mb='40px'
                            flexDirection="column"

                        >
                            <Text
                                fontSize="20px"
                                fontWeight="500"
                                color="white"
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
                                            // backgroundColor={'white'}
                                            borderRadius={'9999px'}
                                            height={'42px'}
                                            // isDisabled={!isUser}
                                            {...field}
                                            id="primaryFunction"
                                            placeholder="Are you a funder or looking for funding?"
                                            variant="filled"
                                            paddingTop={6}
                                            paddingBottom={6}
                                            style={{
                                                border: '1px solid #D3E3F8',
                                            }}
                                        />
                                        {/* <FormErrorMessage
                                            fontSize="xs"
                                            position="absolute"
                                        >
                                            {form.errors.primaryFunction}
                                        </FormErrorMessage> */}
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        {/* <Button
                            display={isUser ? 'block' : 'block'}
                            type="submit"
                            fontSize={['16px', null, null, '24px']}
                            height='42px'
                            isLoading={isFetching}
                            colorScheme={'teal'}
                            mb={'20px'}
                            borderRadius={'9999px'}
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                        >
                            Submit
                        </Button> */}
                    </Flex>

                </Form>
            )
            }
        </Formik >
    )
}
