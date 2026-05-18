import { Resend } from "resend";
import { NextResponse } from "next/server";

const FROM = "Anavera Website <onboarding@resend.dev>";
const TO   = "ibrahimrmostafa@gmail.com";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, company, email, useCase, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
          <div style="background:#00A8B5;padding:24px 32px;border-radius:8px 8px 0 0">
            <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600">New Contact Form Submission</h1>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:13px">Anavera Website</p>
          </div>
          <div style="background:#f8fafc;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;width:140px;vertical-align:top">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600">${name}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;vertical-align:top">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;font-weight:600">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;vertical-align:top">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px">
                  <a href="mailto:${email}" style="color:#00A8B5">${email}</a>
                </td>
              </tr>
              ${useCase ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;vertical-align:top">Use Case</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px">${useCase}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:10px 0;font-size:13px;color:#64748b;vertical-align:top">Message</td>
                <td style="padding:10px 0;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</td>
              </tr>
            </table>
            <p style="margin:24px 0 0;font-size:12px;color:#94a3b8">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
