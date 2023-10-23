"use client";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const handleLinkClick = () => {
        setToggle(false);
    };
    const menu = "menu.svg";
    const close = "close.svg";

    const LinkLeftSide = [
        { href: "/design", title: "Design" },
        { href: "/documentation", title: "Docs" },
    ]
    const LinkRightSide = [
        { href: "/about", title: "About" },
        { href: "/blogs", title: "Blogs" },
        { href: "/contact", title: "Contact" }
    ]
    const path = usePathname()

    return (
        <nav className='w-full h-16 border-b flex justify-between border-main-gray fixed z-50 bg-main-black '>
            <ul className="flex items-center gap-8">
                <li>
                    <Link href={'/'} className='font-black text-[32px] ml-3 cursor-pointer text-white'>
                        NexT
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
                                src={toggle ? close : menu}
                                alt="menu"
                                className={`w-[35px] cursor-pointer transition-opacity duration 700 p-2  mt-3 bg-gray-500 bg-opacity-50 dark: bg-transparent ${toggle ? 'opacity-100' : 'opacity-70'
                                    } `}
                                onClick={() => setToggle(!toggle)}
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter='transition ease-in-out duration-500'
                        enterFrom='transform opacity-0 -translate-y-full'
                        enterTo='transform opacity-100 -translate-y-0'
                        leave='transition ease-in duration-300'
                        leaveFrom='transform opacity-100 -translate-x-0 '
                        leaveTo='transform opacity-0 -translate-y-full'>
                        <Menu.Items className='absolute left-0 top-16 border-gray-600  w-screen h-screen origin-top-right  bg-main-black z-50 border-r py-4'>
                            <ul className="list-none mx-4 text-start grid mt-14 gap-2">
                                <li className='text-base text-main-white bg-opacity-95 bg-[#272727] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-4'>
                                    <Link href={'/about'} onClick={handleLinkClick}>
                                        About
                                    </Link>
                                </li>
                                <li className='text-base text-main-white bg-opacity-95 bg-[#272727] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-4'>
                                    <Link href={'/contacts'} onClick={handleLinkClick}>
                                        Contact
                                    </Link>
                                </li>
                                <li className='text-base text-main-white bg-opacity-95 bg-[#272727] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-4'>
                                    <Link href={'/blogs'} onClick={handleLinkClick}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className='text-base text-main-white bg-opacity-95 bg-[#272727] hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-4'>
                                    <Link href={'/design'} onClick={handleLinkClick}>
                                        Design
                                    </Link>
                                </li>
                            </ul>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav >
    )
}