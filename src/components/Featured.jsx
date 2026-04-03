import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

const Featured = () => {
  const router = useRouter()
  const [featuredParam, setFeaturedParam] = useState(null)
  const [mounted, setMounted] = useState(false)

  const anchor = window.location.hash

  // Initialize from query params on mount and changes
  useEffect(() => {
    if (router.isReady) {
      const featured = router.query.featured

      if (featured) {
        setFeaturedParam(featured)
        localStorage.setItem("featuredContent", featured)
      } else {
        setFeaturedParam(null)
        localStorage.removeItem("featuredContent")
      }
      setMounted(true)
    }
  }, [router.query])

  useEffect(() => {
    if (featuredParam && !anchor) {
      const timer = setTimeout(() => {
        const featuredElement = document.getElementById("featured")
        if (featuredElement) {
          const elementPosition = featuredElement.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          })
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [featuredParam])

  const featuredContent = {
    gamemusic: {
      title: "Game Music & Audio Design",
      subtitle: "Composing and producing audio for interactive experiences",
      video: "https://www.youtube.com/embed/bD6oSswdBQA",
      projects: [
        {
          id: 1,
          name: "Hotel Hideaway",
          role: "Music Composition & Audio Design",
          description: "Social mobile game with adaptive music system",
        },
        {
          id: 2,
          name: "Dized",
          role: "Music & SFX Production",
          description: "Board game learning app with cohesive audio branding",
        },
        {
          id: 3,
          name: "Retro Shot",
          role: "Composer & Producer",
          description: "Original soundtrack awarded 3rd place at Finnish Game Music Awards 2016",
        },
      ],
      skills: ["Music Composition", "Sound Design", "Audio Mixing", "Interactive Audio", "Game Music Theory", "Unity", "Wwise"],
    },
    liveperforming: {
      title: "Live Performance & DJing",
      subtitle: "Piano, keyboards, vocals, and electronic performances",
      description: "I perform across multiple genres and settings - from classical piano and folk tributes to electronic DJ sets at clubs and festivals.",
      projects: [
        {
          id: 1,
          name: "Myllynen & Salomaa",
          role: "Keyboards & Accordion",
          description: "Tribute performance to Finnish folk artist M.A. Numminen",
        },
        {
          id: 2,
          name: "DJ Megatommi",
          role: "DJ & Producer",
          description: "Specializing in electro, chiptune and synthwave",
        },
        {
          id: 3,
          name: "Zuge Guerilla Band",
          role: "Keyboards & Percussion",
          description: "Live band with production and recording responsibilities",
        },
      ],
      skills: ["Piano Performance", "Keyboard Playing", "DJ Performance", "Live Sound", "Vocals"],
    },
    avengineering: {
      title: "AV Engineering & Event Production",
      subtitle: "Sound design and technical management for live events",
      description: "I manage audio-visual systems and coordinate technical aspects for festivals, corporate events, private celebrations, and nightlife venues.",
      projects: [
        {
          id: 1,
          name: "Festival Production",
          role: "AV Engineer",
          description: "Sound and lighting coordination for multiple stage setups",
        },
        {
          id: 2,
          name: "Corporate Events",
          role: "Technical Coordinator",
          description: "Audio systems and presentation support for business presentations",
        },
        {
          id: 3,
          name: "Venue Management",
          role: "Sound Engineer",
          description: "Club and gig sound setup, mixing, and technical support",
        },
      ],
      skills: ["Sound System Setup", "Live Mixing", "Equipment Management", "Lighting Control", "Venue Coordination"],
    },
    audiodesign: {
      title: "Audio Design & Production",
      subtitle: "Custom sound creation for media and entertainment",
      description: "Specializing in creating unique audio experiences including foley effects, field recordings, voiceovers, and sound synthesis for various media projects.",
      projects: [
        {
          id: 1,
          name: "Moomin Language School",
          role: "Voiceover & Music Production",
          description: "Audio content for children's language learning platform",
        },
        {
          id: 2,
          name: "Sound Synthesis",
          role: "Sound Designer",
          description: "Custom synth patches and generative audio systems",
        },
        {
          id: 3,
          name: "Field Recording",
          role: "Location Audio",
          description: "High-quality audio capture for documentary and film projects",
        },
      ],
      skills: ["Foley & Sound Effects", "Voiceover Recording", "Field Recording", "Sound Synthesis", "Audio Post-Production"],
    },
  }

  if (!featuredParam || !featuredContent[featuredParam]) {
    return null
  }

  const content = featuredContent[featuredParam]

  return (
    <div id="featured" className="page-top-div">
      <div className="max-w-[1240px] m-auto py-8 p-4">
        <div className="mb-8">
          <p className="uppercase text-xl tracking-widest underline">Featured</p>
          <h1 className="py-4 text-4xl font-bold text-rose-300">{content.title}</h1>
          <h2 className="py-2 text-xl text-gray-300 mb-4">{content.subtitle}</h2>
          {content.description && <p className="text-lg leading-relaxed mb-8">{content.description}</p>}
        </div>

        {/* Featured Video */}
        {content.video && (
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-3xl" style={{ paddingBottom: "56.25%" }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src={content.video} title="Featured Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        )}

        {/* Projects */}
        <div className="mb-8">
          {/* <h3 className="pt-8 text-2xl font-semibold mb-4">Key Projects</h3>
          <div className="border-b pb-2 mb-6"></div> */}
          <a href="#projects" className="inline-block text-1xl uppercase font-bold hover:underline">
            Explore shipped key projects →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured
