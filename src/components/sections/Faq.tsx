'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';
import faq from '../../app/json/Faq.json';

export default function data() {

    return (
        <section className="lg:pt-20 lg:pb-20 pb-16 pt-16 z-10 bg-main-black md:px-6 lg:px-12">
            <div className="">
                <h1 className="md:text-4xl text-[30px] font-bold text-start mb-10 md:mx-8 mx-2 text-white">
                    Frequently asked questions
                </h1>
            </div>
            <div className="pt-5 grid grid-cols-1 gap-2 place-items-end mx-3">
                {faq.map((faq) => (
                    <div className="w-full max-w-xl" key={faq.id}>
                        <div className="mx-auto rounded bg-main-accent p-2 bg-opacity-50">
                            <Disclosure >
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-md px-4  text-left">
                                            <h2 className='text-lg text-main-white font-bold'>{faq.question}</h2>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-main-blue`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-main-white">
                                            {faq.answers}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                ))}
            </div>


        </section >
    )
}