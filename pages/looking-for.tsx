import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { memo } from 'react'
import { LookingForPage } from '../components/pages'

const inter = Inter({ subsets: ['latin'] })

const LookingForContainer = () => {
    return (
        <LookingForPage />
    )
}

LookingForContainer.displayName = 'Looking For Page Container'

export default memo(LookingForContainer)