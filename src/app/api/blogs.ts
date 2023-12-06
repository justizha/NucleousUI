import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const blogs = await prisma.blog.findMany()
    return res.json(blogs)
}