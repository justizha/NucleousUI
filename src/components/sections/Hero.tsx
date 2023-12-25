import Button from "../Button";
import Paragraph from "../Paragraph";
export default function Hero() {
    return (
        <section className="px-4 lg:pt-22 lg:pb-10 pt-32 pb-32">
            <div className="px-4 flex justify-center lg:px-4 z-10 py-4 text-center">
                <div className="flex flex-col">
                    <h1 className="font-bold lg:font-extrabold lg:text-6xl md:text-4xl text-[44px]  mb-8 text-main-white text-center tracking-tight">
                        The Simple web components on top of Tailwind CSS
                    </h1>
                    <Paragraph text={'Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aut.'} />
                    <div className="flex justify-center mt-14 gap-2">
                        <Button>Components</Button>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}