"use client"

import Footer from "../../components/Footer";
import PageWrapper from "../../components/PageWrapper";
export default function blog({ children }) {
    return (
        <>
            <PageWrapper>
                <section className="pb-20 pt-24 mx-10 ">
                    <div className="mt-8 mx-4 mb-8">
                        <h1 className="text-white font-semibold text-5xl">
                            The <span className="italic text-main-blue">Nucleous</span> Blog.
                        </h1>
                        <p className="text-base ml-2 mt-2 text-main-white">
                            Read all the latest updates
                            <br /> and the current situation about the site.
                        </p>
                    </div>
                    {children}
                </section>
            </PageWrapper>
            <Footer />
        </>
    )
}