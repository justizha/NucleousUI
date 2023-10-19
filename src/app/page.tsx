import PageWrapper from "../components/PageWrapper"
import Faq from "./sections/Faq"
import Hero from "./sections/Hero"
export default function Home() {
  return (
    <PageWrapper>
      <section className="bg-main-black">
        <Hero />
        <Faq />
      </section>
    </PageWrapper>
  )
}
