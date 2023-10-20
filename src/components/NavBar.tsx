"use client";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
export default function NavBar() {
    const [toggle, setToggle] = useState(false);
    const menu = "menu.svg";
    const close = "close.svg";
    const navRef = useRef(null);
    const isMobile = () => {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return width < 640;
    };
    useEffect(() => {
        if (toggle && isMobile()) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggle]);
    const handleClickOutside = (event: any) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setToggle(false);
        }
    };
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
        <nav className='w-full h-16 border-b flex justify-between border-gray-700 fixed z-50 bg-main-black ' ref={navRef}>
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
                        enter='transition ease-out duration-400'
                        enterFrom='transform opacity-0 -translate-x-full'
                        enterTo='transform opacity-100 -translate-x-0'
                        leave='transition ease-in duration-300'
                        leaveFrom='transform opacity-100 -translate-x-0 '
                        leaveTo='transform opacity-0 -translate-x-full'>
                        <Menu.Items className='absolute left-0 top-16  border-gray-600  w-[60%] h-screen origin-top-right  bg-main-black z-50 border-r py-4'>
                            <ul className="list-none mx-2 text-start grid mt-14 gap-4">
                                <li className="text-lg">
                                    <Link href={'/'} className="font-semibold text-white">
                                        NexT
                                    </Link>
                                </li>
                                <li className=' text-base'>
                                    <Link href={'/about'} className="text-gray-400 hover:text-gray-200 duration-150">
                                        About
                                    </Link>
                                </li>
                                <li className=' text-base'>
                                    <Link href={'/contacts'} className="text-gray-400 hover:text-gray-200 duration-150">
                                        Contact
                                    </Link>
                                </li>
                                <li className=' text-base'>
                                    <Link href={'/blogs'} className="text-gray-400 hover:text-gray-200 duration-150">
                                        Blogs
                                    </Link>
                                </li>
                                <li className=' text-base'>
                                    <Link href={'/design'} className="text-gray-400 hover:text-gray-200 duration-150  text-base">
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