"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
export default function SearchModal() {
    const path = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault()
                setIsOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <>
            {path.startsWith("/documentation") ? (

                <button
                    className="text-white font-medium py-1 lg:px-4 md:px-2 px-1 rounded lg:w-64 md:w-24 w-10 flex items-center justify-center bg-main-gray/15"
                    onClick={() => { setIsOpen(true) }} >
                    <div className="hidden lg:flex gap-[60px] items-center">
                        <span className="text-sm text-opacity-50">
                            Quick Search...
                        </span>
                        <span className="text-sm text-opacity-50 p-[2px] rounded bg-main-accent/30">
                            CtrlK
                        </span>
                    </div>
                    <div className="lg:hidden flex">
                        <Search />
                    </div>
                </button>
            ) : (
                <button
                    className="text-white font-semibold h-12 px-6 rounded w-full flex items-center justify-center sm:w-auto bg-main-gray/30 space-x-10"
                    onClick={() => { setIsOpen(true) }}>
                    <span className="text-base text-opacity-50">
                        Quick Search...
                    </span>
                    <span className="text-base text-opacity-50">
                        Ctrl + K
                    </span>
                </button>
            )
            }



            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed z-30 inset-0 bg-white bg-opacity-5 backdrop-blur-[2px]" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl p-2 h-[75vh] transform overflow-hidden rounded-2xl bg-main-black  text-left align-middle shadow-xl transition-all">
                                    <SearchInput />
                                        
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}