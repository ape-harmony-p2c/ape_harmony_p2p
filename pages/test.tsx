import { Button } from "@chakra-ui/react"
import axios from "axios";
import { MOST_UPVOTES, ENDING_SOON, COMPLETE } from '../constants/sortby'
import { useSession } from "@randombits/use-siwe";
//how to get user data 
//const res = await axios.get('/api/user', {params: {userAddress: address }})

//how to update a profile all of these params are optional
//const res = await axios.put('/api/user', {_userName:"name", _bio: "This is test bio", _twitter:"@test", _profileId:"1", _primaryFunction:"dev" })

//get comments
//const res = await axios.get('/api/comment',{params: {_crowdSaleId:"10", _skip:"0", _take:"10"}})

//create comments 

//create crowd sale 
//const res = await axios.post('/api/crowdsale',{_title:  "testTitle", _body:"new text", _info:"looking for x", _endingAt: new Date(Date.now() + 86400000 * 2).toISOString() })

//get crowed sale
//const res = await axios.get('/api/crowdsale',{params: {_sortby: COMPLETE }})

//get specific crowdsale

export default function Logan() {
  const { address } = useSession()

  const testAPICall = async () => {
    try {
      const res = await axios.get('/api/crowdsale',{params: {_sortby: COMPLETE }})
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
     <Button
      bg='Highlight'
      onClick={testAPICall}
     >
       Test API
     </Button>
    </>
  )
}