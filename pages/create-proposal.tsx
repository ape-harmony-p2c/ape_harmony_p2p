import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { memo, useContext } from 'react'
import { CreateProposal } from '../components/pages'
import { UserContext } from '@/contexts/userContext'

const inter = Inter({ subsets: ['latin'] })

const HomeContainer = () => {
  const user = useContext(UserContext)
  return (
    <CreateProposal />
  )
}

HomeContainer.displayName = 'Home Container'

export default memo(HomeContainer)
