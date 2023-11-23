"use client"

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from "react";

interface Blog {
    id: number;
    title: string;
    description: string;
    author: string;
    release_date: string;
    link: string;
    link_title: string

}
export default function BLogSection() {
    const [data, setData] = useState<Blog[]>([]);
    useEffect(() => {
        fetch('https://api.jsonsilo.com/public/196ccc69-d44d-4fc3-80d1-e234c61b05d8')
            .then((res) => {
                if (!res.json) {
                    throw new Error("Respond status is not ok")
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
            }).catch((error) => {
                console.error("something went wrong", error)
            });
    }, []);

    return (
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
            {data && data.sort((a: any, b: any) => b.id - a.id).map((blog: Blog) => (
                <div className="w-full px-4" key={blog.id}>
                    <div className="mx-auto w-full max-w-2x rounded shadow shadow-black  border border-main-gray bg-[#101128]  p-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-main-white px-4 py-2 text-left text-sm font-medium text-main-black hover:bg-main-white focus:outline-none focus-visible:ring focus-visible:ring-main-white focus-visible:ring-opacity-75">
                                        <span>{blog.title}</span>

                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-main-blue`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm flex flex-col text-main-white">
                                        {blog.description}
                                        <div className="flex mt-2 justify-end gap-2">
                                            <a href={blog.link} className="underline text-blue-500 cursor-pointer">{blog.link_title}</a>
                                            <span className="text-main-white">{blog.author}</span>
                                            <span className="text-main-white">{blog.release_date}</span>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            ))}
        </div>
    )
}