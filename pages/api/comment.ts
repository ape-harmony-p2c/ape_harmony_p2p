import prisma from '@/lib/prisma';
import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const { method } = req
  const authenticatedUser = req.session.address
  switch (method) {
    case 'GET':
        //return all comments for a crowedsale
        try{
            const {_crowdSaleId, _skip, _take } = req.query;
            const comments = await prisma.comment.findMany({
                where: { crowdSaleId: parseInt(_crowdSaleId as string) },
                include: {
                  createdBy: true,
                  commentVotes: true,
                  childComments: {
                    include: {
                      createdBy: true,
                      commentVotes: true,
                      childComments: {
                        include: {
                          createdBy: true,
                          commentVotes: true,
                        },
                      },
                    },
                  },
                },
                skip: parseInt(_skip as string),
                take: parseInt(_take as string),
              });
        res.send(comments);
    }catch (error){
        console.log(error);
        res.send({
            message: false
        })
    }
      break
    case 'POST':
        const { _crowdSaleId, _body , _parentCommentId} = req.body;
        if (!authenticatedUser) return res.status(401).send("Unauthorized");
        //add token gating
        try{
                const comment = await prisma.comment.create({
                    data: {
                      body: _body,
                      createdBy: { connect: { address: authenticatedUser } },
                      crowdSale: { connect: { id: parseInt(_crowdSaleId as string) } },
                      parentComment: _parentCommentId ? { connect: { id: parseInt(_parentCommentId as string) } } : undefined
                    },
                  });
                res.send(comment)
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