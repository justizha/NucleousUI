import PageWrapper from "../../components/PageWrapper";
import dataTech from "./dataTech";
export default function About() {
    return (
        <PageWrapper>
            <section className="pb-24 pt-24 md:mx-24 mx-10 md:flex md:justify-between ">
                <div className="flex mt-14 flex-col md:mx-8">
                    <h1 className="text-3xl font-semibold text-white">About</h1>
                    <p className=" md:text-base text-start  text-sm font-normal text-main-gray mt-8 md:w-[48%]">
                        Check out why this website exists and what cool tech stuff it's packing! It's like a digital toolbox that's all about making the web-building process easy and customizable. With a bunch of super cool tools and tricks up its sleeve, this site helps you create awesome and dynamic web content without any hassle
                    </p>
                </div>
                <div className="flex justify-end md:mt-10 mt-20 md:mr-14 mr-16">
                    <div className="md:w-1/2 h-64 relative">
                        <div className="absolute bg-main-gray h-32 w-28 top-10 right-10 rounded z-10  hover:-translate-y-2 transition-transform duration-500 hover:rotate-180"></div>
                        <div className="absolute bg-main-green h-32 w-28 rounded right-24 -top-8 z-[11] hover:-translate-x-7 hover:-translate-y-2 transition-transform duration-500 hover:rotate-45"></div>
                        <div className="absolute bg-main-blue h-32 w-28 rounded -top-3 right-0 z-[9] hover:translate-x-10 hover:translate-y-2 transition-transform duration-500 hover:rotate-12"></div>
                        <div className="absolute bg-main-orange h-32 w-28 right-3 bottom-4 rounded z-[5] hover:-translate-x-3 hover:translate-y-2 transition-transform duration-500 hover:rotate-90"></div>
                        <div className="absolute bg-main-amber h-32 w-28 -left-10 top-10 rounded hover:translate-x-3 hover:-translate-y-2 transition-transform duration-500 hover:rotate-45"></div>
                        <div className="absolute bg-main-white h-32 w-28 bottom-12 right-[118px] rounded hover:-translate-x-6 hover:translate-y-2 transition-transform duration-500 hover:rotate-45"></div>
                    </div>
                </div>
            </section>
            <section className="pb-24 pt-24 mx-auto border-t border-main-gray border-b">
                <div>
                    <h1 className="font-semibold text-3xl text-center text-white">Technologies</h1>
                    <h4 className="text-center text-main-gray md:text-lg text-sm mt-4 mx-4">Here are the Framework,Libraries and Language used in this website.</h4>
                </div>
                <div className="flex justify-center md:mx-10 mt-10">
                    <div className="grid md:grid-cols-4 md:gap-8 gap-5">
                        {dataTech.map((data, index) => (
                            <div key={index} className="bg-[#43464B] hover:shadow-md duration-200 hover:scale-105 w-[300px] h-44 flex flex-col rounded hover:shadow-main-white p-2">
                                <div className="h-32 flex items-center justify-center p-4">
                                    <img src={data.img} alt={data.language} className="w-16" />
                                </div>
                                <h3 className="text-lg font-semibold text-white text-center mb-10">{data.language}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}
