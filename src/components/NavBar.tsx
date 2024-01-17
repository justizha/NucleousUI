"use client";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menu = "menu.svg";
    const close = "close.svg";
    const NavLink = [
        { href: "/documentation", title: "Docs" },
        { href: "/underconstructions", title: "Example" },
        { href: "/#feedback", title: "Feedback" }
    ]

    const path = usePathname()

    return (
        <>
            {path.startsWith('/documentation') ? (
                <></>
            ) : (

                <header className='w-full h-16 border-b flex justify-between border-main-accent fixed  bg-main-black '>
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link href={'/'} className='font-semibold text-[24px] lg:text-[30px] ml-2 flex gap-1 items-center cursor-pointer text-white'>
                                <LayoutGrid className="text-main-blue" />    NucleousUI
                            </Link>
                        </li>
                        {NavLink.map((link) => (
                            <li key={link.href} className="md:flex hidden">
                                <Link href={link.href} className={`text-gray-400 relative hover:text-gray-200 duration-150 text-sm ${link.href === path ? 'activeLink' : ''}`} >
                                    {link.href === path && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 top-full mt-1 h-[1px] bg-main-white w-full" />
                                    )}
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden flex flex-1 justify-end items-center ">
                        <div className="md:hidden flex flex-1 justify-end items-center mx-4">
                            <div className="grid place-items-center ">
                                <button onClick={() => { setIsOpen(!isOpen) }} className='flex items-center justify-center h-10 w-10'>
                                    <img
                                        src={menu}
                                        alt="menu"
                                        className=' w-[35px] cursor-pointer transition-opacity duration 700 p-2  mt-3 '
                                    />
                                </button>
                            </div>
                            {isOpen && (
                                <div
                                    className="fixed inset-0 bg-main-blue/10 backdrop-blur-sm bg-opacity-20 z-[200] lg:hidden"
                                    onClick={() => { setIsOpen(!isOpen) }}
                                ></div>
                            )}
                            {isOpen && (
                                <div className='fixed top-10 right-0 left-0 mx-4  shadow-lg h-1/2 rounded-lg bg-main-black z-[200] py-5'>
                                    {NavLink.map((link) => (
                                        <ul className="list-none mx-4 text-start flex justify-center flex-col mt-1 gap-1" key={link.href}>
                                            <li >
                                                <Link
                                                    href={link.href}
                                                    className='text-base flex gap-1 text-main-white hover:bg-opacity-70 hover:text-gray-200 duration-150  max-w-sm px-4 py-2' onClick={() => { setIsOpen(!isOpen) }}>
                                                    {link.title}
                                                </Link>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </header >
            )}
        </>

    )
}