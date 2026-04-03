import React, { useCallback, useEffect, useState } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { MdCheck, MdContentCopy } from "react-icons/md"

/** Address is assembled client-side only (no mailto/full string in static HTML). */
function buildEmail() {
  return ["contact", String.fromCharCode(64), "tommisalomaa", ".", "com"].join("")
}

export default function ContactEmailBlock({ className = "" }) {
  const [email, setEmail] = useState("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setEmail(buildEmail())
  }, [])

  useEffect(() => {
    if (!copied) return undefined
    const t = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(t)
  }, [copied])

  const copy = useCallback(async () => {
    if (!email) return
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      try {
        const ta = document.createElement("textarea")
        ta.value = email
        ta.setAttribute("readonly", "")
        ta.style.position = "absolute"
        ta.style.left = "-9999px"
        document.body.appendChild(ta)
        ta.select()
        document.execCommand("copy")
        document.body.removeChild(ta)
        setCopied(true)
      } catch {
        /* ignore */
      }
    }
  }, [email])

  const openMail = useCallback(() => {
    if (!email) return
    window.location.href = `mailto:${email}`
  }, [email])

  return (
    <div
      className={`flex flex-col rounded-xl border border-rose-300/25 bg-black/25 p-4 backdrop-blur-sm sm:p-5 lg:h-full lg:min-h-0 ${className}`.trim()}
    >
      <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-rose-300/75">Direct email</p>
      <p
        className="mb-4 select-all break-all font-mono text-sm leading-relaxed text-[#eceff2] sm:text-[0.95rem]"
        tabIndex={0}
        title="Select to copy"
      >
        {email || "\u00a0"}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        <button
          type="button"
          onClick={copy}
          disabled={!email}
          className="inline-flex items-center gap-2 rounded-lg border border-rose-300/40 bg-rose-300/10 px-4 py-2.5 text-sm font-medium text-rose-100 transition hover:bg-rose-300/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? <MdCheck className="h-5 w-5 shrink-0" aria-hidden /> : <MdContentCopy className="h-5 w-5 shrink-0" aria-hidden />}
          {copied ? "Copied" : "Copy address"}
        </button>
        <button
          type="button"
          onClick={openMail}
          disabled={!email}
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-[#eceff2] transition hover:border-rose-300/35 hover:bg-rose-300/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <AiOutlineMail className="h-5 w-5 shrink-0" aria-hidden />
          Open in mail app
        </button>
      </div>
    </div>
  )
}
