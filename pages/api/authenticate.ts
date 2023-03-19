import prisma from '@/lib/prisma';
import { sessionOptions } from '@/lib/session';
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { method } = req
    if (!req.session.address) return res.status(401).send("Unauthorized");
    const authenticatedUser = req.session.address
    switch (method) {
        case 'POST':
            const user = await prisma.user.upsert({
                where: {
                    address: authenticatedUser.toLowerCase()
                },
                update: {
                },
                create: {
                    address: authenticatedUser.toLocaleLowerCase()
                }
            });
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default withIronSessionApiRoute(handler, sessionOptions)