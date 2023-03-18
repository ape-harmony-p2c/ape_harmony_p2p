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
    Hide
} from '@chakra-ui/react'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as routes from '../../../constants/routes';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';



export const NavigationBar = () => {
    const router = useRouter()

    return (
        <Flex
            position="absolute"
            top={0}
            justifyContent={['initial', null, 'center']}
            width="100%"
        >
            <Flex
                justifyContent="center"
                width="100%"
                backgroundColor="white"
                opacity={0.99}
            >
                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    height={['100px', null, '160px']}
                    width={['100%', null, null, null, '80em']}
                    paddingLeft={4}
                    paddingRight={4}
                    marginLeft={[0, null, 4]}
                    marginRight={[0, null, 4]}
                >
                    <Flex>
                        <Hide below='md'>
                            <Link as={NextLink} href={routes.HOME}>
                                <Button rounded='.75rem' bgColor='white' aria-label='home' p='.75rem' m='.5rem' boxShadow="inset 0 0 0 2px #DFE4EC,0 2px 0 0 #DFE4EC,0px 2px 4px rgba(0,0,0,0.02);">
                                    Home
                                </Button>
                            </Link>
                        </Hide>
                        <Show below='md'>
                            <Link as={NextLink} href={routes.FUNDINGS}>
                                <Button rounded='.75rem' bgColor='white' aria-label='fund stuff' p='.75rem' m='.5rem' boxShadow="inset 0 0 0 2px #DFE4EC,0 2px 0 0 #DFE4EC,0px 2px 4px rgba(0,0,0,0.02);">
                                    Fund Stuff
                                </Button>
                            </Link>
                        </Show>
                        <ConnectButton />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )

}
