'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SideBar() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };
    const closeSidebar = () => {
        setToggle(false);
    };


    const links = [
        { href: '/documentation/buttons', title: 'Buttons' },
        { href: '/documentation/alert', title: 'Alerts' },
        { href: '/documentation/cards', title: 'Cards' },
        { href: '/documentation/footer', title: 'Footer' },
        { href: '/documentation/navbar', title: 'Navbar' },
        { href: '/documentation/page-layouts', title: 'Layouts' },
        { href: '/documentation/typography', title: 'Typography' },
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
                    className="fixed inset-0 bg-main-gray backdrop-blur-sm bg-opacity-20  lg:hidden"
                    onClick={handleClick}
                ></div>
            )}

            {/* !!SIDEBAR!! */}

            <aside className={`fixed sm:hidden lg:block md:top-16 top-0 left-0 md:w-72 w-80 inset-0 z-30 right-auto pb-10 bg-[#2c3039] overflow-y-auto transition-transform ${!toggle ? 'hidden' : 'block'}`}>
                <div className="flex flex-col m-4">
                    <h1 className="text-lg font-bold text-main-white mb-3 mt-2 active:text-main-white">
                        Getting Started
                    </h1>

                    <ul className=" mb-3">
                        <li className={`mb-1 text-lg text-main-gray font-semibold hover:text-main-white duration-150 ${path === '/documentation' ? 'activeLink' : ''}`}>
                            <Link href={'/documentation'}>Introduction</Link>
                        </li>
                    </ul>

                    <h1 className="text-lg font-bold text-main-white mb-3">
                        Components {/*  {SegmentRoute} */}
                    </h1>

                    <ul className="">
                        {links.map((link) => (
                            <li className={`mb-3 text-lg text-main-gray font-semibold hover:text-main-white duration-150 ${link.href === path ? 'activeLink' : ''}`} key={link.href}>
                                <Link
                                    onClick={handleClick}
                                    href={link.href}
                                    className="text-lg text-main-gray font-semibold hover:text-main-white duration-150">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside >
        </>
    );
}
