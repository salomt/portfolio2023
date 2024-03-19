import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Customers from '../components/Customers'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tommi Salomaa</title>
        <meta name="description" content="Tommi Salomaa portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Customers />
      <Contact />

    </div>
  )
}
