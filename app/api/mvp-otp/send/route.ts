import { createHmac, randomInt } from 'crypto';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SECRET = process.env.OTP_SECRET ?? 'dev-secret-change-in-prod';

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return Response.json({ error: 'Valid email required' }, { status: 400 });
  }

  const otp = String(randomInt(100000, 999999));
  const ts = Date.now();
  const payload = `${email}|${otp}|${ts}`;
  const sig = createHmac('sha256', SECRET).update(payload).digest('hex');
  const token = Buffer.from(`${payload}|${sig}`).toString('base64url');

  try {
    await resend.emails.send({
      from: 'Developerz Hub <noreply@developerzhub.com>',
      to: email,
      subject: `${otp} is your Developerz Hub code`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px">
          <p style="font-size:14px;color:#888;margin:0 0 24px">Developerz Hub</p>
          <h1 style="font-size:40px;font-weight:800;letter-spacing:-2px;margin:0 0 8px;color:#1a1a2e">${otp}</h1>
          <p style="font-size:16px;color:#444;margin:0 0 24px">Your verification code. Valid for 5 minutes.</p>
          <p style="font-size:13px;color:#999;margin:0">If you didn't request this, ignore this email.</p>
        </div>`,
    });
  } catch {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return Response.json({ token });
}
