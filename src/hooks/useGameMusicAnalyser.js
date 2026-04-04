import { useEffect, useRef } from "react"

function bandEnergy(data, start, end) {
  const a = Math.max(0, Math.min(start, data.length - 1))
  const b = Math.max(a + 1, Math.min(end, data.length))
  let sum = 0
  for (let i = a; i < b; i++) sum += data[i]
  return sum / (b - a) / 255
}

/**
 * Connects an AnalyserNode to the first <audio> inside containerRef (one MediaElementSource per element).
 * Updates .sticky-gamemusic-playing-eq__bar children under eqBarsRef using scaleY from FFT bins (one band per bar).
 */
export function useGameMusicAnalyser({ containerRef, eqBarsRef, active, playing }) {
  const graphRef = useRef(null)
  const playingRef = useRef(playing)
  playingRef.current = playing

  useEffect(() => {
    if (!active) {
      const g = graphRef.current
      if (g) {
        try {
          g.audio?.removeEventListener("play", g.onPlay)
          g.source.disconnect()
          g.analyser.disconnect()
          g.ctx.close()
        } catch {
          /* ignore */
        }
        graphRef.current = null
      }
      return undefined
    }

    let disposed = false
    let pollId = 0
    let rafId = 0

    const onPlay = () => {
      graphRef.current?.ctx.resume?.().catch(() => {})
    }

    const tryConnect = () => {
      const audio = containerRef.current?.querySelector("audio")
      if (!audio || graphRef.current || disposed) return

      const AC = window.AudioContext || window.webkitAudioContext
      if (!AC) return

      try {
        const ctx = new AC()
        const analyser = ctx.createAnalyser()
        analyser.fftSize = 512
        analyser.smoothingTimeConstant = 0.58
        analyser.minDecibels = -88
        analyser.maxDecibels = -28

        const source = ctx.createMediaElementSource(audio)
        source.connect(analyser)
        analyser.connect(ctx.destination)

        const freqData = new Uint8Array(analyser.frequencyBinCount)
        audio.addEventListener("play", onPlay, { passive: true })
        graphRef.current = { ctx, source, analyser, audio, freqData, onPlay }
      } catch {
        /* InvalidStateError: element already has a MediaElementSourceNode */
      }
    }

    let attempts = 0
    pollId = window.setInterval(() => {
      attempts++
      tryConnect()
      if (graphRef.current || attempts > 120) window.clearInterval(pollId)
    }, 48)

    const reduceMotion = () =>
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const tick = () => {
      rafId = window.requestAnimationFrame(tick)
      const bars = eqBarsRef.current?.querySelectorAll(".sticky-gamemusic-playing-eq__bar")
      if (!bars || bars.length < 1) return

      const nBands = bars.length
      const isPlaying = playingRef.current
      const g = graphRef.current

      if (reduceMotion()) {
        for (let i = 0; i < nBands; i++) bars[i].style.transform = "scaleY(0.42)"
        return
      }

      if (!isPlaying || !g?.freqData) {
        for (let i = 0; i < nBands; i++) bars[i].style.transform = "scaleY(0.2)"
        return
      }

      g.analyser.getByteFrequencyData(g.freqData)
      const data = g.freqData
      const nb = data.length
      const usable = nb - 1

      for (let i = 0; i < nBands; i++) {
        const start = 1 + Math.floor((i * usable) / nBands)
        const end = 1 + Math.floor(((i + 1) * usable) / nBands)
        const e = bandEnergy(data, start, Math.max(start + 1, end))
        const scale = 0.12 + e * 0.88
        bars[i].style.transform = `scaleY(${Math.min(1, scale)})`
      }
    }

    rafId = window.requestAnimationFrame(tick)

    return () => {
      disposed = true
      window.clearInterval(pollId)
      window.cancelAnimationFrame(rafId)
      const g = graphRef.current
      if (g) {
        try {
          g.audio?.removeEventListener("play", g.onPlay)
          g.source.disconnect()
          g.analyser.disconnect()
          g.ctx.close()
        } catch {
          /* ignore */
        }
        graphRef.current = null
      }
    }
  }, [active, containerRef, eqBarsRef])
}
