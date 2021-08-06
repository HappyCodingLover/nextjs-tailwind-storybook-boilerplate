import Head from "next/head"
import "../components/Hero"
import { Hero } from "../components/Hero"

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page | Created with ❤️ by Jin Long</title>
    </Head>
      <Hero />
    </>
  )
}
