"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import SearchInput from "./SearchInput";


export default function SearchModal() {
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
            <button
                className=" text-white font-semibold h-12 px-6 rounded w-full flex items-center justify-center sm:w-auto bg-main-gray/30 space-x-10"
                onClick={() => { setIsOpen(true) }} >
                <span className="text-base text-opacity-50">
                    Quick Search...
                </span>
                <span className="text-base text-opacity-50">
                    Ctrl + K
                </span>
            </button>
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
                        <div className="fixed inset-0 bg-transparent backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-3xl h-[75vh] transform overflow-hidden rounded-2xl bg-main-dark p-6 text-left align-middle shadow-xl transition-all">
                                    <SearchInput/>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}