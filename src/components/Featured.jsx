import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { GAME_MUSIC_PLAYLIST } from "../data/gamemusicPlaylist"
import { useFeaturedVideo } from "../context/FeaturedVideoContext"

const FEATURED_YOUTUBE_IFRAME_ID = "featured-demoreel-youtube"

const Featured = () => {
  const router = useRouter()
  const [featuredParam, setFeaturedParam] = useState(null)
  const { setFeaturedVideoPlaying } = useFeaturedVideo()

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
    }
  }, [router.query, router.isReady])

  useEffect(() => {
    if (featuredParam && !anchor) {
      const timer = setTimeout(() => {
        const featuredElement = document.getElementById("featured")
        if (featuredElement) {
          let top = featuredElement.getBoundingClientRect().top + window.scrollY
          if (featuredParam === "gamemusic") {
            const raw = getComputedStyle(document.documentElement)
              .getPropertyValue("--sticky-gamemusic-anchor-offset")
              .trim()
            const offset = raw ? parseFloat(raw) : 0
            top = Math.max(0, top - offset)
          }
          window.scrollTo({
            top,
            behavior: "smooth",
          })
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [featuredParam, anchor])

  const featuredContent = {
    gamemusic: {
      title: "Game Music & Audio Design",
      subtitle: "",
      video: "https://www.youtube.com/embed/bD6oSswdBQA",
      playlist: GAME_MUSIC_PLAYLIST,
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

  const gamemusicVideoUrl = featuredParam === "gamemusic" && featuredContent.gamemusic?.video ? featuredContent.gamemusic.video : null

  useEffect(() => {
    if (!gamemusicVideoUrl) {
      setFeaturedVideoPlaying(false)
      return undefined
    }

    let cancelled = false
    let player

    const applyState = (state) => {
      if (cancelled || !window.YT) return
      const { PlayerState } = window.YT
      const playing = state === PlayerState.PLAYING || state === PlayerState.BUFFERING
      setFeaturedVideoPlaying(playing)
    }

    const bindPlayer = () => {
      if (cancelled || !document.getElementById(FEATURED_YOUTUBE_IFRAME_ID)) return
      player = new window.YT.Player(FEATURED_YOUTUBE_IFRAME_ID, {
        events: {
          onStateChange: (e) => applyState(e.data),
        },
      })
    }

    const ensureApi = () => {
      if (cancelled) return
      if (window.YT && window.YT.Player) {
        bindPlayer()
        return
      }
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prev === "function") prev()
        bindPlayer()
      }
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        document.head.appendChild(tag)
      }
    }

    ensureApi()

    return () => {
      cancelled = true
      setFeaturedVideoPlaying(false)
      if (player && typeof player.destroy === "function") {
        try {
          player.destroy()
        } catch (_) {
          /* ignore */
        }
      }
    }
  }, [gamemusicVideoUrl, setFeaturedVideoPlaying])

  if (!featuredParam || !featuredContent[featuredParam]) {
    return null
  }

  const content = featuredContent[featuredParam]

  const gamemusicEmbedSrc = content.video && `${content.video}${content.video.includes("?") ? "&" : "?"}enablejsapi=1${typeof window !== "undefined" ? `&origin=${encodeURIComponent(window.location.origin)}` : ""}`

  return (
    <div id="featured" className="page-top-div">
      <div className="w-full max-w-[1240px] m-auto py-8 px-4">
        <div className="mb-8">
          <p className="uppercase text-xl tracking-widest underline">Featured</p>
          <h1 className="py-2 text-4xl font-bold text-rose-300">{content.title}</h1>
          {content.subtitle && <h2 className="py-2 text-xl text-gray-300 mb-4">{content.subtitle}</h2>}
          {content.description && <p className="text-lg leading-relaxed mb-8">{content.description}</p>}
        </div>
        {featuredParam === "gamemusic" && content.video && (
          <div className="mb-8 -mx-4 w-[calc(100%+2rem)]">
            <div className="relative mx-auto aspect-video w-3/4 overflow-hidden rounded-lg ring-1 ring-white/10">
              <iframe id={FEATURED_YOUTUBE_IFRAME_ID} className="absolute inset-0 h-full w-full" src={gamemusicEmbedSrc} title="Featured Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        )}

        {/* Projects */}
        <div className="mb-8">
          <a href="#projects" className="inline-block text-1xl uppercase font-bold hover:underline">
            Explore my shipped projects →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured
