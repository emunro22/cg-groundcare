import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, phone, email, message, service } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'CG Groundcare Website <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL ?? 'camerongill09@outlook.com',
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px;">
          <div style="background:linear-gradient(135deg,#2ea84a,#56cfff);padding:20px 32px;border-radius:6px 6px 0 0;margin:-32px -32px 24px;">
            <h1 style="color:white;margin:0;font-size:22px;">New Enquiry — CG Groundcare</h1>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;width:130px;font-size:14px;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:14px;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px;">Phone</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:14px;">
                  <a href="tel:${phone}" style="color:#2ea84a;text-decoration:none;">${phone}</a></td></tr>
            ${email ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">
                  <a href="mailto:${email}" style="color:#2ea84a;text-decoration:none;">${email}</a></td></tr>` : ''}
            ${service ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:14px;">Service</td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;">${service}</td></tr>` : ''}
            ${message ? `<tr><td style="padding:10px 0;color:#666;font-size:14px;vertical-align:top;">Message</td>
                <td style="padding:10px 0;font-size:14px;">${message}</td></tr>` : ''}
          </table>
          <div style="margin-top:28px;background:#e8f5e9;border-left:4px solid #2ea84a;padding:14px 18px;border-radius:0 6px 6px 0;">
            <p style="margin:0;font-size:13px;color:#1a6e2e;">Reply or call <strong>${phone}</strong> to get back to this customer.</p>
          </div>
          <p style="margin-top:24px;font-size:11px;color:#aaa;text-align:center;">Sent from cggroundcare website contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
