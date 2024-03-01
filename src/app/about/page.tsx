"use client"
import PageWrapper from "../../components/PageWrapper";
import Footer from "../../components/Footer";
export default function About() {
    return (
        <>
            <PageWrapper>
                <article className="pt-28">
                    <h1 className="text-4xl text-center font-semibold text-white ">
                        About
                    </h1>
                </article>
                <article className="md:mx-40 mx-8 pt-14 lg:mx-80">
                    <div className="mb-4">
                        <h2 className="text-lg text-white font-medium">
                            The Reason Why i made this site.
                        </h2>
                        <p className="text-main-gray text-base">
                            So this project it's started as a learning base project,
                            i just breaking things and try to fix it by myself,and i though would be
                            fun if i just make something and that is a ui library. 
                        </p>   
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg text-white font-medium">
                            Why UI Library ?
                        </h2>
                        <p className="text-main-gray text-base">
                            So this project it's started as a learning base project,
                            i just breaking things and try to fix it by myself,and i though would be
                            fun if i just make something and that is a ui library. 
                        </p>   
                    </div>
                </article>
            </PageWrapper>
            <Footer />
        </>
    )
}
