"use client";
import { FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// biome-ignore lint/suspicious/noRedeclare: <explanation>
type Link = {
  id: number;
  href: string;
  title: string;
};

const links: Link[] = [
  { id: 1, href: "/documentation/buttons", title: "Buttons | Components" },
  { id: 2, href: "/documentation/cards", title: "Cards | Components" },
  { id: 3, href: "/documentation/navbar", title: "Navbar | Components" },
  { id: 4, href: "/documentation/footer", title: "footer | Components" },
  { id: 5, href: "/documentation/cards", title: "Cards | Components" },
];

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const filteredLinks =
    query === ""
      ? links
      : links.filter((link) =>
          link.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden border-b border-main-gray/60 bg-transparent text-left text-base">
          <input
            type="text"
            className="w-full bg-transparent  py-2 pl-3 pr-10 text-base leading-5 text-main-white outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col gap-2">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((link) => (
            <Link
              className="flex items-center gap-1 rounded-md bg-main-accent/30 p-3 px-2 py-2 text-base text-main-white hover:bg-main-accent/25 "
              key={link.id}
              href={link.href}
            >
              <FileText className="w-5" />
              {link.title}
            </Link>
          ))
        ) : (
          <div className="mt-32 text-center">
            <h1 className="text-lg text-main-white">
              Nothing Founds for "{query}"
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
