/* global process */
import { Resend } from "resend";

// Simple in-memory rate limiting (works in hot/warm serverless containers)
const rateLimitCache = new Map();
const LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(key) {
  const now = Date.now();
  const history = rateLimitCache.get(key) || [];
  const activeRequests = history.filter((timestamp) => now - timestamp < LIMIT_WINDOW_MS);
  if (activeRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  activeRequests.push(now);
  rateLimitCache.set(key, activeRequests);
  return false;
}

// HTML escaping helper to sanitize inputs
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export default async function handler(req, res) {
  // Setup CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body;

  // 1. Server-side validation of all form fields
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Full Name is required." });
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ error: "Email Address is required." });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: "Mobile Number is required." });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: "Inquiry or Requirement description is required." });
  }

  // 2. Format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  const cleanedPhone = phone.replace(/[\s()-]/g, "");
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(cleanedPhone)) {
    return res.status(400).json({ error: "Please enter a valid mobile number (10 to 15 digits)." });
  }

  // 3. Sanitization
  const safeName = sanitize(name.trim());
  const safeEmail = sanitize(email.trim());
  const safePhone = sanitize(phone.trim());
  const safeMessage = sanitize(message.trim());

  // 4. Rate Limiting check
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown_ip";
  const rateLimitKey = `${clientIp}_${safeEmail}`;
  if (isRateLimited(rateLimitKey)) {
    return res.status(429).json({ error: "Too many requests. Please wait a minute before submitting again." });
  }

  // 5. Spam Keyword Filtering
  const spamKeywords = ["crypto profit", "viagra", "make money fast", "seo traffic", "casino online"];
  const containsSpam = spamKeywords.some(keyword => safeMessage.toLowerCase().includes(keyword) || safeName.toLowerCase().includes(keyword));
  if (containsSpam) {
    return res.status(400).json({ error: "Message rejected by spam filters." });
  }

  // 6. Check production environment secrets
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  
  // Default to onboarding@resend.dev in dev if not set
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"; 

  if (!apiKey) {
    console.error("[Configuration Error] RESEND_API_KEY is not defined in environment variables.");
    return res.status(500).json({ error: "Email service is temporarily unconfigured." });
  }
  if (!toEmail) {
    console.error("[Configuration Error] CONTACT_EMAIL is not defined in environment variables.");
    return res.status(500).json({ error: "Email recipient is temporarily unconfigured." });
  }

  try {
    const resend = new Resend(apiKey);

    // Detect if this request is a structured consultation booking
    const isConsultation = message.includes("=== NEW CONSULTATION REQUEST ===");
    
    let emailHtml = "";

    if (isConsultation) {
      // Parse structured details
      const lines = message.split("\n");
      const fieldMap = {};
      let descText = "";
      let isReadingDesc = false;
      let challengesText = "";
      let isReadingChallenges = false;
      let notesText = "";
      let isReadingNotes = false;

      lines.forEach(line => {
        if (line.startsWith("Company:")) fieldMap.company = line.replace("Company:", "").trim();
        else if (line.startsWith("Designation/Role:")) fieldMap.role = line.replace("Designation/Role:", "").trim();
        else if (line.startsWith("Industry Type:")) fieldMap.industry = line.replace("Industry Type:", "").trim();
        else if (line.startsWith("Business Size:")) fieldMap.businessSize = line.replace("Business Size:", "").trim();
        else if (line.startsWith("Service Required:")) fieldMap.service = line.replace("Service Required:", "").trim();
        else if (line.startsWith("Consultation Mode:")) fieldMap.mode = line.replace("Consultation Mode:", "").trim();
        else if (line.startsWith("Preferred Date:")) fieldMap.date = line.replace("Preferred Date:", "").trim();
        else if (line.startsWith("Preferred Time:")) fieldMap.time = line.replace("Preferred Time:", "").trim();
        
        else if (line.startsWith("Requirement Description:")) {
          isReadingDesc = true;
          isReadingChallenges = false;
          isReadingNotes = false;
        } else if (line.startsWith("Current Challenges:")) {
          isReadingDesc = false;
          isReadingChallenges = true;
          isReadingNotes = false;
        } else if (line.startsWith("Additional Notes:")) {
          isReadingDesc = false;
          isReadingChallenges = false;
          isReadingNotes = true;
        } else {
          if (isReadingDesc) descText += line + "\n";
          else if (isReadingChallenges) challengesText += line + "\n";
          else if (isReadingNotes) notesText += line + "\n";
        }
      });

      // Mobile-friendly, responsive HTML layout
      emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Request</title>
        <style>
          body { font-family: 'Inter', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 10px; -webkit-text-size-adjust: 100%; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: #070b19; color: #ffffff; padding: 24px 15px; text-align: center; border-bottom: 3px solid #c5a880; }
          .header h1 { font-family: 'Sora', Arial, sans-serif; font-size: 20px; margin: 0; letter-spacing: 0.5px; }
          .header p { font-size: 11px; color: #94a3b8; margin: 5px 0 0 0; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; }
          .content { padding: 20px 15px; }
          .section-title { font-size: 11px; text-transform: uppercase; color: #c5a880; font-weight: bold; letter-spacing: 1px; margin: 25px 0 10px 0; padding-bottom: 5px; border-bottom: 1px solid #e2e8f0; }
          .row { padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; line-height: 1.4; }
          .label { color: #64748b; font-weight: 600; margin-bottom: 2px; }
          .value { color: #0f172a; font-weight: 500; word-break: break-word; }
          .block-text { background: #f8fafc; border-left: 3px solid #c5a880; padding: 12px; font-size: 13px; color: #334155; line-height: 1.6; border-radius: 0 4px 4px 0; margin-top: 5px; white-space: pre-wrap; word-break: break-word; }
          .footer { background: #f8fafc; text-align: center; padding: 15px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
          @media only screen and (min-width: 480px) {
            body { padding: 20px; }
            .content { padding: 30px; }
            .row { display: flex; align-items: flex-start; }
            .label { width: 160px; flex-shrink: 0; margin-bottom: 0; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Noor Basha Shabbir Mohammed</h1>
            <p>New Consultation Request</p>
          </div>
          <div class="content">
            <div class="section-title">Client Details</div>
            <div class="row"><div class="label">Full Name</div><div class="value">${safeName}</div></div>
            <div class="row"><div class="label">Email Address</div><div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div></div>
            <div class="row"><div class="label">Phone Number</div><div class="value">${safePhone}</div></div>
            <div class="row"><div class="label">Company / Firm</div><div class="value">${sanitize(fieldMap.company) || "N/A"}</div></div>
            <div class="row"><div class="label">Role / Title</div><div class="value">${sanitize(fieldMap.role) || "N/A"}</div></div>

            <div class="section-title">Business Profile</div>
            <div class="row"><div class="label">Industry Type</div><div class="value">${sanitize(fieldMap.industry) || "N/A"}</div></div>
            <div class="row"><div class="label">Business Size</div><div class="value">${sanitize(fieldMap.businessSize) || "N/A"}</div></div>

            <div class="section-title">Consultation Options</div>
            <div class="row"><div class="label">Service Needed</div><div class="value">${sanitize(fieldMap.service) || "N/A"}</div></div>
            <div class="row"><div class="label">Meeting Mode</div><div class="value">${sanitize(fieldMap.mode) || "N/A"}</div></div>
            <div class="row"><div class="label">Preferred Date</div><div class="value">${sanitize(fieldMap.date) || "N/A"}</div></div>
            <div class="row"><div class="label">Preferred Time</div><div class="value">${sanitize(fieldMap.time) || "N/A"}</div></div>

            <div class="section-title">Requirement Description</div>
            <div class="block-text">${sanitize(descText.trim())}</div>

            ${challengesText.trim() && challengesText.trim() !== "None provided" ? `
              <div class="section-title">Current Challenges</div>
              <div class="block-text">${sanitize(challengesText.trim())}</div>
            ` : ""}

            ${notesText.trim() && notesText.trim() !== "None provided" ? `
              <div class="section-title">Additional Notes</div>
              <div class="block-text">${sanitize(notesText.trim())}</div>
            ` : ""}
          </div>
          <div class="footer">
            Generated from Shabbir Finance Consultant Portfolio
          </div>
        </div>
      </body>
      </html>
      `;
    } else {
      // Standard Contact form HTML template
      emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Message From Portfolio</title>
        <style>
          body { font-family: 'Inter', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 10px; -webkit-text-size-adjust: 100%; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: #070b19; color: #ffffff; padding: 24px 15px; text-align: center; border-bottom: 3px solid #c5a880; }
          .header h1 { font-family: 'Sora', Arial, sans-serif; font-size: 20px; margin: 0; letter-spacing: 0.5px; }
          .header p { font-size: 11px; color: #94a3b8; margin: 5px 0 0 0; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; }
          .content { padding: 20px 15px; }
          .section-title { font-size: 11px; text-transform: uppercase; color: #c5a880; font-weight: bold; letter-spacing: 1px; margin: 0 0 10px 0; padding-bottom: 5px; border-bottom: 1px solid #e2e8f0; }
          .row { padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; line-height: 1.4; margin-bottom: 10px; }
          .label { color: #64748b; font-weight: 600; margin-bottom: 2px; }
          .value { color: #0f172a; font-weight: 500; word-break: break-word; }
          .block-text { background: #f8fafc; border-left: 3px solid #c5a880; padding: 12px; font-size: 13px; color: #334155; line-height: 1.6; border-radius: 0 4px 4px 0; white-space: pre-wrap; word-break: break-word; }
          .footer { background: #f8fafc; text-align: center; padding: 15px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
          @media only screen and (min-width: 480px) {
            body { padding: 20px; }
            .content { padding: 30px; }
            .row { display: flex; align-items: flex-start; }
            .label { width: 160px; flex-shrink: 0; margin-bottom: 0; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Noor Basha Shabbir Mohammed</h1>
            <p>New Contact Message</p>
          </div>
          <div class="content">
            <div class="section-title">Sender Details</div>
            <div class="row"><div class="label">Full Name</div><div class="value">${safeName}</div></div>
            <div class="row"><div class="label">Email Address</div><div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div></div>
            <div class="row"><div class="label">Phone Number</div><div class="value">${safePhone}</div></div>

            <div class="section-title" style="margin-top: 20px;">Message / Inquiry</div>
            <div class="block-text">${safeMessage}</div>
          </div>
          <div class="footer">
            Generated from Shabbir Finance Consultant Portfolio
          </div>
        </div>
      </body>
      </html>
      `;
    }

    console.log("Recipient Email:", toEmail);
    console.log("Contact Email:", process.env.CONTACT_EMAIL);
    console.log("From Email Domain:", fromEmail);

    // Send primary notification email to Shabbir
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: isConsultation ? `Consultation Booking: ${safeName}` : `Contact Message: ${safeName}`,
      html: emailHtml,
      replyTo: safeEmail
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(400).json({ error: error.message || "Email sending failed." });
    }

    // Send automated client-facing confirmation auto-reply
    try {
      const clientSubject = "Consultation Request Received - Noor Basha Shabbir Mohammed";
      const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Request Confirmation</title>
        <style>
          body { font-family: 'Inter', Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 10px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: #070b19; color: #ffffff; padding: 24px 15px; text-align: center; border-bottom: 3px solid #c5a880; }
          .header h1 { font-family: 'Sora', Arial, sans-serif; font-size: 20px; margin: 0; }
          .content { padding: 20px 15px; font-size: 14px; line-height: 1.6; color: #334155; }
          .footer { background: #f8fafc; text-align: center; padding: 15px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
          ol { padding-left: 20px; margin: 15px 0; }
          li { margin-bottom: 10px; }
          @media only screen and (min-width: 480px) {
            body { padding: 20px; }
            .content { padding: 30px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Noor Basha Shabbir Mohammed</h1>
            <p style="margin: 5px 0 0 0; color: #c5a880; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Senior Finance & Audit Consultant</p>
          </div>
          <div class="content">
            <p>Dear ${safeName},</p>
            <p>Thank you for reaching out. I have successfully received your inquiry / consultation booking request.</p>
            <p><strong>What happens next:</strong></p>
            <ol>
              <li>I will review your requirements, company profile, and scheduling preferences.</li>
              <li>I will follow up via email or phone within 24-48 business hours to confirm the consultation date and coordinate coordinates/meeting links.</li>
            </ol>
            <p>If you have any supporting documents, reconciliations, or spreadsheets to share ahead of time, please reply directly to this email.</p>
            <br>
            <p>Best Regards,</p>
            <p><strong>Noor Basha Shabbir Mohammed</strong><br>Senior Finance & Audit Consultant<br>shabbirmsb@gmail.com</p>
          </div>
          <div class="footer">
            This is an automated confirmation. Please do not reply directly unless sharing documents.
          </div>
        </div>
      </body>
      </html>
      `;

      // Trigger the auto-reply confirmation email
      await resend.emails.send({
        from: fromEmail,
        to: [safeEmail],
        subject: clientSubject,
        html: clientHtml
      });
      console.log(`Auto-confirmation email dispatched to client: ${safeEmail}`);
    } catch (autoReplyError) {
      // Graceful fallback for Resend Sandbox/Testing mode restrictions
      // In sandbox mode, sending to client safeEmail will throw error because client is unverified.
      // We log this as a warning so developers are aware, but return 200 SUCCESS on the main email.
      console.warn(
        `[Sandbox Mode Warning] Auto-confirmation email not sent to client (${safeEmail}). Resend testing tier only permits delivery to your own verified inbox. This confirmation email will function seamlessly in production once domain verification is complete. Error:`,
        autoReplyError.message || autoReplyError
      );
    }

    return res.status(200).json({ message: "Inquiry sent successfully!", data });
  } catch (error) {
    console.error("Internal Resend Error:", error);
    return res.status(500).json({ error: "Failed to process the request." });
  }
}
