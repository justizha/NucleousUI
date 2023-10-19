'use client';

import Link from "next/link";


export default function Faq() {
    return (
        <section className=" lg:pt-20 lg:pb-20 pb-16 pt-16 z-10 bg-main-black">
            <div className="">
                <h1 className="md:text-4xl text-[30px] font-bold text-start mb-10 md:mx-8 mx-2 text-white">
                    Frequently asked questions
                </h1>
            </div>
            <div className="pt-5 grid  md:grid-cols-3 ">
                <div className="border-b md:border-r border-gray-400 p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 text-white">
                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        What is the primary purpose of your website?
                    </h2>
                    <p className="text-sm text-start  text-gray-400">
                        To provide ready-to-use web components for Tailwind CSS users.
                    </p>
                </div>
                <div className=" border-b md:border-r border-gray-400 p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 text-white">
                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        What sets us apart?
                    </h2>
                    <p className="text-sm text-start  text-gray-400">
                        Exclusive Tailwind CSS-focused components, no downloads required.
                    </p>
                </div>
                <div className=" border-b  border-gray-400 p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 text-white">
                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        Can users customize components?
                    </h2>
                    <p className="text-sm text-start  text-gray-400">
                        Yes, for seamless project integration.
                    </p>
                </div>
                <div className=" border-t md:border-r border-gray-400 p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 text-white">
                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        How to access components?
                    </h2>
                    <p className="text-sm text-start  text-gray-400">
                        Browse, copy code snippets, no downloads needed.
                    </p>
                </div>
                <div className=" border-t md:border-r border-gray-400 p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 text-white">
                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        Compatibility with other frameworks?
                    </h2>
                    <p className="text-sm text-start  text-gray-400">
                        Yes, adaptable to various frameworks.
                    </p>
                </div>
                <div className=" border-t  border-gray-400 p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 text-white">
                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        Is documentation available?
                    </h2>
                    <p className="text-sm text-start  text-gray-400">
                        Comprehensive guides and usage examples. You can visit <Link href={'/documentation'} className="text-blue-500 underline cursor-pointer">Docs</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}