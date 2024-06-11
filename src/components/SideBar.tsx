"use client";
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
    { href: "/underconstructions", title: "Alerts" },
    { href: "/documentation/buttons", title: "Buttons" },
    { href: "/underconstructions", title: "Buttons Groups" },
    { href: "/underconstructions", title: "Cards" },
  ];

  const path = usePathname();
  const route = useRouter();

  const segment = path?.split("/").pop();
  const SegmentRoute = segment
    ? segment?.charAt(0).toUpperCase() + segment?.slice(1)
    : "";

  return (
    <>
      {/* BACKDROP */}
      {toggle && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div
          className="fixed inset-0 z-10 bg-main-gray bg-opacity-20 backdrop-blur-sm lg:hidden"
          onClick={handleClick}
        />
      )}

      {/* !!SIDEBAR!! */}
      <div className="fixed top-12 z-0 w-full border-b border-main-accent bg-main-black py-[1px] lg:hidden">
        <div className=" flex items-center">
          <button
            type="button"
            onClick={handleClick}
            className="ms-1 inline-flex items-center rounded-lg p-1 text-sm text-white lg:hidden"
          >
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              />
            </svg>
          </button>
          <h3 className="text-main-white">Getting Started </h3>
        </div>
      </div>
      <aside
        className={`fixed inset-0 left-0 right-auto top-0 z-10 w-80 overflow-y-auto bg-[#2c3039] pb-10 md:w-72 lg:top-12 lg:block ${!toggle ? "hidden" : "block"}`}
      >
        <button
          type="button"
          onClick={handleClick}
          className="absolute right-3 top-4 cursor-pointer text-main-white md:hidden"
        >
          <X />
        </button>
        <div className="m-4 flex flex-col">
          <h1 className="mb-3 mt-2 text-base font-bold text-main-white active:text-main-white">
            Getting Started
          </h1>

          <ul className=" mb-3">
            <li
              className={`mb-1 text-base text-main-gray  duration-150 hover:text-main-white ${path === "/documentation" ? "activeLink" : ""}`}
            >
              <Link href={"/documentation"}>Introduction</Link>
            </li>
          </ul>

          <h1 className="mb-3 text-base font-bold text-main-white">
            Base Components {/*  {SegmentRoute} */}
          </h1>

          <ul className="">
            {BaseComponents.map((BaseComponent: any) => (
              <li
                className={`mb-3 text-base text-main-gray  duration-150 hover:text-main-white ${BaseComponent.href === path ? "activeLink" : ""}`}
                key={BaseComponent.href}
              >
                <Link onClick={handleClick} href={BaseComponent.href}>
                  {BaseComponent.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
