"use client"
import Link from "next/link";
import SearchModal from "../SearchModal";

export default function Hero() {
    return (
        <section className="px-4 lg:pt-48 lg:pb-22 pt-28 pb-32">
            <div className="px-2 flex justify-center lg:px-4 z-10 py-4 md:text-center">
                <div className="flex flex-col">
                    <h1 className="font-bold lg:font-extrabold lg:text-7xl md:text-4xl text-[40px] mb-8 text-main-white tracking-tight lg:leading-none lg:text-center lg:px-20">
                        A Minimalist UI Library on top of Tailwind CSS
                    </h1>
                    <p className="text-main-white text-lg font-normal">
                        Minimalist and easy to use Web Components on top of Tailwind CSS
                    </p>
                    <div className="flex justify-center mt-4 gap-2 sm:flex-row flex-col">
                        <Link href={'/documentation'} className="w-full h-12 bg-main-blue rounded-md text-main-white text-base flex justify-center font-semibold items-center sm:w-auto px-6">
                            Get Started
                        </Link>
                        <SearchModal />
                    </div>
                </div>
            </div>
        </section>
    );
}
