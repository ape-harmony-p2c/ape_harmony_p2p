import prisma from '@/lib/prisma';
import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from 'prisma/prisma-client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { method } = req
    const authenticatedUser = req.session.address
    switch (method) {

        case 'POST':
            if (!authenticatedUser) return res.status(401).send("Unauthorized");
            const { _title, _body, _info } = req.body
            try {
                const crowdSale = await prisma.crowdSale.create({
                    data: {
                        title: _title,
                        body: _body,
                        info: _info,
                        createdBy: { connect: { address: authenticatedUser } }
                    }

                })
                res.send(crowdSale);
            } catch (error) {
                console.log(error);
                res.send({
                    message: false
                })
            }
            break
        case 'GET':
            const { _sortBy, _skip, _take } = req.query;
            try {
                const queryFilters = {
                    skip: _skip?.toString(),
                    take: _take?.toString(),
                    orderBy: {
                        createdAt: 'desc',
                    },
                }

                switch (_sortBy) {
                    case 'mostComments':
                        queryFilters.orderBy = {
                            comments: {
                                count: 'desc',
                            },
                        };
                        break;
                    case 'mostUpvotes':
                        queryFilters.orderBy = {
                            commentVotes: {
                                count: 'desc',
                            },
                        };
                        break;
                    case 'endingSoon':
                        queryFilters.where = {
                            endingAt: {
                                lt: new Date(),
                            },
                        };
                        queryFilters.orderBy = {
                            endingAt: 'asc',
                        };
                        break;
                    case 'complete':
                        queryFilters.where = {
                            endingAt: {
                                lt: new Date(),
                            },
                        };
                        break;
                    default:
                        break;
                }

                const crowdSales = await prisma.crowdSale.findMany(queryFilters);

                res.send(crowdSales)
            } catch (error) {
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