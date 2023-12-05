import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const blogs = await prisma.blog.findMany()
        return res.status(200).json(blogs)
    } else {
        console.log("something went wrong")
    }
}
