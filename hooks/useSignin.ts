import axios from 'axios';
import useSWR from 'swr';
import { User } from 'prisma/prisma-client'

const useSignin = () => {
    console.log('inHook')
    const { data, error, mutate } = useSWR<User>('/api/authenticate', async () => {
      const response = await axios.get<User>('/api/authenticate');
      return response.data;
    });
  
    const signin = async () => {
      const response = await axios.post<User>('/api/authenticate');
      console.log(response)
      mutate(response.data);
    };
  
    return {
      user: data,
      error,
      signin,
    };
  };
  
  export default useSignin;
