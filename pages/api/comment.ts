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
            const {_crowdSaleId, _skip, _take } = req.body;
            const comments = await prisma.comment.findMany({
                where: { crowdSaleId: _crowdSaleId },
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
                skip: _skip,
                take: _take,
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
                      crowdSale: { connect: { id: _crowdSaleId } },
                      parentComment: _parentCommentId ? { connect: { id: _parentCommentId } } : undefined
                    },
                  });
                res.send(comment)
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