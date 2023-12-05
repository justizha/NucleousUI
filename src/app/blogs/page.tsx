
import prisma from "../lib/prisma"

export async function getStaticProps() {

    const blogs = await prisma.blog.findMany()

    return {
        props: {
            blogs
        }
    }
}


export default async function BLogSection({ blogs }) {
    return (
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            <div className="w-full px-4">
                <div className="mx-auto w-full max-w-2x rounded shadow shadow-black  border border-main-gray bg-gray-600 text-main-white p-2">
                    {blogs.map((blog) => (
                        <ul key={blog.id}>
                            <li>{blog.title}</li>
                            <li>{blog.content}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}