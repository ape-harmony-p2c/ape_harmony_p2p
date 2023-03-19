import prisma from '@/lib/prisma';
import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const { method } = req
  const authenticatedUser = req.session.address
  const userAddress = req.query.userAddress?.toString()
  switch (method) {
    
    case 'GET':
        //unauthticated get request to find a user profile given a wallet address
        try{
        const user = await prisma.user.findUnique({
            where:{
                address: userAddress
            } 
        });
        res.send(user);
    }catch (error){
        console.log(error);
        res.send({
            message: false
        })
    }
      break
    case 'PUT':
        const { _userName, _bio, _twitter, _profileTokenID, _primaryFunction } = req.body;
        if (!authenticatedUser) return res.status(401).send("Unauthorized");
        try{
            const user = await prisma.user.update({
                where:{
                    address: authenticatedUser
                },
                data:{
                    userName: _userName,
                    bio: _bio,
                    twitter: _twitter,
                    profileTokenId: _profileTokenID,
                    primaryFunction: _primaryFunction
                }
            });
            res.send(user)
        }catch (error) {
            console.log(error)
            res.send({
                message: false
            })
        }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
 
export default withIronSessionApiRoute(handler, sessionOptions)