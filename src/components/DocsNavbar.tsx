"use client";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchModal from "./SearchModal";
export default function DocsNavBar() {
    const [isOpen, setIsOpen] = useState(false);



    const menu = "menu.svg";
    const close = "close.svg";
    const NavLink = [
        { href: "/documentation", title: "Docs" },
        { href: "/underconstructions", title: "Example" },
        { href: "/#contact", title: "Contact" }
    ]

    const path = usePathname()

    return (
        <header className='w-full h-16 border-b flex justify-between border-main-accent fixed  bg-main-black '>
            <ul className="flex items-center gap-8 ">
                <li>
                    <Link href={'/'} className='font-semibold text-[24px] lg:text-[30px] ml-2 flex gap-1 items-center cursor-pointer text-white'>
                        <LayoutGrid className="text-main-blue" />    NucleousUI
                    </Link>
                </li>
            </ul>
            <div className=" flex flex-1 justify-end items-center px-4 gap-5">
                <SearchModal />
                <a href="https://github.com/justizha/NucleousUI" target="_blank">
                    <img src="../images/github.png" alt="" className="w-5" />
                </a>
            </div>
        </header >
    )
}