import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  if (!req.body.email || !req.body.fullname || !req.body.message) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  // Sanitize user input
  const escapeHtml = (text) => {
    if (!text) return ""
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
  }

  const safeName = escapeHtml(req.body.fullname)
  const safeEmail = escapeHtml(req.body.email)
  const safeSubject = escapeHtml(req.body.subject || "No subject")
  const safeMessage = escapeHtml(req.body.message).replace(/\n/g, "<br>")

  try {
    const toAddress = process.env.SENDGRID_TO || "contact@tommisalomaa.com"
    const fromAddress = process.env.SENDGRID_FROM || "no-reply@tommisalomaa.com"
    const replyToAddress = req.body.email

    console.log("📧 Sending email...")

    await sendgrid.send({
      to: toAddress,
      from: fromAddress,
      replyTo: replyToAddress,
      subject: `[Lead from website] : ${safeSubject}`,
      text: `New Contact Form Submission

From: ${req.body.fullname}
Email: ${req.body.email}
Subject: ${safeSubject}

Message:
${req.body.message}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Contact Form</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4">
<div style="max-width:600px;margin:0 auto;padding:20px">
<div style="background:#fff;border-radius:8px;padding:30px;box-shadow:0 2px 4px rgba(0,0,0,0.1)">
<h2 style="color:#333;margin:0 0 20px 0">New Contact Form Submission</h2>
<div style="background:#f9f9f9;border-left:4px solid #4CAF50;padding:15px;margin-bottom:20px">
<p style="margin:0 0 10px 0;color:#666"><strong>From:</strong> ${safeName}</p>
<p style="margin:0 0 10px 0;color:#666"><strong>Email:</strong> ${safeEmail}</p>
<p style="margin:0;color:#666"><strong>Subject:</strong> ${safeSubject}</p>
</div>
<div style="margin-top:20px">
<p style="margin:0 0 10px 0;color:#333;font-weight:bold">Message:</p>
<div style="background:#f9f9f9;padding:15px;border-radius:4px;color:#555;line-height:1.6">${safeMessage}</div>
</div>
<hr style="border:none;border-top:1px solid #e0e0e0;margin:30px 0">
<p style="margin:0;color:#999;font-size:12px;text-align:center">Sent from your website contact form</p>
</div>
</div>
</body>
</html>`,
    })

    console.log("✅ Email sent successfully")

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("❌ SendGrid Error:", error)

    if (error.response) {
      console.error("Error Response:", error.response.body)
    }

    return res.status(error.statusCode || 500).json({
      error: error.message,
      details: error.response?.body?.errors || "Failed to send email",
    })
  }
}

export default sendEmail
