import Head from "next/head"
import { Inter } from "next/font/google"
import { useRouter } from "next/router"
import { FeaturedVideoProvider } from "../context/FeaturedVideoContext"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import About from "../components/About"
import Skills from "../components/Skills"
import Featured from "../components/Featured"
import StickyGameMusicPlayer from "../components/StickyGameMusicPlayer"
import Projects from "../components/Projects"
import Customers from "../components/Customers"
import Contact from "../components/Contact"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const router = useRouter()
  const { featured } = router.query

  return (
    <FeaturedVideoProvider>
    <div className="min-w-0 overflow-x-clip">
      <Head>
        <title>Tommi Salomaa</title>
        <meta name="description" content="Tommi Salomaa portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <StickyGameMusicPlayer />
      <Main />
      {featured && <Featured />}
      <About />
      <Skills />
      <Projects />
      <Customers />
      <Contact />
    </div>
    </FeaturedVideoProvider>
  )
}
