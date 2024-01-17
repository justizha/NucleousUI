'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';
import faq from '../../app/json/Faq.json';

export default function data() {

    return (
        <section className="lg:pt-20 lg:pb-20 pb-16 pt-16  bg-main-black md:px-6 lg:px-12">
            <div className="md:flex gap-32">
                <div className="md:mx-8 mx-3 mb-3">
                    <h1 className="md:text-4xl text-[30px] font-bold text-start mb-2 text-main-white">
                        F.A.Q
                    </h1>
                    <p className="text-main-white text-xl">
                        Answers some question you might have.
                    </p>
                </div>
                <div className="mx-3 grid gap-3">
                    {faq.map((faq) => (
                        <div className="w-full max-w-4xl" key={faq.id}>
                            <div className="mx-auto rounded bg-main-accent p-2 bg-opacity-50">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full gap-2 justify-between rounded-md px-4 py-2 text-left">
                                                <h2 className='md:text-2xl text-lg text-main-white font-bold'>{faq.question}</h2>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-main-blue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-bae text-main-white">
                                                {faq.answers}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}