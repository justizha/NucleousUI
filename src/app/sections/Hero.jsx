import Button from "@/components/Button"

export default function Hero() {
    return (
        <section className="px-4 lg:pt-20 lg:pb-24 py-16 mx-auto border-b border-gray-600">
            <div className="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
                <h1 className="font-black lg:text-8xl md:text-6xl text-[44px] tracking-tight lg:mb-7 mb-8 ">NexT Component</h1>
                <p className="text-md md:text-lg lg:text-center lg:text-xl font-normal text-gray-400 mt-8">Speed up your website development with ready-to-use components , that are not only <br /> customizable but also completely free,making the whole process faster and more convenient.</p>
            </div>
            <div className="flex justify-center mt-14">
                <Button>This is a text</Button>
            </div>
        </section>
    )
}