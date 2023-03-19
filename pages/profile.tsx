import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { memo } from 'react'
import { ProfilePage } from '../components/pages'

const inter = Inter({ subsets: ['latin'] })

const ProfileContainer = () => {
    return (
        <ProfilePage />
    )
}

ProfileContainer.displayName = 'Profile Page Container'

export default memo(ProfileContainer)