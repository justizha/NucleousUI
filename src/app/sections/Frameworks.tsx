'use client'
import Marquee from "react-fast-marquee";
import Framework from "./Framework.json";
export default function Frameworks() {
    return (
        <section className="pt-20 pb-20">
            <h1 className="font-semibold text-4xl text-center mb-10 text-main-white">Compatible with most framework and other languages.</h1>
            <Marquee
                className=""
                speed={65}
            >
                {Framework.map((Framework) => (
                    <div key={Framework.id} className="">
                        <img src={Framework.img} className="h-20 object-contain mx-7" alt={Framework.name} />
                    </div>
                ))}
            </Marquee>
        </section>
    )
}