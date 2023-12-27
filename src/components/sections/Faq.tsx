'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import faq from '../../app/json/Faq.json';

export default function data() {

    return (
        <section className="lg:pt-20 lg:pb-20 pb-16 pt-16 z-10 bg-main-black">
            <div className="">
                <h1 className="md:text-4xl text-[30px] font-bold text-start mb-10 md:mx-8 mx-2 text-white">
                    Frequently asked questions
                </h1>
            </div>
            <div className="pt-5 mx-4 w-1/2 ">
                <div className="flex flex-col gap-2">
                    {faq.map((faq) => (
                        <Disclosure key={faq.id}>
                            <Disclosure.Button className=" flex justify-between rounded p-2 bg-main-accent bg-opacity-40">
                                <h2 className="text-base font-semibold flex  mb-2 gap-1 text-main-white">
                                    {faq.question}
                                </h2>
                                <ChevronDown className='text-main-white' />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-3 text-sm py-2 text-main-white">
                                {faq.answers}
                            </Disclosure.Panel>
                        </Disclosure>
                    ))}
                </div>
            </div >
        </section >
    )
}