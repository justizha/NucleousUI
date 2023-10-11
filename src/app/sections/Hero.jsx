import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="px-4 lg:pt-28 lg:pb-24 pt-32 pb-28 border-b border-gray-600 relative">
            <div className="px-4 lg:px-4 z-10 py-4 md:w-1/2 flex flex-col">
                <h1 className="font-black lg:text-6xl md:text-4xl text-[44px] tracking-tight lg:mb-7 mb-8">
                    NexT Component
                </h1>
                <p className="text-md md:text-base text-start lg:text-lg text-sm font-normal text-gray-400 mt-8">
                    Speed up your website development with ready-to-use components, which are not only customizable but also completely free, making the whole process faster and more convenient.
                </p>
            </div>
            <div className="flex justify-end flex-col gap-1">
                {/* Absolute divs */}
                <div className="sm:absolute top-32 bg-gray-500 bg-opacity-50 w-64 h-32 right-10 rounded"></div>
                <div className="sm:absolute top-[260px] bg-gray-500 bg-opacity-50 w-64 h-20 right-10 rounded"></div>
                <div className="sm:absolute top-32 right-[300px] bg-gray-500 md:h-[212px] h-16 w-64 rounded bg-opacity-50"></div>
                <div className="w-10">
                    <Button>Components</Button>
                </div>
            </div>
        </section>
    );
}
