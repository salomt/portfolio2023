import React, { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/router"
import AudioPlayer from "react-h5-audio-player"
import { MdPlaylistPlay } from "react-icons/md"
import { GAME_MUSIC_PLAYLIST } from "../data/gamemusicPlaylist"
import { useFeaturedVideo } from "../context/FeaturedVideoContext"

const StickyGameMusicPlayer = () => {
  const router = useRouter()
  const { featuredVideoPlaying, setFeaturedVideoPlaying } = useFeaturedVideo()
  const [playlistOpen, setPlaylistOpen] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scrollHintTop, setScrollHintTop] = useState(false)
  const [scrollHintBottom, setScrollHintBottom] = useState(false)
  const barRef = useRef(null)
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

  if (!router.isReady || router.query.featured !== "gamemusic") {
    return null
  }

  return (
    <div
      ref={barRef}
      data-gamemusic-sticky-player
      data-idle-pulse={idlePulse ? "true" : "false"}
      className="sticky-game-music-player fixed top-20 left-0 right-0 z-[90] border-b border-[rgba(253,164,175,0.25)] bg-[#000620]/90 lg:top-24"
    >
      <div className="sticky-gamemusic-bar max-w-[1240px] mx-auto pl-3 sm:pl-4 pr-3 sm:pr-5 py-2 flex flex-nowrap items-center gap-1 sm:gap-1.5">
        <button
          type="button"
          className="min-w-0 w-[6rem] sm:w-[11rem] shrink-0 pl-1.5 sm:pl-2 pr-1 py-1 -my-1 text-left rounded-md border border-transparent hover:border-rose-300/20 hover:bg-rose-300/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000620]"
          onClick={() => setPlaylistOpen((o) => !o)}
          aria-expanded={playlistOpen}
          aria-controls="sticky-gamemusic-playlist-panel"
          aria-label={playlistOpen ? "Close playlist" : "Open playlist"}
        >
          <p className="sticky-gamemusic-status-label text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.16em] text-rose-300/75 leading-none" aria-live="polite">
            {isPlaying ? "Now playing" : featuredVideoPlaying ? "Video" : "Press play"}
          </p>
          <p className="text-[0.8125rem] sm:text-sm font-semibold text-[#eceff2] truncate leading-tight mt-0.5" title={track.title}>
            {track.title}
          </p>
        </button>

        <div className="sticky-gamemusic-rhap-wrap min-w-0 flex-1 overflow-hidden">
          <AudioPlayer
            layout="horizontal"
            className="sticky-gamemusic-rhap"
            src={track.src}
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

        <button type="button" className="sticky-gamemusic-playlist-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-rose-300/30 p-0 text-rose-200 hover:bg-rose-300/10 transition-colors" aria-expanded={playlistOpen} aria-controls="sticky-gamemusic-playlist-panel" aria-label={playlistOpen ? "Close playlist" : "Open playlist"} title={playlistOpen ? "Close playlist" : "Playlist"} onClick={() => setPlaylistOpen((o) => !o)}>
          <MdPlaylistPlay className="h-6 w-6" aria-hidden />
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
                    className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${idx === currentTrack ? "bg-rose-300/15 text-rose-200 border-l-2 border-rose-300 pl-[0.625rem]" : "text-[#eceff2]/90 hover:bg-white/5"}`}
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
