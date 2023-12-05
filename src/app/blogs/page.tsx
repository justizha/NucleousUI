
import prisma from "../lib/prisma"


export default async function BLogSection() {
    const blogs = await prisma.blog.findMany()
    return (
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            <div className="w-full px-4">
                {blogs.map((blog) => (
                    <div className="mx-auto w-full max-w-2x rounded shadow shadow-black  border border-main-gray bg-gray-600 text-main-white p-2">
                        <ul key={blog.id}>
                            <li>{blog.title}</li>
                            <li>{blog.content}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}