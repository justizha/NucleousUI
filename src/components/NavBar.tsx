"use client";
import { motion } from "framer-motion";
import { FileText, HelpCircle, LayoutGrid, Mail, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const menu = "menu.svg";
    const close = "close.svg";
    const LinkLeftSide = [
        { href: "/design", title: "Design" },
        { href: "/documentation", title: "Docs" },
    ]
    const LinkRightSide = [
        { href: "/about", title: "About" },
        // { href: "/blogs", title: "Blogs" },
        { href: "/#contact", title: "Contact" }
    ]
    const path = usePathname()

    return (
        <header className='w-full h-16 border-b flex justify-between border-main-accent fixed z-50 bg-main-black '>
            <ul className="flex items-center gap-8">
                <li>
                    <Link href={'/'} className='font-black text-[32px] ml-2 flex gap-1 items-center cursor-pointer text-white'>
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
            <ul className='gap-8 mx-4 md:flex hidden items-center'>
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
            <div className="md:hidden flex flex-1 justify-end items-center ">

                <div className="md:hidden flex flex-1 justify-end items-center mx-4">
                    <div className="grid place-items-center ">
                        <button onClick={handleClick} className='flex items-center justify-center h-10 w-10'>
                            <img
                                src={isOpen ? close : menu}
                                alt="menu"
                                className='rounded bg-opacity-60 bg-main-accent w-[35px] cursor-pointer transition-opacity duration 700 p-2  mt-3 '
                            />
                        </button>
                    </div>

                    {isOpen && (
                        <div className='absolute right-0 top-16  w-[70%] overflow-y-auto h-screen origin-top-right  bg-main-black z-50 border-l py-4 border-main-accent'>
                            <ul className="list-none mx-4 text-start flex justify-center flex-col mt-1 gap-2">
                                <Link href={'/about'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-main-accent hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2' onClick={handleClick}>
                                    <HelpCircle />About
                                </Link>
                                <Link href={'/#contact'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-main-accent hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2' onClick={handleClick}>
                                    <Mail />Contact
                                </Link>
                                {/* <Link href={'/#'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-main-accent hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2' onClick={handleClick}>
                                    <Newspaper />Blogs
                                </Link> */}
                                <Link href={'/about'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-main-accent hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2' onClick={handleClick}>
                                    <Palette />Design
                                </Link>
                                <Link href={'/documentation'} className='text-base flex gap-1 text-main-white bg-opacity-95 bg-main-accent hover:bg-opacity-70 hover:text-gray-200 duration-150 rounded max-w-sm px-4 py-2' onClick={handleClick}>
                                    <FileText />Documentation
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header >
    )
}