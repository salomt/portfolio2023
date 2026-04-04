import React from "react"
import { FaInstagram, FaLinkedinIn, FaSpotify, FaYoutube } from "react-icons/fa"

import ContactEmailBlock from "./ContactEmailBlock"
import ContactForm from "./ContactForm"

const socialBtn = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-rose-300/35 bg-white/10 text-rose-100 transition hover:border-rose-300/55 hover:bg-rose-300/15 hover:text-white"

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-[#000620]/75 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-xl uppercase tracking-widest underline">Contact</p>
        <h2 className="py-4 text-rose-300">Get in touch!</h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex flex-col rounded-xl border border-rose-300/20 bg-black/15 p-6 backdrop-blur-sm sm:p-8 lg:min-h-0 lg:h-full">
            <p className="leading-relaxed text-[#eceff2]/90">I am available for new projects and gigs — connect using the links below or send a message.</p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a href="https://www.instagram.com/t.salomaa/" target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/tommi-salomaa/" target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="LinkedIn">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="https://open.spotify.com/artist/4Zu0QLKCCz02GjpdBvSSi9?si=xJ7Uxx7FTGGNMfwKrYTrIg" target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="Spotify">
                <FaSpotify className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCWC3h6X0fklYLBxCQTvGfnQ" target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="YouTube">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <ContactEmailBlock className="min-h-0" />
        </div>

        <div className="mt-10 flex w-full justify-center lg:mt-12">{/* <ContactForm /> */}</div>
      </div>
    </div>
  )
}

export default Contact
