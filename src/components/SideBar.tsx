'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";
export default function SideBar() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };
    const closeSidebar = () => {
        setToggle(false);
    };


    const BaseComponents = [
        { href: '/underconstructions', title: 'Alerts' },
        { href: '/documentation/buttons', title: 'Buttons' },
        { href: '/underconstructions', title: 'Buttons Groups' },
        { href: '/underconstructions', title: 'Cards' },
    ];

    const path = usePathname();
    const route = useRouter();

    const segment = path?.split('/').pop()
    const SegmentRoute = segment ? segment?.charAt(0).toUpperCase() + segment?.slice(1) : '';


    return (
        <>

            {/* BACKDROP */}
            {toggle && (
                <div
                    className="fixed inset-0 bg-main-gray backdrop-blur-sm bg-opacity-20 z-10 lg:hidden"
                    onClick={handleClick}
                ></div>
            )}

            {/* !!SIDEBAR!! */}
            <div className="fixed lg:hidden z-0 top-12 py-[1px] bg-main-black border-b border-main-accent w-full">
                <div className=" flex items-center">
                    <button type="button" onClick={handleClick} className="inline-flex items-center p-1 ms-1 text-sm text-white rounded-lg lg:hidden">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <h3 className="text-main-white">Getting Started </h3>
                </div>
            </div>
            <aside className={`fixed lg:block lg:top-12 top-0 left-0 md:w-72 w-80 inset-0 z-10 right-auto pb-10 bg-[#2c3039] overflow-y-auto ${!toggle ? 'hidden' : 'block'}`}>
                <button
                    onClick={handleClick} 
                    className="md:hidden absolute top-4 right-3 text-main-white cursor-pointer"
                >
                    <X/>
                </button>
                <div className="flex flex-col m-4">
                    <h1 className="text-base font-bold text-main-white mb-3 mt-2 active:text-main-white">
                        Getting Started
                    </h1>

                    <ul className=" mb-3">
                        <li className={`mb-1 text-base text-main-gray  hover:text-main-white duration-150 ${path === '/documentation' ? 'activeLink' : ''}`}>
                            <Link href={'/documentation'}>Introduction</Link>
                        </li>
                    </ul>

                    <h1 className="text-base font-bold text-main-white mb-3">
                        Base Components {/*  {SegmentRoute} */}
                    </h1>

                    <ul className="">
                        {BaseComponents.map((BaseComponent: any) => (
                            <li className={`mb-3 text-base text-main-gray  hover:text-main-white duration-150 ${BaseComponent.href === path ? 'activeLink' : ''}`} key={BaseComponent.href}>
                                <Link
                                    onClick={handleClick}
                                    href={BaseComponent.href}>
                                    {BaseComponent.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside >
        </>
    );
}
