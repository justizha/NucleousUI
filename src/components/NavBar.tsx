"use client";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { FileText, HelpCircle, LayoutGrid, Mail, Newspaper, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const menu = "menu.svg";
    const close = "close.svg";
    const LinkLeftSide = [
        { href: "/design", title: "Design" },
        { href: "/documentation", title: "Docs" },
    ]
    const LinkRightSide = [
        { href: "/about", title: "About" },
        { href: "/blogs", title: "Blogs" },
        { href: "/#contact", title: "Contact" }
    ]
    const path = usePathname()

    return (
        <nav className='w-full h-16 border-b flex justify-between border-main-gray fixed z-50 bg-main-black backdrop-blur-none  '>
            <ul className="flex items-center gap-8">
                <li>
                    <Link href={'/'} className='font-black text-[32px] ml-3 flex gap-1 items-center cursor-pointer text-white'>
                        <LayoutGrid className="text-main-blue" />    NexT
                    </Link>
                </li>
                {LinkLeftSide.map((link) => (
                    <li key={link.href} className="md:flex hidden">
                        <Link href={link.href} className={`text-gray-400 relative hover:text-gray-200 duration-150  text-base ${link.href === path ? 'activeLink' : ''}`} >
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
            <ul className=' flex-row gap-8 mx-4 md:flex hidden items-center'>
                {LinkRightSide.map((link) => (
                    <li className=' text-base' key={link.href}>
                        <Link href={link.href} className={`text-gray-400 relative hover:text-gray-200 duration-150  text-base ${link.href === path ? 'activeLink' : ''}`} >
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
            <div className="sm:hidden flex flex-1 justify-end items-center mx-4">
                <Menu as='div'>
                    <div className="grid place-items-center ">
                        <Menu.Button className='flex items-center justify-center h-10 w-10'>
                            <img
                                src={menu}
                                alt="menu"
                                className='rounded bg-opacity-60 bg-main-gray w-[35px] cursor-pointer transition-opacity duration 700 p-2  mt-3 '

                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter='transition ease-in-out duration-500'
                        enterFrom='transform opacity-0 -translate-x-full'
                        enterTo='transform opacity-100 -translate-y-0'
                        leave='transition ease-in duration-200'
                        leaveFrom='transform opacity-100 -translate-x-0 '
                        leaveTo='transform opacity-0 -translate-x-full'>
                        <Menu.Items className='absolute left-0 top-0  w-1/2 overflow-y-auto h-screen origin-top-right  bg-main-black z-50 border-r py-4 border-main-gray'>
                            <ul className="list-none mx-4 text-start flex justify-center flex-col mt-1 gap-2">
                                <div className="flex justify-end">
                                    <Menu.Button className='flex items-center justify-end h-10 w-10'>
                                        <img
                                            src={close}
                                            alt="close" />
                                    </Menu.Button>
                                </div>
                                <Link href={'/about'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-[#101128] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2'
                                >
                                    <HelpCircle />    About
                                </Link>
                                <Link href={'/#contact'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-[#101128] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2'
                                >
                                    <Mail />    Contact
                                </Link>
                                <Link href={'/#'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-[#101128] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2'
                                >
                                    <Newspaper />    Blogs
                                </Link>
                                <Link href={'/about'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-[#101128] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2'
                                >
                                    <Palette />    Design
                                </Link>
                                <Link href={'/#'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-[#101128] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2'
                                >
                                    <FileText />    Documentation
                                </Link>
                            </ul>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav >
    )
}