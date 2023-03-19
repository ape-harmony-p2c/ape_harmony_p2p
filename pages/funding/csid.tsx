import { useRouter } from 'next/router'

const Crowdsale = () => {
  const router = useRouter()
  const { csid } = router.query

  return <p>Crowdsale: {csid}</p>
}

export default Crowdsale