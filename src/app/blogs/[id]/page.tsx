"use client"

import { useEffect, useState } from "react";

async function getBlogDetail(id: number) {
    const res = await fetch('https://api.jsonsilo.com/public/196ccc69-d44d-4fc3-80d1-e234c61b05d8');
    const allBlogs = await res.json();
    const blog = allBlogs.find((blog: { id: number }) => blog.id === id);
    return blog;
}


export default function Page({ params }: { params: { id: number } }) {
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        async function fetchBlog() {
            const data = await getBlogDetail(params.id)
            setBlog(data)
        }
        fetchBlog();
    }, [params.id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{blog.id}</h1>
            <h1>{blog.title}</h1>
        </div>
    )
}
