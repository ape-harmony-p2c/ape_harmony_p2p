import { useRouter } from 'next/router'
import { FundingPage } from '@/components/pages' 
import { Inter } from 'next/font/google'
import { memo } from 'react'

const inter = Inter({ subsets: ['latin'] })

const CrowdsaleContainer = () => {
  const router = useRouter()
  const { csid } = router.query
    return (
        <FundingPage csid={csid?.toString()} />
    )
}

CrowdsaleContainer.displayName = 'Crowdsale Container'

export default memo(CrowdsaleContainer)

// const Crowdsale = () => {
//   const router = useRouter()
//   const { csid } = router.query

//   return <p>Crowdsale: {csid}</p>
// }

// export default Crowdsale