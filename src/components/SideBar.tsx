"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBar() {
    const links = [
        {}]
    const path = usePathname()
    return (
        <aside className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="m-10">
                <div className="h-full overflow-y-auto flex flex-col">
                    <h1 className="text-lg font-black text-main-accent hover:text-main-white mb-2 mt-2 active:text-main-white">
                        <Link href={'/documentation'}>
                            Nucleous
                        </Link>
                    </h1>
                    <ul className="ml-2">
                        <li className="mb-2 text-base text-main-accent font-semibold hover:text-main-white duration-150">
                            <Link href={'/documentation/buttons'}>Buttons</Link>
                        </li>
                        <li className="mb-2 text-base text-main-accent font-semibold">Links</li>
                        <li className="mb-2 text-base text-main-accent font-semibold">Links</li>
                        <li className="mb-2 text-base text-main-accent font-semibold">Links</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}