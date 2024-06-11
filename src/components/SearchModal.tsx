"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import SearchInput from "./SearchInput";
export default function SearchModal() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      {path.startsWith("/documentation") ? (
        <button
          type="button"
          className="flex w-10 items-center justify-center rounded bg-main-gray/15 px-1 py-1 font-medium text-white md:w-24 md:px-2 lg:w-64 lg:px-4"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div className="hidden items-center gap-[60px] lg:flex">
            <span className="text-sm text-opacity-50">Quick Search...</span>
            <span className="rounded bg-main-accent/30 p-[2px] text-sm text-opacity-50">
              CtrlK
            </span>
          </div>
          <div className="flex lg:hidden">
            <Search />
          </div>
        </button>
      ) : (
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center space-x-10 rounded bg-main-gray/30 px-6 font-semibold text-white sm:w-auto"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span className="text-base text-opacity-50">Quick Search...</span>
          <span className="text-base text-opacity-50">Ctrl + K</span>
        </button>
      )}

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-30 bg-white bg-opacity-5 backdrop-blur-[2px]" />
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
                <Dialog.Panel className="h-[75vh] w-full max-w-3xl transform overflow-hidden rounded-2xl bg-main-black p-2  text-left align-middle shadow-xl transition-all">
                  <SearchInput />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
