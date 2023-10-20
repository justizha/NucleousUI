"use client"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import PageWrapper from "../../components/PageWrapper";
import blogs from './blogs.json';

export default function blog() {
    return (
        <PageWrapper>
            <section className="pb-24 pt-24 mx-10 ">
                <div>
                    <h1 className="text-white font-semibold text-3xl ">
                        The NexT Blog.
                    </h1>
                    <p>
                        The NexT Blog Read all the latest updates
                        <br /> and the current situation about the site.
                    </p>
                </div>
            </section>
            <section className="mt-1 mx-4">
                <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
                    {blogs
                        .sort((a, b) => b.id - a.id)
                        .map((blog) => (
                            <div className="w-full px-4" key={blog.id}>
                                <div className="mx-auto w-full max-w-2x rounded border border-main-gray bg-stone-800 p-2">
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
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm flex flex-col">
                                                    {blog.description}
                                                    <div className="flex mt-2 justify-end gap-2">
                                                        <span>{blog.author}</span>
                                                        <span>{blog.release_date}</span>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </PageWrapper>
    )
}