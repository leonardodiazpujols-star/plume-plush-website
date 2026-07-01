import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const fd = await req.formData();

    // Honeypot check
    if (fd.get("website")) {
      return NextResponse.json({ success: true });
    }

    const fullName         = (fd.get("fullName")          as string) || "";
    const company          = (fd.get("company")           as string) || "";
    const email            = (fd.get("email")             as string) || "";
    const phone            = (fd.get("phone")             as string) || "";
    const service          = (fd.get("service")           as string) || "";
    const eventDescription = (fd.get("eventDescription")  as string) || "";
    const eventDate        = (fd.get("eventDate")         as string) || "";
    const city             = (fd.get("city")              as string) || "";
    const country          = (fd.get("country")           as string) || "";
    const venue            = (fd.get("venue")             as string) || "";
    const file             = fd.get("file") as File | null;

    // Build attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && file.size > 0 && file.size < 4 * 1024 * 1024) {
      const bytes = await file.arrayBuffer();
      attachments.push({ filename: file.name, content: Buffer.from(bytes) });
    }

    const submittedAt = new Date().toLocaleString("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/London",
    });

    const subject = `New Artisan Request — ${fullName}${company ? ` | ${company}` : ""}`;

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f0ea;font-family:Georgia,serif;">
  <div style="max-width:620px;margin:40px auto;background:#fff;border-top:3px solid #c9a96e;">
    <div style="padding:40px 40px 24px;">
      <p style="margin:0 0 6px;font-family:'Helvetica Neue',sans-serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;">Plume &amp; Plush — Art Concierge</p>
      <h1 style="margin:0;font-size:28px;font-weight:300;color:#1a1512;line-height:1.2;">New Artisan Request</h1>
    </div>

    <div style="padding:0 40px 32px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row("Full Name", fullName)}
        ${row("Company", company || "—")}
        ${row("Email", `<a href="mailto:${email}" style="color:#c9a96e;text-decoration:none;">${email}</a>`)}
        ${row("Phone", phone)}
        ${row("Service Required", `<strong style="color:#c9a96e;">${service}</strong>`)}
      </table>

      <div style="margin:24px 0;padding:20px 24px;background:#f9f6f0;border-left:3px solid #c9a96e;">
        <p style="margin:0 0 8px;font-family:'Helvetica Neue',sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#999;">Event Description</p>
        <p style="margin:0;font-size:15px;color:#1a1512;line-height:1.7;">${eventDescription.replace(/\n/g, "<br>")}</p>
      </div>

      <table style="width:100%;border-collapse:collapse;">
        ${row("Event Date", eventDate)}
        ${row("City", city)}
        ${row("Country", country)}
        ${row("Venue", venue || "—")}
        ${file && file.size > 0 ? row("Uploaded File", file.name + (file.size >= 4 * 1024 * 1024 ? " <em style='color:#999;font-size:12px;'>(too large to attach — see original submission)</em>" : "")) : ""}
      </table>
    </div>

    <div style="padding:20px 40px;background:#f9f6f0;border-top:1px solid #e8e0d4;">
      <p style="margin:0;font-family:'Helvetica Neue',sans-serif;font-size:11px;color:#aaa;">Submitted on ${submittedAt}</p>
    </div>
  </div>
</body>
</html>`;

    await resend.emails.send({
      from: "Plume & Plush Website <no-reply@plumeplush.com>",
      to: "anna@plumeplush.com",
      replyTo: email,
      subject,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Enquiry error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;font-family:'Helvetica Neue',sans-serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#999;width:130px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;font-size:14px;color:#1a1512;vertical-align:top;">${value}</td>
    </tr>`;
}
