'use client';

import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Faq() {
    return (
        <section className="lg:pt-20 lg:pb-20 pb-16 pt-16 z-10 bg-main-black">
            <div className="">
                <h1 className="md:text-4xl text-[30px] font-bold text-start mb-10 md:mx-8 mx-2 text-white">
                    Frequently asked questions
                </h1>
            </div>
            <div className="pt-5 grid  md:grid-cols-3 ">
                <div className="border-b md:border-r border-main-white p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 gap-2 text-main-white">
                        <HelpCircle />
                        What is the primary purpose of your website?
                    </h2>
                    <p className="text-sm text-start  text-main-gray">
                        To provide ready-to-use web components for Tailwind CSS users.
                    </p>
                </div>
                <div className=" border-b md:border-r border-main-white p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 gap-2 text-main-white">
                        <HelpCircle />
                        What sets us apart?
                    </h2>
                    <p className="text-sm text-start  text-main-gray">
                        Exclusive Tailwind CSS-focused components, no downloads required.
                    </p>
                </div>
                <div className=" border-b  border-main-white p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 gap-2 text-main-white">
                        <HelpCircle />
                        Can users customize components?
                    </h2>
                    <p className="text-sm text-start  text-main-gray">
                        Yes, for seamless project integration.
                    </p>
                </div>
                <div className=" border-t md:border-r border-main-white p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 gap-2 text-main-white">
                        <HelpCircle />
                        How to access components?
                    </h2>
                    <p className="text-sm text-start  text-main-gray">
                        Browse, copy code snippets, no downloads needed.
                    </p>
                </div>
                <div className=" border-t md:border-r border-main-white p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 gap-2 text-main-white">
                        <HelpCircle />
                        Compatibility with other frameworks?
                    </h2>
                    <p className="text-sm text-start  text-main-gray">
                        Yes, adaptable to various frameworks.
                    </p>
                </div>
                <div className=" border-t  border-main-white p-2 ">
                    <h2 className="text-base font-semibold flex items-center mb-2 gap-2 text-main-white">
                        <HelpCircle />
                        Is documentation available?
                    </h2>
                    <p className="text-sm text-start  text-main-gray">
                        Comprehensive guides and usage examples. You can visit <Link href={'/documentation'} className="text-blue-500 underline cursor-pointer">Docs</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}