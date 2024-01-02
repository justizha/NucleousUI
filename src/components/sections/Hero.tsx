"use client"
import Button from "../Button";
import Paragraph from "../Paragraph";
import SearchModal from "../SearchModal";

export default function Hero() {
    return (
        <section className="px-4 lg:pt-22 lg:pb-10 pt-32 pb-32">
            <div className="px-4 flex justify-center lg:px-4 z-10 py-4 md:text-center">
                <div className="flex flex-col px-4">
                    <h1 className="font-bold lg:font-extrabold lg:text-6xl md:text-4xl text-[42px] mb-8 text-main-white text-center tracking-tight">
                        The Minimalist web components on top of Tailwind CSS
                    </h1>
                    <Paragraph text={'Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aut.'} />
                    <div className="flex justify-center mt-14 gap-2">
                        <Button>Components</Button>
                        <Button>Get Started</Button>
                        <SearchModal />
                    </div>
                </div>
            </div>
        </section>
    );
}
