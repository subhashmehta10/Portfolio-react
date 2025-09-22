import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    // Prefer Resend HTTP API on Vercel (SMTP ports may be blocked)
    if (process.env.RESEND_API_KEY) {
      const toAddress = process.env.TO_EMAIL || "kumarmehta172@gmail.com";
      const fromAddress = process.env.FROM_EMAIL || "onboarding@resend.dev";

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `Portfolio Contact <${fromAddress}>`,
          to: [toAddress],
          reply_to: email,
          subject: `New contact form submission from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        throw new Error(`Resend failed: ${errText}`);
      }

      const json = await resendRes.json();
      return res.status(200).json({ ok: true, messageId: json?.id || null });
    }

    // Fallback to SMTP/Nodemailer (works locally, may not work on Vercel without SMTP provider)
    let transporter;
    const hasRealSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    if (hasRealSmtp) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
    }

    const toAddress = "kumarmehta172@gmail.com";
    const toAddress = "kumarmehta172@gmail.com";
    const fromAddress = process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@example.com";

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    const response = { ok: true, messageId: info.messageId };
    try {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log("Ethereal preview:", previewUrl);
        response.previewUrl = previewUrl;
      }
    } catch {}

    return res.status(200).json(response);
  } catch (error) {
    console.error("/api/contact error:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}


