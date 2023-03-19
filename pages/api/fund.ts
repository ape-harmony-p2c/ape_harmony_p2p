import prisma from '@/lib/prisma';
import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const { method } = req
  const authenticatedUser = req.session.address
  const userAddress = req.query.userAddress?.toString().toLowerCase()
  switch (method) {
    case 'Post':
        const { _userName, _bio, _twitter, _profileTokenID, _primaryFunction } = req.body;
        if (!authenticatedUser) return res.status(401).send("Unauthorized");
        try{
            const user = await prisma.user.update({
                where:{
                    address: authenticatedUser.toLowerCase()
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
            return
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