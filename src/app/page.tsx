"use client"
import Footer from "../components/Footer"
import PageWrapper from "../components/PageWrapper"
import Contact from "../components/sections/Feedback"
import Faq from "../components/sections/Faq"
import GetStarted from "../components/sections/GetStarted"
import Hero from "../components/sections/Hero"
export default function Home() {
  return (
    <>
      <PageWrapper>
        <section className="bg-main-black">
          <Hero />
          <GetStarted />
          <Faq />
          <Contact />
        </section>
      </PageWrapper>
      <Footer />
    </>
  )
}
