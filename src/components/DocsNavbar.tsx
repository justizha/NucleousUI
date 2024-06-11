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
    { href: "/#contact", title: "Contact" },
  ];

  const path = usePathname();

  return (
    <header className="fixed flex h-12 w-full justify-between border-b border-main-accent  bg-main-black ">
      <ul className="flex items-center gap-8 ">
        <li>
          <Link
            href={"/"}
            className="ml-2 flex cursor-pointer items-center gap-1 text-[24px] font-semibold text-white lg:text-[30px]"
          >
            <LayoutGrid className="text-main-blue" /> NucleousUI
          </Link>
        </li>
      </ul>
      <div className=" flex flex-1 items-center justify-end gap-5 px-4">
        <SearchModal />
        <a
          href="https://github.com/justizha/NucleousUI"
          target="_blank"
          rel="noreferrer"
        >
          <img src="../images/github.png" alt="" className="w-5" />
        </a>
      </div>
    </header>
  );
}
