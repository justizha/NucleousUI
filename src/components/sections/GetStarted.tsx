import Link from "next/link"
export default function GetStarted() {
    return (
        <section className="lg:pt-20 lg:pb-20 pb-16 pt-16 z-10 bg-main-black">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-bold md:text-3xl text-main-white mb-2">
                    Get Started for <span className="text-main-blue">Free</span>
                </h2>
                <p className="text-main-gray text-base ">
                    Speed up website creation with NucleousUI - an easy-to-use toolkit that offers customizable components on top of TailwindCSS.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <Link href={'/underconstructions'}></Link>
            </div>
        </section>
    )
}