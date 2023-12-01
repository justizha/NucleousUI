"use client"

import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const blogs = await prisma.blog.findMany()

    return {
        props: { blogs }
    }
}

export default function BLogSection({ blogs }) {


    return (
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            <div className="w-full px-4">
                <div className="mx-auto w-full max-w-2x rounded shadow shadow-black  border border-main-gray bg-[#101128]  p-2">
                    {blogs.map(blog => (
                        <li key={blog.id}>{blog.title}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}