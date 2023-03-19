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
            const { _title, _body, _info, _endingAt } = req.body
            try {
                const crowdSale = await prisma.crowdSale.create({
                    data: {
                        title: _title,
                        body: _body,
                        info: _info,
                        endingAt: _endingAt,
                        createdBy: { connect: { address: authenticatedUser.toLowerCase() } }
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
            const { _sortBy, _skip, _take, _crowdSaleId } = req.query;
            try {
                if (_crowdSaleId){
                    const crowdSale = await prisma.crowdSale.findFirst({
                        where:{
                            id: parseInt(_crowdSaleId as string)
                        },
                        include: { Contribution: { include: { user: true } } }
                    })
                    res.send(crowdSale)
                    return
                }
                const queryFilters: Prisma.CrowdSaleFindManyArgs = {
                    skip: _skip ? parseInt(_skip as string) : undefined,
                    take: _take ? parseInt(_take as string) : undefined,
                    orderBy: {
                      createdAt: 'desc',
                    },
                    include: { Contribution: { include: { user: true } } }
                  };
                
                  switch (_sortBy) {
                    case 'mostUpvotes':
                      queryFilters.orderBy = {
                        commentVotes: {
                          _count: 'desc',
                        },
                      };
                      break;
                    case 'endingSoon':
                      queryFilters.where = {
                        endingAt: {
                          lt: new Date(Date.now()).toISOString(),
                        },
                      };
                      queryFilters.orderBy = {
                        endingAt: 'asc',
                      };
                      break;
                    case 'complete':
                      queryFilters.where = {
                        endingAt: {
                          lt: new Date(Date.now()).toISOString(),
                        },
                      };
                      break;
                    default:
                      break;
                  }
                
                  const crowdSales = await prisma.crowdSale.findMany(queryFilters);

                res.send(crowdSales)
                return
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