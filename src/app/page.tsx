"use client"
import PageWrapper from "../components/PageWrapper"
import CodeHighlight from "./sections/CodeHighlight"
import Contact from "./sections/Contact"
import Faq from "./sections/Faq"
import Hero from "./sections/Hero"
import PoweredBy from "./sections/PoweredBy"
export default function Home() {
  return (
    <PageWrapper>
      <section className="bg-main-black">
        <Hero />
        <PoweredBy />
        <CodeHighlight />
        <Faq />
        <Contact />
      </section>
    </PageWrapper>
  )
}
