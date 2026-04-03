import React from "react"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  const gameProjects = [
    {
      id: 1,
      title: "HOTEL HIDEAWAY",
      url: "https://www.hotelhideawaythegame.com/",
      image: "/assets/projectpics/hotelhideaway.png",
      width: 300,
      height: 200,
      description: "Music composition and audio design for a social mobile game. (2015- Sulake Corporation)",
    },
    {
      id: 2,
      title: "DIZED",
      url: "https://dized.com/",
      image: "/assets/projectpics/Dized_2017.jpeg",
      width: 300,
      height: 200,
      description: "Music, SFX and audio direction for a board game learning product. (2017-2018, Playmore Games Oy)",
    },
    {
      id: 3,
      title: "MOOMIN LANGUAGE SCHOOL",
      url: "https://www.moominls.com/",
      image: "/assets/customerlogos/Logo_MLS.png",
      width: 500,
      height: 200,
      description: "Voiceover recording and editing, music composition for language learning product for children.",
    },
    {
      id: 4,
      title: "YOUSICIAN",
      url: "https://www.yousician.com",
      image: "/assets/projectpics/YousicianHorizontal.png",
      width: 500,
      height: 200,
      description: "Piano content production and management for music learning application.",
    },
    {
      id: 5,
      title: "MELIORA",
      url: "",
      image: "/assets/projectpics/meliora.jpg",
      width: 300,
      height: 200,
      description: "Voiceover design, recording and editing for experimental game project designed to help mental health patients.",
    },
    {
      id: 6,
      title: "RETRO SHOT",
      url: "https://open.spotify.com/album/4kfOjrIS3j0tpgcbgWHZDw?si=u0zF3ALKRDa1goZiIjXHdA",
      image: "/assets/projectpics/retroshot.jpeg",
      width: 300,
      height: 200,
      description: "Co-composing, producing, mixing and mastering original soundtrack for a mobile game in collaboration with Retro Thruster. The soundtrack was awarded 3rd place at Finnish Game Music Awards in 2016.",
    },
    {
      id: 7,
      title: "AG DRIVE",
      url: "https://open.spotify.com/album/4kfOjrIS3j0tpgcbgWHZDw?si=u0zF3ALKRDa1goZiIjXHdA",
      image: "/assets/projectpics/agdrive.jpeg",
      width: 500,
      height: 200,
      description: "Producing a track Riding High for a game soundtrack for AG Drive, a futuristic driving game.",
    },
    {
      id: 8,
      title: "ROCK RUNNERS",
      url: "https://tommisalomaa.bandcamp.com/album/rock-runners-soundtrack",
      image: "/assets/projectpics/rockrunners.png",
      width: 500,
      height: 200,
      description: "Composing and producing soundtrack and SFX for mobile game Rock Runners (Recoil Games)",
    },
  ]

  const studioProjects = [
    {
      id: 101,
      title: "TEAM ROGER - RUNTIME BREAKER",
      url: "https://open.spotify.com/album/2wyKZ4Q2Ti9CTfZaMusuGo?si=SuelsP37ToORkqQfOELRJQ",
      image: "/assets/projectpics/Team_Roger_Runtime_Breaker.png",
      width: 250,
      height: 250,
      items: ["Composition", "Production", "Mixing"],
    },
    {
      id: 102,
      title: "TOMMI SALOMAA - PIANO MUSIC",
      url: "https://open.spotify.com/playlist/5QErNWgN3wfaXC9unM8RGU?si=e1d4d910e8c14935",
      image: "/assets/projectpics/pianomusic.png",
      width: 250,
      height: 250,
      items: ["Composition", "Performing", "Co-engineering"],
    },
    {
      id: 103,
      title: "FENETZAR",
      url: "https://open.spotify.com/artist/1wl871Zm63BJWCW1fGKrYX?si=nAzTPoClRum4uamwZ6KjsQ",
      image: "/assets/projectpics/fenetzar.png",
      width: 250,
      height: 250,
      items: ["Production", "Engineering"],
    },
    {
      id: 104,
      title: "CAT & MOUSE - RATS & COWS",
      url: "https://open.spotify.com/album/6lHVyQY6bLas3KwqUqX14M?si=t3OLMjcwSUSWgT5FTYBxeA",
      image: "/assets/projectpics/rat_and_cows.jpg",
      width: 250,
      height: 250,
      items: ["Co-production", "Mixing", "Mastering"],
    },
    {
      id: 105,
      title: "WALTARI - 3RD DECADE",
      url: "https://open.spotify.com/album/3slotRsmfCgt89DfJqf23d?si=yfzQvSJuTMmB8uu6tOxElQ",
      image: "/assets/projectpics/Waltari_3rdDecade.jpeg",
      width: 250,
      height: 250,
      items: ["Synth arrangements and sound design", "Recording children's choir in So Fine 2021", "Co-mixing some tracks"],
    },
    {
      id: 106,
      title: "BABA GANOUSH ORKESTRA - MEZE",
      url: "https://open.spotify.com/album/74JJd6RmHqD3deWsTIHEGq?si=NxXmosFESN2CDSgdUTk0vg",
      image: "/assets/projectpics/BabaGanoush_Meze.png",
      width: 250,
      height: 250,
      items: ["Recording & Engineering", "Mixing Sneak studio live song"],
    },
    {
      id: 107,
      title: "V FOR VIOLENCE - THE BOOK OF V",
      url: "https://open.spotify.com/album/5dkcKhZscVpiyY6dgGWGko?si=cnw1M6okQG2NE2o1IS1sOA",
      image: "/assets/projectpics/VforViolence_TheBook.png",
      width: 250,
      height: 250,
      items: ["Strings arrangements, production and recording", "Synth, piano and noise arrangements and playing", "Co-production"],
    },
    {
      id: 108,
      title: "STORBO - GATES OF THE OVERLORD",
      url: "https://open.spotify.com/album/1lYL6yGqw8TqHhaxfvyaeR?si=pibOB18-RdSdEoeI2EyTuA",
      image: "/assets/projectpics/Storbo_GatesOfTheOverlord.png",
      width: 250,
      height: 250,
      items: ["Keyboards, synths and sound design"],
    },
  ]

  return (
    <div id="projects" className="page-top-div">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 py-8 p-4">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest underline">Projects</p>
          <h2 className="py-4 text-rose-300">What have I been doing?</h2>

          {/* GAMES */}
          <h3 className="pt-8">Games and digital products</h3>
          <div className="border-b pb-2"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-4">
            {gameProjects.map((project) => (
              <div key={project.id} className="grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300">
                <div className=" py-2 p-4 flex items-center justify-center">
                  {project.url ? (
                    <a href={project.url} target="_blank">
                      <Image src={project.image} alt={project.title} width={project.width} height={project.height} />
                    </a>
                  ) : (
                    <a>
                      <Image src={project.image} alt={project.title} width={project.width} height={project.height} />
                    </a>
                  )}
                </div>
                <div className="py2 p-4 text-black">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ALBUMS AND STUDIO PROJECTS */}
          <h3 className="pt-8">Albums and studio projects</h3>
          <div className="border-b pb-2 m-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full py-4">
            {studioProjects.map((project) => (
              <div key={project.id} className="grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300">
                <a href={project.url} target="_blank">
                  <div className=" py-2 p-4 flex items-center justify-center">
                    <Image src={project.image} alt={project.title} width={project.width} height={project.height} />
                  </div>
                  <div className="py2 p-4 text-black">
                    <h4>{project.title}</h4>
                    <ul className="list-disc p-2">
                      {project.items.map((item, index) => (
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

export default Projects
