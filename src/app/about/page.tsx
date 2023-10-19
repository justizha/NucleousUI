import PageWrapper from "../../components/PageWrapper";
import Tech from "./aboutSections/Tech";
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
                <div className="flex justify-end  md:mt-10 mt-20 md:mr-14 mr-16 ">
                    <div className="md:w-1/2 h-64 relative">
                        <div className="absolute bg-main-gray h-32 w-28 top-10 right-10 rounded z-10"></div>
                        <div className="absolute bg-main-green h-32 w-28 rounded right-24 -top-8 z-[11]"></div>
                        <div className="absolute bg-main-blue h-32 w-28 rounded -top-3 right-0 z-[9]"></div>
                        <div className="absolute bg-main-orange h-32 w-28 right-3 bottom-4 rounded z-[5]"></div>
                        <div className="absolute bg-main-amber h-32 w-28 -left-10 top-10 rounded"></div>
                        <div className="absolute bg-main-white h-32 w-28 bottom-12 right-[118px] rounded"></div>
                    </div>
                </div>
            </section>
            <Tech />
        </PageWrapper>
    )
}
