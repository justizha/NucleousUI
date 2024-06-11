"use client";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = "menu.svg";
  const path = usePathname();
  const close = "close.svg";
  const NavLink = [
    { href: "/documentation", title: "Docs" },
    { href: "/underconstructions", title: "Example" },
    { href: "/#feedback", title: "Feedback" },
  ];

  return (
    <>
      {path.startsWith("/documentation") ? (
        <></>
      ) : (
        <header className="fixed flex h-12 w-full justify-between border-b border-main-accent  bg-main-black ">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href={"/"}
                className="ml-2 flex cursor-pointer items-center gap-1 text-[22px] font-semibold text-white lg:text-[28px]"
              >
                <LayoutGrid className="text-main-blue" /> NucleousUI
              </Link>
            </li>
            {NavLink.map((link) => (
              <li key={link.href} className="hidden md:flex">
                <Link
                  href={link.href}
                  className={`relative text-sm text-gray-400 duration-150 hover:text-gray-200 ${link.href === path ? "activeLink" : ""}`}
                >
                  {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full mt-1 h-[1px] w-full bg-main-white"
                    />
                  )}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-1 items-center justify-end md:hidden ">
            <div className="mx-4 flex flex-1 items-center justify-end md:hidden">
              <div className="grid place-items-center ">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <img
                    src={menu}
                    alt="menu"
                    className=" duration 700 mt-3 w-[35px] cursor-pointer p-2  transition-opacity "
                  />
                </button>
              </div>
              {isOpen && (
                // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
                <div
                  className="fixed inset-0 z-[200] bg-main-white bg-opacity-20 backdrop-blur-sm lg:hidden"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                />
              )}
              {isOpen && (
                <div className="fixed left-0 right-0 top-10 z-[200]  mx-4 h-1/2 rounded-lg bg-main-black py-5 shadow-lg">
                  {NavLink.map((link) => (
                    <ul
                      className="mx-4 mt-1 flex list-none flex-col justify-center gap-1 text-start"
                      key={link.href}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="flex max-w-sm gap-1 px-4 py-2 text-base text-main-white  duration-150 hover:bg-opacity-70 hover:text-gray-200"
                          onClick={() => {
                            setIsOpen(!isOpen);
                          }}
                        >
                          {link.title}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
}
