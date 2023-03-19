import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { memo } from 'react'
import { FundingPage } from '../components/pages'

const inter = Inter({ subsets: ['latin'] })

const FundingContainer = () => {
    return (
        <FundingPage />
    )
}

FundingContainer.displayName = 'Funding Container'

export default memo(FundingContainer)