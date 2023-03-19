import {
    Flex,
    Image,
    Text,
    Heading,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Textarea,
    Input,
    Button
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { useFormik } from "formik";
import * as yup from "yup"

export const CreateProposalForm = () => {
    const router = useRouter()

    const formik = useFormik({
      initialValues: {
          description: '',
          projectName: '0.01',
      },
      validationSchema: yup.object({
          ticketPrice: yup
              .string()
              .required(),
          reservePrice: yup
              .string()
              .required()
      }),
      onSubmit: (values) => {
          console.log('values', values)
      },
  });

    const { getFieldProps, handleSubmit, errors } = formik


    return (
      <>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormControl mb={[4]}>
              <FormLabel fontSize={['2xl']} htmlFor='projectName' mb={[1]}>Project Name</FormLabel>
              <FormHelperText fontSize={['m']} mt={[0]}>Dont worry, you can change this later!</FormHelperText>
              <Input
                id='projectName'
                type='text'
                rounded={4}
                color={'black'}
                bgColor={'darkgray'}
                {...getFieldProps('projectName')}
                mt={3}
                />
            </FormControl>
              <FormControl mb={[4]}>
                <FormLabel fontSize={['2xl']} htmlFor='seekingAmount' mb={[1]}>Funding Goal</FormLabel>
                <FormHelperText fontSize={['m']} mt={[0]}>How much cash do you need?</FormHelperText>
                <Input
                  id='seekingAmount'
                  type='text'
                  rounded={4}
                  color={'black'}
                  bgColor={'darkgray'}
                  {...getFieldProps('seekingAmount')}
                  mt={3}
                  />
            </FormControl>
            <FormControl mb={[4]}>
                <FormLabel fontSize={['2xl']} htmlFor='endDate' mb={[1]}>End Date</FormLabel>
                <FormHelperText fontSize={['m']} mt={[0]}>How much cash do you need?</FormHelperText>
                <Input
                  id='endDate'
                  type='text'
                  rounded={4}
                  color={'black'}
                  bgColor={'darkgray'}
                  {...getFieldProps('endDate')}
                  mt={3}
                  />
            </FormControl>
            <FormControl mb={[4]}>
                <FormLabel fontSize={['2xl']} htmlFor='token' mb={[1]}>Token</FormLabel>
                <FormHelperText fontSize={['m']} mt={[0]}>Which token are you looking for?</FormHelperText>
                <Input
                  id='token'
                  type='text'
                  rounded={4}
                  color={'black'}
                  bgColor={'darkgray'}
                  {...getFieldProps('token')}
                  mt={3}
                  />
            </FormControl>
            <FormControl mb={[4]}>
              <FormLabel fontSize={['2xl']} htmlFor='description' mb={[1]}>Description</FormLabel>
              <FormHelperText fontSize={['m']} mt={[0]}>Tell us more about you and your project!</FormHelperText>
              <Textarea
                id='description'
                placeholder={
                `I am offering x percent of my project...\nYou will be interested in this project if...
                `
              }
                h={[120]}
                rounded={4}
                color={'black'}
                bgColor={'darkgray'}
                {...getFieldProps('description')}
                mt={3}
                />
            </FormControl>
            <Flex justify={'flex-end'}>
              <Button type='submit'>
                Submit
              </Button> 
            </Flex>
          </FormControl>
        </form>
      </>
    )

}
