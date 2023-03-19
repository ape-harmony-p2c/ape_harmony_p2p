import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  createAuthenticationAdapter,
  RainbowKitAuthenticationProvider,
  AuthenticationStatus
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, goerli, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { NavigationBar } from '@/components/elements';
import { SiweProvider } from '@randombits/use-siwe';
import RainbowKitUseSiweProvider from '@randombits/rainbowkit-use-siwe-auth';
import axios from 'axios';
import useSignin from '@/hooks/useSignin';
import useMemo from 'react'
import { SiweMessage } from 'siwe';


const alchemyId = 'YMYVZZmF7YdOUtdXKVP-OoKjlxhWa7nJ';
//const sign = axios.post('api/authenticate');

const { chains, provider } = configureChains(
  [mainnet, goerli, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: alchemyId }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'ape_harmony_p2p',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


export default function App({ Component, pageProps }: AppProps) {
  const { signin} = useSignin()
  return (
    <WagmiConfig client={wagmiClient}>
      <SiweProvider>
      <RainbowKitUseSiweProvider onSignIn={signin}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
        <NavigationBar />
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
      </RainbowKitUseSiweProvider>
      </SiweProvider>
    </WagmiConfig>
  )
}
