import Head from "next/head"
import Faq from "./sections/Faq"
import Hero from "./sections/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Faq />
    </>
  )
}
