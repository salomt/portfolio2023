import React from "react"
import Image from "next/image"
import Link from "next/link"

const Customers = () => {
  const companies = [
    {
      id: 1,
      url: "https://www.sulake.com/",
      image: "/assets/customerlogos/Logo_Sulake.png",
      alt: "Sulake",
      width: 200,
      height: 200,
    },
    {
      id: 2,
      url: "https://yousician.com/",
      image: "/assets/customerlogos/Logo_Yousician.png",
      alt: "Yousician",
      width: 200,
      height: 200,
    },
    {
      id: 3,
      url: "https://www.ilry.fi/",
      image: "/assets/customerlogos/Logo_Engineers.png",
      alt: "Engineering Union",
      width: 300,
      height: 300,
    },
    {
      id: 4,
      url: "https://soundengine.fi/",
      image: "/assets/customerlogos/Logo_soundengine.jpeg",
      alt: "Sound Engine",
      width: 175,
      height: 175,
    },
    {
      id: 5,
      url: "https://rajupaja.fi/",
      image: "/assets/customerlogos/logo-rajupaja.png",
      alt: "Rajupaja",
      width: 200,
      height: 200,
    },
    {
      id: 6,
      url: "https://promentor.fi/",
      image: "/assets/customerlogos/Logo_Promentor.png",
      alt: "Promentor Solutions",
      width: 300,
      height: 300,
    },
    {
      id: 7,
      url: "https://www.igda.fi/",
      image: "/assets/customerlogos/Logo_IGDA.png",
      alt: "IGDA Finland",
      width: 300,
      height: 300,
    },
    {
      id: 8,
      url: "https://www.superplusgames.com/",
      image: "/assets/customerlogos/logo-superplus.png",
      alt: "SuperPlus Games",
      width: 175,
      height: 175,
    },
    {
      id: 9,
      url: "https://housemarque.com/",
      image: "/assets/customerlogos/Logo_HMQ.png",
      alt: "Housemarque",
      width: 300,
      height: 300,
    },
  ]

  const bands = [
    {
      id: 1,
      title: "OINK FLOYD",
      url: "https://www.facebook.com/oinkfloyd/",
      image: "/assets/projectpics/oinkfloyd.jpg",
      alt: "Oink Floyd",
      width: 250,
      height: 250,
      items: ["Tribute to Pink Floyd", "Keyboards and percussion"],
    },
    {
      id: 2,
      title: "ZUGE GUERILLA BAND (2023-2024)",
      url: "",
      image: "/assets/projectpics/zugeguerillaband.jpg",
      alt: "Zuge Guerilla Band",
      width: 250,
      height: 250,
      items: ["Keyboards and percussion", "Production, recording, mixing"],
    },
    {
      id: 3,
      title: "MYLLYNEN & SALOMAA PLAYS M.A. NUMMINEN",
      url: "https://tommisalomaa.com/myllynenjasalomaa/",
      image: "/assets/projectpics/impputommi.jpg",
      alt: "Myllynen ja Salomaa",
      width: 250,
      height: 250,
      items: ["Tribute to Finnish folk artist M.A. Numminen", "Accordion, piano and electronics"],
    },
    {
      id: 4,
      title: "DJ MEGATOMMI",
      url: "",
      image: "/assets/projectpics/DJMegatommi.png",
      alt: "DJ MegaTommi",
      width: 250,
      height: 250,
      items: ["Specializing in electro, chiptune and synthwave"],
    },
    {
      id: 5,
      title: "TRIO HENKINEN KESOIL (2018-2022)",
      url: "https://www.youtube.com/watch?v=tp5BChjw92s",
      image: "/assets/projectpics/THK.jpeg",
      alt: "Trio Henkinen Kesoil",
      width: 250,
      height: 250,
      items: ["Accordion", "Gig booking"],
    },
    {
      id: 6,
      title: "WOTZC (2007-2016)",
      url: "https://open.spotify.com/artist/6R9dTrKWg5HaP7we7KtKWM?si=Gkeu08HfSRqtMEEId23EMw",
      image: "/assets/projectpics/WOTZC.png",
      alt: "WOTZC",
      width: 250,
      height: 250,
      items: ["Keyboards Live & Studio", "Co-production", "Co-Recording"],
    },
  ]

  return (
    <div id="clients" className="page-top-div">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 py-2 p-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest underline">Clients</p>
          <h2 className="py-4 text-rose-300">With whom have I worked?</h2>

          {/* Companies */}
          <h3 className="pt-8">Companies</h3>
          <div className="border-b pb-2 m-auto"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-4">
            {companies.map((company) => (
              <div key={company.id} className="bg-gray-300 rounded-md py-2 p-4 flex items-center justify-center hover:scale-105 ease-in-out duration-300">
                <a href={company.url} target="_blank">
                  <Image src={company.image} alt={company.alt} width={company.width} height={company.height} />
                </a>
              </div>
            ))}
          </div>

          {/* Bands */}
          <h3 className="pt-8">Bands</h3>
          <div className="border-b pb-2 m-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full py-4">
            {bands.map((band) => (
              <div key={band.id} className="grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300">
                <a href={band.url} target="_blank">
                  <div className=" py-2 p-4 flex items-center justify-center">
                    <Image src={band.image} alt={band.alt} width={band.width} height={band.height} />
                  </div>
                  <div className="py2 p-4 text-black">
                    <h4>{band.title}</h4>
                    <ul className="list-disc p-2">
                      {band.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers
