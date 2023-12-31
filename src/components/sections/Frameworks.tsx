'use client'
import Marquee from "react-fast-marquee";
import Framework from "../../app/json/Framework.json";
export default function Frameworks() {
    return (
        <section className="pt-20 pb-20">
            <h1 className="font-semibold text-4xl text-center mb-16 text-main-white">
                Compatible with almost everything.
            </h1>
            <Marquee
                className=""
                speed={30}
            >
                {Framework.map((Framework) => (
                    <div key={Framework.id} className="">
                        <img src={Framework.img} loading="lazy" className="h-20 object-contain mx-7" alt={Framework.name} />
                    </div>
                ))}
            </Marquee>
        </section>
    )
}