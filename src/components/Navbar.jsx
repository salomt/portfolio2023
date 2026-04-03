import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa"

const Navbar = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [featuredParam, setFeaturedParam] = useState(null)

  useEffect(() => {
    const featured = router.query.featured
    if (featured) {
      setFeaturedParam(featured)
    } else {
      setFeaturedParam(null)
    }
  }, [router.query])

  const isFeaturedGameMusic = featuredParam === "gamemusic"
  const queryString = featuredParam ? `?featured=${featuredParam}` : ""

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <div
      className={`fixed z-[100] h-20 w-full bg-[#000620]/80 pt-4 ease-in-out duration-500 lg:h-24 ${
        shadow ? "border-b border-white/10" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full px2 2xl:px-16 fixed ">
        <div className="pl-2">
          <h2 className="text-lg font-bold leading-tight lg:text-2xl">Tommi Salomaa</h2>
          <p className="text-[0.65rem] uppercase tracking-widest text-[#eceff2]/85 lg:text-xs">MUSICIAN | NERD</p>
        </div>
        <div>
          <ul className="hidden lg:flex pr-2">
            <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-10 uppercase hover:border-b cursor-pointer">
              home
            </li>
            {isFeaturedGameMusic && (
              <Link href={`${queryString}#featured`}>
                <li className="ml-10 uppercase hover:border-b font-bold">game showreel</li>
              </Link>
            )}
            <Link href={`${queryString}#about`}>
              <li className="ml-10 uppercase hover:border-b">about</li>
            </Link>
            <Link href={`${queryString}#skills`}>
              <li className="ml-10 uppercase hover:border-b">skills</li>
            </Link>
            <Link href={`${queryString}#projects`}>
              <li className="ml-10 uppercase hover:border-b">projects</li>
            </Link>
            <Link href={`${queryString}#clients`}>
              <li className="ml-10 uppercase hover:border-b">clients</li>
            </Link>
            <Link href={`${queryString}#contact`}>
              <li className="ml-10 uppercase hover:border-b">contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer pr-2 lg:hidden">
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>

      <div className={nav ? "fixed left-0 top-0 h-screen w-full bg-black/70 lg:hidden" : ""}>
        <div className={nav ? "fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 ease-in duration-500 sm:w-[60%] md:w-[45%]" : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="text-black">
                <h2 className="tracking-normal text-md">Tommi Salomaa</h2>
              </div>
              <div onClick={handleNav} className="cursor-pointer rounded-full border border-white/15 p-3 hover:border-white/30">
                <AiOutlineClose color="black" size={30} />
              </div>
            </div>
            <div className="text-black border-b border-gray-300 my-4">
              <p>MUSICIAN | AV ENGINEER</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="text-black uppercase">
              <li
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  handleNav()
                }}
                className="py-4 text-sm"
              >
                home
              </li>
              <Link href={`${queryString}#about`} onClick={handleNav}>
                <li className="py-4 text-sm">about</li>
              </Link>
              <Link href={`${queryString}#skills`} onClick={handleNav}>
                <li className="py-4 text-sm">skills</li>
              </Link>
              {isFeaturedGameMusic && (
                <Link href={`${queryString}#featured`} onClick={handleNav}>
                  <li className="py-4 text-sm">game music</li>
                </Link>
              )}
              <Link href={`${queryString}#projects`} onClick={handleNav}>
                <li className="py-4 text-sm">projects</li>
              </Link>
              <Link href={`${queryString}#clients`} onClick={handleNav}>
                <li className="py-4 text-sm">clients</li>
              </Link>
              <Link href={`${queryString}#contact`} onClick={handleNav}>
                <li className="py-4 text-sm">contact</li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className=" text-black uppercase tracking-wider">Let&#39;s connect!</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="nav-icon">
                  <a href="https://open.spotify.com/artist/4Zu0QLKCCz02GjpdBvSSi9?si=xJ7Uxx7FTGGNMfwKrYTrIg" target="_blank">
                    <FaSpotify color="black" size={25} />
                  </a>
                </div>
                <div className="nav-icon">
                  <a href="https://www.youtube.com/channel/UCWC3h6X0fklYLBxCQTvGfnQ" target="_blank">
                    <FaYoutube color="black" size={25} />
                  </a>
                </div>
                <div className="nav-icon">
                  <a href="https://www.instagram.com/t.salomaa/" target="_blank">
                    <FaInstagram color="black" size={25} />
                  </a>
                </div>
                <div className="nav-icon">
                  <a href="https://www.linkedin.com/in/tommi-salomaa/" target="_blank">
                    <FaLinkedinIn color="black" size={25} />
                  </a>
                </div>
                <div className="nav-icon">
                  <a href="mailto:contact@tommisalomaa.com">
                    <AiOutlineMail color="black" size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
