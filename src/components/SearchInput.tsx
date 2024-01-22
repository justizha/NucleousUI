'use client'
import { FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
type Link = {
    id: number;
    href: string;
    title: string;
};

const links: Link[] = [
    { id: 1, href: "/documentation/buttons", title: "Buttons" },
    { id: 2, href: "/documentation/cards", title: "Cards" },
    { id: 3, href: "/documentation/navbar", title: "Navbar" },
    { id: 4, href: "/documentation/footer", title: "footer" },
    { id: 5, href: "/documentation/cards", title: "Cards" }
]

export default function SearchInput() {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(links[0])

    const filteredLinks = query === ''
        ? links
        : links.filter((link) =>
            link.title
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    return (
        <>
            <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden bg-transparent text-left text-base border-b border-main-gray/60">
                    <input
                        type="text"
                        className="w-full bg-transparent  py-2 pl-3 pr-10 text-base leading-5 text-main-white outline-none"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)} />
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-2 w-full">
                {filteredLinks.length > 0 ? (
                    filteredLinks.map((link) => (
                        <Link
                            className="text-main-white text-base py-2 rounded hover:bg-main-accent/25 px-2 flex gap-1 items-center" 
                            key={link.id} 
                            href={link.href}>
                                <FileText className="w-5"/>{link.title}
                        </Link>
                    ))

                ) : (
                    <div className="text-center mt-32">
                        <h1 className="text-lg text-main-white">
                            Nothing Founds for "{query}"
                        </h1>
                    </div>
                )}
            </div>
        </>
    )
}