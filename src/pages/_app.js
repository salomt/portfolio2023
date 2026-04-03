import { useEffect } from "react"
import { useRouter } from "next/router"
import "@/styles/globals.css"
/* Default player styles first, then sticky overrides (Next requires global CSS from _app only). */
import "react-h5-audio-player/lib/styles.css"
import "@/styles/sticky-game-music-player.css"

/** Sets `html[data-sticky-music-player]` so `--page-anchor-offset` is 4rem vs 0 (see globals.css). */
function StickyMusicPlayerAnchorOffset() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return undefined

    const root = document.documentElement
    const active = router.pathname === "/" && String(router.query.featured || "") === "gamemusic"

    if (active) root.dataset.stickyMusicPlayer = "true"
    else root.removeAttribute("data-sticky-music-player")

    return () => root.removeAttribute("data-sticky-music-player")
  }, [router.isReady, router.pathname, router.query.featured])

  return null
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <StickyMusicPlayerAnchorOffset />
      <Component {...pageProps} />
    </>
  )
}
