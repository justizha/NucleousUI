import Button from "../../components/Button";

export default function Hero() {
    return (
        <>
            <section className="px-4 lg:pt-20 lg:pb-44 pt-32 pb-48 md:flex md:justify-between mx-5">
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
                <div className="md:w-1/2 h-64 relative mx-8 mt-8 ">
                    <div className="absolute top-10 right-14 bg-main-blue w-52 rounded h-52"></div>
                    <div className="absolute right-0 bg-[#272727]  w-12 rounded h-[246.9px]"></div>
                    <div className="absolute right-14 bg-main-white bg-opacity-70 w-32 rounded h-8"></div>
                    <div className="absolute right-48 bg-main-accent bg-opacity-25 w-56 rounded h-8"></div>
                    <div className="absolute right-[270px] top-10 bg-main-gray  w-36 rounded h-36"></div>
                    <div className="absolute right-0 top-64 bg-main-gray w-12 bg-opacity-30 rounded h-40"></div>
                    <div className="absolute right-14 top-64 bg-main-accent bg-opacity-70 w-[120px] rounded h-[84px]"></div>
                    <div className="absolute right-14 top-[350px] bg-[#272727] w-[120px] rounded h-16"></div>
                    <div className="absolute right-[183px] top-64 bg-main-white w-20 rounded h-40"></div>
                    <div className="absolute right-[270px] top-48 bg-[#272727] w-36 rounded h-[55px]"></div>
                    <div className="absolute right-[270px] top-64 bg-main-gray w-8 rounded h-40"></div>
                    <div className="absolute right-[308px] top-64 bg-main-accent w-16 rounded h-20"></div>
                    <div className="absolute right-[377px] top-64 bg-main-white w-9 bg-opacity-40 rounded h-20"></div>
                    <div className="absolute right-[308px] top-[340px] bg-[#272727]   w-[105px] rounded h-[76px]"></div>
                </div>
            </section>
        </>
    );
}
