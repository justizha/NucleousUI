import Head from "next/head"
import Faq from "./sections/Faq"
import Hero from "./sections/Hero"
export default function Home() {
  return (
    <div className="bg-main-black">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Hero />
      <Faq />
    </div>
  )
}
