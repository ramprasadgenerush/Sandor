import { NextResponse } from "next/server";
import svgCaptcha from "svg-captcha";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export interface SessionData {
  captcha?: string;
}

const sessionOptions = {
  password: process.env.SESSION_SECRET!, // must be ≥32 chars
  cookieName: "sandor_captcha_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 60 * 10, // 10 minutes
  },
};

export async function GET() {
  const captcha = svgCaptcha.create({
    size: 5, // number of characters
    noise: 3, // number of noise lines
    color: true,
    background: "#f0f4ff",
    width: 160,
    height: 50,
    fontSize: 48,
  });

  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );

  // Store answer (lowercased for case-insensitive compare)
  session.captcha = captcha.text.toLowerCase();
  await session.save();

  return new NextResponse(captcha.data, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}
