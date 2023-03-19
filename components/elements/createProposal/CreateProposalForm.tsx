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
    Button,
    FormErrorMessage
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { useFormik } from "formik";
import * as yup from "yup"
import axios from 'axios';
import { create } from 'lodash';

export const CreateProposalForm = () => {
    const router = useRouter()

    const today = new Date();
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');
const year = today.getFullYear().toString();
const formattedDate = `${month}/${day}/${year}`;

    const formik = useFormik({
      initialValues: {
          description: '',
          projectName: '',
          fundingGoal: '',
          endDate:'',
          token: ''
      },
      validationSchema: yup.object({
          projectName: yup
              .string()
              .required(),
          fundingGoal: yup
              .string()
              .required(),
          endDate: yup
            .string()
            .required(),
          token: yup
            .string()
            .required(),
      }),
      onSubmit: async (values) => {
        const {projectName, fundingGoal, endDate, description, token} = values
        const createdProposal = {
          title: projectName,
          seeking: fundingGoal,
          endingAt: endDate,
          info: description,
          fundingGoal
        }

        const {title, seeking, endingAt, info} = createdProposal
        console.log('title', title)
        console.log('typeof title', typeof title)
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        const newEndingAt = new Date(Date.now() + 86400000 * randomNumber).toISOString()

        const res = await axios.post('/api/crowdsale',{_title: projectName, _body: info, _info: token, _endingAt: newEndingAt, _seeking: seeking })
        console.log('res', res)
          console.log('createdProposal', createdProposal)
      },
  });

    const { getFieldProps, handleSubmit, errors } = formik

    return (
      <>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.projectName || !!errors.description || !!errors.endDate || !!errors.fundingGoal}>
            <FormControl mb={[4]}>
              <FormLabel fontSize={['2xl']} htmlFor='projectName' mb={[1]} color={'#A1F408'}>Project Name</FormLabel>
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
                <FormLabel fontSize={['2xl']} htmlFor='fundingGoal' mb={[1]} color={'#A1F408'} >Funding Goal</FormLabel>
                <FormHelperText fontSize={['m']} mt={[0]}>How much cash do you need?</FormHelperText>
                <Input
                  id='fundingGoal'
                  type='text'
                  rounded={4}
                  color={'black'}
                  bgColor={'darkgray'}
                  {...getFieldProps('fundingGoal')}
                  mt={3}
                  />
            </FormControl>
            <FormControl mb={[4]}>
                <FormLabel fontSize={['2xl']} htmlFor='endDate' mb={[1]} color={'#A1F408'}>End Date</FormLabel>
                <FormHelperText fontSize={['m']} mt={[0]}>How much cash do you need?</FormHelperText>
                <Input
                  id='endDate'
                  placeholder={formattedDate}
                  min={formattedDate}
                  type='text'
                  rounded={4}
                  color={'black'}
                  bgColor={'darkgray'}
                  {...getFieldProps('endDate')}
                  mt={3}
                  />
            </FormControl>
            <FormControl mb={[4]}>
                <FormLabel fontSize={['2xl']} htmlFor='token' mb={[1]} color={'#A1F408'}>Token</FormLabel>
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
              <FormLabel fontSize={['2xl']} htmlFor='description' mb={[1]} color={'#A1F408'}>Description</FormLabel>
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
            <FormErrorMessage fontSize={'lg'} mt='none' mb='.25rem' textAlign={['center', null, null, 'initial']}>Please fill out all of the fields.</FormErrorMessage>
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
