"use client"
import PageWrapper from "../components/PageWrapper"
import CodeHighlight from "./sections/CodeHighlight"
import Contact from "./sections/Contact"
import Faq from "./sections/Faq"
import Frameworks from "./sections/Frameworks"
import Hero from "./sections/Hero"
export default function Home() {
  return (
    <PageWrapper>
      <section className="bg-main-black">
        <Hero />
        <Frameworks />
        <CodeHighlight />
        <Faq />
        <Contact />
      </section>
    </PageWrapper>
  )
}
