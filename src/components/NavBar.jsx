"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function NavBar(forwardedRef) {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');
    const menu = "menu.svg"
    const close = "close.svg"
    return (
        <nav className='w-full py-4 border-b flex justify-between border-gray-700 '>
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
                <Menu as='div'>
                    <div>
                        <Menu.Button
                        >
                            <img
                                src={menu}
                                alt="menu"
                                className={`w-[38px] cursor-pointer transition-opacity duration-700 p-2 rounded mt-3 bg-gray-500 bg-opacity-50 dark:bg-transparent ${toggle ? 'opacity-100' : 'opacity-70'
                                    }`}
                                onClick={() => setToggle(!toggle)}
                            />

                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-400'
                        enterFrom='transform opacity-0 translate-x-full'
                        enterTo='transform opacity-100 translate-x-0'
                        leave='transition ease-in duration-300'
                        leaveFrom='transform opacity-100 translate-x-0 '
                        leaveTo='transform opacity-0 translate-x-full'>
                        <Menu.Items className='absolute right-0 top-0  w-1/2 h-screen origin-top-right divide-y  bg-main-black divide-gray-100 dark:bg-secondBlack border-l py-32'>
                            <ul className="list-none flex  items-center flex-col  mt-14 gap-10">
                                <Menu.Button
                                    className={'absolute right-5 top-6'}>
                                    <img
                                        src={close}
                                        alt="menu"
                                        className={`w-[38px] cursor-pointer transition-opacity duration-700 p-2 rounded mt-3 bg-gray-500 bg-opacity-50 dark:bg-transparent ${toggle ? 'opacity-100' : 'opacity-70'
                                            }`}
                                        onClick={() => setToggle(!toggle)}
                                    />
                                </Menu.Button>
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
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav >
    )
}