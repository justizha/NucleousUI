import Button from "../../components/Button";

export default function Hero() {
    return (
        <section className="px-4 lg:pt-20 lg:pb-44 pt-32 pb-48 md:flex md:justify-between md:mx-14 mx-4">
            <div className="px-4 lg:px-4 z-10 py-4 md:w-1/2 flex flex-col">
                <h1 className="font-black lg:text-6xl md:text-4xl text-[44px] tracking-tight lg:mb-7 mb-8 text-white">
                    NexT Component
                </h1>
                <p className="text-md md:text-base text-start lg:text-lg text-sm font-normal text-main-gray mt-8">
                    Speed up your website development with ready-to-use components, which are not only customizable but also completely free, making the whole process faster and more convenient.
                </p>
                <div className="justify-start flex mt-14 gap-10">
                    <Button>Components</Button>
                </div>
            </div>
            <div className="md:w-1/2 w-full h-72 relative mt-8 duration-400 mx-6">
                <div className="absolute top-10 right-14 bg-main-blue w-40 h-40 rounded"></div>
                <div className="absolute right-0 bg-[#272727] w-12 h-[246.9px] rounded"></div>
                <div className="absolute right-14 bg-main-white w-32 h-8 rounded"></div>
                <div className="absolute right-48 bg-main-accent w-32 h-8 rounded"></div>
                <div className="absolute right-56 top-10 bg-main-gray w-24 h-24 rounded"></div>
                <div className="absolute right-0 top-64 bg-main-gray w-12 h-28 rounded"></div>
                <div className="absolute right-14 top-52 bg-main-accent w-20 h-20 rounded"></div>
                <div className="absolute right-14 top-[294px] bg-[#272727] w-20 h-[72px] rounded"></div>
                <div className="absolute right-36 top-52 bg-main-white w-[73px] h-40 rounded"></div>
                <div className="absolute right-56 top-36 bg-[#272727] w-24 h-[55px] rounded"></div>
                <div className="absolute right-56 top-52 bg-main-gray w-8 h-[100px] rounded"></div>
                <div className="absolute right-[262px] top-52 bg-main-accent w-14 h-12 rounded"></div>
                <div className="absolute right-[262px] top-[260px] bg-main-white w-14 h-12 rounded"></div>
                <div className="absolute right-56 top-[314px] bg-[#272727] w-24 h-14 rounded"></div>
            </div>
        </section>
    );
}
