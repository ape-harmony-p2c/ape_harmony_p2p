import prisma from '@/lib/prisma';
import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { method } = req
    const authenticatedUser = req.session.address
    switch (method) {

        case 'POST':
            const { _commentId, _crowdSaleId } = req.body
            if (!authenticatedUser) return res.status(401).send("Unauthorized");
            //unauthticated get request to find a user profile given a wallet address
            try {
                const existingUpvote = await prisma.commentVote.findFirst({
                    where: {
                        AND: [
                            { voter: { address: authenticatedUser } },
                            _commentId ? { commentId: _commentId } : {},
                            _crowdSaleId ? { crowdSaleId: _crowdSaleId } : {},
                        ],
                    },
                });

                if (existingUpvote) {
                    await prisma.commentVote.delete({ where: { id: existingUpvote.id } });
                    res.send({
                        message: true
                    }) // Upvote deleted
                } else {
                    const _data = {
                        voter: { connect: { address: authenticatedUser } },
                        ...(_commentId && { comment: { connect: { id: _commentId } } }),
                        ...(_crowdSaleId && { crowdSale: { connect: { id: _crowdSaleId } } }),
                    };

                    const newUpvote = await prisma.commentVote.create({ data: _data });
                    res.send(
                        newUpvote
                    )
                }
            } catch (error) {
                console.log(error);
                res.send({
                    message: false
                })
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)