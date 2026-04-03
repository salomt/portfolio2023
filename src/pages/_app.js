import { useEffect } from "react"
import { useRouter } from "next/router"
import "@/styles/globals.css"
/* Default player styles first, then sticky overrides (Next requires global CSS from _app only). */
import "react-h5-audio-player/lib/styles.css"
import "@/styles/sticky-game-music-player.css"

const STICKY_GAMEMUSIC_ANCHOR_OFFSET_REM = { default: 2.5, md: 5.5 }

function StickyGamemusicScrollOffset() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const apply = () => {
      const active = router.pathname === "/" && String(router.query.featured || "") === "gamemusic"
      const root = document.documentElement
      if (active) {
        root.dataset.stickyGamemusicBar = "true"
        const rem = window.matchMedia("(min-width: 768px)").matches ? STICKY_GAMEMUSIC_ANCHOR_OFFSET_REM.md : STICKY_GAMEMUSIC_ANCHOR_OFFSET_REM.default
        root.style.setProperty("--sticky-gamemusic-anchor-offset", `${rem * 16}px`)
      } else {
        root.dataset.stickyGamemusicBar = "false"
        root.style.removeProperty("--sticky-gamemusic-anchor-offset")
      }
    }

    apply()
    const mql = window.matchMedia("(min-width: 768px)")
    mql.addEventListener("change", apply)
    return () => {
      mql.removeEventListener("change", apply)
      document.documentElement.dataset.stickyGamemusicBar = "false"
      document.documentElement.style.removeProperty("--sticky-gamemusic-anchor-offset")
    }
  }, [router.isReady, router.pathname, router.query.featured])

  return null
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <StickyGamemusicScrollOffset />
      <Component {...pageProps} />
    </>
  )
}
