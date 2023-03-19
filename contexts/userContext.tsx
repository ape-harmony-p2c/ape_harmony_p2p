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
    // set some state
    const [isHolder, setIsHolder] = useState(false);
    const [USDC, setUSDC] = useState<BigNumber | number>(0)

    //use effect hooks to grab stuff from wagmi

    const { address } = useAccount()

    // balance of 721 - need to add deployed contract address
    const { data: balance, isError, isLoading } = useContractRead({
        address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1', // placeholder address - need deployed contract address
        abi: ERC20ABI,
        functionName: 'balanceOf',
    })

    const { data: ReadUSDC } = useBalance({
        address: address,
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      })
    // 

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
            address,
            tokenHolder: isHolder,
            USDCBalance: USDC

          }}
        >
          {props.children}
        </UserContext.Provider>
      );
}

