import Head from "next/head"
import PageWrapper from "../components/PageWrapper"
import Faq from "./sections/Faq"
import Hero from "./sections/Hero"
export default function Home() {
  return (
    <PageWrapper>
      <section className="bg-main-black">
        <Head>
          <link rel="icon" href="favicon.ico" />
        </Head>
        <Hero />
        <Faq />
      </section>
    </PageWrapper>
  )
}
