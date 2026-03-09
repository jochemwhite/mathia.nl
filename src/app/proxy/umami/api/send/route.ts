// app/_proxy/umami/event/route.ts
//
// Proxies tracking events (pageviews + custom events) to Umami.
// Umami's script POSTs to /api/send by default — we intercept and forward it.
// Also forwards the real visitor IP so Umami logs it correctly.

import { NextRequest, NextResponse } from "next/server";
import { env } from "@/src/lib/env";
const UMAMI_URL = process.env.UMAMI_URL; // e.g. https://umami.yourdomain.com

export async function POST(req: NextRequest) {
  if (!UMAMI_URL) {
    return new NextResponse("UMAMI_URL not configured", { status: 500 });
  }

  const body = await req.text();

  // Forward real visitor IP — works behind Cloudflare
  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1";

  const res = await fetch(`${UMAMI_URL}/api/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": req.headers.get("user-agent") || "",
      "X-Forwarded-For": ip,
      "X-Real-IP": ip,
    },
    body,
  });

  const data = await res.text();

  return new NextResponse(data, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "application/json",
    },
  });
}
