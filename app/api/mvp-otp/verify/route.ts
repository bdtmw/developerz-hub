import { createHmac, timingSafeEqual } from 'crypto';

const SECRET = process.env.OTP_SECRET ?? 'dev-secret-change-in-prod';
const EXPIRY_MS = 5 * 60 * 1000;

export async function POST(req: Request) {
  const { token, code } = await req.json().catch(() => ({}));
  if (!token || !code) return Response.json({ valid: false });

  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const parts = decoded.split('|');
    // format: email|otp|timestamp|signature
    const sig = parts.pop()!;
    const ts = Number(parts.pop()!);
    const otp = parts.pop()!;
    const email = parts.join('|'); // handles pipes in email (edge case)

    const payload = `${email}|${otp}|${ts}`;
    const expectedSig = createHmac('sha256', SECRET).update(payload).digest('hex');

    const sigBuf = Buffer.from(sig.padEnd(expectedSig.length));
    const expBuf = Buffer.from(expectedSig);
    const sigMatch = sig.length === expectedSig.length && timingSafeEqual(sigBuf, expBuf);
    const notExpired = Date.now() - ts < EXPIRY_MS;
    const codeMatch = code.trim() === otp;

    if (sigMatch && notExpired && codeMatch) {
      return Response.json({ valid: true, email });
    }
    return Response.json({ valid: false });
  } catch {
    return Response.json({ valid: false });
  }
}
