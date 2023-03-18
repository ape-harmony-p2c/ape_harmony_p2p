import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { memo } from 'react'
import { HomePage } from '../components/pages'

const inter = Inter({ subsets: ['latin'] })

const HomeContainer = () => {
  return (
    <HomePage />
  )
}

HomeContainer.displayName = 'Home Container'

export default memo(HomeContainer)
