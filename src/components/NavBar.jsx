"use client";

import { Menu } from "@headlessui/react";
import Link from "next/link";


export default function NavBar() {
    return (
        <nav className='w-full py-4 border-b flex justify-between border-gray-700'>
            <ul className="flex items-center gap-8">
                <li>
                    <Link href={'/'} className='font-black text-[32px] ml-3 cursor-pointer'>
                        NexT
                    </Link>
                </li>
                <li className="md:flex hidden">
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150 font-semibold text-lg">
                        Design
                    </Link>
                </li>
                <li className="md:flex hidden">
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150 font-semibold text-lg">
                        Docs
                    </Link>
                </li>
            </ul>
            <ul className=' flex-row gap-8 mx-4 md:flex hidden items-center'>
                <li className='font-semibold text-lg'>
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150">
                        About
                    </Link>
                </li>
                <li className='font-semibold text-lg'>
                    <Link href={'/underdev'} className="text-gray-400 hover:text-gray-200 duration-150">
                        Contact
                    </Link>
                </li>
                <li className='font-semibold text-lg'>
                    <a className="p-1 border-gray-300 border rounded flex items-center gap-1 cursor-pointer" href="https://github.com/justizha" target="_blank">
                        <img src="/images/github-mark-white.png" alt="github-logo" className="w-5 h-5 object-contain" />
                        Github
                    </a>
                </li>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">

            </div>
            <Menu>

            </Menu>
        </nav>
    )
}