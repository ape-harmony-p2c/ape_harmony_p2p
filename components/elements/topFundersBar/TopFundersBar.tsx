import {
    Flex,
    Image,
    Text,
    Heading
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';

export const TopFundersBar = () => {
    const router = useRouter()

    return (
      <>
        <Flex>
          <Flex flexBasis={['20%','15%']} alignItems='center'>
            <Image alt='user-pfp' boxSize={58} rounded={30} bgColor='gray' justifyContent='center' src='/css-gradient.png'></Image>
          </Flex>
            <Flex justify={['space-evenly']} flexBasis={'85%'}>
                <Flex flexDir={'column'} align={['flex-start', 'center']} flexBasis={['33.33%']}>
                  <Heading size={['sm','md']} >Name</Heading>
                  <Flex  grow={'1'}>
                    <Text fontSize={['12px', '16px']} textAlign={['left', 'center']}>Unknown User</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={'column'} align={['flex-start', 'center']} flexBasis={['33.33%']}>
                  <Heading size={['sm','md']} >Donations</Heading>
                  <Flex  grow={'1'}>
                    <Text fontSize={['12px', '16px']} textAlign={['left', 'center']}>$500 USDC</Text>
                  </Flex>
                </Flex>
                <Flex  flexDir={'column'} align={['flex-start', 'center']} flexBasis={['33.33%']}>
                  <Heading size={['sm','md']} >Latest Inv.</Heading>
                  <Flex pos={'relative'}>
                    <Text fontSize={['12px', '16px']} textAlign={['left', 'center']}>Bored Ape Water</Text>
                  </Flex>
                </Flex>   
          </Flex>
        </Flex>
      </>
    )

}
