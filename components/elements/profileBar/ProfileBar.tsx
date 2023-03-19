import {
    Box,
    Flex,
    Link,
    Button,
    Image,
    HStack,
    LinkBox,
    LinkOverlay,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Show,
    Hide,
    Heading,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    Progress
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const ProfileBar = () => {
    const router = useRouter()

    return (
      <>
        <Flex>
          <Flex flexBasis={'15%'} alignItems='center'>
            <Image alt='user-pfp' boxSize={58} rounded={30} bgColor='gray' justifyContent='center' src='/css-gradient.png'></Image>
          </Flex>
            <Flex justify={'space-evenly'} flexBasis={'85%'}>
              <Flex flexDir={'column'} align={'center'}>
                <Heading size={'md'} >Project</Heading>
                <Flex  grow={'1'}>
                  <Text textAlign={'center'}>Lazy Chicken Society</Text>
                </Flex>
              </Flex>
              <Box>
                <Heading size={'md'} >Seeking</Heading>
                <Flex  grow={'1'}>
                  <Text textAlign={'center'}>$500 USDC</Text>
                </Flex>
              </Box>
              <Box>
                <Heading size={'md'} >Funders</Heading>
                <Flex pos={'relative'}>
                  <Flex pos={'absolute'} zIndex={2} left={'60%'} boxSize={50} rounded={30} bgColor='gray' justifyContent='center' alignItems='center' bgImage='/blue-gradient.webp'></Flex>
                  <Flex pos={'absolute'} zIndex={1} left={'30%'} boxSize={50} rounded={30} bgColor='green' justifyContent='center' alignItems='center'></Flex>
                  <Flex pos={'absolute'} zIndex={0} boxSize={50} rounded={30} bgColor='gray' justifyContent='center' alignItems='center'></Flex>
                </Flex>
              </Box>   
          </Flex>
        </Flex>
        <Box mt={6}>
          <Flex justifyContent={'space-between'}>
            <Heading mb={2} size={'sm'}>Sold: 20</Heading>
            <Heading mb={2} size={'sm'}>Bought: 20</Heading>
          </Flex>
          <Progress value={20} size='sm' colorScheme='pink' rounded={1}/>
        </Box>
      </>
    )

}
