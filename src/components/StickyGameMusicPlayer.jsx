import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react"
import { useRouter } from "next/router"
import AudioPlayer from "react-h5-audio-player"
import { MdPlaylistPlay } from "react-icons/md"
import { GAME_MUSIC_PLAYLIST } from "../data/gamemusicPlaylist"
import { useFeaturedVideo } from "../context/FeaturedVideoContext"
import { useGameMusicAnalyser } from "../hooks/useGameMusicAnalyser"

const VISUALIZER_BAR_COUNT = 7

const StickyGameMusicPlayer = () => {
  const router = useRouter()
  const { featuredVideoPlaying, setFeaturedVideoPlaying } = useFeaturedVideo()
  const [playlistOpen, setPlaylistOpen] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollHintTop, setScrollHintTop] = useState(false)
  const [scrollHintBottom, setScrollHintBottom] = useState(false)
  const barRef = useRef(null)
  const playingEqRef = useRef(null)
  const playlistScrollRef = useRef(null)

  const updatePlaylistScrollUi = useCallback(() => {
    const scrollEl = playlistScrollRef.current
    if (!scrollEl) return

    const { scrollHeight, clientHeight, scrollTop } = scrollEl
    const maxScroll = scrollHeight - clientHeight
    const canScroll = maxScroll > 2
    const canScrollUp = canScroll && scrollTop > 1
    const canScrollDown = canScroll && scrollTop < maxScroll - 1

    setScrollHintTop(canScrollUp)
    setScrollHintBottom(canScrollDown)
  }, [])

  const idlePulse = !isPlaying && !featuredVideoPlaying

  const n = GAME_MUSIC_PLAYLIST.length
  const track = GAME_MUSIC_PLAYLIST[currentTrack]

  const handleClickNext = () => {
    setCurrentTrack((prev) => (prev + 1) % n)
  }

  const handleClickPrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + n) % n)
  }

  /** Advance playlist when a track finishes; keep “playing” so the next src autoplays. */
  const handleTrackEnded = useCallback(() => {
    setCurrentTrack((prev) => (prev + 1) % n)
    setIsPlaying(true)
  }, [n])

  const handlePause = useCallback((e) => {
    const el = e?.target
    if (el && typeof el.ended === "boolean" && el.ended) return
    setIsPlaying(false)
  }, [])

  const handleSongClick = (index) => {
    if (currentTrack === index && isPlaying) {
      setIsPlaying(false)
    } else {
      setCurrentTrack(index)
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const closeOnOutside = (e) => {
      if (!playlistOpen || !barRef.current) return
      if (!barRef.current.contains(e.target)) setPlaylistOpen(false)
    }
    document.addEventListener("mousedown", closeOnOutside)
    return () => document.removeEventListener("mousedown", closeOnOutside)
  }, [playlistOpen])

  useEffect(() => {
    if (!featuredVideoPlaying) return
    setIsPlaying(false)
    const audio = barRef.current?.querySelector("audio")
    audio?.pause()
  }, [featuredVideoPlaying])

  useEffect(() => {
    if (!router.isReady || router.query.featured === "gamemusic") return
    setFeaturedVideoPlaying(false)
  }, [router.isReady, router.query.featured, setFeaturedVideoPlaying])

  useEffect(() => {
    if (!playlistOpen) {
      setScrollHintTop(false)
      setScrollHintBottom(false)
      return undefined
    }
    const run = () => updatePlaylistScrollUi()
    const t = window.setTimeout(run, 0)
    const el = playlistScrollRef.current
    const ro = el ? new ResizeObserver(run) : null
    if (el && ro) ro.observe(el)
    window.addEventListener("resize", run)
    return () => {
      window.clearTimeout(t)
      ro?.disconnect()
      window.removeEventListener("resize", run)
    }
  }, [playlistOpen, updatePlaylistScrollUi, n])

  const isGamemusicBar = router.isReady && router.query.featured === "gamemusic"

  /** Safari scrolls the page while dragging timeline/volume; CSS touch-action + non-passive preventDefault. */
  useLayoutEffect(() => {
    if (!isGamemusicBar) return undefined

    const root = barRef.current
    if (!root) return undefined

    const sliderSel =
      ".rhap_progress-container, .rhap_volume-bar-area, .rhap_progress-indicator, .rhap_volume-indicator"

    const inSlider = (target) => target instanceof Element && !!target.closest(sliderSel)

    const onTouchMove = (e) => {
      if (!root.contains(e.target)) return
      if (inSlider(e.target)) e.preventDefault()
    }

    const onWheel = (e) => {
      if (!root.contains(e.target)) return
      if (inSlider(e.target)) e.preventDefault()
    }

    document.addEventListener("touchmove", onTouchMove, { passive: false, capture: true })
    document.addEventListener("wheel", onWheel, { passive: false, capture: true })

    return () => {
      document.removeEventListener("touchmove", onTouchMove, { capture: true })
      document.removeEventListener("wheel", onWheel, { capture: true })
    }
  }, [isGamemusicBar])

  useGameMusicAnalyser({
    containerRef: barRef,
    eqBarsRef: playingEqRef,
    active: isGamemusicBar,
    playing: isPlaying && !featuredVideoPlaying,
  })

  if (!isGamemusicBar) {
    return null
  }

  return (
    <div
      ref={barRef}
      data-gamemusic-sticky-player
      data-playing={isPlaying && !featuredVideoPlaying ? "true" : "false"}
      data-idle-pulse={idlePulse ? "true" : "false"}
      className="sticky-game-music-player fixed left-0 right-0 top-14 z-[90] border-b border-[rgba(253,164,175,0.25)] bg-[#000620]/90 lg:top-16"
    >
      <div className="sticky-gamemusic-bar mx-auto flex max-w-[1240px] flex-nowrap items-center gap-1.5 py-2.5 pl-3 pr-3 sm:gap-2 sm:pl-4 sm:pr-5 sm:py-3">
        <button
          type="button"
          className="flex min-w-0 w-[6.5rem] shrink-0 items-start gap-1.5 rounded-md border border-transparent py-1 pl-1.5 pr-1 text-left transition-colors hover:border-rose-300/20 hover:bg-rose-300/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000620] sm:w-[13rem] sm:gap-2 sm:pl-2"
          onClick={() => setPlaylistOpen((o) => !o)}
          aria-expanded={playlistOpen}
          aria-controls="sticky-gamemusic-playlist-panel"
          aria-label={playlistOpen ? "Close playlist" : "Open playlist"}
        >
          <span className="min-w-0 flex-1">
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <p className="sticky-gamemusic-status-label shrink-0 text-[0.68rem] uppercase leading-none tracking-[0.16em] text-rose-300/75 sm:text-[0.72rem]" aria-live="polite">
                {isPlaying ? "Now playing" : featuredVideoPlaying ? "Video" : "Press play"}
              </p>
              {isPlaying && !featuredVideoPlaying && (
                <span ref={playingEqRef} className="sticky-gamemusic-playing-eq shrink-0" aria-hidden="true">
                  {Array.from({ length: VISUALIZER_BAR_COUNT }, (_, i) => (
                    <span key={i} className="sticky-gamemusic-playing-eq__bar" />
                  ))}
                </span>
              )}
            </div>
            <p className="mt-0.5 truncate text-[0.875rem] font-semibold leading-tight text-[#eceff2] sm:text-[0.95rem]" title={track.title}>
              {track.title}
            </p>
          </span>
        </button>

        <div className="sticky-gamemusic-rhap-wrap min-w-0 flex-1 overflow-hidden">
          <AudioPlayer
            layout="horizontal"
            className="sticky-gamemusic-rhap"
            src={track.src}
            showDownloadProgress={false}
            showSkipControls
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
            onEnded={handleTrackEnded}
            autoPlay={isPlaying}
            autoPlayAfterSrcChange={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={handlePause}
          />
        </div>

        <button type="button" className="sticky-gamemusic-playlist-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-rose-300/30 p-0 text-rose-200 transition-colors hover:bg-rose-300/10" aria-expanded={playlistOpen} aria-controls="sticky-gamemusic-playlist-panel" aria-label={playlistOpen ? "Close playlist" : "Open playlist"} title={playlistOpen ? "Close playlist" : "Playlist"} onClick={() => setPlaylistOpen((o) => !o)}>
          <MdPlaylistPlay className="h-7 w-7" aria-hidden />
        </button>
      </div>

      {playlistOpen && (
        <div id="sticky-gamemusic-playlist-panel" className="sticky-gamemusic-playlist-panel border-t border-white/10 bg-[#000620]/90 relative">
          <div
            ref={playlistScrollRef}
            className="sticky-gamemusic-playlist-scroll max-h-52 overflow-y-auto px-3 sm:px-4 py-2"
            onScroll={updatePlaylistScrollUi}
          >
            <ul className="max-w-[1240px] mx-auto space-y-1">
              {GAME_MUSIC_PLAYLIST.map((t, idx) => (
                <li key={t.src}>
                  <button
                    type="button"
                    onClick={() => {
                      handleSongClick(idx)
                      setPlaylistOpen(false)
                    }}
                    className={`w-full rounded-md px-3 py-2.5 text-left text-[0.9375rem] transition-colors sm:py-3 ${idx === currentTrack ? "border-l-2 border-rose-300 bg-rose-300/15 pl-[0.625rem] text-rose-200" : "text-[#eceff2]/90 hover:bg-white/5"}`}
                  >
                    <span className="font-medium">{t.title}</span>
                    {t.artist && <span className="text-gray-400 text-xs block sm:inline sm:ml-2">{t.artist}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {scrollHintTop && (
            <div
              className="sticky-gamemusic-playlist-more-hint sticky-gamemusic-playlist-more-hint--top pointer-events-none absolute top-0 left-0 right-0 h-12"
              aria-hidden="true"
            >
              <div className="absolute inset-x-3 sm:inset-x-4 inset-y-0 bg-gradient-to-b from-[#000620]/95 via-[#000620]/55 to-transparent" />
            </div>
          )}
          {scrollHintBottom && (
            <div
              className="sticky-gamemusic-playlist-more-hint sticky-gamemusic-playlist-more-hint--bottom pointer-events-none absolute bottom-0 left-0 right-0 h-12"
              aria-hidden="true"
            >
              <div className="absolute inset-x-3 sm:inset-x-4 inset-y-0 bg-gradient-to-t from-[#000620]/95 via-[#000620]/55 to-transparent" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default StickyGameMusicPlayer
