import PageWrapper from "../../components/PageWrapper";
export default function About() {
    return (
        <PageWrapper>
            <section className="pt-28">
                <h1 className="text-3xl font-semibold text-white text-start mx-2 md:ml-80">About</h1>
                <div className="flex flex-col md:justify-center items-center md:mx-0 mx-2">
                    <p className="md:text-base text-start text-sm font-normal text-main-gray mt-3 md:w-[48%]">
                        Check out why this website exists and what cool tech stuff it's packing! It's like a digital toolbox that's all about making the web-building process easy and customizable. With a bunch of super cool tools and tricks up its sleeve, this site helps you create awesome and dynamic web content without any hassle
                    </p>
                </div>
            </section>
        </PageWrapper>
    )
}
