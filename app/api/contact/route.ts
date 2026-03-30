import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, phone, email, message, service } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    // Email 1: Notify Cameron
    await resend.emails.send({
      from: 'CG Groundcare <enquiries@cg-groundcare.co.uk>',
      to: process.env.CONTACT_EMAIL ?? 'camerongill09@outlook.com',
      subject: `🌿 New Enquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <div style="background:linear-gradient(135deg,#0d2b15 0%,#0a3d1f 60%,#0a2535 100%);padding:36px 40px 32px;">
      <div style="margin-bottom:20px;">
        <div style="color:#5dd87a;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:2px;">CG Groundcare</div>
        <div style="color:rgba(255,255,255,0.5);font-size:11px;">Website Contact Form</div>
      </div>
      <h1 style="color:#ffffff;margin:0 0 6px;font-size:26px;font-weight:800;letter-spacing:-0.5px;">New Enquiry Received</h1>
      <p style="color:rgba(255,255,255,0.55);margin:0;font-size:14px;">A customer has submitted the contact form and is waiting to hear from you.</p>
    </div>

    ${service ? `
    <div style="background:#0a3d1f;padding:14px 40px;">
      <span style="background:rgba(46,168,74,0.2);border:1px solid rgba(46,168,74,0.4);color:#5dd87a;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:5px 14px;border-radius:50px;">
        ${service}
      </span>
    </div>
    ` : ''}

    <div style="padding:36px 40px;">

      <div style="background:#f7fdf8;border:1px solid rgba(46,168,74,0.15);border-radius:14px;padding:20px 24px;margin-bottom:16px;">
        <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">Customer Name</div>
        <div style="color:#0d2b15;font-size:22px;font-weight:800;">${name}</div>
      </div>

      <div style="background:#f0fdf4;border:1px solid rgba(46,168,74,0.2);border-radius:14px;padding:18px 24px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">📞 Phone</div>
          <div style="color:#0d2b15;font-size:18px;font-weight:700;">${phone}</div>
        </div>
        <a href="tel:${phone}" style="background:linear-gradient(135deg,#2ea84a,#1a8a38);color:white;text-decoration:none;font-size:13px;font-weight:700;padding:10px 20px;border-radius:50px;">Call Now</a>
      </div>

      ${email ? `
      <div style="background:#f0f8ff;border:1px solid rgba(86,207,255,0.2);border-radius:14px;padding:18px 24px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">✉️ Email</div>
          <div style="color:#0a2535;font-size:15px;font-weight:600;">${email}</div>
        </div>
        <a href="mailto:${email}" style="background:linear-gradient(135deg,#0a7ab5,#0a5a85);color:white;text-decoration:none;font-size:13px;font-weight:700;padding:10px 20px;border-radius:50px;">Reply</a>
      </div>
      ` : ''}

      ${message ? `
      <div style="background:#fafafa;border:1px solid #e8e8e8;border-radius:14px;padding:20px 24px;margin-bottom:16px;">
        <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">💬 Message</div>
        <div style="color:#333;font-size:15px;line-height:1.65;">${message}</div>
      </div>
      ` : ''}

      <div style="background:linear-gradient(135deg,#0d2b15,#0a3d1f);border-radius:14px;padding:22px 24px;text-align:center;">
        <p style="color:rgba(255,255,255,0.7);margin:0 0 14px;font-size:14px;">Don't keep them waiting — give <strong style="color:#5dd87a;">${name}</strong> a call back!</p>
        <a href="tel:${phone}" style="background:linear-gradient(135deg,#2ea84a,#1a8a38);color:white;text-decoration:none;font-size:15px;font-weight:700;padding:13px 32px;border-radius:50px;display:inline-block;">📞 Call ${phone}</a>
      </div>

    </div>

    <div style="background:#f7fdf8;border-top:1px solid rgba(46,168,74,0.1);padding:20px 40px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#aaa;">Sent automatically from the <strong style="color:#2ea84a;">CG Groundcare</strong> website contact form</p>
    </div>

  </div>
</body>
</html>
      `,
    })

    // Email 2: Confirmation to customer (only if they provided an email)
    if (email) {
      await resend.emails.send({
        from: 'CG Groundcare <enquiries@cg-groundcare.co.uk>',
        to: email,
        subject: `Thanks for your enquiry, ${name}!`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

    <div style="background:linear-gradient(135deg,#0d2b15 0%,#0a3d1f 60%,#0a2535 100%);padding:40px 40px 36px;text-align:center;">
      <div style="font-size:48px;margin-bottom:16px;">✅</div>
      <div style="color:#5dd87a;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">CG Groundcare</div>
      <h1 style="color:#ffffff;margin:0 0 10px;font-size:28px;font-weight:800;letter-spacing:-0.5px;">Thanks for getting in touch, ${name}!</h1>
      <p style="color:rgba(255,255,255,0.6);margin:0;font-size:15px;line-height:1.6;">We've received your enquiry and Cameron will be in touch with you shortly.</p>
    </div>

    <div style="padding:40px;">

      ${service ? `
      <div style="background:#f7fdf8;border:1px solid rgba(46,168,74,0.15);border-radius:14px;padding:18px 24px;margin-bottom:20px;">
        <div style="color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">Service Requested</div>
        <div style="color:#0d2b15;font-size:16px;font-weight:700;">🌿 ${service}</div>
      </div>
      ` : ''}

      <div style="margin-bottom:24px;">
        <h2 style="color:#0d2b15;font-size:16px;font-weight:700;margin:0 0 14px;">What happens next?</h2>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <div style="background:#2ea84a;color:white;font-size:12px;font-weight:700;min-width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px;">1</div>
            <p style="margin:0;font-size:14px;color:#444;line-height:1.5;">Cameron will review your enquiry and give you a call back as soon as possible.</p>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <div style="background:#2ea84a;color:white;font-size:12px;font-weight:700;min-width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px;">2</div>
            <p style="margin:0;font-size:14px;color:#444;line-height:1.5;">We'll arrange a free, no-obligation quote at a time that suits you.</p>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <div style="background:#2ea84a;color:white;font-size:12px;font-weight:700;min-width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-top:1px;">3</div>
            <p style="margin:0;font-size:14px;color:#444;line-height:1.5;">We get to work — leaving your grounds looking their best.</p>
          </div>
        </div>
      </div>

      <div style="background:linear-gradient(135deg,#0d2b15,#0a3d1f);border-radius:14px;padding:24px;text-align:center;">
        <p style="color:rgba(255,255,255,0.7);margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Need to speak to us sooner?</p>
        <a href="tel:07715821193" style="color:#5dd87a;font-size:26px;font-weight:800;text-decoration:none;display:block;margin-bottom:4px;">07715 821193</a>
        <p style="color:rgba(255,255,255,0.4);margin:0 0 16px;font-size:12px;">Mon – Sat · Free Quotes · No Obligation</p>
        <a href="tel:07715821193" style="background:linear-gradient(135deg,#2ea84a,#1a8a38);color:white;text-decoration:none;font-size:14px;font-weight:700;padding:12px 28px;border-radius:50px;display:inline-block;">📞 Call Cameron Now</a>
      </div>

    </div>

    <div style="background:#f7fdf8;border-top:1px solid rgba(46,168,74,0.1);padding:20px 40px;text-align:center;">
      <p style="margin:0 0 4px;font-size:12px;color:#aaa;">CG Groundcare · Glasgow &amp; surrounding areas</p>
      <p style="margin:0;font-size:12px;color:#aaa;">
        <a href="mailto:enquiries@cggroundcare.co.uk" style="color:#2ea84a;text-decoration:none;">enquiries@cggroundcare.co.uk</a>
      </p>
    </div>

  </div>
</body>
</html>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}