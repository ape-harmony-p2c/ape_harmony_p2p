import { createContext, useState, useEffect } from 'react';
import { BigNumber } from 'ethers';
import { useAccount, useContractRead, useBalance } from 'wagmi';
import { ERC20ABI } from '@/constants/abi';

interface IUserContextProps {
    address: any,
    tokenHolder: boolean,
    USDCBalance: BigNumber | number,

}

export const UserContext = createContext<IUserContextProps>({
    address: '',
    tokenHolder: false,
    USDCBalance: 0,
})

export const UserContextProvider = (props: any) => {
    const [isHolder, setIsHolder] = useState(false);
    const [USDC, setUSDC] = useState<BigNumber | number>(0)
    const [accountAddress, setAccountAddress] = useState('')

    // get wallet address
    const { address } = useAccount()

    // read wallet's balance of 721 to check holder status
    const { data: balance, isError, isLoading } = useContractRead({
        address: '0xC4B0FaB89fe569632BcB2E4824953ec8a1adC22d', // placeholder address - need deployed contract address
        abi: ERC20ABI,
        functionName: 'balanceOf',
    })

    // read wallet's balance of USDC
    const { data: ReadUSDC } = useBalance({
        address: address,
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC contract address
      })
    
    // grab all info and set state in hooks to prevent hydration errors
    useEffect(() => {
        if (address) {
            setAccountAddress(address)
        }
      }, [address, setAccountAddress]);

    useEffect(() => {
        if (balance! > 0) {
            setIsHolder(true)
        }
      }, [balance, setIsHolder]);

    useEffect(() => {
    if (ReadUSDC!) {
        setUSDC(ReadUSDC.value)
    }
    }, [ReadUSDC, setUSDC]);

    return (
        <UserContext.Provider
          value={{
            address: accountAddress,
            tokenHolder: isHolder,
            USDCBalance: USDC

          }}
        >
          {props.children}
        </UserContext.Provider>
      );
}

