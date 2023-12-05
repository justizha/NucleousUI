import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const resultBlogs = await prisma.blog.findMany()
    return res.json(resultBlogs)
}
