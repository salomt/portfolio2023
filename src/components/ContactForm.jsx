import React, { useState } from "react"

const inputBase =
  "w-full rounded-md border bg-black/20 px-3 py-2.5 text-sm text-[#eceff2] placeholder:text-[#eceff2]/35 outline-none transition focus:border-rose-300/50 focus:ring-2 focus:ring-rose-300/20"

export default function ContactForm() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [errors, setErrors] = useState({})

  const [buttonText, setButtonText] = useState("Send")

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText("Sending")

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      const { error } = await res.json()
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Send")

        setFullname("")
        setEmail("")
        setMessage("")
        setSubject("")
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Send")
      setFullname("")
      setEmail("")
      setMessage("")
      setSubject("")
    }
  }

  const errBorder = "border-red-400/60"
  const okBorder = "border-white/15"

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl rounded-xl border border-rose-300/25 bg-black/25 p-5 backdrop-blur-sm sm:p-6"
    >
      <h3 className="text-lg font-semibold text-rose-200 sm:text-xl">Send a message</h3>
      <p className="mt-1 text-xs text-[#eceff2]/55">I&apos;ll get back to you as soon as I can.</p>

      <label htmlFor="contact-fullname" className="mt-6 block text-xs font-medium uppercase tracking-wider text-rose-300/80">
        Full name<span className="text-rose-400"> *</span>
      </label>
      <input
        id="contact-fullname"
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value)
        }}
        name="fullname"
        autoComplete="name"
        className={`${inputBase} mt-1.5 ${errors.fullname ? errBorder : okBorder}`}
      />

      <label htmlFor="contact-email" className="mt-4 block text-xs font-medium uppercase tracking-wider text-rose-300/80">
        Your email<span className="text-rose-400"> *</span>
      </label>
      <input
        id="contact-email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        autoComplete="email"
        className={`${inputBase} mt-1.5 ${errors.email ? errBorder : okBorder}`}
      />

      <label htmlFor="contact-subject" className="mt-4 block text-xs font-medium uppercase tracking-wider text-rose-300/80">
        Subject<span className="text-rose-400"> *</span>
      </label>
      <input
        id="contact-subject"
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value)
        }}
        className={`${inputBase} mt-1.5 ${errors.subject ? errBorder : okBorder}`}
      />

      <label htmlFor="contact-message" className="mt-4 block text-xs font-medium uppercase tracking-wider text-rose-300/80">
        Message<span className="text-rose-400"> *</span>
      </label>
      <textarea
        id="contact-message"
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        rows={5}
        className={`${inputBase} mt-1.5 min-h-[7.5rem] resize-y ${errors.message ? errBorder : okBorder}`}
      />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-lg border border-rose-300/45 bg-rose-300/15 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-rose-100 transition hover:bg-rose-300/25"
        >
          {buttonText}
        </button>
      </div>
      <div className="mt-3 min-h-[1.5rem]">
        {showSuccessMessage && <p className="text-sm font-medium text-emerald-400/90">Thanks — your message was sent.</p>}
        {showFailureMessage && <p className="text-sm font-medium text-red-400/90">Something went wrong. Please try again or email directly.</p>}
      </div>
    </form>
  )
}
