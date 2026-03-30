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
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f0;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0d2b15 0%,#0a3d1f 60%,#0a2535 100%);padding:36px 40px 32px;">
            <p style="margin:0 0 4px;color:#5dd87a;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">CG Groundcare</p>
            <p style="margin:0 0 20px;color:rgba(255,255,255,0.5);font-size:11px;">Website Contact Form</p>
            <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">New Enquiry Received</h1>
            <p style="margin:0;color:rgba(255,255,255,0.55);font-size:14px;">A customer has submitted the contact form and is waiting to hear from you.</p>
          </td>
        </tr>

        ${service ? `
        <!-- Service badge -->
        <tr>
          <td style="background:#0a3d1f;padding:14px 40px;">
            <span style="display:inline-block;background:rgba(46,168,74,0.2);border:1px solid rgba(46,168,74,0.4);color:#5dd87a;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:5px 14px;border-radius:50px;">${service}</span>
          </td>
        </tr>
        ` : ''}

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">

            <!-- Name -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
              <tr>
                <td style="background:#f7fdf8;border:1px solid rgba(46,168,74,0.15);border-radius:14px;padding:20px 24px;">
                  <p style="margin:0 0 6px;color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Customer Name</p>
                  <p style="margin:0;color:#0d2b15;font-size:22px;font-weight:800;">${name}</p>
                </td>
              </tr>
            </table>

            <!-- Phone -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
              <tr>
                <td style="background:#f0fdf4;border:1px solid rgba(46,168,74,0.2);border-radius:14px;padding:18px 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <p style="margin:0 0 4px;color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">📞 Phone</p>
                        <p style="margin:0;color:#0d2b15;font-size:18px;font-weight:700;">${phone}</p>
                      </td>
                      <td align="right" valign="middle">
                        <a href="tel:${phone}" style="display:inline-block;background:linear-gradient(135deg,#2ea84a,#1a8a38);color:white;text-decoration:none;font-size:13px;font-weight:700;padding:10px 20px;border-radius:50px;">Call Now</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            ${email ? `
            <!-- Email -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
              <tr>
                <td style="background:#f0f8ff;border:1px solid rgba(86,207,255,0.2);border-radius:14px;padding:18px 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <p style="margin:0 0 4px;color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">✉️ Email</p>
                        <p style="margin:0;color:#0a2535;font-size:15px;font-weight:600;">${email}</p>
                      </td>
                      <td align="right" valign="middle">
                        <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#0a7ab5,#0a5a85);color:white;text-decoration:none;font-size:13px;font-weight:700;padding:10px 20px;border-radius:50px;">Reply</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            ` : ''}

            ${message ? `
            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
              <tr>
                <td style="background:#fafafa;border:1px solid #e8e8e8;border-radius:14px;padding:20px 24px;">
                  <p style="margin:0 0 10px;color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">💬 Message</p>
                  <p style="margin:0;color:#333;font-size:15px;line-height:1.65;">${message}</p>
                </td>
              </tr>
            </table>
            ` : ''}

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="background:linear-gradient(135deg,#0d2b15,#0a3d1f);border-radius:14px;padding:24px;">
                  <p style="margin:0 0 14px;color:rgba(255,255,255,0.7);font-size:14px;">Don't keep them waiting — give <strong style="color:#5dd87a;">${name}</strong> a call back!</p>
                  <a href="tel:${phone}" style="display:inline-block;background:linear-gradient(135deg,#2ea84a,#1a8a38);color:white;text-decoration:none;font-size:15px;font-weight:700;padding:13px 32px;border-radius:50px;">📞 Call ${phone}</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="background:#f7fdf8;border-top:1px solid rgba(46,168,74,0.1);padding:20px 40px;">
            <p style="margin:0;font-size:12px;color:#aaa;">Sent automatically from the <strong style="color:#2ea84a;">CG Groundcare</strong> website contact form</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    })

    // Email 2: Confirmation to customer
    if (email) {
      await resend.emails.send({
        from: 'CG Groundcare <enquiries@cg-groundcare.co.uk>',
        to: email,
        subject: `Thanks for your enquiry, ${name}!`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f0;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td align="center" style="background:linear-gradient(135deg,#0d2b15 0%,#0a3d1f 60%,#0a2535 100%);padding:40px 40px 36px;">
            <p style="margin:0 0 16px;font-size:48px;line-height:1;">&#x2705;</p>
            <p style="margin:0 0 10px;color:#5dd87a;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">CG Groundcare</p>
            <h1 style="margin:0 0 10px;color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Thanks for getting in touch, ${name}!</h1>
            <p style="margin:0;color:rgba(255,255,255,0.6);font-size:15px;line-height:1.6;">We've received your enquiry and Cameron will be in touch with you shortly.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">

            ${service ? `
            <!-- Service -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
              <tr>
                <td style="background:#f7fdf8;border:1px solid rgba(46,168,74,0.15);border-radius:14px;padding:18px 24px;">
                  <p style="margin:0 0 6px;color:#888;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Service Requested</p>
                  <p style="margin:0;color:#0d2b15;font-size:16px;font-weight:700;">🌿 ${service}</p>
                </td>
              </tr>
            </table>
            ` : ''}

            <!-- What happens next -->
            <p style="margin:0 0 16px;color:#0d2b15;font-size:16px;font-weight:700;">What happens next?</p>

            <!-- Step 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
              <tr>
                <td width="34" valign="top" style="padding-top:2px;">
                  <div style="width:26px;height:26px;background:#2ea84a;border-radius:50%;text-align:center;line-height:26px;color:white;font-size:13px;font-weight:700;">1</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0;color:#444;font-size:14px;line-height:1.6;">Cameron will review your enquiry and give you a call back as soon as possible.</p>
                </td>
              </tr>
            </table>

            <!-- Step 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
              <tr>
                <td width="34" valign="top" style="padding-top:2px;">
                  <div style="width:26px;height:26px;background:#2ea84a;border-radius:50%;text-align:center;line-height:26px;color:white;font-size:13px;font-weight:700;">2</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0;color:#444;font-size:14px;line-height:1.6;">We'll arrange a free, no-obligation quote at a time that suits you.</p>
                </td>
              </tr>
            </table>

            <!-- Step 3 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
              <tr>
                <td width="34" valign="top" style="padding-top:2px;">
                  <div style="width:26px;height:26px;background:#2ea84a;border-radius:50%;text-align:center;line-height:26px;color:white;font-size:13px;font-weight:700;">3</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0;color:#444;font-size:14px;line-height:1.6;">We get to work — leaving your grounds looking their best.</p>
                </td>
              </tr>
            </table>

            <!-- Call CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="background:linear-gradient(135deg,#0d2b15,#0a3d1f);border-radius:14px;padding:28px 24px;">
                  <p style="margin:0 0 8px;color:rgba(255,255,255,0.6);font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Need to speak to us sooner?</p>
                  <a href="tel:07715821193" style="display:block;color:#5dd87a;font-size:28px;font-weight:800;text-decoration:none;margin-bottom:6px;">07715 821193</a>
                  <p style="margin:0 0 18px;color:rgba(255,255,255,0.4);font-size:12px;">Mon – Sat &nbsp;·&nbsp; Free Quotes &nbsp;·&nbsp; No Obligation</p>
                  <a href="tel:07715821193" style="display:inline-block;background:linear-gradient(135deg,#2ea84a,#1a8a38);color:white;text-decoration:none;font-size:14px;font-weight:700;padding:13px 32px;border-radius:50px;">📞 Call Cameron Now</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="background:#f7fdf8;border-top:1px solid rgba(46,168,74,0.1);padding:20px 40px;">
            <p style="margin:0 0 4px;font-size:12px;color:#aaa;">CG Groundcare &middot; Glasgow &amp; surrounding areas</p>
            <p style="margin:0;font-size:12px;">
              <a href="mailto:enquiries@cgg-roundcare.co.uk" style="color:#2ea84a;text-decoration:none;">enquiries@cg-groundcare.co.uk</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
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