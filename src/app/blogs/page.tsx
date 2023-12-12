import Link from "next/link";
import prisma from "../../lib/prisma";

export const dynamic = 'force-dynamic';

export default async function BLogSection() {
    const blogs = await prisma.blog.findMany()
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {blogs.map((blog) => (
                <div className="mx-auto w-full max-w-2xl rounded shadow shadow-black border border-main-gray bg-gray-600 text-main-white p-2">
                    <div className="text-main-white" key={blog.id}>
                        <h2 className="font-semibold mb-2">{blog.title}</h2>
                        <p className="text-base mb-2">{blog.content}</p>
                    </div>
                    <button className="p-2 w-full rounded h-10 bg-main-white bg-opacity-70 hover:bg-opacity-100 duration-150 border border-main-black text-center">
                        <Link href={`/blogs/${blog.slug}`} className="text-black">
                            Detail
                        </Link>
                    </button>
                </div>
            ))}
        </div>
    )
}