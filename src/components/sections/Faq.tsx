'use client';

import { HelpCircle } from "lucide-react";
import faq from '../../app/json/Faq.json';

export default function data() {

    return (
        <section className="lg:pt-20 lg:pb-20 pb-16 pt-16 z-10 bg-main-black">
            <div className="">
                <h1 className="md:text-4xl text-[30px] font-bold text-start mb-10 md:mx-8 mx-2 text-white">
                    Frequently asked questions
                </h1>
            </div>
            <div className="pt-5 grid gap-4 md:grid-cols-2 mx-4">
                {faq.map((faq) => (
                    <div className="bg-main-accent bg-opacity-30 p-2 rounded" key={faq.id}>
                        <h2 className="text-base font-semibold flex  mb-2 gap-1 text-main-white">
                            <HelpCircle className="w-4" />
                            {faq.question}
                        </h2>
                        <p className="text-sm text-start  text-main-white">
                            {faq.answers}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}