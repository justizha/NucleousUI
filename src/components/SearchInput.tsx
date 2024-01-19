'use client'
import { Combobox, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

type Link = {
    id: number;
    href: string;
    title: string;
};

const links: Link[] = [
    { id: 1, href: "/documentation/button", title: "Buttons" },
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
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-transparent text-left shadow-md focus:outline-none sm:text-sm">
                        <Combobox.Input
                            className="w-full bg-transparent border-none py-2 pl-3 pr-10 text-sm leading-5 text-main-white shadow-lg outline-none"
                            displayValue={(links :any) => links.title}
                            onChange={(event) => setQuery(event.target.value)}/>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}>
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-transparent py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {filteredLinks.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none px-4 py-2 text-main-white">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredLinks.map((links) => (
                                    <Combobox.Option
                                        key={links.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-main-blue text-main-white' : 'text-main-white/80'
                                            }`
                                        }
                                        value={links}>
                                        {({ selected}) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}>
                                                    {links.title}
                                                </span>
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
    )
}